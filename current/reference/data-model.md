# Data model and record ownership

This is a domain map. Use the migrations and model relationships for exact columns and foreign keys.
Do not infer a record's owner from its display label.

## Identity and enrollment

`User` represents the person and sign-in account.
Organization and school memberships represent access relationships.
`StudentRecord` represents enrollment; dated placement records preserve level and section changes.
`ParentRecord` and guardian links connect a family member to learners.
`StaffProfile` represents campus employment, separately from a teacher record and course assignment.

A same-organization campus move retains the learner's enrollment and records placement history.
An inter-organization transfer creates a successor enrollment.
Historical records such as attendance and ledger entries retain their owning campus.
Always check both enrollment identity and record ownership when reading earlier data.

## Academics

`AcademicYear` is the cycle. `AcademicPeriod` is a dated period within it.
`AcademicLevel` is reusable campus structure. `AcademicCycleSection` is a section in one cycle.
`Subject` is the catalogue subject. `CourseOffering` binds that subject to a cycle, period, and roster.
Teaching assignments identify the responsible teachers.

Gradebook categories contain items; entries record learner values and states.
Result snapshots preserve submitted and approved publication revisions.
Report cards and transcripts have their own saved publication records.
Syllabi have topics, revisions, coverage, and lesson notes.
Timetables have revisions, time slots, recurring records, and dated exceptions.

## Finance

Fee categories organize fees. Invoice records hold the issued fee lines.
Payments and allocations settle obligations. Remaining received money can become unapplied credit.
Ledger transactions contain balanced lines against campus ledger accounts.
Financial periods control posting independently of academic closure.
Budgets represent planned amounts. Billing groups control balance carry during campus moves.

## Student and campus services

Cases keep participants, actions, and notes with category-specific restrictions.
Support plans and health records carry separate confidential access rules.
Cohorts and programme participation are independent of class placement.
Facilities hold availability and booking records.
Boarding houses contain rooms and beds; placements, rolls, and nights away retain dated history.
Library titles describe works; physical copies support loans and reservation queues.
Notices record publication, recipients, and recipient states.
Portal requests record a sender, learner, type, state, and response.

## Retained history

Use domain archive, closure, status, revision, and reversal operations.
They preserve the relationships required by later reporting.
A direct delete or bulk reassignment can break those relationships.
Data-sharing packages have their own request and receipt history.
Audit events record sensitive operations but are not a replacement for the domain's historical records.

See [record sharing](../people/sharing), [security](./security), and [extension rules](./extensions).
