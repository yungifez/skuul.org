# Delegated staff responsibilities

Use this guide when a campus assigns specialist duties through a custom role.
These job titles are examples, rather than extra seeded roles.
The assigned permissions, campus membership, feature settings, and record policy determine access.

## Assign a duty role

1. Select the intended campus and open **Roles**.
2. Follow [role creation](../administration/permissions) to create or copy a suitable campus role.
3. Select the permissions needed for the assigned duties below.
4. Assign the role to an eligible active campus member.
5. Keep any required existing person-role assignment, such as Teacher.
6. Test the task with that person's account.
7. Verify that unrelated or restricted operations remain unavailable.

A role manager must already hold the permissions they grant.
Ask the authorized platform administrator when the required permission exceeds the manager's current scope.
A duty role does not create a teacher assignment, staff employment profile, guardian link, or enrollment.
Do not give a family account a staff role merely to make a portal area appear.
That changes the account's portal-only classification and staff access checks.

The permission sets below cover the stated duties.
Add broader operations only after reviewing the relevant task guide and authorization policy.
Separate result approval, leave decisions, and overnight-leave decisions from ordinary data entry where the duty requires review.

## Enrollment and admissions office

Use `read student`, `create student`, and `update student` for learner admission and changes.
Use `read parent`, `create parent`, and `update parent` for guardian accounts and links.
Use `read admission waitlist` and `manage admission waitlist` for full-section queues.
Use `request campus move` for requesting an internal move.
Destination decisions require separately assigned `approve campus move`.

1. Check the working cycle and available active sections.
2. Follow [admission](../people/students) or [waitlist procedures](../people/admissions) for the learner.
3. Verify the saved identity, admission number, enrollment, and placement.
4. [Link the verified guardians](../people/guardians).
5. Use [campus moves](../people/moves) when an enrolled learner changes campus.

Invitation replacement and account suspension require `manage account access`; admission permissions alone do not grant these controls.
Do not create another learner account to bypass a full section or existing enrollment.

## Academic review and official documents

Use `read gradebook`, `update subject`, and `approve result` for campus-wide gradebook review.
The `update subject` permission grants broader offering management as well as gradebook access.
A teaching assignment is an alternative access route for an offering-specific reviewer with gradebook permission.
Use `read syllabus` and `approve syllabus` for syllabus and lesson-note review.
Use `read report` and `create report` to issue eligible report cards and transcripts.
Result submission requires separately assigned `publish result`.

1. Open the intended offering and review the latest waiting result revision.
2. Check marks, entry states, category weights, and the calculated result.
3. Use **Approve**, or **Send back** with the required reason.
4. Confirm the latest approved revision using [result procedures](../academics/results).
5. Review syllabi and lesson notes using [teaching-plan procedures](../academics/syllabi).
6. Issue official documents only after checking learner, period, and approved-result prerequisites.

A reviewer cannot approve their own result submission.
A newer revision prevents approval of an older waiting revision.
Issuing a corrected document requires a new document revision after the result correction is approved.

## Teaching and timetable planning

Use `read subject` for offering inspection and `update subject` for assigned offering-management duties.
Use `read timetable`, `create timetable`, and `update timetable` for schedule preparation and publication.
School-wide creation also requires `create schoolwide timetable`.
Custom timetable-item creation uses `create custom timetable item` and its corresponding reading or editing permissions.
Facility booking requires separate facility authority.

1. Review the period, eligible offerings, teachers, and intended section.
2. Follow [timetable building](../academics/timetables) to add recurring or single-occurrence slots.
3. Resolve teacher, room, facility, and overlapping-slot conflicts.
4. Publish the checked draft.
5. Use **New revision** for later repeating-schedule changes.
6. Use **Record cover** for an eligible dated teacher replacement.

Review [staff availability and leave](../operations/staff) before arranging cover.
A published schedule cannot be changed through ordinary draft editing.
Teacher conflicts can include another campus in the organization.

## Safeguarding and behaviour casework

Use `create incident`, `read incident`, and `update incident` for ordinary casework.
Use `read safeguarding case` for general access to restricted safeguarding cases.
Restricted cases also allow their assigned handler or reporter to read them.
Updating requires both `update incident` and access to that case.

1. Follow [case creation](../operations/cases) to record facts, event time, participants, and the responsible handler.
2. Verify the category and restricted visibility.
3. Add required actions with an owner and due date.
4. Record progress notes using the appropriate privacy setting.
5. Review the case before changing its state or resolving it.

A closed case needs its authorized reopening workflow before ordinary new work.
General campus administration does not grant every restricted-data permission by default.
Keep confidential case details out of ordinary academic exports and family messages.

## Health and wellbeing

Use `read support plan`, `create support plan`, and `update support plan` for ordinary support work.
Use `read confidential support plan` for general confidential-plan access.
Assigned workers and creators also have specific confidential-plan visibility.
Use `read health record` and `update health record` for health information.

1. Follow [support-plan creation](../operations/wellbeing) for the learner, help category, owner, and review date.
2. Add planned steps and record progress.
3. Review the plan before changing its state.
4. Open the health form only for an authorized health-record task.
5. Select **Save the record** and verify the changed fields.

Review current values before confirming a conflicting health-field overwrite.
Recheck enrollment ownership after a campus move.
Confidential plans and health records are not ordinary published family documents.
Explicit record-sharing approval is required for cross-campus restricted sharing.

## Staff employment and leave

Use `read staff profile`, `create staff profile`, and `update staff profile` for employment administration.
Use `read staff leave` and `request staff leave` for the leave board and requests.
Leave decisions require `approve staff leave`.
The Teacher, Accountant, and Librarian templates do not grant leave-board access automatically.

