import type { Section } from '../types'

export const choosingCollections: Section = {
  id: 'choosing-collections',
  title: 'Sequence, set and map choices',
  scene: 'collection-choice',
  focus: 'table',
  slide: `## Sequence, set and map choices

Choose a collection by the **question you will ask it**. The same three order lines become a sequence, a set or a map, and each answers a different question well.

### Three shapes
- A **\`Seq\`** keeps order and duplicates: \`TEA-01\` appears twice in \`lines\`
- A **\`Set\`** answers *is it there?* — duplicates collapse to one entry
- A **\`Map\`** answers *what is stored under this key?*: \`TEA-01 -> 3\`

### Reading the results
- \`groupMapReduce\` groups by key, maps each element, then **combines** per key
- \`qty.get("CUP-03")\` returns \`None\` instead of throwing — absence is a **value**
- Plain \`Set\` and \`Map\` promise **no iteration order**; sort explicitly when it matters
- \`SortedMap\` keeps keys ordered by an \`Ordering\` you can **name and test**`,
  narration:
    "Scala's collection library is large, and the way to choose from it is to start with the question you will ask. The three order lines on the left are a list, a sequence. A sequence keeps order and keeps duplicates, so the tea appears twice, once per line. Turn the product codes into a set, and the duplicate collapses. A set answers one question very well: is this element present? The next line builds a map. Group map reduce groups the lines by product code, maps each line to its quantity, and then combines the quantities for each code with plus. The result maps tea to three and mug to one. A map answers: what is stored under this key? Asking for a key that is not there, cup zero three, returns None rather than throwing, so absence arrives as a value the caller must handle. The table summarises the choice. One caution belongs with it. A plain set or map makes no promise about iteration order, even when small ones happen to look ordered. When order matters to a report, sort explicitly, or use a sorted map, whose order comes from an ordering you can name and test.",
}
