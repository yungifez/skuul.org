# Campus moves and transfers

Start an internal campus move from the learner's profile.
Use **People → Campus moves** to review incoming and outgoing requests.
The requesting profile and receiving queue are separate screens.

## Before requesting a move

The source and destination campuses must belong to the same organization.
Prepare an eligible active destination section with available capacity.
Check the learner's admission number against the destination campus.
A duplicate number prevents the move.

| Task | Authority |
| --- | --- |
| Manage the source enrollment | `update student` and source enrollment ownership. |
| Request a move | `request campus move` at the source campus. |
| Decide an incoming request | `approve campus move` at the destination campus. |
| Move directly or decide with organization authority | Organization permission `move students between campuses`. |

Ordinary organization membership does not give unrestricted operational campus access.
Only one pending move request is allowed for the learner.
Future effective dates are not accepted by the profile form.

## Request or perform an internal move

<!-- screenshot: campus-move
Path: /images/current/campus-move-light-desktop.webp
Alt: A pending move lists the source, destination, and decision state.
Caption: Review the destination and approval state before completing a move.
-->

1. Open the learner's profile at the source campus.
2. Open **Change the enrollment** beside **Enrollment**.
3. Select **Move to another campus**.
4. Select **Campus and section** and check the destination level.
5. Enter **Effective on**, using today or an earlier valid date.
6. Enter the optional **Reason**, up to 1000 characters.
7. Select **Ask the other campus**, or **Move campus** with direct organization authority.
8. Review the waiting message or completed destination placement.

The destination list contains eligible sibling-campus sections.
It is not an arbitrary organization or campus selector.
A requested move does not move the learner until approval.
Use **Take the request back** on the source profile to cancel an eligible waiting request.

## Decide a requested move

1. Select the receiving campus as the working campus.
2. Open **People → Campus moves**.
3. Review the learner, source, destination section, and effective date.
4. Select **Approve and move** or **Reject** on the intended request.
5. Confirm the learner's destination profile and placement history after approval.

Approval rechecks current source state, destination eligibility, duplicate numbers, and capacity.
It applies the move in the same transaction; there is no separate approved-but-unapplied stage.
Use the queue's **Take back** action only for a request you are authorized to cancel.
A decided request cannot be decided again.

## Review financial, access, and boarding effects

The internal move keeps one enrollment and appends dated placement history.
The destination gains the required campus membership.
The source membership remains available for access to earlier source-owned records.
The learner no longer appears as a current learner in the source campus.

Debt or credit carries only when both campuses share a billing group.
Balanced intercampus entries record that carry; the original ledger remains in its owning campus.
Without a shared billing group, review the earlier-campus obligation separately.
A departure or campus move releases the previous boarding bed.

## Transfers between organizations

The backend transfer action closes the source enrollment and creates a linked destination successor.
The current routed screens do not expose an interorganization transfer form.
Do not interpret **Move to another campus** as that form.
Ask the operator to plan and verify any supported transfer integration before promising this workflow to staff.
Changing the status to Transferred alone does not create a destination enrollment.
Restricted history still requires [explicit record sharing](./sharing).

| Problem | Action |
| --- | --- |
| Move menu is absent | Check source management authority and eligible sibling-campus sections. |
| Another request is pending | Review or cancel that request before preparing a replacement. |
| Approval reports changed source state | Reload the learner and review whether a new request is necessary. |
| Destination is full | Resolve capacity or reserved offers before requesting another move. |
| Admission number conflicts | Investigate both records; do not bypass identity checks with a duplicate account. |
| Balance remained in the old campus | Check billing-group membership and earlier-campus ledger obligations. |

See [student status](./students), [billing groups](../administration/organizations), and [payments](../finance/payments).
