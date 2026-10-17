import type { Section } from '../types'

export const dependentFailures: Section = {
  id: 'dependent-failures',
  title: 'Composing dependent failures',
  scene: 'dependent-parse',
  focus: 'qty',
  slide: `## Composing dependent failures

Parsing a line is a **chain**: split it, then read each field. A \`for\` over \`Either\` runs the steps in order and **stops at the first \`Left\`**.

### Reading the chain
- Each \`<-\` unwraps a \`Right\` and passes its value to the **next step**
- \`Sku.parse\` returns an \`Option\`; \`toRight\` turns its \`None\` into an **error**
- The \`yield\` runs only when **every** step succeeded

### Tracing a bad line
- \`"TEA-01,two,1200"\` splits and finds the SKU — both \`Right\`
- \`parseQty("two")\` is a \`Left\`, so the chain **stops** there
- \`parseCents\` is **never evaluated**; the result is that first \`Left\`
- This is chapter 5's desugaring again: \`flatMap\` on \`Either\` **short-circuits**`,
  narration:
    "Reading one line of an order file is a chain of steps, and each step depends on the one before. You cannot read the quantity until you have split the line into fields. A for expression over Either expresses exactly that. Each arrow unwraps a Right and hands its value to the next step. If any step produces a Left, the chain stops, and that Left becomes the result. Look at the steps. Split fields checks that there are three fields. The SKU step uses the companion parser from chapter four, which returns an option, so to right turns its None into an unknown SKU error. Then the quantity, then the price, and only if every step succeeded does yield build the order line. Now trace the bad line in the diagram. Splitting succeeds. The SKU is valid. The quantity is the word two, so parse quantity returns a Left, and the chain stops right there. Parse cents is never evaluated at all, and the result is the quantity error. This is the desugaring from chapter five at work. The for becomes flat map calls, and flat map on Either simply does not call the next step when it holds a Left.",
}
