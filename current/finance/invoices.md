# Fees and invoices

Use **Finance → Fee invoices** in the billing campus.
An invoice charges a learner's account. A payment records money received against that charge.
Prepare a financial period covering the invoice's issue date before issuing it.

## Access and setup

| Task | Campus permission |
| --- | --- |
| Read invoices | `read fee invoice` |
| Create invoices | `create fee invoice` |
| Edit invoice details or take payment | `update fee invoice` |
| Create fee categories | `create fee category` |
| Create fees | `create fee` |

Select the working cycle for learner selection.
Only Active and Suspended enrollments are eligible for the creation form.
Use the fee category and fee pages to create catalogue names and descriptions.
The invoice form supplies the amounts; the catalogue is not a price list.
Set the application currency before entering live records. NGN is the default.
Changing the currency does not convert existing amounts.

::: warning Current invoice input requires whole amounts
Invoice **Amount**, **Waiver**, and **Fine** fields accept integer major-unit amounts.
For NGN, enter `1000` for ₦1,000.00.
Payment forms accept decimal major-unit amounts: enter `1000.00` for the same money.
The invoice form currently rejects fractional inputs such as `1000.50`.
Do not enter stored minor-unit amounts into this form.
Check the formatted total before issuing or collecting money.
:::

## Issue an invoice

![The finance page shows amounts owed and received and the invoice list for the 2026–27 school year.](/images/current/fee-invoice-light-desktop.webp)

Review issued fee lines before taking money.

1. Open the invoice creation page.
2. Enter **Issued** and **Due** dates.
3. Enter an optional **Note**.
4. Select the class, section, and student in **Students**.
5. Select **Add** in the student section.
6. Repeat for additional students and review the selected list.
7. Select **Fee category** and **Fee** in **Fees**.
8. Select **Add** in the fee section.
9. Enter each line's **Amount**, **Waiver**, and **Fine** in whole major units.
10. Review the total and student count.
11. Select **Create invoice**, or **Create N invoices** for multiple students.
12. Open each resulting invoice and verify its formatted amount due.

Selecting all students or all fees adds every eligible item in the chosen scope.
Review the added list before submitting.
Use a row's remove control to exclude an unintended person or fee.
**Clear** removes the selected students from this form.
Multiple students receive separate invoices with the same fee lines.
The application generates the invoice number; there is no invoice-name input.

| Field | Requirement |
| --- | --- |
| Issued | Required date. An open financial period must cover it. |
| Due | Required date on or after Issued. |
| Note | Optional. Maximum 10000 characters. |
| Students | At least one eligible enrollment in the billing campus. |
| Fees | At least one fee from this campus. |
| Amount | Integer major units, from 1 to 100000000. |
| Waiver | Nonnegative integer major units, no greater than Amount. |
| Fine | Nonnegative integer major units, up to 100000000. |

Each line charges `Amount - Waiver + Fine`.
Example: `1000` amount, `100` waiver, and `50` fine charge ₦950.00 under NGN.
Two selected learners each receive ₦950.00; the batch total is ₦1,900.00.
Creation posts an eligible charge to the learner's account.
A repeated submission of the same form uses the same batch identifier to avoid duplicate invoices.

## View and print

Open the invoice and review **Fees**, **Payments**, and the amount owed.
Use **Print invoice** for the issued document.
Use **Student account** to review charges, payment allocations, and held credit.
Use **Take payment** for money already received.
Review [payment procedures](./payments) before entering an amount.

## Correct an invoice

Select **Edit** to change **Due** or **Note**, then select **Save**.
The issue date is part of the posted charge and cannot change after posting.
Line changes depend on posting state and the permitted adjustment operation.
Do not change invoice fields to represent received money or a cash refund.
Use the student account's waiver, write-off, reversal, and credit procedures for financial corrections.

| Problem | Action |
| --- | --- |
| No learners appear | Select the working cycle and section. Check Active or Suspended enrollment. |
| No fees appear | Create a fee category and fee in this campus. |
| Due date is rejected | Use a date on or after Issued. |
| Posting is refused | Check that an open financial period covers Issued. |
| Fractional amount is rejected | The current invoice form accepts whole major units only. Ask the operator to review fractional billing support. |
| Batch contains an unintended learner | Remove the learner before creation. After posting, use the authorized correction workflow. |

Academic closure does not close the financial period.
See [financial periods and accounting](./ledger) for posting and closure.
