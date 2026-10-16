# Accountant

The `accountant` template supports day-to-day collections and financial record keeping.
Work in the campus that owns the invoice or financial record.
Use its financial period independently of the teaching period.

## Prepare your workspace

1. Activate your account and verify active campus membership.
2. Check the working year in the working bar. Invoice forms use it to list learners.
3. Ask the finance administrator to confirm that an open financial period covers the posting date.
4. Open **Operations → Finance → Fee invoices**. The **Finance** page opens.
5. Review the totals, the invoice list, and the **Financial periods** list.

The default sidebar shows **People → Students** and these **Operations** entries: **Reports**, **Finance → Fee invoices**, and **Finance → Budgets**.
On the **Finance** page, the more finance pages menu opens **Record expense**, **Fees**, **Fee categories**, **Expenses**, **Cash deposits**, **Budgets**, and **Reports**.

The template includes fee and category creation, reading, and updating.
It includes `create fee invoice`, `read fee invoice`, `update fee invoice`, and `refund student payment`.
It permits expense and cash-deposit creation, and reading budgets and financial periods.
It does not include invoice deletion, `manage budget`, or `manage financial period`.
It does not include **Roles**; that page shows "Not open to you".

## Issue invoices

1. On the **Finance** page, select **Add invoice**.
2. Follow [invoice creation](../finance/invoices#issue-an-invoice) for the learners, fee lines, **Issued** date, and **Due** date.
3. Review every selected learner.
4. Select **Create invoice**, or **Create N invoices** for more than one learner.

The invoice form accepts only whole major-unit amounts.
For NGN, enter `1000` for ₦1,000.00. Do not enter stored minor-unit values.
Review the formatted total after you issue the invoice.
Posted charges and later payment allocations are separate records.

## Record money received

1. Open the invoice and select **Take payment**.
2. Verify the actual cash receipt or the noncash transaction confirmation.
3. Enter **Amount** and **Received on**.
4. Select **Paid by**: Cash, Bank transfer, Cheque, Card machine, or Mobile money.
5. Enter the **Reference** when the channel requires one. Cash needs no reference.
6. Review the automatic allocation, or select **Split across fees**.
7. Select **Record payment**. The message "Payment recorded." appears.
8. Review **Payments**, the **Owed** amount, and the learner's account.

Payments accept decimal major-unit amounts, with up to two decimal places.
Use [payment instructions](../finance/payments) for references, allocations, and duplicate-payment checks.
Excess money remains held credit. It does not become another fee payment.
A manually selected card or transfer channel does not verify provider settlement.
The family portal has no checkout workflow.

## Apply credit and make corrections

Select the learner's name on the invoice to open the student account.
It shows **Owed**, **Credit held**, **Invoices**, and **Payments**.
Use **Use credit against fees** for eligible held credit.
To reverse a wrong payment, open the payment's actions menu and select **Take back**. Enter the **Reason**.
To refund held credit, select **Give money back**, then **Record the refund**.
To reduce eligible debt, open the invoice's more menu and select **Waive or write off**, then **Take it off**.
Follow [correction procedures](../finance/payments) before you confirm these actions.
A reversal corrects accounting. It does not prove that money was paid back to the family.

## Record expenses, deposits, and reconcile

Follow [expense instructions](../finance/ledger#record-an-expense) to choose the **Spent on** account and the **Paid from** channel.
Confirm **What was bought**, **Amount**, **Date**, and **Reference** before you select **Record expense**.
Use **Record deposit** on the **Cash deposits** page for counted cash that you deposit into the bank.
A deposit transfers assets. It does not earn fee income again.
Compare invoices, allocations, account balances, expenses, and cash-and-bank records regularly.
Report posting errors to the authorized finance administrator before period closure.

## Use reports within your permission

The accountant template includes `read report`, `create report`, and the relevant financial reading permissions.
Open **Operations → Reports**. Under **Ask for a report**, select the **Report**, **Shape**, and **Financial period**.
Select **Build it**. Under **What has been asked for**, select **Download** when the request is Ready.
You can build and download each report whose underlying data you can read.
Follow the [report export instructions](../operations/reports) for each report.
Budget editing and period closing remain administrator duties unless separately assigned.

| Problem | Action |
| --- | --- |
| Invoice or learner is absent | Check the billing campus, working year, and eligible enrollment. |
| Posting is blocked | Ask the administrator to review the applicable financial period. |
| Reference was already recorded | Inspect that payment before retrying; do not invent another reference. |
| Refund exceeds held credit | Review existing allocations and refunds. |
| **Build it** is absent | Ask the administrator to check `create report` and the report's data permission. |
| Budget or closure controls are absent | Request the authorized administrator's review. |

Complete [finance reconciliation](../finance/reconciliation) to compare receipts, allocations, cash, bank, and export scope.
