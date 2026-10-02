# Organization administrator

The `organization-admin` role manages a specific organization and its campuses.
Its authority also requires active membership in that organization.
Campus operational duties require separate campus access.

## Check your scope

Open **Organization → Organizations** and select the intended organization.
Ask the person who granted your scope to confirm its allowed operations.
A null membership permission list grants full organization authority.
An explicit list restricts operations to that list.

| Organization permission | Task |
| --- | --- |
| `read organization` | Open the organization and its campus list. |
| `manage organization` | Change settings, domains, and calendar templates. |
| `manage organization members` | Give or remove organization scope and change member permissions. |
| `manage organization campuses` | Add and manage campuses in the organization. |
| `move students between campuses` | Perform an authorized internal move without waiting for destination approval. |
| `read organization reports` | Read organization overview totals. |

The global role and active organization membership must both grant the operation.
The template does not grant the platform's organization-creation authority.
Ask a platform administrator to create a new organization when required.

## Manage members and campuses

1. Open the organization's member page.
2. Enter the known person's email and select **Give scope**.
3. Open **Permissions** and select the intended organization duties.
4. Select **Save permissions**.
5. Ask the person to verify the assigned organization operations.

Use **Remove scope** and **Confirm removal** when organization authority must end.
Existing campus memberships remain separate.
Follow [campus creation and setup](../administration/campuses) to prepare a campus.
Assign its operational administrator through the authorized campus access process.

## Coordinate calendars and teaching setup

Use **Organization → Calendar templates** to prepare shared calendar structure.
Follow [calendar templates and cycles](../academics/calendars) for template fields and generated drafts.
On the campus template page, select the campus and start date, then select **Draft the school year**.
Ask the campus administrator to review dates, sections, and offerings before publication.
Generating a calendar or copying structure does not place learners or publish grades.

## Review domains, billing groups, and moves

Follow [domain verification](../administration/organizations#add-a-custom-domain) for claims and DNS proof.
Arrange HTTPS and server routing with the operator.
Use [billing groups](../administration/organizations#set-up-billing-groups) to configure intended balance sharing.
Review both campuses before changing group membership.
Use [campus move instructions](../people/moves) for an actual learner move.
Direct move authority does not grant unrestricted access to restricted source records.
Follow [record sharing](../people/sharing) when the destination needs those records.

## Review the organization overview

Open the organization dashboard and review the campus health and overview totals available to your scope.
Select **Refresh** when checking updated overview information.
Use campus reports only after obtaining the applicable campus membership and data permissions.
Ask the campus administrator to investigate incomplete teaching, enrollment, or finance records.

| Problem | Action |
| --- | --- |
| Organization is absent | Check active organization membership and global role assignment. |
| Member or campus controls are absent | Review the delegated organization permission list. |
| Campus operations are unavailable | Obtain separate active campus membership and the required campus role. |
| Domain verification fails | Review the exact TXT hostname and token with the DNS operator. |
| Internal move leaves finance in the source campus | Check the two campuses' billing-group membership. |

See [campus administrator instructions](./campus-administrator) for the tasks performed inside a campus.
