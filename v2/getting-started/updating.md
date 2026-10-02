# Updating V2

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

::: warning V2 release guide
Published V2 releases have an older update command. The
[current updater guide](/current/getting-started/updating) describes the
Laravel 13 development code, not the command in an older installation.
:::

## Prepare the upgrade

1. Record the installed release tag.
2. Read the [release notes](https://github.com/yungifez/skuul/releases) for the
   target version. Check its PHP, database, and frontend requirements.
3. Take a database backup and a matching backup of uploaded files through
   your hosting or database service.
4. Preserve `.env` and `APP_KEY`.
5. Test the target release and migrations on an isolated copy of the data.
6. Prepare and test a recovery procedure before changing production.

Install the selected release's locked dependencies with `composer install`.
Do not use `composer update` as a routine deployment step. Do not rerun a
fresh-install seeder against live records.

Review the update command in your installed release before using it. Do not
assume it provides the backup and failure handling of the current development
command. Keep the site in maintenance mode if an update fails.

## Moving to the current development code

Do not treat the new browser installer as a V2 upgrade tool. It expects an
empty application database or a usable existing installation state. The new
code changes academic records, account access, and campus structure.

Use a tested, release-specific migration and recovery procedure. These guides
do not establish a supported automatic migration from V2 to the development
branch.
