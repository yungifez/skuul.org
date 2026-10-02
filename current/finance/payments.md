# Payments, credit, refunds, and corrections

Open an invoice and choose **Take payment**.
Use the student's account view for payment history and account adjustments.
You need the relevant payment or adjustment permission.

## Record received money

<!-- screenshot: student-payment
Path: /images/current/student-payment-light-desktop.webp
Alt: The invoice payment form shows method, amount, reference, and allocation.
Caption: Record money received and review any credit left unallocated.
-->

1. Check the learner and invoice.
2. Enter the positive amount and date received.
3. Select the payment method.
4. Enter the required reference and optional note.
5. Use automatic fee allocation or enter a valid split by fee.
6. Save and review the payment and remaining balance.

The date received cannot be in the future.
Amounts accept up to two decimal places.
Available office channels include Cash, Bank transfer, Cheque, Card machine, and Mobile money.
Cash posts to the cash account. The other office channels post to the bank account.
References are required for channels that need a traceable transaction number.

The payment clears eligible fees according to its allocation.
Money above the amount allocated remains held as unapplied credit.
A held credit is not another fee payment until it is allocated.

## Use held credit

Open the account and choose **Use credit against fees**.
Review the resulting allocations and remaining credit.
The action uses eligible credit against outstanding fees.
It does not record new cash or bank income.

## Correct or return money

| Action | Use |
| --- | --- |
| Reverse payment | Correct a payment that should not remain in the books. |
| Refund | Return eligible held credit to the learner. |
| Waiver | Reduce an eligible posted fee obligation. |
| Write-off | Recognize an eligible outstanding amount that will not be collected. |

Select the affected payment or fee line, enter the amount where required, and provide a reason.
A refund cannot exceed held credit.
A waiver or write-off cannot exceed the eligible line and account balance.
Posted history remains; corrections create accounting entries.
Review the account and ledger after the action.

The current portal provides invoice viewing, without family checkout.
The Stripe channel is an extension implementation, not a complete configured checkout workflow.
## Check the result

- Review payment history and the remaining invoice balance.
- Confirm any excess appears as unapplied credit.
- After an adjustment, check both the account balance and its recorded reason.

See [payment extensions](../reference/extensions) before enabling provider settings.
