# Backups and monitoring

Use this guide with [deployment](./getting-started/deployment) and
[updating](./getting-started/updating). Commands run in the application runtime.
For local development, run them through Sail.

## Configure backups

Install `mysql` and `mysqldump`. Configure a persistent Laravel filesystem disk
for backups. Keep a copy outside the application server. Set:

```txt
BACKUP_DISK=local
BACKUP_PATH=backups
BACKUP_REQUIRE_ENCRYPTION=true
BACKUP_MAX_AGE_HOURS=26
BACKUP_KEEP_DAYS=30
BACKUP_KEEP_MONTHS=12
```

The `local` example stores backups on the server. Replace it with a configured
external disk or copy backups off the server through a verified process.

Generate a key:

```sh
php -r 'echo "base64:", base64_encode(random_bytes(32)), "\n";'
```

Set the result as `BACKUP_KEY`. Keep it in a secret store separate from the
backup destination. Preserve it when restoring older backups. Preserve the
application's `APP_KEY` as well.

Take a database backup:

```sh
php artisan skuul:backup
```

The command compresses and encrypts the database dump. It refuses an unencrypted
backup when encryption is required and no key is set. It removes expired
backups unless you pass `--keep-old`.

## File backup coverage

The file option reads the disk named by `monitoring.backup.files_disk`:

```sh
php artisan skuul:backup --with-files
```

The current `config/monitoring.php` does not define that setting.
`BACKUP_FILES_DISK` alone has no effect. Configure the setting to the filesystem
disk that contains uploaded files before using this option. Keep the destination
disk separate from the source disk. Until this is configured and tested, use a
database backup and your storage provider's file backup process.

Check the backup output. Confirm that it includes a files archive when uploads
exist. A database-only backup cannot recover uploaded files. The scheduler and
the release updater request `--with-files`, so verify this configuration before
relying on either.

## Rehearse a database restore

1. Create an isolated, disposable MySQL database.
2. Give a dedicated user access only to that database.
3. Configure the existing `rehearsal` connection:

   ```txt
   BACKUP_REHEARSAL_CONNECTION=rehearsal
   BACKUP_REHEARSAL_DATABASE=skuul_rehearsal
   BACKUP_REHEARSAL_HOST=mysql
   BACKUP_REHEARSAL_USERNAME=skuul_rehearsal
   BACKUP_REHEARSAL_PASSWORD=replace-with-a-secret
   BACKUP_REHEARSAL_MAX_AGE_DAYS=7
   ```

   Replace the host and credentials with those of your isolated database.
   Refresh cached configuration after changing these values.

4. Verify the target host and database. The command executes restore SQL in
   the selected connection. It does not block a live connection.
5. Run the rehearsal:

   ```sh
   php artisan skuul:rehearse-restore --into=rehearsal
   php artisan skuul:check-backup
   ```

The rehearsal decrypts the newest database backup, restores it, checks required
tables and row counts, and records the result. `--file` selects another backup.
`--check-only`, or an unset rehearsal connection, only inspects the dump.
Inspection does not count as a completed restore for `skuul:check-backup`.

The rehearsal does not restore uploaded files or test the application. Test
sign-in, campus access, reports, and file access in a separate recovery exercise.
Record the recovery time and the data recovered.

## Recover production data

Keep the site in maintenance mode and stop workers. Use the tested recovery
procedure for your database and storage services. Restore matching database
and file backups, the required code version, and the original `APP_KEY`.

The application has no command that restores the files archive. Encrypted
archives use the application backup cipher, not a generic ZIP password.
The rehearsal command removes its temporary SQL dump after use. Prepare and
test the complete recovery procedure before production deployment.

## Monitor scheduled work

The scheduler requests a backup daily at 01:30, a database restore rehearsal
on Sunday at 03:00, and a backup check daily at 07:00. These times use the
application scheduler's time zone. Alert on failed commands and failed jobs.

```sh
php artisan skuul:check-backup
php artisan queue:failed
```

The backup check uses the newest file's age in the backup folder and the newest
record of a completed restore. It does not independently verify encryption,
archive integrity, file coverage, or recovery targets. Keep unrelated files
out of the backup folder.

## Health checks

`GET /health` checks the database, cache, queue, storage disk, and scheduler.
It returns HTTP 200 when those checks pass and HTTP 503 when a check fails.
Scheduler and queue worker heartbeats must be no more than five minutes old.
A missing heartbeat fails. The `sync` queue does not require a worker heartbeat.

Use a shared Redis cache for the application, workers, and scheduler.
`GET /up` checks whether Laravel can boot. Neither endpoint checks the full
school workflow or backup recovery.

## Release configuration check

```sh
php artisan skuul:release-readiness --check-backups
```

This command checks the recorded retention approval, positive recovery target
values, registered pilot reports, backup age, and completed restore record.
It does not run tests or prove a full restore. Approve a retention policy with
the data owner before setting `RELEASE_RETENTION_POLICY_APPROVED=true`.
Record its version in `RELEASE_RETENTION_POLICY_VERSION`.

The configured defaults are an RPO of 24 hours and an RTO of 240 minutes.
RPO is the acceptable amount of lost work, measured in time. RTO is the
acceptable recovery time. Verify both through a measured recovery exercise.

Use [service failure and recovery](./operations/recovery) to diagnose health checks, reports, scheduler, mail, and file failures.
