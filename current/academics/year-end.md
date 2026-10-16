# Close a teaching period and prepare the next cycle

Use this procedure to coordinate teachers, academic reviewers, enrollment staff, and campus administrators.
Calendar closure, result approval, official documents, and learner placement are separate tasks.

## Before you start

Choose the campus, ending cycle, and period in the [workspace](../using/workspace).
Assign an owner for marks, result review, official documents, calendar closure, and learner placement.
Review [calendar permissions](./calendars) and [result permissions](./results).
Prepare an authorized reviewer who did not submit the result revision.
Plan the handover date with staff before you restrict the ending period.

| Work | Responsible access |
| --- | --- |
| Finish marks and submit results | Gradebook access plus `publish result` to submit. Teaching assignments also apply. |
| Approve result revisions | A separate reviewer with `approve result`. |
| Publish report cards or issue transcripts | `create report` and access to the learner's academic records. |
| Close or reopen teaching periods | `close academic period` or `reopen academic period`. |
| Build the next cycle and its structure | Calendar, section, and course-offering management permissions. |
| Place learners | Enrollment authority. Promotion authority for the promotion form. |

## Finish and approve academic work

1. Review every offering's roster and expected assessment items.
2. Correct missing entries. Review Incomplete, Missing, and Excluded states deliberately.
3. Check the weighted result for some learners.
4. Save marks and resolve each row's error.
5. In the learner's ⋯ menu on the mark sheet, select **Send for approval**.
6. Ask the separate reviewer to select **Approve**, or **Send back** with a reason.
7. For a result that was sent back, correct it and select **Send a new revision**.
8. Confirm that the family account shows the approved result.
9. List the official documents to issue after the period reaches an eligible state.

The person who sent a result cannot approve it.
A zero mark is a recorded score.
An absent entry and an Incomplete state show unfinished work.
Use [gradebook instructions](./gradebooks) to interpret all entry states.
Approved results and published documents keep snapshots.
Later mark changes do not change a document that is already published.

## Review what closure actually checks

The close form lists the outstanding work before you close.
Each item ends with **Stops the close.** or **Worth checking. It does not stop the close.**
The form shows **Nothing is outstanding.** when the checks find nothing.

- **Grade entries are still incomplete.** **Stops the close.** A learner has no grade, or an Incomplete grade, on an assessment.
- **Timetables are still in draft.** **Worth checking. It does not stop the close.**
- **Closing this cycle will also close the periods still open in it.** **Worth checking. It does not stop the close.** This item shows only when you close a whole cycle.

If you select **Close** while an item stops the close, the form says **This period is not ready to close. Grade entries are still incomplete.**
It then shows **Close with this work still open**.

The close action does not check result approval or official documents.
It does not check attendance or finance.

Complete those separate reviews even when the close action reports no blocking work.
An unpaid invoice does not stop academic closure.
Closing an academic period does not close its financial period.
The scheduler opens Scheduled periods when they are due. It does not close periods.

## Close the intended period

1. Open **Setup → Academic years**.
2. Open the row actions of the cycle and select **View academic year**.
3. To close a term, open **Actions for** the term (⋯) and select **Start closing**.
   To close the whole cycle, select **Start closing** at the top of the page.
4. The status changes to **Closing**. Finish the corrections.
5. Select **Close**. Enter a **Note (optional)**, then select **Close** again.
6. If the app shows **This period is not ready to close.**, resolve the named work.
7. Select **Close** again after the corrections.
8. Reload the page and check that the status is **Closed**.
9. Check that normal academic edits are now refused.

Closing the whole cycle also closes its child periods.
If work is still open, the close form shows the check box **Close with this work still open**.
Select it only with an authorized, recorded decision about the named findings.
Do not use it to skip the review of the affected records.

## Issue official documents

Report-card publication requires a period in Closing, Closed, or Archived state.
An Open period is not eligible, even when its subject results are approved.
For an Open period, the app shows **Report cards can be published only while an academic period is closing or finished.**
The publisher needs `create report` and access to the learner's academic records.

Open **Assessment → Report cards** and **Assessment → Transcripts**.

1. Check that the period is in an eligible state.
2. Open **Report cards**. Under **Publish a report card**, select the **Learner** and the term.
3. Select **Publish**. Inspect the card and its source result revisions.
4. If necessary, open **Transcripts**. Under **Issue a transcript**, select the **Learner** and select **Issue transcript**.
5. Check the document in the family account.

For a reissue, enter **Reason for a revision**.
Transcripts require published subject results and have their own revision history.
Use [official-document instructions](./results) when you reissue a card or transcript.
A report export is not an official document.

## Prepare the next cycle

1. Create or review the next draft cycle on the same campus.
2. Check the dates and reporting structure of every period.
3. Open **Setup → Sections** and select **Roll sections into another year**.
4. Select **Copy from** (the ending cycle) and **Create in** (the next cycle).
5. Review **Will be created as drafts**, **Already in**, and **Left behind**.
6. Select **Create N draft sections**. Then inspect the draft sections in the next cycle.
7. Review capacity, rooms, and teacher assignments before activation.
8. Open **Subjects being taught**. In its ⋯ menu, select **Roll over subjects**.
9. Select **Copy from** and **Create in**. Review **Need attention first** and **Already in**.
10. Select **Copy N subjects**. Then inspect the target offerings.
11. Assign teachers and review the target learner rosters separately.
12. Activate the structure and publish the calendar through their normal controls.

Section copying creates drafts. It skips a section whose name already exists for that level in the target cycle.
It leaves archived sections and sections of archived levels behind.
A section copy cannot go into a closed cycle.
Subject copying needs the matching sections in the target cycle.
Otherwise the row shows **Create the matching sections in the new year first.**
Copying does not move learners, copy marks, or carry teachers forward.

To place continuing learners, set the **Working academic year** to the next cycle.
Then use [Change placement](../people/students#change-a-placement) on each learner.
The promotion form selects source and destination sections from the working cycle only.
It has no destination-cycle selector.
Do not use it as an automatic next-cycle migration. Do not create duplicate learner identities.

## Correct work after closure

1. Confirm the campus, cycle, period, and record.
2. Get an authorized agreement about the correction.
3. If the parent cycle is Closed, reopen it first.
4. On the period, select **Reopen**, enter **Why it is reopening**, and select **Reopen**.
5. Complete the grade revision or record correction.
6. Review approval and document publication separately.
7. Close the period again after you review the corrected work.

**Reopen** shows on a Closing or Closed period.
Without a reason, the app shows **Say why it is reopening.**
An Archived period cannot reopen.
Keep the correction reason and the earlier published records in their history.
Do not delete the learner or recreate the period to bypass closure.

| Problem | Action |
| --- | --- |
| **This period is not ready to close. Grade entries are still incomplete.** | Enter the missing grades or resolve Incomplete entries. |
| Closure is complete but family results are absent | Review result approval and family access separately. |
| **Create the matching sections in the new year first.** | Copy or create the target sections, then review the subject copy again. |
| Target sections have no learners | Change placements deliberately. Copying does not enroll learners. |
| Promotion cannot select next year's section | Set the next cycle as the working year and use **Change placement**. |
| **Report cards can be published only while an academic period is closing or finished.** | Start closing the period first. |
| A historical report differs from corrected marks | Check its published snapshot and the document revision workflow. |

## Check the result

Keep the ending period's status, approved result revisions, published documents, and open decisions.
Check some target learner placements, active sections, teacher assignments, and offering rosters.
Confirm that finance staff completed [their separate closure](../finance/reconciliation).
