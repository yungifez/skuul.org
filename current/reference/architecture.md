# Application architecture

The current application uses Laravel 13, Livewire 4, Blade, and April UI.
Jetstream and Fortify provide account screens and authentication.
Spatie Permission provides team-scoped role and permission checks.
MySQL stores operational data. Redis can provide shared cache and background queues.
Use the installed versions in the lockfiles when working on an extension.

## Request flow

1. Laravel loads web routes from `routes/web.php`.
2. Middleware resolves the verified domain, working campus, academic period, and locale.
3. Authentication middleware checks sign-in, verification, account status, and required password change.
4. Route middleware and policies check features, context, permissions, and record state.
5. A controller renders a Blade page or runs an HTTP operation.
6. Livewire components handle many interactive writes through domain actions and services.
7. The operation validates domain rules, saves records, and records applicable audit events.

A resource route list does not show every write operation.
Many resource controllers omit store, update, or delete endpoints because Livewire performs those writes.
Check both the controller and the page's components when changing a workflow.

## Code layout

| Path | Responsibility |
| --- | --- |
| `bootstrap/app.php` | Routing, middleware, and exception configuration. |
| `app/Http/Controllers` | HTTP entry points and page composition. |
| `app/Http/Requests` | HTTP validation and request authorization. |
| `app/Livewire` | Interactive form and table state. |
| `app/Actions/<Domain>` | Named domain writes and audited operations. |
| `app/Services/<Domain>` | Queries, calculations, registries, and shared workflows. |
| `app/Models` and `app/Traits` | Eloquent records, relationships, and scope helpers. |
| `app/Policies` and `app/Enums` | Access decisions and supported states. |
| `app/Jobs` | Queued report, notice-email, and heartbeat work. |
| `app/Console/Commands` and `routes/console.php` | Operator commands and scheduled work. |
| `resources/views/pages` and `resources/views/livewire` | Page and component templates. |
| `database/migrations` and `database/seeders` | Schema evolution and initial data. |
| `tests/Feature` and `tests/Unit` | Workflow and calculation tests. |

## Context dependencies

`app/helpers.php` exposes current campus, cycle, and period helpers.
`InSchool` and `InAcademicPeriod` supply model query scopes.
These conveniences depend on context. They do not establish authorization by themselves.

Newer operations use domain actions; older areas also use broad service classes.
Read the sibling implementation before choosing an entry point.
Pass explicit campus and record identifiers into queued or cross-campus work.
Do not assume a worker has the browser's session context.

See [data model](./data-model), [security](./security), and [development](../development).
