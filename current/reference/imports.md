# CSV examples and import design

See [the import workflow](../operations/imports) for required permissions and apply behavior.
Use a header row with the exact declared column names.
Use ISO dates such as `2026-09-01` to avoid ambiguous date parsing.

## Student example

```txt
source_id,name,email,birthday,level,section,gender,admission_number,admission_date
learner-001,Alex Learner,replace-with-a-real-mailbox@your-school-domain.org,2013-05-12,Grade 7,A,Prefer not to say,ADM-001,2026-09-01
```

Replace the email, level, section, and admission details with valid destination data.
The example domain is a placeholder and may fail DNS validation.
The selected cycle must already contain the named level and section.
Use unique admission numbers within the campus.
An existing learner must remain eligible for the enrollment operation.

## Staff example

```txt
source_id,name,email,staff_number,job_title,department,employment_type,joined_on
staff-001,Sam Teacher,replace-with-a-real-mailbox@your-school-domain.org,STAFF-001,Teacher,Science,full_time,2026-09-01
```

Replace the example values before import.
The staff importer creates or updates the profile and provisions its account.
Assign campus roles, invitations, and teaching responsibilities through their separate workflows.

## Parsing and row processing

`CsvReader` reads named columns, quoted values, and multiline CSV fields.
The reader handles supported byte-order marks and encoding conversion.
A valid CSV structure does not establish valid domain data.
The importer validates required columns and individual row values.

`ImportRunner::stage()` records the batch and row check results.
`ImportRunner::apply()` claims an eligible checked batch, then applies valid rows individually.
A row can fail during application if eligibility changed after checking.
Earlier successful rows remain applied.
The interactive apply action runs through the runner; it is not a queued report job.

The runner records source identifiers and the resulting model links.
A stable source identifier enables a later batch to update the earlier record.
It does not bypass ownership, account, or enrollment checks.
Review applied counts and failed rows before repeating an import.

## Extension tests

Test missing headers, invalid data, mixed valid and invalid rows, and changes between check and apply.
Test repeated application, source-identifier reuse, and another campus's existing records.
Verify that a cancelled batch cannot apply.
Do not use real personal data in committed CSV examples or tests.
