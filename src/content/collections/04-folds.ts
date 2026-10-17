import type { Section } from '../types'

export const folds: Section = {
  id: 'folds',
  title: 'Folds and aggregation',
  scene: 'fold-trace',
  focus: 'initial',
  slide: `## Folds and aggregation

A **fold** walks a collection once, carrying an **accumulator**. Each step combines the accumulator with the next element, and the final accumulator is the answer.

### The two parts
- An **initial value**: \`0\` for a sum, which is also the answer for an empty list
- A **step** \`(acc, x) => next\`: here \`_ + _\`, so the totals sum to **8900**
- \`foldLeft\` goes left to right; order matters when the step is **not symmetric**

### Choosing safely
- \`reduce\` has no initial value, so an empty list **throws**
- Prefer \`foldLeft\`, or \`reduceOption\`, which returns \`None\` when empty
- The accumulator can be **any type**: a pair counts and sums in one pass
- \`sum\`, \`max\`, \`groupMapReduce\` are named folds — use them when they **fit**`,
  narration:
    "A fold is the general way to turn a collection into a single answer. It walks the collection once, from the left, carrying an accumulator, and at each element it combines the accumulator with that element to make the next accumulator. Whatever is left at the end is the result. A fold needs two things. The first is an initial value. For a sum, that is zero, and look at the second line: zero is also the answer when the list is empty. The initial value is your decision about the empty case, made explicitly. The second is a step function. Here it is underscore plus underscore, so the totals add up to eight thousand nine hundred. Reduce looks similar, but it has no initial value. It starts from the first element, so on an empty list there is nothing to start from, and it throws. Prefer fold left, or reduce option, which returns None. The accumulator does not have to match the element type. The last fold carries a pair, a count and a sum, and computes both in one pass. And remember that sum, max, and group map reduce are folds with names. Use the named one when it fits.",
}
