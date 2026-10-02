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
