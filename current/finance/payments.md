# Payments, credit, refunds, and corrections

Record money only after the office confirms receipt.
Open **Finance → Fee invoices**, select the invoice, then select **Take payment**.
Use **Student account** for credit, reversals, refunds, waivers, and write-offs.

## Access and amount rules

Reading invoices requires `read fee invoice`.
Taking payment and applying held credit require `update fee invoice`.
Reversals, refunds, waivers, and write-offs require `refund student payment`.
The relevant record must belong to the authorized billing campus.

Payment and adjustment fields use decimal major units.
For NGN, enter `1250.50` for ₦1,250.50.
Invoice creation requires whole major-unit amounts instead. See [invoice amount rules](./invoices).

## Record a payment

![The payment form shows what the learner owes, the amount, date, method, reference, and note fields.](/images/current/student-payment-light-desktop.webp)

Record money received and review any credit left unallocated.

1. Verify the learner and invoice against the receipt or bank confirmation.
2. Enter **Amount** and **Received on**.
3. Select the method under **Paid by**.
4. Enter **Reference** and an optional **Note**.
5. Review allocation or select **Split across fees**.
6. Select **Record payment**.
7. Review the confirmation, invoice balance, and payment history.

| Field | Requirement |
| --- | --- |
| Amount | From 0.01 to 100000000, with at most two decimal places. |
| Received on | Defaults to campus today. Future dates fail. |
| Paid by | Available channel in this installation. |
| Reference | Required for noncash office channels. Maximum 100 characters. |
| Note | Optional. Maximum 1000 characters. |
| Split amounts | Nonnegative, with at most two decimal places. |

Cash posts to the cash account.
Bank transfer, Cheque, Card machine, and Mobile money post to the bank account.
A manually recorded channel is evidence entered by the cashier; it does not verify settlement with a provider.
The current family portal does not provide checkout.
The Stripe extension does not supply a complete checkout and callback workflow.

## Allocate or hold credit

Automatic allocation clears the invoice's oldest eligible fees first.
**Split across fees** appears when more than one fee remains outstanding.
Enter the intended allocation for each fee; blank fields allocate nothing to that fee.
The total split must not exceed the payment.
Each split must not exceed that fee's outstanding amount.
Unallocated money remains held credit on the learner's account.

Example: an invoice owes 70.00 tuition and 30.00 materials.
A payment of 120.00 allocates 100.00 and leaves 20.00 held credit.
If a split allocates only 70.00, the remaining 50.00 stays held credit.
Held credit is not additional income when later allocated.

Open **Student account** and select **Use credit against fees** to allocate available credit to eligible outstanding fees.
Review the new allocations and remaining credit.
The action records no new cash or bank receipt.

## Correct a payment

1. Open the learner's **Student account**.
2. Find the incorrect payment in its history.
3. Open the payment's reversal control.
4. Enter a reason of 5 to 500 characters.
5. Confirm the reversal.
6. Check the reversed history and restored outstanding fees.
7. Record a replacement payment only if money was received correctly.

The reversal preserves the original payment and posts correcting entries.
A payment already reversed cannot be reversed again.
A reversal corrects the record; it does not itself prove money was returned to a family.

A reference already used for an unreversed payment to this learner is rejected in the billing campus.
The comparison ignores letter case.
Review the existing payment before retrying. Reverse it first only when it is incorrect.

## Refund held credit

Open the refund form in **Student account**.
Enter **Amount**, **Paid out by**, any required **Reference**, and **Reason**.
Use a reason of 5 to 500 characters.
Select **Record the refund** and confirm.
The amount must not exceed available held credit.
Allocated money must be corrected through the appropriate operation before it becomes refundable credit.
Review the payout method, resulting credit, and account history.

## Reduce a fee obligation

Use the account's fee-relief form for the intended invoice line.
Choose **Waiver or scholarship** or the write-off option.
Enter the amount and supporting reason, then confirm the adjustment.
The amount cannot exceed the eligible fee and account balance.
A waiver or write-off reduces debt; it does not record received money.

## Resolve a blocked payment or adjustment

| Problem | Action |
| --- | --- |
| Invoice is paid in full | Review Student account for held credit. The invoice form has no open fee to collect. |
| Reference is required | Copy the cheque, transfer, card, or mobile transaction reference. |
| Split is rejected | Reduce allocations to the payment total and each outstanding fee. |
| Duplicate reference | Open the existing payment; do not change the reference to bypass the check. |
| Financial period is closed | Ask the authorized finance operator to review the posting date and period. |
| Refund exceeds credit | Review existing allocations and prior refunds. |

After every correction, reconcile the invoice, learner account, and [ledger reports](../operations/reports).
See [payment extensions](../reference/extensions) before enabling provider settings.
