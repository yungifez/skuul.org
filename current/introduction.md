# Current development

::: danger Breaking change: data loss
Moving an existing V2 installation to this development code is a breaking change with data loss in the live database.
The migrations delete legacy academic records and remove schema columns.
They do not automatically convert all V2 records into the new academic model.
Selected JSON archives do not prevent this live-data removal and have no automatic restore or re-import workflow.
Affected migrations cannot restore the deleted records through rollback.

Do not run these migrations on a live V2 database as a routine update.
Test a specific migration plan on an isolated restored copy first.
Keep a verified full database backup, uploaded files, and the original `APP_KEY` before proceeding.
See [the upgrade details](/current/getting-started/updating#breaking-upgrade-effects).
:::

Skuul manages organizations and campuses, enrollment, teaching, assessment, finance, and campus services.
These guides cover the implemented application and its main user, administrator, and developer workflows.

::: warning Version scope
These guides describe the current development code, which uses Laravel 13 and Livewire 4.
This code is not the published V2 release.
Use the [V2 guides](/v2/introduction) for an older installation.
Check the [release notes](https://github.com/yungifez/skuul/releases) before upgrading.
:::

## Choose your starting point

| Your task | Start here |
| --- | --- |
| Evaluate or install Skuul | [Requirements](./getting-started/requirements) and [installation](./getting-started/installation). |
| Set up an organization or campus | [Organizations](./administration/organizations) and [campus setup](./administration/campuses). |
| Manage access | [Accounts](./people/accounts) and [roles](./administration/permissions). |
| Enroll learners | [Students](./people/students), [admissions](./people/admissions), and [guardians](./people/guardians). |
| Plan teaching | [Calendars](./academics/calendars), [structure](./academics/structure), and [offerings](./academics/offerings). |
| Record teaching and assessment | [Attendance](./academics/attendance), [syllabi](./academics/syllabi), and [gradebooks](./academics/gradebooks). |
| Publish results | [Result approval and documents](./academics/results). |
| Manage money | [Invoices](./finance/invoices), [payments](./finance/payments), and [ledger](./finance/ledger). |
| Use family access | [Family portal](./family/portal) and [requests](./family/requests). |
| Maintain a deployment | [Deployment](./getting-started/deployment), [operations](./operations), and [updating](./getting-started/updating). |
| Develop or extend Skuul | [Development](./development), [architecture](./reference/architecture), and [extensions](./reference/extensions). |

The sidebar contains the remaining campus-service guides, including notices, student care, staff, facilities, boarding, library, imports, and reports.
[Application terms](./using/glossary) explains names used across the guides.

## First campus workflow

1. Install Skuul and create the first platform administrator, organization, and campus.
2. Complete campus settings, terminology, time zone, and feature choices.
3. Create the academic calendar, levels, sections, and teaching model.
4. Add staff and learners with their campus access.
5. Link guardians and issue account invitations.
6. Create subjects, offerings, teaching assignments, and timetables.
7. Prepare syllabi and gradebook assessments.
8. Record attendance and grades during the open period.
9. Review and approve result revisions.
10. Close teaching periods and publish eligible official documents.

Finance, boarding, library, and other services have their own prerequisites and state controls.
Prepare backups and monitoring before entering live data.
The browser installer lets you choose administrator credentials. There is no default production password.

## Scope and known limits

Read the [current limits](./reference/limitations) before promising a feature to users.
The [coverage inventory](./reference/coverage) identifies the reviewed source areas and workflow guides.
For a problem, follow [troubleshooting](./using/troubleshooting) and include reproducible steps in the
[application issue tracker](https://github.com/yungifez/skuul/issues).
