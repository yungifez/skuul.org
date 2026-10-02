# Deployment

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


This guide covers the current development code. Test the exact release and
its migration path before using live data. See [requirements](./requirements).

Commands below run in the production application runtime. For local Sail
commands, see [installation](./installation).

## Configure the environment

1. Provision MySQL, Redis, persistent storage, and an SMTP service.
2. Set these environment values:

   ```txt
   APP_ENV=production
   APP_DEBUG=false
   APP_URL=https://school.example.org
   DB_CONNECTION=mysql
   DB_DATABASE=skuul
   QUEUE_CONNECTION=redis
   CACHE_DRIVER=redis
   SESSION_DRIVER=database
   SESSION_SECURE_COOKIE=true
   ```

3. Set the database, Redis, and SMTP credentials for your services. Replace
   the local `mysql`, `redis`, and `mailhog` host names as needed.
4. Point the HTTPS web server at `public/`. Keep `.env`, `.git`, and source
   files outside the public directory.
5. Give the application user write access to `storage/` and `bootstrap/cache/`.
   Give the deployment user access to install packages and build assets.
6. Keep uploads and backups on persistent storage. An S3 disk requires a
   compatible Flysystem adapter; the current application dependencies do not
   include one. Verify disk access before relying on it.

Use a production runtime with PHP-FPM or a managed Laravel runtime. The
committed Sail configuration is for local development.

## Install a fresh application

1. Check out the selected code revision. Install the locked dependencies and
   build assets:

   ```sh
   composer install --no-dev --optimize-autoloader --no-interaction
   composer check-platform-reqs --no-dev
   npm ci
   npm run build
   ```

2. With an empty application database, prepare the application:

   ```sh
   php artisan key:generate --no-interaction
   php artisan migrate --force --no-interaction
   php artisan db:seed --class=WorldSeeder --force --no-interaction
   php artisan storage:link --no-interaction
   ```

3. Restrict public access until you complete the browser installer. Choose
   your administrator credentials, organization, and campus. Leave demo data
   disabled. The installer runs the required production seeders.
4. Preserve `APP_KEY` in your secret store. Keep it across updates and restores.
5. Sign in, complete the school setup checklist, and test invitation mail.
6. Cache the completed configuration:

   ```sh
   php artisan optimize
   ```

Do not use the default database seeder on a production database.

## Start workers and the scheduler

Run a supervised worker:

```sh
php artisan queue:work --tries=3
```

Use a process manager that restarts the worker after it exits. Run the scheduler
every minute. For example, replace the application path in this cron entry:

```txt
* * * * * cd /var/www/skuul && php artisan schedule:run >> /dev/null 2>&1
```

Application instances, workers, and scheduler processes must share the Redis
cache. Scheduled tasks use shared locks. Health checks read scheduler and
worker heartbeats from that cache.

## Verify the deployment

Check `/health` after the scheduler and workers have run. It must return
HTTP 200. Check sign-in, campus access, a report, an uploaded file, and mail.
Set up [backups and restore checks](../operations) before an update.

For an existing installation, follow [updating](./updating). Do not rerun the
installer or generate a new application key.
