import type { Section } from '../types'

export const currying: Section = {
  id: 'currying',
  title: 'Multiple parameter lists and currying',
  scene: 'currying',
  focus: 'partial',
  slide: `## Multiple parameter lists and currying

Sometimes one argument is known **early** and the other only later. Scala gives three ways to supply them in stages; each fixes the tax rate once and reuses it.

### Parameter lists and currying
- \`price(rate: Int)(cents: Int)\` has **two parameter lists**
- \`price(20)\` supplies the first and leaves an \`Int => Int\` waiting for cents
- A **curried** function \`Int => Int => Int\` takes one argument per arrow

### Partial application
- \`plain(20, _)\` fixes \`rate\` and leaves the \`_\` as the **missing parameter**
- All three produce the same \`Int => Int\`, so each plugs into \`map\`
- Use parameter lists when one argument **configures** the rest
- Prefer a plain call when nothing is reused — staging adds **reading cost**`,
  narration:
    "Often one argument is known early, and another only arrives later. A tax rate is set once; prices arrive one at a time. Scala offers three ways to supply arguments in stages, and the cards on the left show them side by side. The first method has two parameter lists: rate in the first, cents in the second. Writing price of twenty supplies only the first list, and what comes back is a function from Int to Int, still waiting for the cents. That is why it can be handed straight to map, which applies it to each price, giving twelve hundred and six hundred. The second card writes the same idea as a curried function value. Its type, Int arrow Int arrow Int, reads as a function that takes a rate and returns a function that takes cents. The third form starts from an ordinary method with two parameters and fixes the rate with an underscore, which marks the parameter still missing. All three end in the same kind of value. Choose parameter lists when one argument genuinely configures the rest, and keep plain calls when nothing is reused.",
}
