# Updating

These instructions describe the current development code. Published V2
releases have an older updater. Read the release notes for your source and
target versions before choosing an update path.

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
