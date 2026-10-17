import type { Section } from '../types'

export const typesAndInference: Section = {
  id: 'types-and-inference',
  title: 'Types and inference',
  scene: 'inference-trace',
  focus: 'widened',
  slide: `## Types and inference

Every expression has a type the compiler knows before the program runs. Often you do not write it: the compiler **infers** it from the right-hand side.

### Where a type comes from
- **Inferred** — \`3\` is an \`Int\`, \`1200L\` is a \`Long\`
- **Widened** — \`Int * Long\` converts the \`Int\` first, so the result is a \`Long\`
- **Annotated** — method parameters always carry a written type
- Unsure what was inferred? Ask the REPL with \`:type\`, or **hover** in an editor

### Reading the types you see
- \`Any\` is the top: \`AnyVal\` for numbers and booleans, \`AnyRef\` for objects
- \`Nothing\` is the bottom — the type of an expression that **never returns normally**
- Write the type on a public method's result, so a change inside **cannot change its contract**`,
  narration:
    "Every expression in Scala has a type, and the compiler works it out before anything runs. Most of the time you do not have to write it. Look at the first line on the left. Three is an integer literal, so quantity is inferred as Int. The next line ends with a capital L, which makes it a Long. Multiply the two, and the compiler widens the Int to a Long first, so subtotal is a Long. That widening is safe; the opposite direction would need an explicit conversion. The label line writes its type out, and that is always allowed. Method parameters are different: they must be annotated, because nothing on the right-hand side could tell the compiler what callers will pass. The last line is the strangest. Sys dot error throws, so it never produces a value. Its type is Nothing, the type at the very bottom, and Nothing fits wherever any type is expected. At the top sits Any, split into AnyVal for numbers and booleans, and AnyRef for objects. That is enough of the hierarchy to read every type in this chapter.",
}
