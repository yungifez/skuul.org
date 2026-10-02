# Platform administrator

The `platform-admin` role manages the platform across organizations and campuses.
Use it for platform duties and delegated access management.
Check the working campus before changing an operational record.

## Before you start

Activate the account and review [profile security](../people/accounts#use-profile-security).
The reviewed template receives all permissions created by the permission seeder.
Global scope includes `access all schools`, `access all organizations`, and `manage platform`.
Record ownership, state, and feature restrictions still apply to workflows.
A role name alone does not replace assigned global permissions.

## Create a platform administrator account

The installer creates the first platform administrator with chosen credentials.
An authorized deployment operator uses the interactive `skuul:create-super-admin` command for an additional platform administrator.
In the local Sail environment:

```sh
vendor/bin/sail artisan skuul:create-super-admin
```

The command asks for identity and password details and creates a new account.
It is a data-changing operation, rather than a read-only permission check.
Use [command instructions](../reference/commands) and the approved operator process before running it.
Do not assign a global platform role through the ordinary campus role editor.
Organization scope is managed separately through the organization membership workflow.

## Prepare organizations and campus access

1. Open **Organization → Organizations**.
2. Follow [organization creation](../administration/organizations) for the intended organization.
3. Create its campuses with the correct organization owner.
4. Add organization administrators and review their permitted operations.
5. Arrange campus memberships and roles for the campus staff.
6. Ask each administrator to verify access with their own account.

Use the [organization administrator guide](./organization-administrator) for the authority being delegated.
Organization scope and operational campus membership are separate.
Test both when giving a person duties at more than one campus.
For custom duties, follow [delegated staff instructions](./delegated-staff).

## Review configuration and access

| Task | Procedure |
| --- | --- |
| Campus settings and features | Review [campus setup](../administration/campuses) and [feature switches](../administration/features). |
| Global and campus authority | Review [access layers](../administration/permissions) and each person's assigned scope. |
| Invitations and account recovery | Use [account controls](../people/accounts) for the intended person. |
| Domain claims | Verify DNS and configure routing using [domain instructions](../administration/organizations#add-a-custom-domain). |
| Records shared between campuses | Follow [explicit sharing](../people/sharing), including restricted-category authority. |

A domain claim identifies a context; it does not grant a person's record access.
Account suspension affects sign-in across campuses.
End one campus membership when the person should leave only that campus.

## Coordinate release and recovery work

Read [operations](../operations) with the deployment operator.
Review backups, uploaded files, the original application key, queues, scheduler, and monitoring.
Use [deployment instructions](../getting-started/deployment) for the release checklist.
Use [updating instructions](../getting-started/updating) for a proposed update.

::: danger Existing V2 installations
The development upgrade deletes legacy data in the live database and removes schema columns.
It is a breaking change with data loss, without complete automatic conversion or rollback recovery.
Require an isolated rehearsal and a verified full backup before an approved migration.
Follow [the upgrade stop conditions](../getting-started/updating).
:::

Platform access does not establish that an upgrade is ready or that an automatic archive restores deleted data.
Keep the operator's recovery evidence with the release decision.

## Check delegated access

Test a permitted task and a denied task with the actual delegated account.
Check another-campus access, a revoked membership, and the relevant feature state.
A successful platform-admin session does not demonstrate a delegated user's access.
Use [the worked exercise](../getting-started/first-campus) for teacher, reviewer, accountant duties, and family cooperation.

| Problem | Action |
| --- | --- |
| Delegated staff lack a permission you can use | Review their campus role and membership rather than testing only your platform account. |
| Organization administrator cannot enter a campus | Add the required separate campus membership and operational role. |
| Workflow rejects a closed record | Follow its reopening, revision, or correction procedure. |
| Backup lacks uploaded files | Resolve the documented file-backup configuration limit before relying on it. |

Follow [service recovery](../operations/recovery) when deployment components fail.
