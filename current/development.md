# Development

The current application uses standard Laravel directories. It also contains
older service classes and newer domain actions. Read the code in the relevant
area before choosing a pattern.

| Directory | Purpose |
| --- | --- |
| `app/Http/Controllers` | HTTP entry points |
| `app/Http/Requests` | Request validation and authorization |
| `app/Livewire` | Interactive server components |
| `app/Actions` | Domain operations, including audited changes |
| `app/Services` | Shared queries, calculations, and older workflows |
| `app/Models` | Eloquent models and relationships |
| `app/Policies` | Access checks |
| `app/Jobs` and `app/Console/Commands` | Background and scheduled work |
| `resources/views` | Blade pages and components |
| `tests/Feature` and `tests/Unit` | Application tests |

## Campus and academic context

The application uses campus membership, permission teams, model scopes, and
helpers such as `current_school()` and `current_academic_year()`.
Some services depend on the active request context. Check these dependencies
before reusing them in a job or command. Set the correct campus and academic
context explicitly when the workflow requires it.

Check authorization and campus ownership for each record. A successful lookup
by ID does not establish access. Test both permitted access and access from
another campus when changing a campus workflow.

## Project instructions

Read `AGENTS.md`, `.ai/rules/index.md`, and the rule files that match the paths
you plan to change. Follow sibling files for naming and structure. Use Laravel
generators and the APIs of installed package versions.

## Local checks

Run commands through Sail. Tests use the `testing` MySQL database and can
replace its data. Keep application data in a separate database.

```sh
vendor/bin/sail artisan test --compact
vendor/bin/sail php vendor/bin/phpstan analyse --memory-limit=2G
vendor/bin/sail composer audit
vendor/bin/sail npm run build
```

Run the affected test file during development. The application CI also checks
PHP formatting with Pint. Follow the project instructions for the formatter.
Fix new static analysis errors instead of adding them to the baseline.

## Documentation changes

The Pages site lives in [yungifez/skuul.org](https://github.com/yungifez/skuul.org), separately from the application repository.
Keep current development instructions separate from V2 release instructions.
Use simple technical English, short active sentences, and direct procedure steps.
Check command names, state transitions, permissions, and button labels against the implementation.

The site uses VitePress. Current guides live under `current/`.
Navigation lives in `.vitepress/config.ts`.
`public/reference/application-coverage.json` records reviewed routes, action files, Livewire files, features, reports, imports, and commands.
Update the guide, navigation, and inventory together when adding an application area.

From the documentation checkout, build and test the site:

```sh
npm ci
npm run docs:build
npm run docs:check
```

When the docs checkout is inside this project's mounted `tmp` directory, run these Node commands through Sail.
The checks verify built page links, assets, anchors, navigation, and inventory targets.
They also check report and import details recorded in the guides.

For source comparison, first export the current application routes from the application checkout:

```sh
vendor/bin/sail artisan route:list --json --except-vendor > tmp/skuul-documentation-routes.json
```

Then run the documentation checks with both paths set in the docs runtime:

```sh
SKUUL_SOURCE_PATH=/var/www/html SKUUL_ROUTES_FILE=/var/www/html/tmp/skuul-documentation-routes.json npm run docs:check
```

Use the paths visible to that runtime. The examples above use Sail's mounted application path.
Source comparison detects added or removed routes, actions, Livewire files, features, reports, import columns, and application commands.
It does not execute domain operations or replace the application test suite.

Pull requests build and check the site. The Pages deployment runs after a merge to the documentation repository's `master` branch.
The separate [architecture](./reference/architecture), [data model](./reference/data-model), [security](./reference/security), and [extension](./reference/extensions) guides explain the main code boundaries.
