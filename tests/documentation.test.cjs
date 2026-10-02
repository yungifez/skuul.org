const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, '.vitepress/dist');
const coverage = JSON.parse(fs.readFileSync(path.join(root, 'public/reference/application-coverage.json'), 'utf8'));
const read = relative => fs.readFileSync(path.join(root, relative), 'utf8');
const files = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const fullPath = path.join(directory, entry.name);
  return entry.isDirectory() ? files(fullPath) : [fullPath];
});
const sorted = values => [...values].sort();
const guideExists = guide => {
  assert(coverage.pages.includes(guide), `Guide is absent from inventory: ${guide}`);
  assert(fs.existsSync(path.join(root, guide + '.md')), `Missing guide: ${guide}`);
  assert(fs.existsSync(path.join(dist, guide + '.html')), `Guide was not built: ${guide}`);
};

test('every current guide is inventoried, built, and present in navigation', () => {
  const markdown = files(path.join(root, 'current')).filter(file => file.endsWith('.md'))
    .map(file => path.relative(root, file).replaceAll(path.sep, '/').slice(0, -3));
  assert.deepEqual(sorted(coverage.pages), sorted(markdown));
  const config = read('.vitepress/config.ts');
  for (const guide of coverage.pages) {
    guideExists(guide);
    assert(config.includes('/' + guide), `Guide is absent from navigation: ${guide}`);
  }
});

test('breaking-upgrade warnings remain visible before migration instructions', () => {
  for (const guide of ['current/introduction.md', 'current/getting-started/updating.md', 'current/getting-started/deployment.md', 'v2/getting-started/updating.md', 'current/reference/limitations.md']) {
    const text = read(guide);
    const warningStart = text.indexOf('::: danger');
    const warningEnd = text.indexOf('\n:::', warningStart);
    assert(warningStart >= 0 && warningEnd > warningStart, `Missing breaking-upgrade warning: ${guide}`);
    const warning = text.slice(warningStart, warningEnd).toLowerCase();
    for (const required of ['breaking change', 'data loss', 'v2', 'live database', 'rollback', 'backup']) {
      assert(warning.includes(required), `Warning omits ${required}: ${guide}`);
    }
    const migration = text.indexOf('php artisan migrate');
    assert(migration < 0 || warningEnd < migration, `Migration command precedes warning: ${guide}`);
  }
  const upgrade = read('current/getting-started/updating.md');
  for (const effect of ['course offerings', 'categories, items, entries, and result snapshots', 'publication audit events', 'grade-system schema', 'old columns']) {
    assert(upgrade.includes(effect), `Upgrade guide omits an affected data area: ${effect}`);
  }
});

test('every inventoried application surface maps to a guide', () => {
  assert(coverage.routes.length > 0, 'Route inventory is empty');
  const routeKeys = new Set();
  for (const route of coverage.routes) {
    const key = route.method + ' ' + route.uri;
    assert(!routeKeys.has(key), `Duplicate route: ${key}`);
    routeKeys.add(key);
    guideExists(route.guide);
  }
  for (const section of ['features', 'commands', 'actions', 'livewireFiles']) {
    assert(Object.keys(coverage[section]).length > 0, `Empty coverage section: ${section}`);
    Object.values(coverage[section]).forEach(guideExists);
  }
  for (const section of ['reports', 'imports']) {
    Object.values(coverage[section]).forEach(item => guideExists(item.guide));
  }
});

test('report permissions, import columns, feature keys, and command names appear in guides', () => {
  const featuresPage = read('current/administration/features.md').toLowerCase();
  for (const key of Object.keys(coverage.features)) {
    assert(featuresPage.includes(key.replaceAll('_', ' ')), `Feature is undocumented: ${key}`);
  }
  for (const [key, report] of Object.entries(coverage.reports)) {
    const text = read(report.guide + '.md').toLowerCase();
    assert(text.includes('`' + key + '`'), `Report is undocumented: ${key}`);
    assert(text.includes(report.permission), `Report permission is undocumented: ${key}`);
  }
  for (const [key, importer] of Object.entries(coverage.imports)) {
    const text = read(importer.guide + '.md');
    for (const column of [...importer.requiredColumns, ...importer.optionalColumns]) {
      assert(text.includes('`' + column + '`'), `Import column is undocumented: ${key}.${column}`);
    }
  }
  for (const [command, guide] of Object.entries(coverage.commands)) {
    assert(read(guide + '.md').includes('`' + command + '`'), `Command is undocumented: ${command}`);
  }
});

