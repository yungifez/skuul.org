# Financial periods, expenses, deposits, and budgets

Select the campus before working with finance records.
Use the financial-period controls on the Fee invoices page.
You need financial-period management permission to open or close them.

## Control financial posting

<!-- screenshot: financial-periods
Path: /images/current/financial-periods-light-desktop.webp
Alt: Financial-period controls distinguish open and closed periods.
Caption: Financial periods control ledger posting independently of teaching.
-->

Create the period with its name, start date, and end date.
Check the date interval before saving.
New postings require an applicable open financial period.
A closed financial period prevents new postings to that period.
Reopening is an authorized, audited action.
The current editor supplies a standard administrative reason for closing and reopening.

Financial and academic periods are separate.
Closing finance does not close teaching or change earlier invoices and payments.
Posted transactions remain in the ledger.
Corrections use new entries or reversals instead of changing posted history.
Every transaction balances its debit and credit amounts within the campus.

## Record an expense

1. Open Expenses from the Fee invoices page.
2. Select the campus expense account.
3. Enter the positive amount, date, and description.
4. Select cash or bank as the payment account.
5. Save and review the posting.

The expense account must belong to the campus.
Check the financial period if the posting is rejected.

## Deposit cash into the bank

Open Cash deposits and record the date, amount, and reference.
The posting moves value from cash to bank.
It is not new fee income.
Review the cash-and-bank report to reconcile the movement.

## Set and review a budget

Use **Finance → Budgets**.
Set the planned amount for the account and academic cycle.
Narrow it to a period or campus programme when needed.
Budget amounts cannot be negative.
Use Budget variance to compare planned and actual amounts.

## Review accounts

Use General ledger, Trial balance, Income statement, and Balance sheet in Reports.
Use student balances and aging for learner obligations.
A campus move can carry debt or credit only within a shared billing group.
The originating ledger remains available in its owning campus.

## Use posting and budget controls

On **Financial periods**, enter **Name**, **Starts on**, and **Ends on**, then select **Add period**.
Names must be unique in the campus and accept 100 characters.
Ends on must be on or after Starts on.
Use the row's **Close** or **Reopen** control and read the confirmation before proceeding.

For an expense, enter **What was bought**, **Amount**, **Date**, **Spent on**, and **Paid from**.
Confirm **This amount is right**, enter any required reference, then select **Record expense**.
Spent on must be an active expense account in the campus.
The amount must be positive, at most 1000000000, with up to two decimal places.
Date cannot be in the future. Description accepts 255 characters; note accepts 2000.

For a deposit, enter **Amount**, **Date**, optional **Bank reference**, and optional **Note**.
Confirm **The cash was counted and this amount is right**, then select **Record deposit**.
The reference accepts 100 characters. This moves cash to bank rather than earning income again.

For a budget, select **Cycle**, **Account**, **Amount**, and **Covers**.
Add optional **Programme**, **Fund**, and **Note**, then select **Save the plan**.
The amount accepts 0 to 1000000000 with up to two decimal places.
A selected teaching period must belong to the selected cycle.
Use **Revise** to change the plan, or **Remove** to remove the budget without removing actual spending.

| Problem | Action |
| --- | --- |
| Posting date has no open financial period | Review the date and applicable period before posting. |
| Expense account is rejected | Select an active campus account of expense type. |
| Deposit increases reported income unexpectedly | Review the report and posting; a deposit is an asset transfer. |
| Budget variance seems unrelated | Check account, cycle, period, programme, and fund scope. |

## Check the result

- Check the posting date and financial period for each transaction.
- Review expenses and cash deposits in the corresponding reports.
- Confirm debit and credit totals balance in the trial balance.

See [report catalogue](../operations/reports) and [campus moves](../people/moves).

Follow [finance reconciliation](./reconciliation) before closing a financial period.
