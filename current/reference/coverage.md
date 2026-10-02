# Documentation coverage

This inventory was checked against the development workspace on 2 October 2026.
It includes the workspace changes present during review, based on commit `3ebc155e`.
The current development guides are separate from the V2 release guides.

The reviewed surface contains 221 registered non-vendor routes, 147 domain action files, and 182 Livewire files.
The guides cover all 12 optional features, 13 report types, 2 import types, and 16 application commands.
Livewire file coverage includes authentication, layouts, and reusable concerns.
These counts describe documentation coverage, not application test coverage.

Each main workflow guide now includes a result check.
The [screenshot capture brief](./screenshots) defines the planned images and the checks required before using them.

## Workflow entry points

| Entry points | Guide |
| --- | --- |
| `Closure` | [Use the workspace](/current/using/workspace) |
| `InstallationController`, `LocationController` | [Local installation](/current/getting-started/installation) |
| `OrganizationController`, `OrganizationDashboardController`, `OrganizationDomainController`, `OrganizationMemberController`, `OrganizationBillingGroupController` | [Organizations and domains](/current/administration/organizations) |
| `SchoolController`, `SchoolSetupController` | [Campus settings and setup](/current/administration/campuses) |
| `ViewController` | [Optional features](/current/administration/features) |
| `CampusRoleController` | [Roles and permissions](/current/administration/permissions) |
| `AccountInvitationController`, `AdminController` | [Accounts, invitations, and profile security](/current/people/accounts) |
| `StudentController` | [Students and enrollment](/current/people/students) |
| `AdmissionWaitlistController` | [Admission queues](/current/people/admissions) |
| `ParentController` | [Parents and guardian links](/current/people/guardians) |
| `CampusMoveRequestController` | [Campus moves and transfers](/current/people/moves) |
| `DataSharingRequestController` | [Share student records between campuses](/current/people/sharing) |
| `AcademicYearController`, `AcademicPeriodController`, `AcademicYearSetupController`, `CalendarTemplateController` | [Academic calendars and closure](/current/academics/calendars) |
| `AcademicLevelController`, `AcademicCycleSectionController`, `InstructionalModelController` | [Levels, sections, and teaching models](/current/academics/structure) |
| `SubjectController`, `CourseOfferingController`, `TeacherController` | [Subjects, course offerings, and teachers](/current/academics/offerings) |
| `AttendanceRegisterController` | [Attendance registers](/current/academics/attendance) |
| `TimetableController`, `CustomTimetableItemController` | [Timetables and lesson cover](/current/academics/timetables) |
| `SyllabusController` | [Syllabi, coverage, and lesson notes](/current/academics/syllabi) |
| `ExamController` | [Exam schedules](/current/academics/exams) |
| `GradebookController`, `GradingScaleController` | [Gradebooks and grading scales](/current/academics/gradebooks) |
| `RankingController`, `ReportCardController`, `TranscriptController` | [Result approval and official documents](/current/academics/results) |
| `PromotionController`, `GraduationController`, `GraduationPlanController` | [Promotion, graduation, and graduation plans](/current/academics/progression) |
| `CalendarEventController` | [Calendar events and closure days](/current/operations/calendar) |
| `NoticeController`, `NoticeAttachmentController`, `NoticeNotificationPreferenceController` | [Notices and email preferences](/current/operations/notices) |
| `IncidentController` | [Behaviour and safeguarding cases](/current/operations/cases) |
| `StudentHealthRecordController`, `SupportPlanController` | [Support plans and health records](/current/operations/wellbeing) |
| `StaffProfileController`, `StaffLeaveRequestController` | [Staff records, availability, and leave](/current/operations/staff) |
| `CohortController`, `ProgramController` | [Groups and programmes](/current/operations/groups-programmes) |
| `FacilityController` | [Facilities and bookings](/current/operations/facilities) |
| `DormitoryController`, `BoardingRollController`, `OvernightLeaveController`, `OrganizationBoardingResidenceController` | [Boarding houses, rolls, and nights away](/current/operations/boarding) |
| `LibraryCopyController`, `LibraryLoanController`, `LibraryReservationController`, `LibraryLendingRulesController` | [Library catalogue, loans, and reservations](/current/operations/library) |
| `ImportController` | [Import student and staff CSV files](/current/operations/imports) |
| `ReportController` | [Report exports](/current/operations/reports) |
| `FeeCategoryController`, `FeeController`, `FeeInvoiceController` | [Fees and invoices](/current/finance/invoices) |
| `StudentAccountController`, `StudentPaymentController` | [Payments, credit, refunds, and corrections](/current/finance/payments) |
| `BudgetController`, `ExpenseController`, `CashDepositController` | [Financial periods, expenses, deposits, and budgets](/current/finance/ledger) |
| `PortalOverviewController`, `PortalAttendanceController`, `PortalBoardingController`, `PortalCalendarController`, `PortalDocumentsController`, `PortalGraduationController`, `PortalInvoicesController`, `PortalLibraryController`, `PortalNoticeController`, `PortalProgramController`, `PortalSyllabusController` | [Family portal](/current/family/portal) |
| `PortalRequestController` | [Family requests and the staff inbox](/current/family/requests) |
| `HealthController` | [Backups and monitoring](/current/operations) |

## Role-specific instructions

The [role index](../using/roles) links instructions for every seeded role and delegated specialist responsibilities.
The [role inventory](/reference/role-guide-coverage.json) records eight installation templates and their permission sets.
Local assignments and migration history can differ from those templates.
Role checks compare the documented role list and permission snapshot with the source seeders when a checkout is available.
Job duties remain campus-defined permission sets, rather than invented seeded roles.

## Review procedure quality

Route coverage is a discovery aid. A mapped guide still needs an executable procedure.
For each workflow, review prerequisites, permission scope, exact controls, input rules, saved state, correction steps, and blocked actions.
Compare the instructions with the current forms, policies, actions, and relevant tests.
The [worked exercise](../getting-started/first-campus) gives a manual acceptance sequence with expected outcomes.
It does not substitute for running that exercise or testing the application.
Planned screenshots remain pending until real captures are added and reviewed.

## Review and maintain the inventory

The [machine-readable inventory](/reference/application-coverage.json) maps each route and source file to its guide.
It also records report permissions, import columns, feature keys, and command names.

Recheck the inventory after adding a route, action, component, report, importer, feature, or command.
Update the guide and its navigation entry in the same documentation change.
The docs checks reject missing guides and broken built links.
They can also compare the inventory with a local application checkout and a fresh route export.

See the [documentation contribution instructions](../development#documentation-changes) for the check commands.
Authentication package routes are outside the non-vendor route snapshot; the account guide covers their user workflows.
Framework internals and third-party package APIs remain in their own package documentation.
