# Students and enrollment

Use **People → Students** in the learner's campus. Select the working academic cycle before admission.
An account identifies a person. An enrollment records where that person studies.
Changing a placement must retain the same account and enrollment.

## Before you start

| Task | Required campus permission |
| --- | --- |
| Read student records | `read student` |
| Admit a learner | `create student` |
| Change identity, status, or placement | `update student` |

Prepare an active section in the working cycle. Draft sections do not appear in the admission form.
Confirm available seats. Suspended enrollments and reserved admission offers also occupy seats.
Use [admissions](./admissions) when the intended section is full.

## Admit a learner

![The student list shows fictional learners with email, admission number, class, section, and enrollment state.](/images/current/student-enrollment-light-desktop.webp)

Review the learner identity and placement after enrollment.

1. Open the student creation page from **Students**.
2. Enter the learner's name and email address.
3. Complete the required and optional fields below.
4. Select the section shown with its academic level.
5. Select **Admit learner**.
6. Open the resulting profile and review its **Enrollment** section.

| Field | Requirement |
| --- | --- |
| Name | Required. Maximum 100 characters. |
| Email | Required. Valid email format and mail-domain DNS. Maximum 100 characters. |
| Birthday | Optional in this form. Use a date before today. The CSV import requires it. |
| Gender | Optional. Male, Female, Non-binary, or Prefer not to say. |
| Section | Required. Active section in the working campus and cycle. |
| Admission number | Optional. Unique within the campus. Leave blank for automatic generation. |
| Admission date | Required. Defaults to campus today. Future dates fail. |
| Photo | Optional. JPG, JPEG, or PNG. Maximum 3000 KB. |
| Phone | Optional. Maximum 100 characters. |
| Address and second address line | Optional. Maximum 255 characters each. |
| City, state, country, nationality | Optional. Maximum 100 characters each. |
| Postal code | Optional. Maximum 30 characters. |

Enter an existing person's email to reuse an eligible account known to the organization.
The form has no separate account picker.
An enrolled learner or an incompatible staff account fails admission checks.
Use [campus moves](./moves) for a learner who already attends another campus.

A new account receives an email link to set a password automatically.
An eligible reused account keeps its existing password.
Do not send another invitation unless the first link requires replacement.

## Change a placement

1. Open the learner's profile.
2. Open the ellipsis beside **Enrollment**, labelled **Change the enrollment**.
3. Select **Change placement**.
4. Select the destination section in the working cycle.
5. Enter **Effective on**, using today or an earlier valid date.
6. Enter the reason, if required by campus policy.
7. Select **Save placement**.
8. Reload the profile and check the destination section and placement history.

The reason accepts up to 1000 characters.
The application records a dated placement; editing identity details does not change placement.
Withdrawn, Transferred, Graduated, and Archived enrollments reject ordinary placement changes.

## Change enrollment status

Open the same menu and select **Change status**.
Choose **New status**, **Effective on**, and an optional **Reason**. Select **Save status**.
The menu only offers permitted transitions.

| Current status | Available next statuses |
| --- | --- |
| Active | Suspended, Withdrawn, Transferred, Graduated, Archived |
| Suspended | Active, Withdrawn, Transferred, Archived |
| Withdrawn | Active, Archived |
| Transferred | Archived |
| Graduated | Active, Archived |
| Archived | None |

Active means attending. Suspended means still enrolled but temporarily not attending.
Reactivation checks other enrollments, staff status, and available capacity.
Account suspension is separate and affects sign-in; enrollment suspension does not perform that account action.
A status change to Transferred does not itself create a destination enrollment.
Use the documented move operation when changing campus ownership.

## Resolve a blocked admission or change

| Problem | Action |
| --- | --- |
| No sections appear | Select the correct cycle. Activate a section in that cycle. |
| Section is full | Review suspended learners and reserved offers. Use the admission queue. |
| Email validation fails | Correct the address and use a domain with working mail DNS. |
| Admission number exists | Open the existing learner. Correct the number only when it belongs to another person. |
| Learner already enrolled elsewhere | Request a campus move. Do not create another identity. |
| Profile moved while this page was open | Reload and work in the receiving campus. |
| Placement is disabled | Check the working cycle and enrollment status. |

After admission, [link guardians](./guardians) and verify [family access](../family/portal).
