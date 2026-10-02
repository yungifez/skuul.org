# Configuration reference

These variables are read by the current application's configuration files.
Copy `.env.example` for installation, then set values for the actual runtime.
Do not commit `.env` or secrets.

## Application and services

| Variable | Purpose or default |
| --- | --- |
| `APP_NAME` | Application name. |
| `APP_ENV` | Runtime environment; use `production` for live deployment. |
| `APP_DEBUG` | Keep `false` in production. |
| `APP_URL` | Public application URL used to generate links. |
| `APP_KEY` | Application encryption key; retain it with recovery secrets. |
| `APP_CURRENCY` | Currency for financial amounts; default `NGN`. |
| `APP_LOCALE`, `APP_FALLBACK_LOCALE` | Default and fallback language; default `en`. |
| `LOGO_PATH`, `FAVICON_PATH` | Optional branding asset paths. |
| `DB_CONNECTION`, `DB_HOST`, `DB_PORT`, `DB_DATABASE`, `DB_USERNAME`, `DB_PASSWORD` | Database connection. |
| `CACHE_DRIVER` | Cache store; default `file`. Use a shared store for multiple processes. |
| `QUEUE_CONNECTION` | Queue connection; default `sync`. Use a worker for asynchronous queues. |
| `SESSION_DRIVER`, `SESSION_LIFETIME` | Session backend and lifetime. |
| `SESSION_SECURE_COOKIE`, `SESSION_DOMAIN` | Session cookie transport and domain. |
| `FILESYSTEM_DISK` | Default file disk; default `local`. |
| `MAIL_MAILER`, `MAIL_HOST`, `MAIL_PORT`, `MAIL_USERNAME`, `MAIL_PASSWORD` | Mail transport. |
| `MAIL_FROM_ADDRESS`, `MAIL_FROM_NAME` | Sender identity for application email. |
| `ACCOUNT_INVITATION_EXPIRY_HOURS` | Invitation lifetime; default `72`. |
| `DOCUMENT_RENDERER` | Optional registered renderer key: `browser` or `dompdf`. |
| `BROWSER_RENDERER_URL`, `BROWSER_RENDERER_TOKEN`, `BROWSER_RENDERER_TIMEOUT` | External browser renderer; timeout defaults to `120` seconds. |
| `STRIPE_SECRET`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_ENDPOINT` | Stripe extension settings; not a complete checkout deployment. |
| `MONITORING_SLOW_QUERY_MS` | Slow query threshold; default `500` milliseconds. |
| `MONITORING_SLOW_REQUEST_QUERY_MS` | Total request query-time threshold; default `2000` milliseconds. |

This project reads `CACHE_DRIVER`, not `CACHE_STORE`.
Check `config/cache.php` when configuring the runtime.
Storage adapters must be installed and configured for the chosen remote disk.

The application time zone is UTC in `config/app.php`.
A campus can select its own time zone for display and local dates.
Use `school_now()`, `school_today()`, and `school_time()` for the appropriate campus-clock behavior.
Stored timestamps and campus-local date fields have different purposes.
The supported language keys are `ar`, `bn`, `br`, `de`, `en`, `es`, `fr`, `ja`, `kr`, `nl`, `pl`, `pt`, `ro`, `ru`, and `zh`.
Use the application's keys exactly, including `br` and `kr`.

## Detailed feature settings

The feature screen edits whole-feature switches only.
Detailed settings are stored in `FeatureSetting.config` and read through `FeatureManager`.
Portal flags use the `PortalArea` values: `results`, `attendance`, `timetable`, `calendar`, `notices`, `invoices`, `documents`, `requests`, `library`, `boarding`, `graduation`, `programmes`, and `syllabi`.
An unspecified portal flag defaults to `true`.
Attendance uses `daily_register` and `lesson_register`, also defaulting to `true`.

An authorized application integration can pass a complete configuration array to `FeatureManager::enable()`.
This replaces the stored configuration array; it does not merge individual flags.
For example, a stored portal configuration can include:

```json
{
  "results": true,
  "invoices": true,
  "requests": false
}
```

The omitted areas retain their default behavior.
This is a stored feature configuration, not a block to paste into `.env`.
Preserve existing choices when updating the array and record the responsible actor.
See [feature switches](../administration/features) and [security](./security).

## Backups and release checks

| Variable | Default or purpose |
| --- | --- |
| `BACKUP_DISK`, `BACKUP_PATH` | Destination disk and folder; `local`, `backups`. |
| `BACKUP_KEY`, `BACKUP_REQUIRE_ENCRYPTION` | Backup encryption key and requirement; requirement defaults to `true`. |
| `BACKUP_MAX_AGE_HOURS` | Freshness limit; `26`. |
| `BACKUP_KEEP_DAYS`, `BACKUP_KEEP_MONTHS` | Retention intervals; `30` days and `12` months. |
| `BACKUP_REHEARSAL_CONNECTION` | Isolated restore connection. |
| `BACKUP_REHEARSAL_HOST`, `BACKUP_REHEARSAL_DATABASE`, `BACKUP_REHEARSAL_USERNAME`, `BACKUP_REHEARSAL_PASSWORD` | Dedicated rehearsal database settings. |
| `BACKUP_REHEARSAL_PATH`, `BACKUP_REHEARSAL_MAX_AGE_DAYS` | Rehearsal records and freshness; `restore-rehearsals`, `100`. |
| `RELEASE_RPO_HOURS`, `RELEASE_RTO_MINUTES` | Recovery targets; `24` hours and `240` minutes. |
| `RELEASE_RETENTION_POLICY_VERSION`, `RELEASE_RETENTION_POLICY_APPROVED` | Recorded owner-approved retention policy. Approval defaults to `false`. |
| `SKUUL_UPDATE_REPOSITORY` | Updater's GitHub source; default `yungifez/skuul`. |

`BACKUP_FILES_DISK` is not currently read by `config/monitoring.php`.
Configure the missing file-source setting before relying on `--with-files`.
See [backup operations](../operations) for the complete procedure.

After changing configuration, refresh cached configuration in the correct runtime.
Restart long-running workers so they load the new configuration.
See [deployment](../getting-started/deployment).