1. Follow [staff profile instructions](../operations/staff) to create an eligible employment record.
2. Review employment dates, staff number, credentials, and working hours.
3. Record a leave request with its type and ordered date interval.
4. Have a different authorized reviewer approve or refuse the request.
5. Review approved leave before assigning teaching cover.
6. Record a leaver's date and state and review the scheduled membership-ending process.

A reviewer cannot approve their own leave request.
Ending employment in one campus does not archive the person's entire account.
Review their other memberships and responsibilities separately.

## Notices, events, and family requests

Use `read notice`, `create notice`, and `update notice` for ordinary notice preparation and publication.
Use `read calendar event`, `create calendar event`, `update calendar event`, and `publish calendar event` for event management.
Use `read portal request` and `answer portal request` for the family inbox.

1. Follow [notice preparation](../operations/notices) and verify the intended audience and dates.
2. Check publication recipients and acknowledgement separately from viewing.
3. Follow [event instructions](../operations/calendar) for dates, scope, and published closure days.
4. Filter the [family inbox](../family/requests) by status and request type.
5. Review the sender, learner, message, and current state.
6. Select **Move to**, enter **Response**, and select **Update request**.

A staff response does not perform the requested grade, attendance, finance, or document correction.
Send the underlying task to its authorized owner and verify completion.
The responder cannot answer their own family request as staff.
Revising a notice does not automatically resend email.

## Boarding staff and overnight-leave reviewer

Use `read boarding` and `manage boarding` for houses, beds, placements, and rolls.
Use `decide overnight leave` for leave decisions; it is separate from boarding management.
Enable Boarding before testing these tasks.

1. Follow [boarding setup](../operations/boarding) to prepare eligible rooms and available beds.
2. Select Learner and Bed, then select **Give the bed**.
3. Verify occupancy and record each required roll entry.
4. Select **Save**, then **Complete roll** after checking every entry.
5. Use **Ask for the night away** to record a request.
6. Have the authorized reviewer decide it and record **Back in** after return.

A completed roll is read-only.
Suspending enrollment does not release a bed automatically.
Use **End placement** when the learner must leave boarding.

## Facilities coordinator

Use `read facility`, `manage facility`, and `book facility` for resource management and booking.

1. Follow [facility setup](../operations/facilities) to record the resource's kind, capacity, and availability.
2. Select **Book**, verify What, and enter From, Until, and What it is for.
3. Select **Book it** and review the saved interval.
4. Resolve clashes with bookings and published timetable room use.
5. Use **Give it up** for an eligible future cancellation.
6. Review resource availability before bringing it back into use.

A resource's capacity does not replace learner-section capacity.
Completed bookings are historical use, rather than editable future reservations.

## Groups, programmes, and graduation planning

Use `read cohort`, `create cohort`, and `update cohort` for ordinary groups.
Restricted watchlists also require `read restricted cohort`.
Use `read program`, `create program`, and `update program` for programme duties.
Use `read graduation plan` and `manage graduation plan` for graduation plans.
Actual graduation requires separately assigned `graduate student`.

1. Follow [group and programme procedures](../operations/groups-programmes) to create the intended record.
2. Add learners with the required dates and verify current participation.
3. End participation through the permitted state transition when it finishes.
4. Follow [graduation-plan procedures](../academics/progression) to set requirements and authorized exemptions.
5. Compare progress with approved results.
6. Send eligible learners to the authorized graduation workflow for the final decision.

Programme participation does not change class placement or grant campus permissions.
Programme capacity and admission queues are not implemented.
A completed graduation plan does not graduate the learner automatically.

## Imports and report exports

Use `read import` and `create import` to inspect and stage CSV batches.
Use `apply import` to apply valid rows.
Use `read report`, `create report`, and the report's underlying data permission for export duties.
Preparation, application, reading, and creation are separate permissions.

1. Follow [CSV checking](../operations/imports) and review each invalid row's message.
2. Correct the source file and check another batch when necessary.
3. Select **Write N rows** only after reviewing the valid rows.
4. Inspect applied and failed counts before preparing another batch.
5. Follow [report instructions](../operations/reports) to select Report, Shape, and any applicable Financial period.
6. Select **Build it**, note the request number, and download after Ready.

Imports apply synchronously and each row has its own transaction.
A timeout does not prove that no records were written.
Reopen the batch and inspect its state before retrying.
Report building uses the configured worker and checks authorization again at download.

## Record sharing between campuses

Use `request data sharing` at the requesting campus and `approve data sharing` at the holding campus.
Use `fulfil data sharing` for handing over the approved package.
Restricted categories require their additional authority checks.

1. Follow [record-sharing instructions](../people/sharing) to identify the holding campus and its learner admission number.
2. Select the minimum required categories and explain the purpose.
3. Have the holding campus approve or decline the request.
4. Have its authorized worker select **Hand the records over** after approval.
5. At the destination, review the package and select **Take the records in** when eligible.

Approval and fulfilment are separate operations.
Revocation, expiry, and prior receipt can prevent further processing.
An internal campus move does not authorize unrestricted confidential sharing.

## Deployment operator

Operator is a deployment responsibility, rather than another seeded campus role.
Obtain authorized server or hosting access separately from application account access.
Follow [deployment](../getting-started/deployment), [operations](../operations), [configuration](../reference/configuration), and [commands](../reference/commands).

1. Verify database and uploaded-file backup coverage.
2. Verify the original application key and isolated restore procedure.
3. Check worker, scheduler, mail, storage, and monitoring configuration.
4. Review failed work and current record state before retrying jobs or operations.
5. Rehearse approved updates against an isolated restored copy.

A V2-to-development update is a breaking change with live-data deletion.
Follow [upgrade stop conditions](../getting-started/updating) and obtain the required release decision after rehearsal.
Do not rerun the permission seeder as a live access repair.
