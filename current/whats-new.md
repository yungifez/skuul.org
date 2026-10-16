# What's new in V3

::: danger Breaking change: data loss
Moving an existing V2 installation to V3 is a breaking change with data loss in the live database.
The V3 migrations delete legacy academic records and remove schema columns.
They do not convert all V2 records into the new academic model.
Affected migrations cannot restore the deleted records through rollback.

Do not run these migrations on a live V2 database as a routine update.
Keep a verified full database backup, uploaded files, and the original `APP_KEY` before you start.
Read [the upgrade details](./getting-started/updating#breaking-upgrade-effects) first.
:::

V3 is a new major release of Skuul. It replaces the V2 application structure and data model.
V2 is deprecated. The [V2 guides](/v2/introduction) remain only for existing V2 installations.

## Choose your path

| Your situation | Action |
| --- | --- |
| New installation | Follow [requirements](./getting-started/requirements) and [installation](./getting-started/installation). |
| Production deployment | Follow [deployment](./getting-started/deployment) and set up [backups and monitoring](./operations). |
| Existing V2 installation | Read [updating](./getting-started/updating). Test the migration on an isolated copy of your data. |
| Evaluation only | Use the [disposable demo](./getting-started/demo). |

## Changed requirements

| Component | V2.6.4 | V3 |
| --- | --- | --- |
| Framework | Laravel 10 | Laravel 13 and Livewire 4 |
| PHP | 8.1 or later | 8.4.1 or later |
| Node.js | 16 or later | 24 |
| Database | MySQL | MySQL 8 |
| Queue and cache | Not required | Redis |
| Backups | Not included | `mysql` and `mysqldump` in the backup runtime |

See [requirements](./getting-started/requirements) for the full list of PHP extensions.

## New in V3

### Organizations and access

- One installation holds several organizations, and each organization holds several campuses. See [organizations and domains](./administration/organizations).
- Roles and permissions apply per campus. See [roles and permissions](./administration/permissions).
- Each role has its own task guide. See [instructions by role](./using/roles).
- Learners move between campuses, and campuses share selected records. See [moves](./people/moves) and [record sharing](./people/sharing).
- A browser installer creates the first platform administrator. There is no default password.

### Students and families

- Admissions include a waitlist. See [admissions](./people/admissions).
- Parent accounts link to learners through guardian links. See [guardians](./people/guardians).
- The family portal shows attendance, results, timetables, invoices, and documents. See [family portal](./family/portal).
- Families send requests to the campus from the portal. See [requests](./family/requests).

### Teaching and assessment

- Academic cycles hold dated teaching periods. Organizations share calendar templates. See [calendars](./academics/calendars).
- Course offerings connect subjects, sections, and teachers. See [offerings](./academics/offerings).
- Gradebooks hold assessments and grades for each offering. See [gradebooks](./academics/gradebooks).
- Exam schedules set assessment windows. See [exam schedules](./academics/exams).
- Results go through review and approval before publication. See [results](./academics/results).
- Report cards and transcripts come from published results.
- Progression and year-end handover have their own workflows. See [progression](./academics/progression) and [academic handover](./academics/year-end).

### Finance

- Payments, refunds, and student credit post to a ledger. See [payments](./finance/payments) and [ledger](./finance/ledger).
- Financial periods control when postings are allowed.
- A reconciliation guide compares receipts, allocations, cash, and bank records. See [reconciliation](./finance/reconciliation).

### Optional campus features

Administrators turn each feature on or off per campus. See [optional features](./administration/features).

| Feature | Guide |
| --- | --- |
| Discipline and wellbeing | [Cases](./operations/cases) and [wellbeing](./operations/wellbeing) |
| Staff operations | [Staff](./operations/staff) |
| Events and closure days | [Campus calendar](./operations/calendar) |
| Boarding | [Boarding](./operations/boarding) |
| Library | [Library](./operations/library) |
| Clubs and programmes | [Groups and programmes](./operations/groups-programmes) |
| Student and staff imports | [Imports](./operations/imports) |

### Reports

- The report desk builds CSV, XLSX, and PDF exports in the background. See [reports](./operations/reports).

### Operations

- Scheduled backups encrypt the database dump. File backups are available on a configured disk.
- A weekly restore rehearsal checks that a backup restores. See [backups and monitoring](./operations).
- Health endpoints report the state of the application and its services.
- `skuul:release-readiness` checks the production configuration before deployment.
- `skuul:update` takes a backup before it updates a release-tag installation. See [updating](./getting-started/updating).
- A recovery guide covers service failures. See [service failure and recovery](./operations/recovery).

## Removed in V3

The V3 migrations remove these V2 records. They do not convert them.

| V2 records | Result in V3 |
| --- | --- |
| Legacy course offerings | Deleted, with their roster links. |
| Gradebooks without a course offering | Deleted, with their categories, items, entries, and result snapshots. |
| Legacy exam results | Deleted, with their publication audit events. |
| Legacy grading systems | Deleted, with the grade-system schema. |
| Legacy class and section references | Removed from the affected tables. |

The migrations write selected removed rows to JSON archives under `storage/app/legacy-v2`.
These archives are not a backup and have no automatic re-import.
See [retain removed V2 data](./getting-started/updating#retain-removed-v2-data).

## Known limits

Read the [known limits](./reference/limitations) before you promise a feature to users.
Report problems in the [application issue tracker](https://github.com/yungifez/skuul/issues).
