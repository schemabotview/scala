import type { Section } from '../types'

export const enumsSealed: Section = {
  id: 'enums-sealed',
  title: 'Enums and sealed alternatives',
  scene: 'product-vs-choice',
  focus: 'or',
  slide: `## Enums and sealed alternatives

Domain types combine in two ways. A **product** has all of its fields at once. A **choice** is exactly one of a fixed set of cases, and each case can carry its own data.

### Product and choice
- An \`Order\` has an \`id\` **and** a customer **and** a total
- A \`Status\` is \`Pending\` **or** \`Paid\` **or** \`Shipped\` **or** \`Cancelled\`
- Only \`Paid\` has a receipt — data lives **only in the case it belongs to**

### Declaring a choice
- \`enum Status\` lists every case in **one place**, which makes the set closed
- A \`sealed trait\` with case classes says the same thing **longhand**
- Closed means the compiler knows **every case**, which matching relies on next
- Avoid a status \`String\` plus optional fields — it allows **impossible combinations**`,
  narration:
    "Every domain model is built from two ways of combining types, and naming them makes design choices much clearer. The upper card is a product. An order has an id and a customer and a total, all at once, always. A case class is the natural way to write a product. The lower card is a choice. A status is pending, or paid, or shipped, or cancelled, and it is exactly one of them at a time. Notice where the data lives. Only paid carries a receipt, only shipped carries a tracking number, only cancelled carries a reason. Each piece of data appears only in the case where it means something. Compare that with the common alternative: a status string, plus optional receipt, tracking, and reason fields. That version happily represents a pending order with a tracking number, a state that should be impossible. Enum declares the choice in one place, which makes the set of cases closed. A sealed trait with case classes extending it says the same thing longhand, and appears in older code. Because the set is closed, the compiler knows every case. The next section puts that knowledge to work.",
}
