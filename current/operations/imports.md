# Import student and staff CSV files

Enable Imports and use **Imports** with import permission.
Select the destination campus. For students, select the destination academic cycle as well.
The application supports student and staff imports.

## Check and apply a file

<!-- screenshot: checked-import
Path: /images/current/checked-import-light-desktop.webp
Alt: An import batch shows valid rows, invalid rows, and row error messages.
Caption: Checking a file does not apply its rows.
-->

1. Prepare a CSV file with a header row.
2. Choose Students or Staff and upload the file.
3. Review the checked rows and errors.
4. Correct the file and check a new batch when necessary.
5. Apply the checked batch when its valid rows are ready.
6. Review the applied and failed row counts.

Checking stages the import; it does not create the people records.
Applying writes valid rows. Invalid rows remain reported instead of stopping every valid row.
Each applied row uses its own transaction.
A batch can be applied once. Review failures before preparing another batch.
Cancel an unapplied batch when it should not proceed.
States include Draft, Checked, Applied, Failed, and Cancelled.

## Student columns

Required: `name`, `email`, `birthday`, `level`, `section`.

Optional: `source_id`, `gender`, `admission_number`, `admission_date`, `address`, `city`, `state`, `nationality`, `phone`.

Use level and section names that exist in the selected campus and cycle.
The birthday must precede today. Email validation includes a valid mail domain.
Gender values are `Male`, `Female`, `Non-binary`, or `Prefer not to say`.
Duplicate admission numbers and incompatible existing enrollments fail validation or application.
A learner enrolled elsewhere needs a transfer or campus move.

## Staff columns

Required: `name`, `email`.

Optional: `source_id`, `staff_number`, `job_title`, `department`, `employment_type`, `joined_on`, `address`, `city`, `state`, `nationality`, `phone`.

Employment values are `full_time`, `part_time`, `contract`, `volunteer`, or `intern`.
A staff import creates or updates the employment profile and associated account.
It does not assign subjects or teaching responsibility.
An enrolled learner cannot be imported as staff.

## Use stable source identifiers

Use `source_id` to identify the same source record in later imports.
Keep it stable within that import source and type.
The importer can update its previously linked record instead of creating a duplicate.
Check row errors and the resulting records before sending invitations.

## Check the result

- Review the applied and failed counts after applying a batch.
- Open sample resulting records and check their campus and placement.
- Confirm the same batch cannot apply again.

See [CSV examples and import design](../reference/imports) and [accounts](../people/accounts).
