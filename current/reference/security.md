# Authorization, privacy, and audit design

Authorization combines account status, memberships, scoped permissions, feature settings, and record policies.
No single role or organization identifier replaces these checks.

## Scope authorization correctly

Use the current campus permission context for campus operations.
Organization actions use organization membership and organization authority.
Platform actions use the system permission scope.
The authorization services temporarily switch contexts and restore the previous context afterward.
Preserve this behavior in cross-campus code, commands, and long-running workers.

A successful model lookup does not prove access.
Check record ownership before a write, including a write from a form opened before a campus move.
Validate nested identifiers against their owning parent and campus.
Reauthorize Livewire actions at execution time.
A hidden menu button is only a user-interface control.

## Family and restricted records

`PortalAccess` checks the learner's account or guardian link and the campus's portal controls.
It does not require a staff working-campus membership.
Families read approved results and published documents, rather than mutable draft grades.

Safeguarding, confidential support, health, and financial data use specific permissions.
Do not include these fields in an ordinary student export or academic sharing request.
Record sharing needs explicit source approval, fulfilment, and destination receipt.
Domain resolution identifies the requested organization; it does not prove permission.

## Record audit events

Sensitive domain actions call `RecordAuditEvent` with the action, subject, actor, campus, and context.
Use the caller's transaction where the audit and domain change must succeed together.
Pass the actor and owning campus explicitly in background operations.
Do not include passwords, invitation tokens, provider secrets, or unnecessary private text in context.

Operational logs and domain audit events have different purposes.
The **System Activity logs** area uses the log-viewer package and requires its access controls.
A log message is not a substitute for a domain audit record.

## Maintain permissions and history

Introduce new permissions through a migration that preserves existing local role choices.
Do not rerun the permission seeder as a production permission update.
Its synchronization can replace built-in role assignments.

Approve a retention policy before setting the release approval flag.
Define retention for academic, financial, health, safeguarding, audit, export, and backup records.
The readiness command verifies recorded configuration; it does not approve the policy.
Backups and downloadable exports can contain the same private data as the live database.

Test allowed and denied actions, other-campus access, revoked membership, and closed-record states.
See [operations](../operations) and [roles](../administration/permissions).