test('built local links, assets, and anchors resolve under the Pages base path', () => {
  const base = '/skuul.org/';
  const failures = [];
  let checked = 0;
  for (const file of files(dist).filter(file => file.endsWith('.html'))) {
    const html = fs.readFileSync(file, 'utf8');
    const page = 'https://docs.example' + base + path.relative(dist, file);
    for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const raw = match[1].replaceAll('&amp;', '&');
      if (/^(https?:|mailto:|tel:|data:|javascript:|\/\/)/.test(raw)) continue;
      const url = new URL(raw, page);
      if (!url.pathname.startsWith(base)) {
        failures.push(`${path.relative(dist, file)}: wrong base path: ${raw}`);
        continue;
      }
      const relative = decodeURIComponent(url.pathname.slice(base.length));
      const candidates = [path.join(dist, relative), path.join(dist, relative + '.html'), path.join(dist, relative, 'index.html')];
      const target = candidates.find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
      if (!target) {
        failures.push(`${path.relative(dist, file)}: missing target: ${raw}`);
        continue;
      }
      if (url.hash && target.endsWith('.html')) {
        const id = decodeURIComponent(url.hash.slice(1));
        if (!fs.readFileSync(target, 'utf8').includes(`id="${id}"`)) failures.push(`${path.relative(dist, file)}: missing anchor: ${raw}`);
      }
      checked++;
    }
  }
  assert(checked > 0, 'No local links were checked');
  assert.deepEqual(failures, []);
  process.stdout.write(`Checked ${checked} built links, assets, and anchors.\n`);
});

test('screenshot plans identify real routes and usable guide placements', () => {
  const plan = JSON.parse(read('public/reference/screenshot-plan.json'));
  assert(['planned', 'complete'].includes(plan.status), 'Unknown screenshot plan status');
  const ids = new Set();
  const imagePaths = new Set();
  const routeNames = new Set(coverage.routes.map(route => route.name).filter(Boolean));
  const requireImages = process.env.REQUIRE_DOC_SCREENSHOTS === '1' || plan.status === 'complete';
  let present = 0;
  for (const shot of plan.shots) {
    guideExists(shot.guide);
    assert(!ids.has(shot.id), `Duplicate screenshot ID: ${shot.id}`);
    assert(!imagePaths.has(shot.path), `Duplicate screenshot path: ${shot.path}`);
    ids.add(shot.id);
    imagePaths.add(shot.path);
    for (const route of [shot.routeName, ...(shot.additionalRouteNames || [])]) {
      assert(routeNames.has(route), `Unknown screenshot route: ${route}`);
    }
    assert(shot.path.startsWith('/images/current/') && shot.path.endsWith('.webp'), `Invalid image path: ${shot.path}`);
    assert(shot.alt.trim() && shot.caption.trim() && shot.requiredState.trim(), `Missing capture instructions: ${shot.id}`);
    const markdown = read(shot.guide + '.md');
    const visible = markdown.replace(/<!--[\s\S]*?-->/g, '');
    const images = [...visible.matchAll(/!\[([^\]]*)\]\(([^)]+)\)/g)];
    const figure = images.find(image => image[2] === shot.path);
    assert(markdown.includes('<!-- screenshot: ' + shot.id + '\n') || figure, `Missing guide placement: ${shot.id}`);
    const image = path.join(root, 'public', shot.path);
    if (!fs.existsSync(image)) {
      assert(!requireImages, `Planned screenshot is missing: ${shot.path}`);
      continue;
    }
    present++;
    assert(figure, `Image exists but guide has no figure: ${shot.path}`);
    assert(figure[1].trim(), `Figure has no alternative text: ${shot.path}`);
    assert(visible.includes(shot.caption), `Figure has no planned caption: ${shot.path}`);
    const bytes = fs.readFileSync(image);
    assert(bytes.length > 12 && bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP', `Invalid WebP file: ${shot.path}`);
  }
  assert(plan.shots.length > 0, 'Screenshot plan is empty');
  process.stdout.write(`Screenshot plan: ${present}/${plan.shots.length} captures present; mode ${requireImages ? 'required' : 'planned'}.\n`);
});

