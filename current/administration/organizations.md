# Organizations and domains

Use **Organization → Organizations** to manage organizations.
You need organization access and the permission for the operation.
Platform administrators can manage the platform scope.

## Set up an organization

<!-- screenshot: organizations
Path: /images/current/organizations-light-desktop.webp
Alt: The organization list contains two fictional campuses in one organization.
Caption: Organization ownership and campus access are separate.
-->

1. Create the organization and enter its details.
2. Create or attach its campuses.
3. Add organization members.
4. Set each member's organization role and allowed operations.
5. Open the organization dashboard to review its campuses.

Organization membership and campus membership are separate.
Give operational staff access to each campus where they must work.
An organization member's permission list can restrict organization actions.
Removing or suspending that membership removes its organization authority.

## Add a custom domain

1. Add the hostname to the organization's domain list.
2. Select a campus if the hostname must open a particular campus.
3. Copy the verification token shown by the application.
4. Add a DNS TXT record at `_skuul-verification.<hostname>` with that token.
5. Run the domain verification action after DNS propagation.
6. Configure the web server, routing, and HTTPS for the hostname.

Skuul uses verified domains to resolve the organization context.
An unverified domain does not establish that context.
Domain verification does not create an HTTPS certificate or grant record access.
Enter a hostname without a path. The application normalizes case, ports, and trailing dots.

## Set up billing groups

Create a billing group within the organization. Assign campuses that should carry learner balances during campus moves.
A group must contain only campuses from its own organization.
Changing a group's membership does not move existing ledger entries.
An empty group can be removed.

## Check the result

- Confirm that each campus belongs to the intended organization.
- Check organization membership separately from campus membership.

See [campus moves](../people/moves) for approval and balance carry rules.
