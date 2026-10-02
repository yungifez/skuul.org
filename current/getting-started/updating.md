# Updating

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

These instructions describe the current development code. Published V2
releases have an older updater. Read the release notes for your source and
target versions before choosing an update path.

## Breaking upgrade effects

The development migrations remove records that the new application cannot use directly.
Running the migrations succeeds by removing these records, rather than converting all existing history.

| Affected records | Removal |
| --- | --- |
| Legacy course offerings | Deletes the old offerings and their dependent roster links. |
| Gradebooks without a course offering | Deletes affected categories, items, entries, and result snapshots. |
| Legacy exam results | Deletes exam records and their old publication audit events. |
| Legacy grading systems | Deletes grading definitions and removes the old grade-system schema. |
| Legacy class and section references | Removes old columns from affected operational tables. |

The affected academic history will no longer be available through the normal application screens.
Removing old class or section columns also removes those stored references.
The selected archives are not a complete database backup or a data-conversion process.
Do not assume that every removed column or dependent record has an archive entry.

The destructive migrations reject rollback.
Recovery requires restoring the verified original database with compatible original code.
An archive alone does not restore the original schema, relationships, or application behavior.
If you need to retain this history in the application, prepare and verify a data conversion before upgrading.
These guides do not provide that conversion or establish a supported in-place V2 upgrade.

## Stop conditions

Stop before production migration if any of these conditions applies:

- The source or target revision is unknown.
- A full database backup has not been restored successfully in isolation.
- Required uploaded files or the original `APP_KEY` are missing.
- Required historical records have no verified conversion or accepted retention plan.
- The trial migration removes unexpected records or relationships.
- The old application cannot be recovered with its matching database and files.

A fresh installation on an empty database does not need to preserve previous academic records.
A database containing learners, results, or financial history is not a fresh installation.
Do not empty that database to make the installer accept it.

## Rehearse the breaking upgrade

1. Record the source version, target commit, dependency locks, database version, and storage locations.
2. Save a full database backup and matching files outside the application checkout.
3. Restore the backup into an isolated database with separate credentials.
4. Verify original sign-in, records, files, and reports with the original code.
5. Record counts and representative identifiers for affected tables and relationships.
6. Export required academic documents and record which history must remain usable.
7. Run the target migrations only against the isolated copy.
8. Save the migration output and inspect the selected JSON archives.
9. Compare remaining records, removed records, archives, and reports with the recorded baseline.
10. Verify the new application workflows listed below.
11. Rehearse restoration of the original code, database, files, and application key.
12. Record recovery time, discrepancies, and the decision about any removed history.

A successful SQL dump inspection does not prove that a database restore works.
A JSON file's presence does not prove that it contains every expected removed record.
Treat missing records or unresolved differences as a failed trial.
Do not describe selected archives as a complete historical-data migration.

## Verify the trial result

| Area | Required check |
| --- | --- |
| Identity | Existing intended accounts can sign in; suspended accounts remain blocked. |
| Campus access | Members can enter only their permitted campuses. |
| Enrollment | Learner identities, admission numbers, statuses, and intended placements remain consistent. |
| Academic history | Required results and documents remain usable, or their removal has an explicit accepted retention plan. |
| Teaching | Rebuilt offerings resolve the expected rosters, teachers, periods, and schedules. |
| Finance | Learner balances, held credit, invoice history, and ledger totals reconcile with the baseline. |
| Family access | Test guardians see only linked learners and eligible published records. |
| Restricted records | Other-campus and unprivileged accounts cannot read restricted data. |
| Files | Expected attachments, profile images, and retained archives are recoverable. |
| Background work | Reports, mail, scheduler heartbeats, and queue heartbeats complete successfully. |
| Recovery | The original application works after restoring its matching data and files. |

Check required data before declaring the upgrade successful.
`/health` and `skuul:release-readiness` do not compare pre-upgrade and post-upgrade historical records.

## Prepare an update

1. Record the installed code revision and dependency locks.
2. Review the target release's requirements and migrations.
3. Test the upgrade on an isolated copy of the application data.
4. Take and verify a database backup and a matching backup of uploaded files.
5. Preserve the existing `.env` values and `APP_KEY`.
6. Prepare a recovery procedure for the previous release.

Do not run `composer update`, the default database seeder, or the fresh
installer as a routine upgrade step. Install the target release's locked
dependencies. Run extra seeders only when its release notes require them.

## Update manually

Run these steps in the application runtime. Stop workers from writing data
while changing the schema.

1. Put the application in maintenance mode:

   ```sh
   php artisan down
   ```

2. Deploy the tested target revision or release artifact. Install its dependencies:

   ```sh
   composer install --no-dev --optimize-autoloader --no-interaction
   composer check-platform-reqs --no-dev
   npm ci
   npm run build
   ```

3. Apply migrations and refresh caches:

   ```sh
   php artisan migrate --force --no-interaction
   php artisan optimize
   php artisan queue:restart
   ```

4. Restart supervised workers and verify application behavior.
5. Leave maintenance mode and check `/health`:

   ```sh
   php artisan up
   ```

Stop if any command fails. Keep the site in maintenance mode until the failure
is resolved or the previous release is restored.

## Retain removed V2 data

The current development migrations archive selected removed V2 course, exam, grading, and gradebook rows.
`LegacyDataArchive` writes JSON Lines files under `storage/app/legacy-v2` before the relevant removal.
A fresh installation with no affected rows creates no archive files.
Repeated runs append rather than replace those files.

Include this private archive folder in the recovery and retention process.
The archive is not a conversion into current gradebooks, results, or family documents.
It has no automatic re-import workflow.
A database backup remains necessary for recovery of the original schema and relationships.

## Use the current release updater

Use `skuul:update` only on a release-tag Git installation. It finds the current
version from the nearest Git tag; a development branch is not a verified release.

```sh
php artisan skuul:update --check
```

Read the release notes shown by the command. Then run:

```sh
php artisan skuul:update
```

The current command selects the newest published GitHub release. It refuses
a change of major version and tracked local changes. It fetches tags, takes
a backup with `--with-files`, and enables maintenance mode. It installs locked
dependencies, builds assets, migrates, and runs production seeders.
It caches the application, restarts workers, and leaves maintenance mode.

Before using it:

- Configure and test [file backup coverage](../operations#file-backup-coverage).
  A failed backup stops the update.
- Review role changes. The production seeder resets permissions on seeded roles.
- Provide Git, Composer, npm, and write access for the deployment user.
- Keep backup files outside the Git worktree.

`--no-backup` skips the built-in backup. Use it only after verifying a separate
database and file backup. `SKUUL_UPDATE_REPOSITORY` selects a release repository
for a fork; keep the Git origin consistent with that repository.

## Recover from a failed update

1. Keep the site in maintenance mode and stop workers.
2. Restore the previous code, locked dependencies, and built assets.
3. Check schema compatibility. Restore the verified database backup and matching
   uploaded files if the previous code cannot use the migrated schema.
   A restore discards changes made after the backup.
4. Preserve the original `APP_KEY`, rebuild caches, and restart workers.
5. Test the application, leave maintenance mode, and check `/health`.

Do not use a generic `migrate:rollback --step=1` procedure. A release can contain
several migrations, and a migration can discard data. Rehearse recovery for the
specific release before deployment.
