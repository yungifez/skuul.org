# Report exports

Use **Operations → Reports**.
You need report access and the permission for the report's underlying data.
Select the campus before requesting an export.

## Build an export

<!-- screenshot: report-export
Path: /images/current/report-export-light-desktop.webp
Alt: The report desk shows one Ready export and its download action.
Caption: Download a report after the build reaches Ready.
-->

1. Choose the report type.
2. Select the applicable cycle, period, dates, or learner filters.
3. Choose CSV, XLSX, or PDF.
4. Submit the request.
5. Wait for the request to become Ready.
6. Download the file from the report record.

Statuses are Queued, Building, Ready, and Failed.
The queue worker builds the export.
The download checks authorization again; knowing a report identifier does not grant access.
A failed request needs its error checked before retrying.
An export reflects the data used for that build. Rebuild it after relevant records change.

## Available reports

| Report key | Report | Required data permission |
| --- | --- | --- |
| `student-balances` | Student balances | Read fee invoice |
| `student-aging` | Student balances by age | Read fee invoice |
| `income-by-fee-type` | Income by fee type | Read fee invoice |
| `expenses` | Expenses | Read expense |
| `cash-and-bank` | Cash and bank summary | Read cash deposit |
| `general-ledger` | General ledger | Read financial period |
| `trial-balance` | Trial balance | Read financial period |
| `income-statement` | Income statement | Read financial period |
| `balance-sheet` | Balance sheet | Read financial period |
| `budget-variance` | Budget variance | Read budget |
| `class-list` | Class list | Read student |
| `report-cards` | Report cards | Read report |
| `transcripts` | Transcripts | Read report |

Report-card and transcript exports use their published academic records.
Publishing an official document is a separate workflow.
## Check the result

- Check that the report reached Ready and reports the expected row count.
- Open the download and review its campus, dates, headings, and sample rows.
- Verify access with the intended requesting role.

See [official documents](../academics/results) and [finance](../finance/ledger).
