# Accounts, invitations, and profile security

Create accounts through the people workflows or an import.
The administrator provisions an account and sends an invitation. There is no public registration.

## Invite a person

1. Enter the person's name and valid email address.
2. Add the required campus membership and role.
3. Issue an account invitation.
4. Ask the person to open the link and set a password.
5. Confirm that the invitation was accepted.

Email validation includes a DNS check. Use an address with a valid mail domain.
An existing account can be reused when the person is known to the organization.
Provisioning fills missing profile information without replacing existing values.

Invitations expire after 72 hours by default. The operator can change this interval.
A new invitation revokes the previous unused links.
Each link can be accepted once. An archived account cannot receive an invitation.
Accepting an invitation does not lift an account suspension.

## Manage access

Account states are Invited, Active, Suspended, and Archived.
Suspended and archived accounts cannot access the application.
Campus memberships have their own status and role assignments.
Check both levels when a person cannot enter a campus.

An authorized administrator can set an account password and require a password change.
Share credentials through the organization's approved process.
Use password reset for normal self-service recovery.

## Use profile security

Open the account profile to update supported profile fields and the password.
Complete email verification when requested.
Enable two-factor authentication and confirm it with a valid code.
Store recovery codes where you can retrieve them without this device.
Review browser sessions and end sessions that you do not recognize.

Profile photos use public storage. The application does not enable Jetstream API tokens or teams.
See [troubleshooting](../using/troubleshooting) for blocked sign-in and expired links.
