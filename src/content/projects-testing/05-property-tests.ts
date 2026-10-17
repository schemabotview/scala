import type { Section } from '../types'

export const propertyTests: Section = {
  id: 'property-tests',
  title: 'Property-based reasoning and generators',
  scene: 'property-tests',
  focus: 'restated',
  slide: `## Property-based reasoning and generators

A **property** is a statement that should hold for every input. A **generator** produces many inputs and the test checks the statement against each one.

### A property worth having
- *Reordering the lines does not change the total* — a **fact about orders**
- The generator's ranges, \`1–99\` and \`1–100000\`, **are** the arithmetic assumptions
- Widen them and the total can **overflow** \`Int\` — the property would then fail

### A property that proves nothing
- \`totalOf(lines) == lines.map(q * p).sum\` copies the **implementation**
- If the formula itself is wrong, both sides are wrong **together**, and it passes
- Generated inputs are **samples**, not proof — a pass means no counterexample was found
- On failure, the library **shrinks** the input to a small counterexample`,
  narration:
    "A property-based test states something that should be true for every input, and then checks it against many generated inputs. The upper card states a fact about orders: reversing the order of the lines must not change the total. That is not a restatement of how the total is computed. It is a separate truth about the domain, and code that broke it would be wrong. Look at the generator. Quantities run from one to ninety nine, and prices from one to a hundred thousand. Those ranges are the arithmetic assumptions from chapter two, written down where they can be checked. Widen them carelessly, and the total can overflow Int, and the property starts failing. That is a good thing: it is telling you the assumption matters. The lower card is a property that proves nothing. It compares the total with the sum of quantity times price, which is exactly what the implementation does. If the formula were wrong, both sides would be wrong together, and the test would still pass. And remember what a passing property means: no counterexample was found among the samples tried. When one is found, the library shrinks it to the smallest failing input.",
}
