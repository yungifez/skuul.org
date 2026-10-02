# Worked campus exercise

Use this exercise to learn the normal setup, teaching, finance, and family sequence.
Use a disposable installation and fictional records. This is not a V2 upgrade procedure.
For an existing V2 database, read the [breaking-upgrade guide](./updating) first.

The steps below describe expected behavior from the reviewed source.
They are a manual rehearsal procedure, not a claim that this browser exercise has already passed.

## Prepare the example

| Record | Example |
| --- | --- |
| Organization | Cedar Learning Group |
| Campus | Cedar North |
| Teaching level and section | Grade 7, North A |
| Learner | Sam Learner |
| Guardian | Alex Guardian |
| Subject | Mathematics |
| Teacher and reviewer | Two separate staff accounts |
| Assessments | Quiz: out of 10; Exam: out of 100 |
| Fee | Tuition: ₦1,000.00 when using NGN |

Use mailboxes controlled by your test operator for account invitations.
The names are fictional; do not send invitation mail to invented addresses belonging to other people.
Email validation checks the mail domain's DNS.

Choose dates containing campus today for the teaching and financial periods.
Use a real past birthday and today's admission date.
Keep teaching and financial periods Open during the exercise.
Use the application's configured currency; the monetary example below assumes NGN.

## 1. Prepare campus access and teaching structure

1. Create the organization and campus using the [administration guide](../administration/organizations).
2. Set the campus time zone and terminology in [campus settings](../administration/campuses).
3. Enable Attendance and Portal.
4. Create and publish a dated [academic calendar](../academics/calendars).
5. Select its cycle and an Open teaching period as the working context.
6. Create Grade 7 and North A using the [structure guide](../academics/structure).
7. Set North A capacity to 2 and activate the section.
8. Give staff the required campus memberships and permissions for their tasks.

Expected result: the student creation form lists Grade 7 · North A.
A Draft section would not appear there.
An organization role alone would not grant staff operational access.

## 2. Admit the learner and link the guardian

1. Follow [student admission](../people/students) for Sam Learner.
2. Leave Admission number blank to use automatic generation.
3. Select North A and select **Admit learner**.
4. Review Sam's Active enrollment, admission number, and dated placement.
5. Add Alex Guardian through the [parent account workflow](../people/guardians).
6. Select North A and Sam, then select **Link learner**.
7. Accept the latest invitation for each test account.

Expected result: one learner identity, one intended enrollment, and the correct guardian link.
Alex's family overview shows Sam after account activation and access checks.
It does not show an unrelated learner.

## 3. Record attendance

1. Open the [attendance register](../academics/attendance).
2. Select North A and today.
3. Set Sam to Present and select **Save register**.
4. Reload the same section and date.

Expected result: Sam remains Present after reload.
Changing the form without saving would not record attendance.
A published closure day would block the ordinary register.

## 4. Prepare and approve a result

1. Create Mathematics and its [course offering](../academics/offerings) for North A and the selected period.
2. Activate it and assign the test teacher.
3. Give the teacher `read gradebook`, `manage gradebook`, and `publish result`.
4. Give the reviewer `read gradebook`, `approve result`, and `update subject` for campus-wide gradebook access.
5. Create an empty [gradebook](../academics/gradebooks) with two numeric assessments and no categories.
6. Set Quiz maximum to 10 and weight to 1.
7. Set Exam maximum to 100 and weight to 3.
8. Enter Sam's Quiz as Graded, 8, and select **Save marks**.
9. Enter Sam's Exam as Graded, 60, and select **Save marks**.
10. Check the calculated result, then select **Send for approval**.
11. Sign in as the separate reviewer and select **Approve**.
12. Sign in as Alex and read Sam's Results.

Expected result: the weighted percentage is 65%, although the raw marks total 68 out of 110.
Alex reads the approved revision.
The teacher cannot approve their own submission.
Correct the Exam to 80 and submit a new revision to rehearse corrections.
Alex continues to read 65% until the new revision is approved; afterwards the result is 80%.

## 5. Issue an invoice and record received money

1. Create an Open [financial period](../finance/ledger) covering today's date.
2. Create a Tuition fee category and fee.
3. Add Sam to the [invoice creation form](../finance/invoices).
4. Add Tuition with Amount `1000`, Waiver `0`, and Fine `0`.
5. Select **Create invoice** and verify the formatted charge is ₦1,000.00.
6. Select **Take payment** and enter Amount `1200.00` using [payment instructions](../finance/payments).
7. Use Cash and today's date, then select **Record payment**.
8. Open Sam's **Student account**.

Expected result: the invoice is settled and ₦200.00 remains held credit.
Invoice fields require whole major units; payment fields accept decimal major units.
The cash balance increases by ₦1,200.00.
The excess credit remains a liability until allocated or refunded.
Alex can read the invoice information but has no family checkout control.

## 6. Close teaching and issue a document

1. Confirm that Sam's intended results are approved.
2. Follow the [calendar closure review](../academics/calendars) and resolve outstanding work.
3. Move the teaching period to Closing or Closed.
4. Open the report-card directory and select Sam and that period.
5. Select **Publish** using the [official document guide](../academics/results).
6. Open Documents as Alex and review the issued revision.

Expected result: the report card contains its publication's approved results.
A later mark correction does not change that issued card.
Reissue the card with a reason after approving a corrected result.
Teaching closure does not close the financial period.

## Record the rehearsal evidence

Record the tested application revision and date, account roles, campus, cycle, and period.
Record identifiers for the enrollment, approved result, invoice, payment, and issued card.
Capture the expected states using the [screenshot brief](../reference/screenshots).
Record any failed step with its exact error and the observed state after reload.
Do not declare success from a save notification alone.

After this exercise, rehearse each enabled service with its own guide.
Use [imports](../operations/imports) for staged CSV changes and [reports](../operations/reports) for authorized export downloads.
