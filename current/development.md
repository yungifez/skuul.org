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

The Pages site lives in
[yungifez/skuul.org](https://github.com/yungifez/skuul.org), separately from the
application repository. Keep current development instructions separate from
V2 release instructions. Check command names and options against the code.
Build the site before submitting a documentation change:

```sh
npm ci
npm run docs:build
```
