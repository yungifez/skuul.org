# Review and end staff access

Use this procedure when a person joins, changes duties, leaves, or returns.
Account status, employment, organization membership, campus membership, and roles have separate effects.

## Before you start

Confirm the person's identity, email address, campuses, duties, and effective dates.
Use [accounts](./accounts), [campus roles](../administration/permissions), and [staff employment](../operations/staff) for their exact controls.
Account changes require `manage account access` and authority over the target person.
Role assignments require `manage role`; reading roles requires `read role`.
Staff record changes require `update staff profile`.
Organization membership changes require the separate organization authority.

The application protects the last available role manager and organization member manager.
Grant a replacement before ending that manager's access.
A campus administrator cannot suspend or archive a platform administrator.

## Prepare a new staff member

1. Check whether the person already has an eligible organization account.
2. Create or reuse that account through the relevant people workflow.
3. Confirm an active membership in each intended working campus.
4. Assign the appropriate identity role and the required duty roles.
5. Create the employment record when Staff operations is enabled.
6. Add teaching assignments separately when the person teaches.
7. Send or review the person's account invitation.
8. Ask the person to accept the latest link and complete their sign-in requirements.
9. Check permitted actions with that person's account.

Use the [role guides](../using/roles) to choose permissions.
Granting an organization role does not grant operational access to every campus.
A staff profile does not assign a teacher to every course offering.
The role editor grants only permissions already held by its authorized manager.

## Review a change of duties

1. Select the campus where the duties are changing.
2. Review every role held by the person in that campus.
3. Add the required new role through **Give** on its role record.
4. Remove obsolete assignments through **Take it away**.
5. Review other roles that still grant the removed permissions.
6. Update teaching assignments, employment details, and assigned operational work separately.
7. Verify a permitted action and a refused action with the affected account.

**Stop offering it** archives a role for new assignments.
It does not remove existing holders.
Remove the assignments themselves when revoking authority.
A teacher who is also a guardian retains staff scope while staff roles remain assigned.
Verify family access separately through **Everything of mine**.

## Prepare a staff leaver

1. Identify outstanding marks, approvals, notices, requests, bookings, and assigned cases.
2. Assign each unfinished duty to an authorized replacement.
3. Check that another available person can manage campus roles.
4. Open the staff profile and select **Change** under **The job**.
5. Set **State** to Left and enter the correct **Left on** date.
6. Save and review the recorded employment details.
7. Check that future teaching responsibilities and affected leave were handled correctly.
8. After the last day passes, confirm that campus membership has ended.
9. Review memberships and duties in every other campus and organization separately.

The person retains campus access on the last day itself.
The scheduled leaver command ends membership after that day, using the campus date.
An already elapsed leaving date can end access when the profile change is saved.
The command runs daily; an operator must investigate if the scheduler does not process it.
See [service recovery](../operations/recovery).

Leaving this campus does not archive the person's whole account.
A person who remains a guardian or works elsewhere needs a separate access decision.
Do not delete the identity to remove staff access.
Preserve the records that refer to it.

## Stop an entire account's access

Use this action only when the authorized decision applies to the whole account.

1. Confirm the effect on every campus and organization.
2. Transfer the last manager's responsibilities before proceeding.
3. Open **Manage [person]'s account** on the profile.
4. Select **Suspend account** or **Archive account** and read the confirmation.
5. Confirm, then check the resulting account state.
6. Verify that the person cannot continue normal application access.

These actions block sign-in and revoke unused invitations.
**Revoke invitation** alone stops an unused invitation, rather than an active account.
Record the decision and effective date in the approved access-review record.

## Reinstate and review

1. Confirm the authorized return date and required duties.
2. Use **Reinstate account** if the global account is blocked.
3. Review campus and organization membership independently.
4. Review every retained role before restoring operational access.
5. Update the employment record when returning to that campus.
6. Review restored teaching duties and create any missing assignments.
7. Complete a new access check with the returning person.

An account without a password returns to Invited when reinstated.
Changing a departed staff profile back to employment can restore its campus membership with retained roles.
Do not assume that retained roles still match the person's new job.

| Problem | Action |
| --- | --- |
| Leaving the last manager is refused | Grant an authorized replacement role manager first. |
| Person still works in another campus | Review that separate membership and assignment. |
| Archived custom role still grants access | Remove its holders' assignments and review other roles. |
| Reinstated account has no campus | Review active campus membership rather than issuing duplicate accounts. |
| Returning employee has too much access | Review retained roles before resuming work. |

## Check the result

Record the person, reviewed scopes, assigned roles, effective date, reviewer, and outstanding access decisions.
Verify the intended allowed and denied actions.
Keep account credentials and invitation tokens out of that record.
