# Campus administrator

The `admin` role runs a campus's enrollment, teaching, finance, and enabled services.
Check the working campus before every operational task.
The installation template grants broad campus permissions. It does not grant platform, organization, or restricted-data access.

## Prepare access and the academic cycle

1. Activate your account and verify active membership in the campus.
2. Open **Setup → School settings** and review [campus settings](../administration/campuses), terminology, and time zone.
3. Review [feature switches](../administration/features).
4. Open **Setup → Academic cycles** and create and publish the [academic calendar](../academics/calendars).
5. Prepare [levels and active sections](../academics/structure) under **Setup**.
6. In the working bar, select the working year and an open term.
7. Prepare [subjects, offerings, and teacher assignments](../academics/offerings) under **Teaching**.

The dashboard shows the setup progress, for example "School setup is complete".
Campus labels can differ. The demo campus shows **Classes**, **Sections**, and **Subjects being taught**.
Use the [worked exercise](../getting-started/first-campus) to verify the first usable cycle.
Section copying and offering copying keep the structure. They do not promote learners.

## Admit learners and give family access

1. Follow [student admission](../people/students) under **People → Students** for each eligible learner.
2. Check the saved enrollment, admission number, and placement.
3. Use the [admissions waitlist](../people/admissions) for full sections with capacity limits.
4. Create guardian accounts under **People → Parents** and [link the intended learners](../people/guardians).
5. Review [invitations](../people/accounts) when activation fails.
6. Verify published family records with the guardian's own test account.

Use placement and status controls to change enrollment. Do not duplicate identities.
Use **People → Campus moves** and [campus move requests](../people/moves) for another campus in the same organization.
Use [promotion and graduation](../academics/progression) for the corresponding progression operation.

## Delegate staff duties

Open **Operations → Roles** and follow [role assignment instructions](../administration/permissions).
The **Roles** page lists each role, its permission count, and how many people hold it.
Use the [teacher](./teacher), [accountant](./accountant), and [librarian](./librarian) guides for those templates.
Use [delegated responsibilities](./delegated-staff) for admissions, reviews, HR, care, and other duties.
Check every permission with the target account after assignment.
Assign a teacher to their offering separately from giving them the teacher role.

The admin template does not include every restricted permission.
It omits `read safeguarding case`, `read confidential support plan`, `read health record`, and `update health record`.
**Health records** is absent from the sidebar, and its address shows "Not open to you".
It also omits the explicit data-sharing permissions, so **Record sharing** is absent.
It omits `read school` and organization permissions. **Organization → Schools** and **Organizations** are absent.
Assigned-handler or creator visibility still applies to certain confidential records.
Obtain the required authorized scope when the job includes those duties.
A role can carry only permissions that you already hold.

## Review and finish academic work

| Responsibility | Procedure |
| --- | --- |
| Daily registers | Select **Take attendance** on the dashboard. Review [attendance](../academics/attendance), unrecorded entries, and closure days. |
| Teaching plans | Review [syllabi and lesson notes](../academics/syllabi) under **Teaching → Syllabi**. |
| Timetables and cover | Resolve conflicts using [schedule instructions](../academics/timetables). |
| Result submission and approval | Use [result review](../academics/results) in **Assessment → Gradebooks**, with a different reviewer from the submitter. |
| Official documents | Issue report cards and transcripts after their publication prerequisites. |
| Period closure | Review readiness, resolve outstanding work, and follow [closure](../academics/calendars). |

The same administrator cannot approve their own result submission.
A completed document stays fixed until a new revision is issued.

## Review finance and campus services

Prepare open [financial periods](../finance/ledger) before invoice and payment posting.
Delegate collections and reconciliation using [accountant instructions](./accountant).
Review refunds, debt relief, budgets, and period closure through their authorized workflows.
Academic closure and financial closure are separate decisions.

Find these services under **Operations**:

- [Notices](../operations/notices), [calendar events](../operations/calendar), and [family requests](../family/requests).
- [Staff](../operations/staff) under **Staff → Staff directory** and **Staff → Staff leave**.
- [Cases](../operations/cases), and [support plans](../operations/wellbeing) under **Student support → Support plans**.
- Enabled [boarding](../operations/boarding), [library](../operations/library), and [facilities](../operations/facilities).
- Checked [imports](../operations/imports). Apply them only after you review valid and invalid rows.
- [Reports](../operations/reports) for authorized exports.

Manage [groups and programmes](../operations/groups-programmes) and [graduation plans](../academics/progression) under **People**.

| Problem | Action |
| --- | --- |
| Restricted record is unavailable | Check specific authority and assigned-handler visibility. |
| Teacher cannot submit results | Review `publish result`; the teacher template does not include it. |
| Accountant cannot build a report | Check `create report` and the report's data permission; the accountant template includes both for financial reports. |
| Staff access survives role removal | Review other roles and the active campus membership. |
| Scheduled or queued work stalls | Give the operator its request number, state, and time. |

Use the [platform administrator](./platform-administrator) for platform scope and the [organization administrator](./organization-administrator) for organization scope.

Coordinate [daily checks](./daily-checks), [staff access review](../people/access-review), and [academic handover](../academics/year-end).
