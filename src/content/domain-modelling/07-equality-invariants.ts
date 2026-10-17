import type { Section } from '../types'

export const equalityInvariants: Section = {
  id: 'equality-invariants',
  title: 'Equality, invariants and mutation boundaries',
  scene: 'equality-memory',
  focus: 'memory',
  slide: `## Equality, invariants and mutation boundaries

Two values can be **equal** without being the **same object**. Which comparison you need depends on the question, and mutation can quietly break both.

### Two kinds of sameness
- \`==\` on case classes compares **fields**: \`Price(500) == Price(500)\`
- \`eq\` compares **identity** — the same object in memory — so it is \`false\`
- A plain class without \`equals\` uses identity for \`==\` as well

### When mutation breaks equality
- A hash set files each element by its **hash at insertion**
- Changing \`b.cents\` moves its hash, so the set **cannot find** \`b\` any more
- Keep equality-relevant fields **immutable** — the boundary for mutation
- Invariants need **enforcement**: a factory or \`require\`, not a case class alone`,
  narration:
    "Two values can be equal without being the same object, and the two questions have different answers. On the left, p one and p two are both prices of five hundred. Double equals on a case class compares fields, so they are equal. Eq asks a different question: are these the very same object in memory? They are not, and the memory card shows the two separate objects. For a plain class that does not define equality, double equals falls back to identity, so two boxes with the same contents compare unequal. Now the dangerous half. Bad is a case class with a var field. One bad value of five hundred goes into a hash set, which files it under the hash of its fields at that moment. Then the program changes its cents to nine hundred. The object is still in the set, but its hash has moved, so asking the set whether it contains b answers false. The element is lost inside the collection. The rule that prevents this is a mutation boundary: fields that take part in equality stay immutable. And remember that a case class by itself enforces no business rules; invariants need a factory or a check.",
}
