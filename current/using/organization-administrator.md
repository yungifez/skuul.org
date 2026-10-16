# Organization administrator

The `organization-admin` role manages a specific organization and its campuses.
Its authority also requires active membership in that organization.
Campus operational duties require separate campus access.

## Check your scope

Open **Organization → Organizations** and select the intended organization.
The organization page links to **Organization overview**, **Members**, **Web addresses**, **Billing groups**, **Shared residences**, **Calendar templates**, and **Organization settings**.
It also lists the **Campuses** and shows **Add campus** when you can manage campuses.

Ask the person who granted your scope to confirm its allowed operations.
On the **Members** page, **Full authority** means every organization permission, including future ones.
**Delegated** means that the operations are limited to the selected permissions.

| Organization permission | Task |
| --- | --- |
| `read organization` | Open the organization and its campus list. |
| `manage organization` | Change settings, web addresses, and calendar templates. |
| `manage organization members` | Give or remove organization scope and change member permissions. |
| `manage organization campuses` | Add a campus and move one between organizations. |
| `move students between campuses` | Move a learner to another campus without waiting for destination approval. |
| `read organization reports` | Read the campus, enrollment, and staff totals. |

The global role and active organization membership must both grant the operation.
The template does not grant the platform's organization-creation authority.
Ask a platform administrator to create a new organization when required.

## Manage members and campuses

1. Open the organization's **Members** page.
2. Under **Give organization scope**, enter the known person's email and select **Give scope**.
3. Select **Permissions** for the member and select the intended organization duties.
4. Select **Save permissions**.
5. Ask the person to verify the assigned organization operations.

You can give only the permissions that you hold.
Use **Remove scope** and **Confirm removal** when organization authority must end.
Removed members appear under **Past administrators**.
Organization scope opens the organization screens only. Existing campus memberships remain separate.
Follow [campus creation and setup](../administration/campuses) to prepare a campus.
Assign its operational administrator through the authorized campus access process.

## Coordinate calendars and teaching setup

Open **Organization → Calendar templates** and select **Add template** to prepare a shared calendar structure.
Follow [calendar templates and cycles](../academics/calendars) for template fields and generated drafts.
On a template's campus page, under **Draft a campus school year**, select the **Campus** and **School year starts on**.
Then select **Draft the school year**. The school year starts as a draft.
Ask the campus administrator to review dates, sections, and offerings before publication.
A generated calendar or copied structure does not place learners or publish grades.

## Review domains, billing groups, and moves

Use **Web addresses** and follow [domain verification](../administration/organizations#add-a-web-address) for claims and DNS proof.
Arrange HTTPS and server routing with the operator.
Use **Billing groups** and [billing group instructions](../administration/organizations#set-up-billing-groups) to configure intended balance sharing.
Review both campuses before you change group membership.
Use [campus move instructions](../people/moves) for an actual learner move.
Direct move authority does not grant unrestricted access to restricted source records.
Follow [record sharing](../people/sharing) when the destination needs those records.

## Review the organization overview

Open **Organization overview** and review **Campus health** and the totals available to your scope.
The overview shows totals only. It does not read student, staff, or campus records.
Select **Refresh** to update the overview information.
Use campus reports only after you obtain the applicable campus membership and data permissions.
Ask the campus administrator to investigate incomplete teaching, enrollment, or finance records.

| Problem | Action |
| --- | --- |
| Organization is absent | Check active organization membership and global role assignment. |
| Member or campus controls are absent | Review the delegated organization permission list. |
| Campus operations are unavailable | Obtain separate active campus membership and the required campus role. |
| Domain verification fails | Review the exact TXT hostname and token with the DNS operator. |
| Internal move leaves finance in the source campus | Check the two campuses' billing-group membership. |

See [campus administrator instructions](./campus-administrator) for the tasks performed inside a campus.
