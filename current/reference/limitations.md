# Current implementation limits

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

These guides describe the current development checkout, not a stable-release promise.
The V2 guides remain separate because their runtime and workflows differ.

## Family access after graduation

The portal access service permits eligible graduated enrollment records.
However, `PreventGraduatedStudent` also wraps dashboard portal routes.
It redirects a graduated student-role account to the dashboard before the portal controller runs.
Do not promise graduate self-service access until this route behavior is corrected and tested.
Guardian access follows its own account and link checks.

## Online payment integration

The current portal invoice page is read-only.
Stripe implements the online payment contract, but current web routes have no connected checkout or callback endpoints.
Setting provider secrets makes the channel available in the registry; it does not complete online settlement handling.
Office payment recording is a separate workflow.
See [extension design](./extensions).

## File backup configuration

`BackupWriter` reads `monitoring.backup.files_disk` for uploaded-file backup.
The current monitoring configuration does not define that setting.
An environment variable named `BACKUP_FILES_DISK` alone is insufficient.
Verify file coverage before relying on scheduled backup or automatic updates.
The restore rehearsal restores the database only; there is no file-archive restore command.
See [backup operations](../operations).

## Detailed feature settings

The feature screen controls whole-feature switches.
Portal-area and attendance-register flags are stored settings without a dedicated editor in the current screen.
An operator integration must preserve those settings when changing the configuration array.
See [configuration](./configuration).

## Assessment completeness

The numeric calculator can contribute zero for unentered, missing, absent, or incomplete items.
Review the entry states before publishing results.
The closure checks do not turn a calculated zero into a deliberate grading decision.
See [gradebooks](../academics/gradebooks).

## Staff appraisals and APIs

The Staff operations feature description mentions appraisals, but the current staff screens do not implement an appraisal workflow.
The application also has no registered public REST API in the current route configuration.
Jetstream API tokens are disabled.
Do not use the old V2 descriptions as evidence that these interfaces exist.

## Next-cycle progression and programme capacity

The promotion form lists both source and destination sections from the selected cycle.
It does not provide a destination-cycle selector.
Calendar and structure copying remain separate from learner placement.
Programme participation has state and duplicate checks, but no capacity or admission queue.
Use the separate section admission queue for section capacity management.

## Amount entry and unexposed workflows

Invoice line Amount, Waiver, and Fine fields accept whole major-unit amounts.
Payment, expense, and refund forms accept decimal major units.
For NGN, invoice `1000` and payment `1000.00` represent the same money.
The invoice editor currently rejects fractional inputs such as `1000.50`.
The Money cast converts major units to stored minor units; do not enter raw database amounts into the form.
Review the formatted totals before posting.
See [invoice instructions](../finance/invoices).

The attendance screen exposes daily section registers only.
The underlying lesson-attendance service has no corresponding selector in this screen.
The backend interorganization transfer action also has no current routed staff form.
The same-organization campus move screen does not perform that transfer.
See [attendance](../academics/attendance) and [campus moves](../people/moves).

The report desk exposes report, format, and financial-period controls.
It has no general learner, class, cycle, or date-range filter editor.
See [report exports](../operations/reports).

## Documentation scope

The guides cover implemented application areas, their main procedures, and developer entry points.
The [coverage inventory](./coverage) records the reviewed route and feature snapshot.
A coverage link proves that a workflow has a guide. It does not prove that every implementation branch is correct.
Use application tests and a release review to verify behavior before deployment.