const application = process.env.SKUUL_SOURCE_PATH;
const routeFile = process.env.SKUUL_ROUTES_FILE;
const source = relative => fs.readFileSync(path.join(application, relative), 'utf8');
const phpKey = text => {
  const match = text.match(/function key\(\): string\s*\{\s*return '([^']+)'/);
  assert(match, 'Could not read a registry item key');
  return match[1];
};

test('optional application checkout comparison detects undocumented source changes', { skip: !application }, () => {
  for (const [section, directory] of [['actions', 'app/Actions'], ['livewireFiles', 'app/Livewire']]) {
    const currentFiles = files(path.join(application, directory)).filter(file => file.endsWith('.php'))
      .map(file => path.relative(application, file).replaceAll(path.sep, '/'));
    assert.deepEqual(sorted(Object.keys(coverage[section])), sorted(currentFiles), `Update ${section} coverage`);
  }
  const features = [...source('app/Enums/Feature.php').matchAll(/case \w+ = '([^']+)'/g)].map(match => match[1]);
  assert.deepEqual(sorted(Object.keys(coverage.features)), sorted(features), 'Update feature coverage');
  const commands = files(path.join(application, 'app/Console/Commands')).filter(file => file.endsWith('.php')).map(file => {
    const match = fs.readFileSync(file, 'utf8').match(/(?:\$signature\s*=\s*|Signature\()'([a-z:-]+)/);
    assert(match, `Could not read command signature: ${file}`);
    return match[1];
  });
  assert.deepEqual(sorted(Object.keys(coverage.commands)), sorted(commands), 'Update command coverage');

  const registeredClasses = (registry, constant) => {
    const match = source(registry).match(new RegExp('const ' + constant + ' = \\[([\\s\\S]*?)\\];'));
    assert(match, `Could not read ${constant} registry`);
    return [...match[1].matchAll(/(\w+)::class/g)].map(item => item[1]);
  };
  const reports = {};
  for (const className of registeredClasses('app/Services/Report/ReportRegistry.php', 'REPORTS')) {
    const text = source(`app/Reports/${className}.php`);
    const permission = text.match(/function permission\(\): string\s*\{\s*return '([^']+)'/);
    assert(permission, `Could not read report permission: ${className}`);
    reports[phpKey(text)] = permission[1];
  }
  assert.deepEqual(reports, Object.fromEntries(Object.entries(coverage.reports).map(([key, item]) => [key, item.permission])), 'Update report coverage or permissions');
  const imports = {};
  for (const className of registeredClasses('app/Services/Import/ImportRegistry.php', 'IMPORTERS')) {
    const text = source(`app/Imports/${className}.php`);
    imports[phpKey(text)] = {};
    for (const method of ['requiredColumns', 'optionalColumns']) {
      const match = text.match(new RegExp('function ' + method + '\\(\\): array\\s*\\{\\s*return \\[([\\s\\S]*?)\\];'));
      assert(match, `Could not read ${className}.${method}`);
      imports[phpKey(text)][method] = [...match[1].matchAll(/'([^']+)'/g)].map(item => item[1]);
    }
  }
  assert.deepEqual(imports, Object.fromEntries(Object.entries(coverage.imports).map(([key, { requiredColumns, optionalColumns }]) => [key, { requiredColumns, optionalColumns }])), 'Update import columns or coverage');
});

test('optional fresh route export matches documented application routes', { skip: !routeFile }, () => {
  const routes = JSON.parse(fs.readFileSync(routeFile, 'utf8'));
  const identity = route => JSON.stringify([route.method, route.uri, route.name, route.action]);
  assert.deepEqual(sorted(routes.map(identity)), sorted(coverage.routes.map(identity)), 'Update route coverage from a fresh route export');
});

test('task guides retain controls tied to reviewed application screens', (t) => {
  const source = process.env.SKUUL_SOURCE_PATH;
  if (!source) return t.skip('Set SKUUL_SOURCE_PATH for application control checks');
  const controls = [
    ['current/people/students.md', 'resources/views/livewire/create-student-form.blade.php', ['Admit learner']],
    ['current/academics/calendars.md', 'resources/views/livewire/academic-calendar-form.blade.php', ['Save draft', 'Save and continue']],
    ['current/people/students.md', 'resources/views/livewire/show-student-profile.blade.php', ['Change the enrollment', 'Change placement', 'Save placement', 'Change status', 'Save status']],
    ['current/people/guardians.md', 'resources/views/livewire/assign-students-to-parent.blade.php', ['Link learner', 'Unlink']],
    ['current/people/accounts.md', 'resources/views/livewire/manage-account-password.blade.php', ['Set password', 'New password', 'Confirm password', 'Change it at next sign-in']],
    ['current/academics/attendance.md', 'resources/views/livewire/attendance-register.blade.php', ['Save register', 'Mark everybody present', 'Mark everybody absent']],
    ['current/academics/gradebooks.md', 'resources/views/livewire/gradebook-mark-sheet.blade.php', ['Save marks', 'Put back']],
    ['current/academics/results.md', 'resources/views/livewire/gradebook-mark-sheet.blade.php', ['Send for approval', 'Send a new revision', 'Approve', 'Send back']],
    ['current/academics/results.md', 'resources/views/livewire/report-card-directory.blade.php', ['Reason for a revision', 'Publish']],
    ['current/academics/results.md', 'resources/views/livewire/transcript-directory.blade.php', ['Issue transcript']],
    ['current/finance/payments.md', 'resources/views/livewire/take-invoice-payment.blade.php', ['Record payment', 'Split across fees']],
    ['current/operations/imports.md', 'resources/views/livewire/import-file-form.blade.php', ['What the file holds', 'CSV file', 'Check the file']],
    ['current/operations/reports.md', 'resources/views/livewire/report-desk.blade.php', ['Report', 'Shape', 'Financial period', 'Build it']],
    ['current/family/requests.md', 'resources/views/livewire/portal-request-inbox.blade.php', ['Move to', 'Response', 'Update request']],
    ['current/academics/progression.md', 'resources/views/livewire/list-promotions-table.blade.php', ['Reset promotion']],
    ['current/people/moves.md', 'resources/views/livewire/show-student-profile.blade.php', ['Move to another campus', 'Ask the other campus', 'Move campus']],
  ];
  for (const [guide, view, labels] of controls) {
    const sourceText = fs.readFileSync(path.join(source, view), 'utf8');
    const guideText = read(guide);
    for (const label of labels) {
      assert(sourceText.includes(label), `Application control changed: ${view}: ${label}`);
      assert(guideText.includes(label), `Guide omits reviewed control: ${guide}: ${label}`);
    }
  }
  const moneyCast = fs.readFileSync(path.join(source, 'app/Casts/Money.php'), 'utf8');
  assert(moneyCast.includes('BrickMoney::of($value,') && moneyCast.includes('getMinorAmount()'), 'Review documented finance input units when the Money cast changes');
  const invoiceForm = fs.readFileSync(path.join(source, 'app/Livewire/CreateFeeInvoiceForm.php'), 'utf8');
  assert(invoiceForm.includes("'lines.*.amount' => ['required', 'integer'"), 'Review the documented whole-amount restriction when invoice validation changes');
  const permissions = [
    ['current/academics/gradebooks.md', 'app/Policies/CourseOfferingPolicy.php', ['read gradebook', 'manage gradebook', 'publish result', 'approve result', 'update subject']],
    ['current/operations/imports.md', 'app/Policies/ImportBatchPolicy.php', ['read import', 'create import', 'apply import']],
    ['current/family/requests.md', 'app/Policies/PortalRequestPolicy.php', ['read portal request', 'answer portal request']],
    ['current/finance/payments.md', 'app/Livewire/ShowStudentAccount.php', ['update fee invoice', 'refund student payment']],
  ];
  for (const [guide, file, required] of permissions) {
    const sourceText = fs.readFileSync(path.join(source, file), 'utf8');
    for (const permission of required) {
      assert(sourceText.includes(permission), `Application permission changed: ${file}: ${permission}`);
      assert(read(guide).includes(permission), `Guide omits permission: ${guide}: ${permission}`);
    }
  }
});

test('worked examples explain calculated results and financial input units', () => {
  const gradebook = read('current/academics/gradebooks.md');
  const percentage = (points, maximum) => points / maximum * 100;
  const quiz = percentage(8, 10);
  const exam = percentage(60, 100);
  assert(gradebook.includes(`${(quiz + exam * 3) / 4}%`));
  assert(gradebook.includes(`${(quiz + exam) / 2}%`));
  assert(gradebook.includes(`${Math.max(quiz, exam)}%`));
  assert(gradebook.includes(`${percentage(68, 110).toFixed(2)}%`));
  assert(gradebook.includes(`${(quiz + 0 * 3) / 4}%`));
  const invoice = read('current/finance/invoices.md');
  assert(invoice.includes('integer major-unit amounts'));
  assert(invoice.includes('decimal major-unit amounts'));
  assert(invoice.includes('`1000`'));
  assert(invoice.includes(`₦${(1000 - 100 + 50).toFixed(2)}`));
  const exercise = read('current/getting-started/first-campus.md');
  for (const checkpoint of ['65%', '80%', '₦200.00', 'Save register', 'Send for approval', 'Create invoice', 'Record payment', 'Publish']) {
    assert(exercise.includes(checkpoint), `Worked exercise omits ${checkpoint}`);
  }
});

test('each seeded role and delegated duty has usable role instructions', () => {
  const roles = JSON.parse(read('public/reference/role-guide-coverage.json'));
  const index = read('current/using/roles.md');
  assert(Object.keys(roles.roles).length > 0, 'Role inventory is empty');
  for (const [name, role] of Object.entries(roles.roles)) {
    guideExists(role.guide);
    assert(index.includes('`' + name + '`'), `Role index omits ${name}`);
    const text = read(role.guide + '.md');
    assert(text.includes('`' + name + '`'), `Role guide omits its actual role name: ${name}`);
    assert(/^\d+\. /m.test(text), `Role guide has no task procedure: ${name}`);
    assert(text.includes('| Problem | Action |'), `Role guide omits blocked-action instructions: ${name}`);
    assert(/\]\(\.\.\//.test(text), `Role guide does not link detailed task instructions: ${name}`);
    for (const permission of role.excludedDefaultPermissions ?? []) {
      assert(!role.defaultPermissions.includes(permission), `Excluded permission is present in template: ${name}: ${permission}`);
      assert(text.includes('`' + permission + '`'), `Role guide omits default permission limit: ${name}: ${permission}`);
    }
  }
  const captures = JSON.parse(read('public/reference/screenshot-plan.json'));
  for (const shot of captures.shots) {
    assert(roles.roles[shot.captureRole], `Unknown screenshot role: ${shot.id}: ${shot.captureRole}`);
    for (const [route, name] of Object.entries(shot.additionalCaptureRoles ?? {})) {
      assert(roles.roles[name], `Unknown additional screenshot role: ${shot.id}: ${name}`);
      assert((shot.additionalRouteNames ?? []).includes(route), `Screenshot role names an unplanned route: ${shot.id}: ${route}`);
    }
  }
  assert(Object.keys(roles.duties).length > 0, 'Delegated duty inventory is empty');
  for (const duty of Object.values(roles.duties)) {
    guideExists(duty.guide);
    const guide = read(duty.guide + '.md');
    const start = guide.indexOf('## ' + duty.title + '\n');
    assert(start >= 0, `Delegated duty section is absent: ${duty.title}`);
    const end = guide.indexOf('\n## ', start + 1);
    const section = guide.slice(start, end < 0 ? undefined : end);
    assert(/^\d+\. /m.test(section), `Duty lacks a task procedure: ${duty.title}`);
    for (const permission of duty.permissions) {
      assert(section.includes('`' + permission + '`'), `Duty permission is absent: ${duty.title}: ${permission}`);
    }
    const html = read('.vitepress/dist/' + duty.guide + '.html');
    assert(html.includes('id="' + duty.anchor + '"'), `Duty anchor is absent: ${duty.anchor}`);
  }
});

test('optional source comparison detects undocumented seeded roles and changed defaults', (t) => {
  const source = process.env.SKUUL_SOURCE_PATH;
  if (!source) return t.skip('Set SKUUL_SOURCE_PATH for seeded role and permission comparison');
  const inventory = JSON.parse(read('public/reference/role-guide-coverage.json'));
  const sourceRead = file => fs.readFileSync(path.join(source, file), 'utf8');
  const roleEnum = Object.fromEntries([...sourceRead('app/Enums/Role.php').matchAll(/case (\w+) = '([^']+)';/g)].map(match => [match[1], match[2]]));
  const roleSeeder = sourceRead('database/seeders/RoleSeeder.php');
  const seeded = [...roleSeeder.matchAll(/'name'\s*=>\s*(?:'([^']+)'|RoleName::(\w+))/g)].map(match => match[1] ?? roleEnum[match[2]]);
  assert(seeded.every(Boolean), 'A seeded role could not be resolved');
  assert.deepEqual(sorted(Object.keys(inventory.roles)), sorted(new Set(seeded)), 'Add instructions when a seeded role changes');
  const seeder = sourceRead('database/seeders/PermissionSeeder.php');
  const quoted = block => sorted(new Set([...block.matchAll(/'([^']+)'/g)].map(match => match[1])));
  for (const name of ['admin', 'teacher', 'student', 'parent']) {
    const block = seeder.match(new RegExp('\\$' + name + '->syncPermissions\\(\\[([\\s\\S]*?)\\]\\)'));
    assert(block, `Cannot find seeded permissions: ${name}`);
    assert.deepEqual(inventory.roles[name].defaultPermissions, quoted(block[1]), `Review ${name} instructions after template changes`);
  }
  for (const name of ['accountant', 'librarian']) {
    const constant = name.toUpperCase() + '_PERMISSIONS';
    const block = seeder.match(new RegExp('public const ' + constant + ' = \\[([\\s\\S]*?)\\];'));
    assert(block, `Cannot find permission constant: ${constant}`);
    assert.deepEqual(inventory.roles[name].defaultPermissions, quoted(block[1]), `Review ${name} instructions after template changes`);
    assert(seeder.includes('syncPermissions(self::' + constant + ')'), `Role assignment no longer uses ${constant}`);
  }
  const organizationPermissions = [...sourceRead('app/Enums/OrganizationPermission.php').matchAll(/case \w+ = '([^']+)';/g)].map(match => match[1]);
  assert.deepEqual(inventory.roles['organization-admin'].defaultPermissions, sorted(organizationPermissions));
  assert(seeder.includes('$organizationAdmin->syncPermissions(OrganizationPermission::all())'));
  assert.equal(inventory.roles['platform-admin'].defaultPermissionMode, 'all_created_permissions');
  assert(seeder.includes("$platformAdmin->syncPermissions(Permission::query()->pluck('name')->all())"));
  const defined = new Set([...seeder.matchAll(/'name'\s*=>\s*'([^']+)'/g)].map(match => match[1]));
  const captures = JSON.parse(read('public/reference/screenshot-plan.json'));
  for (const shot of captures.shots) {
    for (const permission of shot.additionalPermissions ?? []) {
      assert(defined.has(permission), `Unknown additional screenshot permission: ${shot.id}: ${permission}`);
    }
  }
  for (const duty of Object.values(inventory.duties)) {
    for (const permission of duty.permissions) {
      assert(defined.has(permission), `Delegated duty names an unknown permission: ${duty.title}: ${permission}`);
    }
  }
});
