# Diagnose and recover a service failure

Use this procedure when pages, reports, scheduled work, email, or uploaded files stop working.
The deployment operator needs authorized access to the hosting environment.
Campus roles alone do not provide shell or infrastructure access.

## Before you start

Record the affected workflow, first failure time, campus, record identifier, and visible error.
Check whether other users and campuses are affected.
Use the existing record to establish the last successful state.
A timeout does not prove that a payment, import, or publication changed nothing.

Commands below use the production application runtime.
Prefix PHP and Artisan with `vendor/bin/sail` for local development.
Check the exact deployment's command help before a recovery action.
Keep database passwords, invitation links, private exports, and case details out of public incident reports.

## Inspect service health

1. Request `/up` and record whether Laravel boots.
2. Request `/health` and record its HTTP status and failed check names.
3. Review recent application and hosting logs around the failure time.
4. Check the affected infrastructure component before changing application records.

A healthy response resembles this example:

```json
{
  "status": "ok",
  "checks": {
    "database": "ok",
    "cache": "ok",
    "queue": "ok",
    "storage": "ok",
    "scheduler": "ok"
  },
  "time": "2026-10-02T09:00:00+00:00"
}
```

The health endpoint returns 503 if any check fails.
It omits exception details; use protected logs for diagnosis.
Scheduler and worker heartbeats expire after five minutes.
The sync queue does not require a worker heartbeat.
An HTTP 200 response does not prove email delivery, backup recovery, or complete campus workflow correctness.

| Failed check | Inspect | Confirm recovery |
| --- | --- | --- |
| Database | Database service, network, credentials, and available connections. | The correct application database responds. |
| Cache | Configured store, Redis service, network, and shared configuration. | Application, worker, and scheduler use the same healthy store. |
| Queue | Queue backend, worker process, connection, and heartbeat job processing. | Worker takes jobs and the heartbeat becomes fresh. |
| Storage | Public disk availability and application storage write access. | The expected file is available through its authorized workflow. |
| Scheduler | Scheduler process, minute invocation, clock, and shared cache. | The scheduler heartbeat becomes fresh. |

The storage check tests limited local/public availability.
It does not verify every remote disk, backup archive, or report download.
Test the affected disk and workflow separately.

## Recover queued reports

1. Open the report request and record its number and status.
2. Check that a supervised worker serves the configured queue connection.
3. Inspect failed jobs:

   ```sh
   php artisan queue:failed
   ```

4. Match the relevant job to the report and failure time.
5. Correct the recorded cause, including storage or renderer configuration where applicable.
6. Choose one recovery path: retry that failed job or request a new report build.
7. Wait for Ready, then download and inspect the resulting file.

To retry a confirmed failed job, replace the example identifier with the actual failed-job identifier:

```sh
php artisan queue:retry 123
```

This command performs work again.
Review its effects before running it; do not retry every failed job indiscriminately.
A report request number is not necessarily its failed-job identifier.
Queued means no completed build exists yet; restarting a worker need not create another request.
A fresh build reads current data, rather than the original request-time state.
Do not edit the report database status to make the desk display Ready.

## Recover scheduled work

1. Confirm that the scheduler runs every minute in the intended deployment.
2. Review the registered schedule:

   ```sh
   php artisan schedule:list
   ```

3. Check the server clock and application scheduler time zone.
4. Check shared cache access and the scheduler process logs.
5. Inspect the affected notice, invitation, library hold, staff leaver, or academic calendar state.
6. Use only the appropriate documented application command if manual processing is required.
7. Reopen the record and confirm the resulting state.

See [commands and intervals](../reference/commands) before manual processing.
Academic advance, generation, and reminder commands provide `--dry-run` previews.
Notice and leaver processing do not provide those previews.
Run a changing command only after reviewing its target records.
The scheduler opens due academic periods but never closes them automatically.
A future staff leaver keeps campus access through their last campus-local day.

## Recover email delivery

1. Check the saved recipient address and the relevant notice preference.
2. Check whether the invitation or notice was actually issued or published.
3. Check the queue worker and failed jobs when delivery uses a queue.
4. Review mail transport logs for rejection or accepted delivery.
5. Correct the transport or recipient problem before resending.
6. Send a new invitation only through the person's authorized account controls.
7. Ask the recipient to use the latest invitation link.

A replacement invitation revokes earlier unused links.
Do not send an old invitation token through a public support thread.
A published notice and provider acceptance do not prove that the recipient read the message.

## Recover missing assets or uploads

1. Identify whether the missing item is a built asset, uploaded file, or generated report.
2. Check its configured disk and retained file before repeating the originating operation.
3. Check public storage linkage for public uploads.
4. Check the deployed asset manifest and build output for CSS or JavaScript failures.
5. Check authorization and the owning campus for protected downloads.
6. Restore missing persistent files through the tested storage recovery procedure when required.
7. Open the affected page or download with the intended account.

Use [deployment](../getting-started/deployment) for asset build and storage-link commands.
Rebuilding assets does not recover an uploaded photograph or generated report file.
Do not expose private files through the public disk to bypass a refused download.

If records disappear at the hourly interval, check `DEMO_MODE` and the demo-reset schedule immediately.
Stop further resets through the authorized incident process if real records are affected.
See [demo isolation](../getting-started/demo).

## Escalate suspected data loss

1. Stop further affected writes through the authorized incident process.
2. Record the code revision, migration state, affected records, and first observed failure.
3. Preserve relevant logs and the current database before attempting recovery.
4. Notify the responsible operator and data owner through the approved incident channel.
5. Use the tested [database and file recovery procedure](../operations#recover-production-data).
6. Validate recovered records and access before reopening writes.

Moving V2 to the development code is a breaking change with data loss in the live database.
A migration rollback cannot recover the deleted legacy records.
Do not run migrations again, reinstall, reseed roles, or generate a new application key as an incident shortcut.
Use [upgrade stop conditions](../getting-started/updating) and retain the original backup and `APP_KEY`.

| Problem | Action |
| --- | --- |
| `/up` passes but `/health` fails | Investigate the named service or heartbeat. |
| Health passes but report download fails | Check report status, disk file, format, and current authorization. |
| Reports remain Queued | Check the actual queue connection and supervised worker. |
| A repeated request might create duplicates | Inspect the existing domain record and history before retrying. |
| Backup check passes but uploads are missing | Verify file backup coverage; the backup check does not prove file recovery. |

## Check the result

Confirm service health and repeat the affected workflow with an authorized account.
Record the corrective action, recovered state, remaining differences, and incident owner.
Confirm that workers, scheduler, mail, and backups remain operational after configuration changes.
Use the [worked campus exercise](../getting-started/first-campus) for a broader recovery rehearsal.
