import type { Section } from '../types'

export const validation: Section = {
  id: 'validation',
  title: 'Fail-fast versus accumulating validation',
  scene: 'failfast-vs-accumulate',
  focus: 'all',
  slide: `## Fail-fast versus accumulating validation

When steps **depend** on each other, stopping at the first error is the only option. When fields are **independent**, the user is better served by every error at once.

### The same bad input, two answers
- Fail-fast: the \`for\` reports only \`BadNumber(qty,two)\`
- The price \`-5\` is also invalid, but it is **never checked**
- Fixing one error and resubmitting reveals the next — **one round trip each**

### An accumulating model
- \`both\` checks both fields, then **keeps every \`Left\`** in a \`List\`
- The error type changes to \`List[ImportError]\` — **plural** is now in the signature
- Combine the two: accumulate across fields, fail fast **within** a dependent chain
- Libraries offer this as a type; here the data model stays **explicit and small**`,
  narration:
    "The last section stopped at the first error, and for dependent steps that is the only sensible choice. But not every check depends on another. A quantity and a price can be checked independently, and then stopping early just hides information. The upper card validates a row with a bad quantity and a bad price using the fail-fast for expression. It reports that the quantity is bad and says nothing about the price, because the price was never checked. A person fixing an import file would correct the quantity, resubmit, and only then discover the price problem. One round trip per error. The lower card accumulates instead. Both takes the two independent results. If both are Right, it pairs the values. Otherwise it collects every Left into a list. The same input now reports both problems together. Notice that the error type changed to a list of import errors. The plural is part of the signature, so callers know to expect several. In practice you combine the two styles: accumulate across independent fields, and fail fast within any chain where one step needs the result of another.",
}
