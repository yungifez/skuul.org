# Report exports

Use **Operations → Reports**.
Select the campus, the **Working academic year**, and the **Working term** before you ask for a report.

| Task | Permission |
| --- | --- |
| Open **Reports** and download a report | `read report`, plus the data permission of that report |
| Ask for a report | `create report`, plus the data permission of that report |

The **Report** list shows only the reports whose data you can read.

## Build an export

![The report desk shows one Ready class list and its download action.](/images/current/report-export-light-desktop.webp)

Download a report after the build reaches Ready.

1. Open **Operations → Reports**.
2. Under **Ask for a report**, select the **Report**.
3. Select the **Shape**: **Comma-separated file (CSV)**, **Spreadsheet (XLSX)**, or **Document (PDF)**.
4. Select the **Financial period** if the report uses dates.
5. Select **Build it**.
6. Note the number in the message, for example **The report is being built. It is number 3.**
7. Find that number under **What has been asked for**.
8. When the status is **Ready**, select **Download**.

A worker builds the report in the background. The list refreshes while a report is building.
Statuses are **Queued**, **Building**, **Ready**, and **Failed**.
Each line shows the number, the status, the row count, the person who asked, and the time.
A failed report shows its error under the line.

If you ask for the same report, shape, and period again within 10 minutes, the app returns the request that is still building.
The download checks access again. A report number alone does not give access.
Every request and download goes in the audit log.

A report contains the data at build time. Build it again after records change.

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
A report export is not an official document.

## Choose the financial period

The **Financial period** list shows **Current open period** and each period of the campus.
A closed period shows **· Closed** after its name.

- **Current open period** uses the latest open financial period.
- If no financial period is open, date-based reports use the dates of the working academic year.
- A selected period supplies its start and end dates.

The form has no other filters. It has no date range, learner, status, or class filter.
The campus, working academic year, and working term also set the scope of some reports.

## Understand dates and learner selection

The financial period does not filter every report in the same way.
Read the report definition before you compare its totals with another export.

| Report | Date and selection behavior |
| --- | --- |
| General ledger, Trial balance, Income statement | Ledger transactions in the financial period. |
| Cash and bank summary | Opening balance before the period, movements in it, and the closing balance. |
| Balance sheet | Total ledger values up to the end date. |
| Expenses | Expense records in the financial period. |
| Income by fee type | Invoice lines by invoice issue date, with current allocations and balances. |
| Student balances | Current learner ledger balance and unapplied credit. It has no balance for a past date. |
| Student balances by age | Current invoice balances, aged at build time. The financial period does not filter these balances. |
| Budget variance | Budget comparison for the working academic year. |

Student balances lists every Active learner of the campus.
It also lists a learner with another status, or who moved away, who owes money or holds credit here.
Student balances by age lists each learner who still owes on an invoice of this campus.
Income by fee type's Collected column shows allocations to the selected invoice lines.
It does not show the cash received in the period.

| Problem | Action |
| --- | --- |
| **The report field is required.** | Select a report before you select **Build it**. |
| A report is not in the list | Check the data permission in the table above. |
| **Ask for a report** does not show | Check `create report` and the data permissions. |
| A report stays **Queued** | Ask the operator to check the queue worker. |
| A report is **Failed** | Read the error. Correct the cause, then ask for the report again. |
| The download is refused | Check your access and the campus. The app checks access again at download. |
| The file contains old data | Ask for a new report after the correction. |

Use [finance reconciliation](../finance/reconciliation) to compare cash, bank, learner balances, and period closure.
Use [service recovery](./recovery#recover-queued-reports) when an export stays Queued or Failed.

## Check the result

- Check that the report is **Ready** and shows the expected row count.
- Open the file. Check its campus, dates, headings, and some rows.
- Check access with the role that will use the report.

See [official documents](../academics/results) and [finance](../finance/ledger).
