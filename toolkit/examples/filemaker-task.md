# Focused FileMaker request

Synthetic example; no client data or real object names.

> Review `Invoice.CalculateTotal` in the development copy. It runs from layout
> `Invoice_Edit` on table occurrence `Invoices`, receives an invoice ID as JSON,
> and reads related lines through `Invoices__Lines`.
>
> With quantity 2 × price 10 and quantity 1 × price 5, a 10% invoice discount,
> and no tax, the expected total is 22.50. The display shows 25.00. The discount
> applies to the subtotal before rounding. Also check an invoice with no lines.
>
> Start with that script, its caller, and the relevant calculation/relationship.
> Preserve unrelated layouts, privileges, and email behavior. Inspect additional
> dependencies as needed within the development scope. Do not email or change production.
>
> Report the fix, checks, and anything still requiring native FileMaker testing.

This supplies facts that prevent guessing. A full export is useful when the task
needs it, not automatically for every calculation. FileMaker session tokens are
credentials; AI usage tokens measure processed content.
