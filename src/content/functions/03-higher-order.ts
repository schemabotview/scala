import type { Section } from '../types'

export const higherOrder: Section = {
  id: 'higher-order',
  title: 'Higher-order functions',
  scene: 'higher-order',
  focus: 'compose',
  slide: `## Higher-order functions

A **higher-order** function takes a function as an argument, returns one, or both. It separates *what to do to each price* from *how to visit the prices*.

### Taking and returning functions
- \`applyAll\` takes a \`rule: Int => Int\` and maps it over the prices
- \`atLeast(500)\` **returns** a rule — a function made from an argument
- Both kinds plug together because their **types line up**

### Composing rules
- \`tenOff andThen atLeast(500)\` runs \`tenOff\` **first**, then feeds its result on
- Applied to \`450\`: \`405\`, then raised to the minimum, **500**
- Reverse the order and the minimum is applied first: the result is **450**
- \`compose\` is the same idea **right to left** — pick one and stay consistent`,
  narration:
    "A higher-order function is one that takes a function, returns a function, or does both. The code on the left has one of each. Apply all takes a list of prices and a rule, a function from Int to Int, and maps the rule over the list. It knows nothing about discounts. It only knows how to visit each price. Ten off is a rule that removes ten percent, so applying it to twelve hundred and four fifty gives ten eighty and four oh five. At least is different: it is a method that returns a rule. At least five hundred is a function that raises any price below five hundred up to five hundred. Because both are functions from Int to Int, they plug into apply all in exactly the same way. The last line composes them. Ten off and then at least five hundred runs ten off first and feeds its result into the minimum. Starting from four fifty, ten off gives four oh five, and the minimum lifts it to five hundred. Run them the other way round, and the minimum does nothing, then ten percent comes off, giving four fifty. With composition, order is part of the meaning.",
}
