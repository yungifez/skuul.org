# Requirements

These requirements apply to the current development code. For published V2
releases, use the [V2 requirements](/v2/getting-started/requirements).

| Component | Requirement |
| --- | --- |
| PHP | 8.4 or later; Sail and application CI use 8.5 |
| Composer | Version 2; install from `composer.lock` |
| Node.js and npm | Use Node.js 24, supplied by Sail, for local builds; application CI currently uses Node.js 20 |
| Database | MySQL 8; use separate application and test databases |
| Queue and cache | Redis for background jobs and shared scheduler locks |
| Local environment | Docker with Compose; Linux, macOS, or Windows with WSL2 |
| Backup tools | `mysql` and `mysqldump` in the backup runtime |

PHP needs the extensions required by the locked packages. These include
BCMath, GD, Intl, Mbstring, PDO MySQL, XML, and ZIP. Check the runtime after
installing dependencies:

```sh
vendor/bin/sail composer check-platform-reqs
```

In a production runtime, use `composer check-platform-reqs --no-dev`.
Do not bypass platform requirements to make an incompatible runtime install.

## Production services

Provide an HTTPS web server, a supervised queue worker, a scheduler that runs
every minute, persistent file storage, a separate backup destination, and SMTP.
Point the web server at the application's `public/` directory.

The Sail configuration is for local development. It includes MySQL, Redis,
and Mailhog. Mailhog captures local mail; it does not deliver production mail.

The current application uses Laravel 13, Livewire 4, Tailwind CSS 4, and April UI.
Install dependencies from the committed Composer and npm locks. Check the
requirements again when switching release tags.
