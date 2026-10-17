import type { Section } from '../types'

export const generics: Section = {
  id: 'generics',
  title: 'Generic classes and methods',
  scene: 'generic-trace',
  focus: 'widened',
  slide: `## Generic classes and methods

A **type parameter** like \`[A]\` lets one definition work for many element types while keeping each use precise. The compiler fills in \`A\` at every call.

### Writing generic code
- \`Checked[A]\` wraps any value with warnings; \`map\` turns a \`Checked[A]\` into a \`Checked[B]\`
- \`firstOr[A]\` needs **nothing** about \`A\`, so it works for any element type
- The code inside cannot assume \`A\` is a number or a string — only what the **signature** says

### Reading inference at the call
- \`firstOr(List("TEA-01"), "NONE")\` infers \`A = String\` from **both** arguments
- Mix an \`Int\` list with a \`String\` default and \`A\` **widens** to a common supertype
- That compiles, but the result has lost its useful type — usually a **mistake**
- Writing \`[Int]\` explicitly turns the silent widening into a **compile error**`,
  narration:
    "Chapter five used List of Int and List of String without asking how one list type can hold any element. The answer is a type parameter. Checked, on the left, wraps a value of some type A together with a list of warnings. Its map method takes a function from A to B and produces a checked B, keeping the warnings. Mapping a checked twelve hundred with times two gives a checked Int of twenty four hundred. First or is a generic method: it takes a list of A and a default of the same A, and returns the head or the default. Notice what its body can do with A, which is almost nothing. It cannot add to it or print its length, because the signature promises nothing about A. That restriction is what makes it safe for every type. At each call, the compiler infers A from the arguments. A list of strings with a string default gives A equals String. Now the third call: a list of Ints with a string default. That still compiles, because A widens to a common supertype of both, and the result has lost its useful type. Supplying Int explicitly turns that silent widening into a clear compile error.",
}
