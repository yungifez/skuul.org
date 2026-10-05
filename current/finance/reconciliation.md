# Reconcile collections and close finance

Use this procedure to compare receipts, learner accounts, physical cash, bank records, and ledger reports.
A balanced trial balance alone does not prove that every receipt was recorded correctly.

## Before you start

Select the billing campus and the financial period that contains the postings.
Collect the approved receipts, cash count, bank confirmations, expenses, deposits, and refund evidence.
Use fictional data for the worked example below.
Do not enter its sample transactions into a live campus.

| Task | Required permissions |
| --- | --- |
| Review invoices and receipts | `read fee invoice`. |
| Record payments and allocate held credit | `update fee invoice`. |
| Reverse payments, refund credit, or grant relief | `refund student payment`. |
| Review expenses and cash deposits | `read expense` and `read cash deposit`. |
| Request exports | `read report`, `create report`, and each report's data permission. |
| Close or reopen finance | `manage financial period`. |

The built-in accountant role can build reports. It cannot close or reopen a financial period.
An admin closes the period, or gives `manage financial period` through a role.
Review [payment instructions](./payments), [ledger controls](./ledger), and [report exports](../operations/reports).

## Reconcile receipts and learner accounts

1. Match each receipt to the learner, billing campus, payment date, channel, amount, and reference.
2. Open the existing invoice and **Student account**.
3. Check each allocation against the intended fee.
4. Check whether an overpayment remains as held credit.
5. Match recorded bank channels to actual settlement evidence.
6. Review duplicate references and reversals before collecting or correcting again.
7. Record each unresolved difference and assign an owner.

A manually recorded bank channel does not verify actual bank settlement.
Held credit is money already received, rather than a second receipt.
**Use credit against fees** changes allocation without recording new cash or bank money.
Waivers and write-offs reduce obligations without recording receipts.
A payment reversal corrects records; a refund records money paid back.

## Reconcile cash and bank

1. Count physical cash through the campus's approved process.
2. Build Cash and bank summary for the intended financial period.
3. Check each account's Opening, Money in, Money out, and Closing columns.
4. Match cash collections, expenses, refunds, and deposits to their evidence.
5. Match bank movements to bank confirmations and record settlement timing differences separately.
6. Build General ledger to investigate unexplained movements.
7. Correct the underlying record through its permitted workflow.
8. Rebuild the affected reports after the correction.

For each cash or bank account, Closing equals Opening plus Money in minus Money out.
A cash deposit decreases cash and increases bank.
It does not create new fee income or change the combined cash-and-bank total.
Do not post an invented receipt or expense merely to make the count agree.

## Rehearse a worked reconciliation

This example assumes NGN, zero opening cash and bank, one open financial period, and no unrelated transactions.
The values below are expected results for a rehearsal, not evidence of an executed browser test.

1. Create one invoice line with **Amount** `300`, no waiver, and no fine.
2. Take a cash payment of `350.00` on that invoice.
3. Check that the invoice is **Paid** and the account holds `50.00` credit.
4. Record an actual cash expense of `40.00` through the expense workflow.
5. Record a cash deposit of `200.00`. The cash box holds `310.00`, so no confirmation shows.
6. On the **Student account**, select **Give money back**. Give back `50.00` in cash with a reason.
7. Build fresh learner and cash-and-bank reports.

| Step | Cash | Bank | Fee owed | Held credit |
| --- | ---: | ---: | ---: | ---: |
| Before payment | 0.00 | 0.00 | 300.00 | 0.00 |
| After payment | 350.00 | 0.00 | 0.00 | 50.00 |
| After expense | 310.00 | 0.00 | 0.00 | 50.00 |
| After deposit | 110.00 | 200.00 | 0.00 | 50.00 |
| After refund | 60.00 | 200.00 | 0.00 | 0.00 |

Final cash is 350.00 minus 40.00 minus 200.00 minus 50.00, which equals 60.00.
Final bank is 200.00.
Combined cash and bank is 260.00.
The invoice input is a whole major-unit amount; the payment and refund inputs allow decimals.
Do not enter stored minor-unit values into those fields.

## Interpret report scope before comparing totals

| Report | Scope to check |
| --- | --- |
| Cash and bank, General ledger, Trial balance, Income statement | Transactions dated within the selected financial window. |
| Balance sheet | Cumulative ledger values through the window's ending date. |
| Income by fee type | Invoice issue dates within the window, with their current allocations. It is not a receipt-date cash report. |
| Student balances | Current ledger balances and unapplied credit; not a historical financial-period snapshot. |
| Student balances by age | Current invoice balances grouped by age at build time by default. The financial-period selection does not limit those balances. |
| Budget variance | The selected academic cycle's budget comparisons; not a generic financial-period filter. |

Without a financial period, window-based reports fall back to the working cycle's dates.
The report desk has no general date-range or learner-status editor.
Student balances lists every Active learner of the campus.
It also lists a suspended, withdrawn, or graduated learner who still owes money or holds credit here.
It also lists a learner who moved to another campus and left money here. Their status reads **Moved to** and the campus name.
Student balances by age lists each learner who still owes on an invoice of this campus.
See [report scope](../operations/reports#understand-dates-and-learner-selection).

## Close and retain the review

1. Resolve or document differences under the campus's authorized finance process.
2. Build the final General ledger, Trial balance, and relevant collection reports.
3. Confirm debit and credit totals agree in the Trial balance.
4. Check balance-sheet totals and the dates used by each report.
5. Retain report identifiers, cash count, settlement evidence, and unresolved timing differences securely.
6. Ask the authorized finance manager to select **Close** for the intended financial period.
7. Reload and confirm the Closed state.
8. Confirm that the next applicable financial period is ready for new postings.

Closing finance does not close teaching or remove historical transactions.
Reopening is a separate authorized, audited action.
The current finance editor records a standard reason rather than accepting a detailed reopening note.
Keep the specific correction decision in the approved review record.
Do not assume that period closure performs these reconciliation steps automatically.

| Problem | Action |
| --- | --- |
| Cash count differs from Closing | Match receipts, payouts, deposits, opening balance, and posting dates. |
| Fee income differs from bank receipts | Compare report definitions, invoice dates, held credit, allocations, and settlement timing. |
| Learner is missing from Student balances | They owe nothing and hold no credit here. Check their **Student account**. |
| New posting is rejected | Check its date and the applicable open financial period. |
| Report still shows the old total | Build a new export after the correction. |

## Check the result

Confirm matched evidence, explained differences, balanced ledger totals, correct report scopes, and the intended period state.
Record who performed and reviewed the reconciliation.
Keep financial exports in access-controlled storage.
