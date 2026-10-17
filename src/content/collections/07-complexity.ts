import type { Section } from '../types'

export const complexity: Section = {
  id: 'complexity',
  title: 'Complexity, ordering and empty cases',
  scene: 'complexity-table',
  focus: 'table',
  slide: `## Complexity, ordering and empty cases

Each collection makes some operations cheap and others expensive. The table is a **model** of how cost grows with size — not a measurement of your program.

### Reading the table
- \`List\`: prepend and \`head\` are **constant**; \`apply(i)\` walks \`i\` cells — **linear**
- \`Vector\`: every listed operation is **effectively constant**, a good general default
- \`ArrayBuffer\`: fast indexing and **amortised** append, but prepend is linear

### Two edges that are not about speed
- \`head\` on an empty list **throws**; \`headOption\` returns \`None\`
- \`sorted\` gives an order **you chose**; a \`Set\`'s order is not promised
- Indexing a \`List\` in a loop is **quadratic** — switch to \`Vector\` or traverse
- Claims about speed need a **measurement** on realistic sizes, not just this table`,
  narration:
    "Every collection makes some operations cheap and others expensive, and the table on the left records how the cost of an operation grows as the collection grows. Read it as a model, not a stopwatch. A list is built from linked cells. Taking its head, or prepending a new element, touches one cell, so it is constant. Asking for the element at position i means walking i cells, so it is linear, and appending means walking the whole list. A vector is a wide, shallow tree, and every operation in the table is effectively constant, which makes it a sensible general-purpose default. An array buffer indexes in constant time and appends in amortised constant time, but prepending shifts every element. The code card adds two edges that have nothing to do with speed. Head on an empty list throws, while head option returns None. And sorted gives an order you chose, whereas converting a set to a list gives some order that nobody promised. One pattern to avoid: indexing into a list inside a loop makes the whole loop quadratic. And any claim that one version is faster needs a measurement at realistic sizes.",
}
