import type { Section } from '../types'

export const totality: Section = {
  id: 'totality',
  title: 'Total functions and partial-function hazards',
  scene: 'partial-vs-total',
  focus: 'lift',
  slide: `## Total functions and partial-function hazards

A **total** function gives an answer for every input of its type. A **partial** one throws for some inputs — and its type usually does not tell you which.

### Hidden partiality
- \`.get\` on an \`Option\` throws when it is \`None\`
- \`list(5)\` throws when the list is **shorter** than six elements
- A non-exhaustive \`match\` throws \`MatchError\` for the case it forgot

### Total alternatives
- \`getOrElse\` supplies a **default** instead of assuming \`Some\`
- \`lift\` turns an index or a \`PartialFunction\` into one returning \`Option\`
- \`isDefinedAt\` asks a \`PartialFunction\` **where** it is defined, before calling it
- A type \`A => B\` is **not proof** of totality — the body can still throw`,
  narration:
    "A total function gives an answer for every input its type allows. A partial function throws for some of them, and the danger is that its type usually gives no warning. The upper card collects three common partial operations. Get on an option throws when the option is None. Indexing a list with five throws when the list has only two elements. And first, a partial function that matches a non-empty list, throws a match error when given an empty one. Each line type-checks perfectly. The lower card replaces each with a total alternative. Get or else supplies a default instead of assuming Some. Lift, on a list, turns indexing into a function that returns an option, so position five gives None instead of an exception. Lift works on any partial function the same way. And is defined at asks a partial function whether it handles an input before you call it. One misunderstanding is worth heading off. An ordinary function type, A arrow B, is not a promise of totality. Its body can still throw. The type describes what goes in and what comes out when it works. Totality is something you build, with Option, Either, and exhaustive matches.",
}
