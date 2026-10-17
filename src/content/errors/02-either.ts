import type { Section } from '../types'

export const either: Section = {
  id: 'either',
  title: 'Either and domain errors',
  scene: 'either-trace',
  focus: 'left',
  slide: `## Either and domain errors

\`Either[E, A]\` is \`Right(a)\` for success or \`Left(e)\` for failure. Unlike \`None\`, a \`Left\` **carries the reason**, typed by your own error model.

### A domain error model
- \`ImportError\` is an \`enum\`: each case is one **kind of failure** with its data
- \`parseQty("three")\` returns \`Left(BadNumber(qty,three))\` — **what** failed, and the input
- Callers can **match** on the error cases, and the compiler checks they handle each one

### Working with Either
- \`map\` changes the \`Right\` value and **passes a \`Left\` through** untouched
- \`Right\` is the success side by convention, so \`for\` expressions compose on it
- Prefer a typed error over a \`String\` message, which can only be **read**, not handled
- Keep \`Left\` for expected, **recoverable** input problems — not for bugs`,
  narration:
    "Either is the type for an operation that can fail in a way the caller needs to understand. An either of E and A is Right, holding a successful A, or Left, holding a reason of type E. The left side carries the explanation that None could not. The code on the left defines that reason as a domain error model. Import error is an enum, and each case is one kind of failure, carrying the data that describes it. A missing field names the field. A bad number names the field and the raw text that would not parse. Parse quantity turns raw text into a positive integer. Three becomes Right of three. The word three becomes Left of bad number, with the field name and the offending input, which is everything a report needs. Because the error is a closed enum, a caller can match on its cases, and the compiler will check that every kind is handled. Map works on the right side only. Multiplying by the unit price changes a Right, and would pass a Left through untouched. Prefer typed errors to strings: a string can only be read by a person, while an enum can be handled by code.",
}
