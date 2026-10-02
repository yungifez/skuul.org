# Instructions by role

Choose the guide for your assigned role and responsibilities.
Each guide explains access, daily work, review duties, and blocked actions.
Use the linked task guides for field rules and correction procedures.

## Choose your guide

| Role or responsibility | Start here | Main work |
| --- | --- | --- |
| `platform-admin` | [Platform administrator](./platform-administrator) | Organizations, platform access, and operational readiness. |
| `organization-admin` | [Organization administrator](./organization-administrator) | Organization members, campuses, calendars, domains, and oversight. |
| `admin` | [Campus administrator](./campus-administrator) | Campus setup, enrollment, staff access, approval, and campus services. |
| `teacher` | [Teacher](./teacher) | Assigned teaching, attendance, syllabi, lesson notes, and marks. |
| `accountant` | [Accountant](./accountant) | Fees, invoices, payments, refunds, expenses, and reconciliation. |
| `librarian` | [Librarian](./librarian) | Stock, lending, returns, renewals, and reservations. |
| `student` | [Student](./student) | Own published academic records, invoices, services, and requests. |
| `parent` | [Parent or guardian](./parent) | Linked learners, published records, notices, and family requests. |
| Delegated staff | [Delegated responsibilities](./delegated-staff) | Admissions, academic review, student care, HR, boarding, facilities, and other duties. |

These eight roles come from the reviewed installation seeders.
Delegated responsibilities are examples of campus-defined roles, rather than additional seeded role names.
The [role inventory](/reference/role-guide-coverage.json) records their guides and installation permission templates.

## Find a delegated duty

| Responsibility | Instructions |
| --- | --- |
| Enrollment and admissions office | [Task sequence and permissions](./delegated-staff#enrollment-and-admissions-office). |
| Academic review and official documents | [Task sequence and permissions](./delegated-staff#academic-review-and-official-documents). |
| Teaching and timetable planning | [Task sequence and permissions](./delegated-staff#teaching-and-timetable-planning). |
| Safeguarding and behaviour casework | [Task sequence and permissions](./delegated-staff#safeguarding-and-behaviour-casework). |
| Health and wellbeing | [Task sequence and permissions](./delegated-staff#health-and-wellbeing). |
| Staff employment and leave | [Task sequence and permissions](./delegated-staff#staff-employment-and-leave). |
| Notices, events, and family requests | [Task sequence and permissions](./delegated-staff#notices-events-and-family-requests). |
| Boarding staff and overnight-leave reviewer | [Task sequence and permissions](./delegated-staff#boarding-staff-and-overnight-leave-reviewer). |
| Facilities coordinator | [Task sequence and permissions](./delegated-staff#facilities-coordinator). |
| Groups, programmes, and graduation planning | [Task sequence and permissions](./delegated-staff#groups-programmes-and-graduation-planning). |
| Imports and report exports | [Task sequence and permissions](./delegated-staff#imports-and-report-exports). |
| Record sharing between campuses | [Task sequence and permissions](./delegated-staff#record-sharing-between-campuses). |
| Deployment operator | [Task sequence and permissions](./delegated-staff#deployment-operator). |

## Understand your access

1. Accept your latest account invitation and set your password.
2. Complete any required email verification or password change.
3. Read the [profile security instructions](../people/accounts#use-profile-security).
4. For staff tasks, select the working campus, cycle, and period.
5. Open the guide for your assigned duties.
6. Check the saved record after each operation.

An active account does not establish campus access by itself.
Staff need an active campus membership and the required campus permissions.
Organization administrators also need active membership in the organization they manage.
Families use their own learner identity or guardian link for portal records.
Feature settings, record ownership, teaching assignments, and record states impose further restrictions.

## Installation defaults and local changes

The role guides describe the reviewed installation templates.
Existing installations can retain different assignments after permission migrations and local role changes.
Read the person's assigned roles and the permissions shown in **Roles** before delegating a task.
Do not rerun PermissionSeeder to restore a missing permission on a live campus.
Its synchronization replaces assignments on seeded roles.
Use the [role editor](../administration/permissions) and the authorized permission-change process.

The protected roles are platform-admin, organization-admin, admin, teacher, student, and parent.
Copy a protected role when an adjustable campus role is required.
Accountant and librarian are seeded templates that the role editor permits tailoring.
A custom title does not grant the permissions associated with that job.

## People with more than one role

A teacher who is also a guardian keeps their permitted staff access.
Use **Everything of mine** for the family task and the staff workspace for teaching work.
Confirm the learner and campus in both contexts.
An account with a staff role is not treated as a portal-only account.
Review all assigned roles when restricting access; removing one role might leave another permission grant.

## Ask for help with a blocked action

| Problem | Contact and information |
| --- | --- |
| Invitation or sign-in fails | Campus administrator. Include the visible error and account email through an approved private channel. |
| Campus or menu is missing | Campus administrator. Include the campus and intended task. |
| Organization authority is missing | Organization administrator or platform administrator. Include the required organization operation. |
| Gradebook is inaccessible | Campus administrator. Include the offering, period, and teacher assignment. |
| Closed record needs correction | Authorized workflow owner. Include the record identifier and correction evidence. |
| Export, email, or scheduled work stalls | Operator. Include the request number, state, and time. |

Use [troubleshooting](./troubleshooting) for shared checks.
Follow [the worked exercise](../getting-started/first-campus) to rehearse cooperation between staff, reviewer, and guardian accounts.
