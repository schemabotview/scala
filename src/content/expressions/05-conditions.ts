import type { Section } from '../types'

export const conditions: Section = {
  id: 'conditions',
  title: 'Conditions and expression results',
  scene: 'if-expression',
  focus: 'value',
  slide: `## Conditions and expression results

In Scala, \`if\` is an **expression**: it produces a value. You bind the result directly, instead of declaring a variable and assigning it in each branch.

### How it evaluates
- Branches are tried **top to bottom**; the first true condition wins
- \`||\` and \`&&\` **short-circuit** — the right side runs only if needed
- Each branch's value becomes the value of the whole \`if\`

### Keeping the result useful
- When every branch gives an \`Int\`, the result is an \`Int\`: \`shipping\` is **300**
- Drop the final \`else\` and there is no value for the missing case — **no longer an \`Int\`**
- A \`val\` bound to an \`if\` cannot be left **unassigned** on some path
- Order thresholds from **most to least specific**, or a later branch never runs`,
  narration:
    "In many languages, if is a statement: it decides which block runs, and any result has to be stored in a variable declared beforehand. In Scala, if is an expression. It produces a value, so the result can be bound directly. Shipping, on the left, is defined as the value of the whole if. The conditions are tried from the top. The first asks whether the total is at least five thousand, or the customer is a member. Neither holds, so the next condition is checked: at least two thousand. That is true, so the value is three hundred, and the final branch is never evaluated. Notice the double bar. If the left side had been true, the right side would not have been evaluated at all; that is short-circuiting, and it matters when the right side is expensive or could fail. Because every branch gives an Int, shipping is an Int. Remove the final else, and the missing case has no value, so the result is no longer a useful Int. And keep thresholds ordered from most to least specific, or a broad early branch will hide the rest.",
}
