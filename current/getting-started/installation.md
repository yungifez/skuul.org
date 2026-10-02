# Local installation

Use this guide for a new, disposable installation of the current development
code. Use [deployment](./deployment) for a production environment.

## Prepare the checkout

1. Install Git, Docker with Compose, and a PHP runtime compatible with the
   locked Composer packages. Use PHP 8.5 and Composer 2 for the first install.
2. Clone the application and enter its directory:

   ```sh
   git clone https://github.com/yungifez/skuul.git skuul
   cd skuul
   ```

3. Install the locked PHP dependencies with that PHP runtime:

   ```sh
   composer install --no-interaction
   ```

   This first install provides `vendor/bin/sail`. Run later PHP, Composer,
   and Node.js commands through Sail.

4. Copy the example environment file:

   ```sh
   cp .env.example .env
   ```

5. Set `DB_DATABASE=skuul` in `.env` before starting a new database volume.
   Keep `DB_HOST=mysql`, `REDIS_HOST=redis`, and `QUEUE_CONNECTION=redis`.
   The example uses `testing`, but the test suite can replace data there.
   Use `skuul` for local application data and `testing` for tests.

   If a database volume already exists, changing `DB_DATABASE` does not create
   a database or grant access. Create the database and grant the application
   user access before continuing.

## Prepare the application

1. Start Sail:

   ```sh
   vendor/bin/sail up -d
   vendor/bin/sail composer check-platform-reqs
   ```

2. Install and build the frontend:

   ```sh
   vendor/bin/sail npm ci
   vendor/bin/sail npm run build
   ```

3. Generate the application key, migrate, load country data, and link storage:

   ```sh
   vendor/bin/sail artisan key:generate --no-interaction
   vendor/bin/sail artisan migrate --no-interaction
   vendor/bin/sail artisan db:seed --class=WorldSeeder --no-interaction
   vendor/bin/sail artisan storage:link --no-interaction
   ```

   Generate a key only for a fresh installation. Keep the same `APP_KEY` during
   updates and recovery. The world seeder loads countries and states used by
   the installer. Allow time for it to complete.

4. Open the application:

   ```sh
   vendor/bin/sail open
   ```

## Complete the browser installer

1. Check that each installation requirement passes.
2. Enter your administrator name, email, and password.
3. Enter the organization and first campus details.
4. Choose the interface language and school terminology.
5. Leave demo data disabled unless this is a disposable evaluation database.
6. Submit the installer and sign in with the credentials you chose.

The installer loads the required roles and permissions and records completion.
It requires an empty application database. Do not run the default database
seeder first. It can create accounts that prevent a fresh installation.

The installer can recognize an existing installation with a usable administrator
and campus. Follow [updating](./updating) for existing data; do not try to replace
it with a fresh installation.

## Complete school setup

Follow the setup checklist after signing in. Review the campus details and
time zone. Create or select the current school year, reporting periods,
teaching approach, classes, sections or course offerings, and grading scales.
Then add staff and learners through the account and enrollment workflows.

## Run background work

Run each command in a separate terminal:

```sh
vendor/bin/sail artisan queue:work --tries=3
```

```sh
vendor/bin/sail artisan schedule:work
```

For frontend development, run `vendor/bin/sail npm run dev`. For a static
asset build, run `vendor/bin/sail npm run build` again after changing frontend
files. Stop the local services with `vendor/bin/sail stop`.
