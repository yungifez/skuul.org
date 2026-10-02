# Accounts, invitations, and profile security

Create accounts through the people workflows or an import.
The administrator provisions an account and sends an invitation. There is no public registration.

## Invite a person

<!-- screenshot: account-invitations
Path: /images/current/account-invitations-light-desktop.webp
Alt: The invitation list shows an unused invitation and its expiry.
Caption: A new invitation replaces earlier unused links.
-->

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
## Replace an invitation link

Use `manage account access` in the person's campus for account access controls.
The policy blocks managing your own account or a person with broader authority.
Organization and platform invitation visibility have separate scope checks.

1. Open **Account invitations**.
2. Select **Pending** and search by name or email.
3. Check the recipient, inviting person, campus memberships, and expiry.
4. Select **Resend invitation** for an eligible pending invitation.
5. Ask the recipient to use the new email link.

The replacement revokes earlier unused links. Acceptance is a one-time operation.
The list also has Accepted, Expired, and Revoked tabs.
Read the disabled-action reason when a row cannot be resent or revoked.
For an expired link, open the person's account controls and issue an eligible new invitation.
Select **Revoke invitation** to stop an unused link.
Revoking a link does not remove an already active person's roles or suspend their account.

## Suspend, archive, or reinstate an account

Open the person's profile menu, labelled **Manage [person]'s account**.
Select **Suspend account** or **Archive account**, then read and confirm the sign-in effect.
These actions block the person's account across campuses and end active access.
Use **Reinstate account** when the account should return to use.
Review campus membership and role assignments separately.
Do not suspend a whole account merely to end access to one campus.

## Set a password for another person

1. Open the person's **Sign-in** controls.
2. Select **Set password**.
3. Enter matching **New password** and **Confirm password** values.
4. Select **Change it at next sign-in** when required.
5. Select **Set password** and read the confirmation.

The form applies the configured Fortify password rule and confirmation requirement.
The checkbox reflects the account's existing forced-change state.
Use the person's self-service password reset for ordinary forgotten-password recovery.

| Problem | Action |
| --- | --- |
| Old invitation link fails | Use the most recently issued link and check its expiry. |
| Invitation accepted but sign-in blocked | Check Suspended or Archived account state and required password change. |
| Account signs in but cannot select a campus | Check the person's active campus membership. |
| Account controls are disabled | Check `manage account access`, target authority, and the self-management restriction. |
| Invitation email does not arrive | Check the recipient address, mail delivery, and worker configuration with the operator. |

## Check the result

- Check the invitation recipient, expiry, and acceptance state.
- Confirm the person can sign in with their active account after acceptance.

See [troubleshooting](../using/troubleshooting) for blocked sign-in and expired links.
