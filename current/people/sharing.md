# Share student records between campuses

Use **People → Record sharing**.
Record sharing requires source approval. Organization membership alone does not grant all student records.

## Request and receive records

<!-- screenshot: record-sharing
Path: /images/current/record-sharing-light-desktop.webp
Alt: A sharing request displays selected categories and its current state.
Caption: Approval and receipt are separate record-sharing steps.
-->

1. Select the holding campus and enter its learner admission number.
2. Select the required data categories.
3. Enter the purpose and optional permission expiry.
4. Submit the request.
5. Ask the source campus to approve or decline it.
6. After approval, the source campus fulfils the request.
7. The destination receives the prepared package into the eligible learner record.

Approval and fulfilment are separate steps.
Approval does not immediately import source records.
A request for the same learner and campus pair cannot duplicate an existing open request.
The destination must have an eligible enrollment when receiving records.
A received package cannot be imported again as a duplicate.

## Select the minimum data

Ordinary categories cover identity, guardians, enrollment, academic results, and attendance.
Restricted categories cover health, discipline, safeguarding, wellbeing, and finance.
Restricted information needs the specific sharing authority and approval.
A general academic request does not include these categories.

Review the request's expiry before processing it.
Revocation or expiry ends the authority to continue the workflow.
The package and audit history record the request and its decisions.
Do not use a campus move as a substitute for permission to share restricted records.

## Complete a sharing request

Requesting requires `request data sharing`; approving requires `approve data sharing`.
Handing over the approved package requires `fulfil data sharing` at the holding campus.
Restricted categories have additional authority checks.

1. At the requesting campus, select **School that holds the records**.
2. Enter **Their admission number there**, up to 50 characters.
3. Select the required categories under **What you are asking for**.
4. Enter **Why you need them**, up to 500 characters.
5. Enter **Permission ends on (optional)**, using today or a later date.
6. Select **Send the request**.

The form identifies the source learner by admission number; it has no general cross-campus learner picker.
At the holding campus, open the request and select **Approve** or **Decline**.
After approval, review the categories and select **Hand the records over**.
At the requesting campus, review the package and select **Take the records in** when eligible.

| Problem | Action |
| --- | --- |
| Learner cannot be found | Check the holding campus and its exact admission number. |
| Another request is already open | Review that request instead of submitting a duplicate. |
| Restricted category is blocked | Obtain its explicit sharing authority and approval. |
| Approved request contains no received package | The holding campus must hand the records over first. |
| Receipt is refused | Check destination enrollment, expiry, revocation, and prior receipt. |

## Check the result

- Check the approved categories, source, destination, and expiry.
- Confirm receipt only after the source fulfils the request.
- Verify that restricted categories were not included without their specific approval.

See [security design](../reference/security) and [campus moves](./moves).
