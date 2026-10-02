# Evaluate a disposable demo

::: danger Demo mode deletes application data
`DEMO_MODE=true` enables a destructive reset of the configured application database.
The scheduler runs the reset hourly.
The reset removes application records and loads the demo school again.
This affects every campus in that database, not only the selected campus.

Never enable demo mode on a live school or a database containing records you must retain.
Use isolated database credentials and fictional data.
A reset has no application undo action.
Recovery of removed real records requires a suitable backup and the tested restore procedure.
:::

Use this guide to evaluate roles and tasks in a disposable installation.
Demo mode is separate from the installer's optional sample welcome notice.
The welcome notice does not enable hourly resets.
The guide describes the reviewed development workspace; demo seed content is still under development.

## Before you start

1. Create a disposable environment with its own database and storage.
2. Verify the database host, database name, and credentials before enabling demo mode.
3. Complete the normal runtime, migration, and reference-data preparation.
4. Use fictional people, receipts, documents, and messages only.
5. Check that outbound mail cannot reach real families.
6. Keep the environment separate from live application workers and database credentials.

Read [installation](./installation) and [role instructions](../using/roles) first.
The reset preserves migration history and configured world-reference tables.
It does not preserve accounts, enrollments, marks, transactions, or other application records.
It does not provide a complete database-and-file restore procedure.

## Prepare the demo environment

Set this only in the disposable environment:

```txt
DEMO_MODE=true
```

Refresh cached configuration in that runtime and restart long-running processes when necessary.
Then, after confirming the disposable database again, run:

```sh
vendor/bin/sail artisan skuul:refresh-demo
```

`skuul:refresh-demo` refuses to run when demo mode is disabled.
That flag is the command's environment guard; it is not proof that the selected database is disposable.
The reset truncates application tables rather than replaying migrations.
The current workspace reloads production roles and permissions, then the dedicated demo-school seed.
Review the command result before signing in.

Start the [scheduler](./installation#run-background-work) if you want the hourly reset behavior.
Scheduled reset uses the scheduler's hourly interval, rather than one hour after each visitor signs in.
Manual resets change the same database immediately.
Neither reset provides a dry-run preview.
Do not use this command to repair an ordinary installation.

## Try the intended role

1. Open the sign-in page in the demo environment.
2. Find **Try the demo as**.
3. Select the intended role button.
4. Check the signed-in person and working campus.
5. Follow that role's guide for permitted tasks.
6. Sign out before trying another identity.

The current demo offers platform administrator, school administrator, teacher, student, parent, accountant, and librarian buttons.
The page supplies the configured account and submits sign-in.
It displays the shared demo password, currently `password`.
These are public evaluation credentials, not production defaults.
No organization-administrator button is currently configured.
Use the [organization role guide](../using/organization-administrator) when preparing that separate account.

A successful action as platform administrator does not prove another role has access.
Use the teacher for assigned teaching work, the accountant for collections, and the librarian for lending.
Use separate staff and family accounts when checking the portal.
Never save real personal data in a publicly shared demo account.

## Understand changes and reset

Web requests refuse Eloquent model deletion while demo mode is enabled.
Other permitted changes still depend on their normal permissions and record-state rules.
The restriction does not make the database read-only.
Console commands and the reset process still remove records.
Do not treat it as a general database deletion safeguard.

An hourly reset removes visitor changes and restores seeded application records.
Previously opened record links can become stale.
Reload, sign in again where needed, and restart the task using the new records.
Do not depend on demo records for retained academic or financial evidence.

## Capture repeatable examples

1. Prepare a coherent fictional task after a confirmed reset.
2. Record the relevant account role and the task's required state.
3. Complete and inspect the task before capturing its image.
4. Avoid the scheduled reset interval during a multi-stage demonstration.
5. Use a separate isolated rehearsal with demo mode disabled when records must persist.
6. Follow the [screenshot brief](../reference/screenshots) for viewport, captions, and image review.

Disabling demo mode stops the guarded resets and web deletion restriction after configuration is refreshed.
It does not convert public demo accounts or fictional records into a production installation.
Deploy a fresh production installation with chosen credentials instead.

| Problem | Action |
| --- | --- |
| My records disappeared after an hour | Check demo mode and the scheduled reset. Visitor changes are disposable. |
| Delete is refused | Review the demo deletion message; do not bypass it through console access. |
| Role button fails to sign in | Check configured demo accounts against the installed demo seed and reset result. |
| Demo data remains after disabling the flag | The flag stops demo behavior; it does not remove seeded records. |
| Real records were placed in a demo database | Stop further resets and writes through the incident process; use tested recovery. |

## Check the result

Confirm that the environment uses isolated resources, expected demo accounts, and fictional records.
Confirm whether the hourly scheduler is running.
Record the selected role and actual result when evaluating a task.
Keep production `DEMO_MODE=false`.
