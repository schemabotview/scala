import type { Section } from '../types'

export const ambiguity: Section = {
  id: 'ambiguity',
  title: 'Ambiguity, conversions and API trade-offs',
  scene: 'ambiguity',
  focus: 'ambiguous',
  slide: `## Ambiguity, conversions and API trade-offs

Contextual abstraction removes noise from call sites. It also hides **which** value was used, so the design question is how much to hide.

### When two givens match
- Importing both \`Plain.given\` and \`Money.given\` gives two \`Render[Int]\`s
- Neither is more specific, so the compiler reports them as **ambiguous**
- Resolve it by **passing one** explicitly, or by importing only the one you mean

### Conversions and trade-offs
- A \`Conversion[String, Int]\` makes \`"4x"\` silently become a call that **throws**
- Scala 3 requires a **feature import** to use one — a deliberate warning sign
- Prefer an explicit \`.toIntOption\` the reader can **see**
- Use givens for genuine capabilities with one sensible instance per **type**`,
  narration:
    "Contextual abstraction removes noise from call sites, and in exchange it hides which value was actually used. This last section is about the cost side of that trade. The code on the left defines two renders for integers, a plain one and a money one, in two objects. Importing both brings two equally good candidates into scope. Neither is more specific than the other, so the compiler refuses to pick and reports them as ambiguous, naming both. That is a good outcome: the problem appears at compile time, with names. Resolve it by passing the one you mean, with using money dot money, or by importing only that one. The final line is the kind of contextual feature to avoid. A given conversion from string to Int would let a string appear wherever an Int is expected, and the compiler would quietly insert a call to to Int. With text like four x, that hidden call throws at run time, and the source shows no call at all. Scala three makes conversions require a feature import, precisely as a warning. Prefer the explicit to int option. Use givens for genuine capabilities, where each type has one sensible instance.",
}
