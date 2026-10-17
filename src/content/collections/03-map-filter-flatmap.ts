import type { Section } from '../types'

export const mapFilterFlatMap: Section = {
  id: 'map-filter-flatmap',
  title: 'map, filter and flatMap',
  scene: 'transform-trace',
  focus: 'flatmap',
  slide: `## map, filter and flatMap

Three combinators cover most transformations. Each takes a function and returns a **new** collection; read them by asking how many outputs one input can give.

### One input, how many outputs
- \`map\`: **exactly one** — three orders give three line counts, \`List(2, 0, 1)\`
- \`filter\`: **zero or one** — the empty order is dropped, leaving ids \`1\` and \`3\`
- \`flatMap\`: **any number**, flattened into one list — all lines from all orders

### Chaining them
- \`flatMap(_.lines).map(_.qty)\` gives \`List(2, 1, 5)\`: three lines, one per quantity
- The empty order **contributes nothing** to \`flatMap\`, with no special case
- \`map(_.lines)\` would give a **list of lists** instead
- Each step is a pure function of its input, so a chain **reads top to bottom**`,
  narration:
    "Three combinators do most of the work in collection code, and the clearest way to tell them apart is to ask how many outputs a single input can produce. The three orders on the left are labelled one, two, and three, and order two is empty on purpose. Map produces exactly one output for each input. Mapping each order to its number of lines gives two, zero, and one. Three in, three out. Filter produces zero or one. Keeping only orders with lines drops the empty order, and mapping to ids leaves one and three. Flat map produces any number, and flattens them into one list. Each order contributes all of its lines, so the result is the three lines across every order, and mapping to quantities gives two, one, and five. Notice what happened to the empty order: it contributed nothing, and no special case was needed. If you had used map instead of flat map, you would get a list of lists, one inner list per order. Because each step is a pure function of what it receives, a chain of these reads from top to bottom, with the intermediate value visible at every step.",
}
