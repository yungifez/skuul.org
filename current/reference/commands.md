# Commands and scheduled work

Run PHP and Artisan through Sail in the local project.
In production, run the same Artisan command through the configured application runtime.
Use `artisan list` and `artisan <command> --help` to check available options.

## Application commands

| Command | Purpose and options |
| --- | --- |
| `skuul:refresh-demo` | Destructively reset the application database when demo mode is enabled. No dry-run option. See [demo isolation](../getting-started/demo). |
| `skuul:init` | Interactive installation. It changes installation data. |
| `skuul:create-super-admin` | Create a platform administrator interactively. |
| `skuul:update` | Install the newest configured GitHub release. `--check` only checks availability; `--no-backup` skips backup. |
| `skuul:backup` | Back up the database. `--with-files` requests files; `--keep-old` skips retention removal. |
| `skuul:rehearse-restore` | Restore into an isolated connection. `--file` selects a backup; `--into` selects the connection; `--check-only` inspects without restoring. |
| `skuul:check-backup` | Check backup freshness and the most recent completed restore rehearsal. |
| `skuul:release-readiness` | Check recorded release configuration. `--check-backups` also checks backup and rehearsal freshness. |
| `skuul:bring-invoices-into-books` | Post older invoices into the ledger. `--school` restricts it to one campus. |
| `skuul:prune-expired-invitations` | Revoke expired unused account invitations. |
| `skuul:process-library-holds` | Expire uncollected library holds and advance the queue. |
| `skuul:process-notices` | Publish due notices and expire finished notices. |
| `skuul:end-leavers-access` | End campus access for staff whose last day has passed. |
| `skuul:advance-academic-calendar` | Open due scheduled periods. `--dry-run` lists proposed openings. |
| `skuul:generate-upcoming-cycles` | Draft upcoming academic cycles. `--dry-run` lists proposed drafts. |
| `skuul:send-academic-calendar-reminders` | Send start and closure reminders. `--dry-run` lists them without sending. |
| `skuul:send-syllabus-behind-reminders` | Send weekly syllabus progress reminders. `--dry-run` lists them without sending. |

Review the target records before running a command that changes data.
The legacy invoice-posting command is an operator task, not a normal payment action.
An updater invocation can install a different release line. Read [updating](../getting-started/updating) before using it on development code.

## Schedule

Run the scheduler every minute. The following schedule comes from `routes/console.php`.
Times use the application's scheduler time zone, currently UTC.

| Interval or time | Work |
| --- | --- |
| Every minute | Cache scheduler heartbeat and enqueue the queue-worker heartbeat. |
| Hourly | Prune expired invitations. Reset the demo database only when demo mode is enabled. |
| Every fifteen minutes | Process scheduled and expiring notices. |
| Daily 00:15 | End campus access for staff leavers. |
| Daily 00:30 | Open due scheduled academic periods. |
| Daily 01:30 | Back up database and requested files. |
| Daily 06:00 | Expire library holds and advance reservations. |
| Daily 07:00 | Check backup and completed rehearsal freshness. |
| Daily 07:15 | Send academic calendar reminders. |
| Monday 01:00 | Generate upcoming draft academic cycles. |
| Monday 07:30 | Send syllabus progress reminders. |
| Sunday 03:00 | Run the configured restore rehearsal. |
| Daily | Prune failed jobs and old batches after 336 hours. |

Most scheduled work uses one-server locks; overlapping long-running work is also prevented where configured.
These locks need a shared cache across application instances.
Heartbeats allow health monitoring to detect a stopped scheduler or worker.
Calendar advancement opens periods. It never closes them automatically.

## Inspect scheduled and queued work

```sh
vendor/bin/sail artisan schedule:list
vendor/bin/sail artisan queue:failed
vendor/bin/sail artisan skuul:advance-academic-calendar --dry-run
vendor/bin/sail artisan skuul:generate-upcoming-cycles --dry-run
```

Review the queue and application logs before retrying failed work.
See [operations](../operations), [deployment](../getting-started/deployment), and [troubleshooting](../using/troubleshooting).
