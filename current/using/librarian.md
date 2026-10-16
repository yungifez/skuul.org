# Librarian

The `librarian` template runs campus stock, loans, returns, and reservations.
It includes `read student`, `read library`, `manage library`, and `lend library item`.
It does not grant general campus administration or finance permissions.

## Prepare the library

1. Activate your account and verify active membership in the working campus.
2. Ask the campus administrator to enable Library.
3. Open **Operations → Library → Catalogue**. The **Library** page opens.
4. Review existing titles and physical copies before you add stock.
5. From the more menu on the **Library** page, open **Lending rules**.
6. Review the loan days, renewal limits, borrower limits, hold days, and fine settings.
7. Select **Save the rules** after authorized changes.

The default sidebar shows **People → Students** and **Operations → Library** with **Catalogue**, **Lending desk**, and **Library queue**.
Follow [library instructions](../operations/library) for rule ranges and stock fields.
A title identifies a book. A copy identifies one physical item.
Use each physical copy's barcode. Do not issue the title itself.
A late fine goes on the learner's fee account.

## Add stock

1. On the **Library** page, select **Put a book on the shelf**.
2. Select an existing title under **Which book**, or enter the **Title** details for a new title.
3. Enter **Barcode of the first copy** and **How many copies**.
4. Enter the **Shelf mark (optional)**.
5. Select **Add to the shelf**.
6. Check each resulting copy and its barcode in **Copies**.

The stock form accepts between one and 50 copies per operation.
Use **Search copies** to check existing barcodes before you add another batch.
**Withdraw** appears only for a copy that is on the shelf.

## Issue a loan or class set

1. Open **Operations → Library → Lending desk**.
2. Under **Scan a copy**, enter the **Barcode** and select **Find**.
3. Check the title and its state, for example "On the shelf".
4. In **Who is taking it**, enter the learner's name or admission number.
5. Select **Lend** beside the intended borrower.
6. Find the new loan and its due date under **Out now**.

For a class set, open the **Scan a copy** menu and select **Lend a class set**.
Select the **Class** and the title, then select **Lend the set**.
The operation needs enough available copies for the eligible section learners.
A learner must be actively attending to borrow normally.
Student lookup does not grant permission to change enrollment, grades, or invoices.

## Return or renew a loan

Use the **Find a loan** search box to find the borrower or copy under **Out now**.
Select **Back** on the loan to return the copy. The loan moves to **Recently back**.
You can also scan the copy and select **Take it back**.
The return form has no lost or damaged condition. Report a lost or damaged item to the campus administrator.
Check whether a reservation holds the returned copy for another borrower.
To renew, open the loan's more menu and select **Renew**.
**Renew** appears only for a loan that is not late and is under the renewal limit.
Follow the [lending rules](../operations/library) when a renewal is refused.

## Process reservations and expired holds

Open **Operations → Library → Library queue**. The **Library queue** page opens.
Select **Put somebody in the queue**, choose the **Title** and **Who is waiting**, then select **Add to the queue**.
An available copy can immediately become a held copy.
Review **Behind the desk** for collection and **In the queue** for waiting borrowers.
Use **Take off the queue** for an authorized cancellation.
The scheduled hold process expires uncollected holds and offers copies to the next eligible borrower.
Ask the operator to review that process when expired holds remain outstanding.

| Problem | Action |
| --- | --- |
| Library menu is absent | Ask the administrator to check Library and your campus membership. |
| Barcode already exists | Open the existing copy. Do not add a duplicate. |
| Borrower is rejected | Review active attendance or applicable campus borrower eligibility. |
| Class set is refused | Count available copies and eligible learners. |
| **Renew** is absent or refused | Review the late state, limits, and pending reservations. |
| Family cannot read a loan | Ask the administrator to check the Library portal area and guardian link. |

For financial questions, refer the family to the [accountant](./accountant).
