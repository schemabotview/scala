import type { Section } from '../types'

export const option: Section = {
  id: 'option',
  title: 'Option and safe access',
  scene: 'option-trace',
  focus: 'flatmap',
  slide: `## Option and safe access

\`Option[A]\` is either \`Some(value)\` or \`None\`. It puts absence **into the type**, so the compiler makes every caller decide what an absent value means.

### Composing optional steps
- A customer **may** have a discount code: \`Option[String]\`
- \`flatMap\` looks the code up only if there **is** one; \`None\` passes straight through
- \`getOrElse(0)\` states the default **once**, at the end of the chain

### What Option cannot say
- Bo has no code; Cy has an **unknown** code — both give \`0\`
- \`None\` means *absent*, and carries **no reason** for being absent
- Use \`Option\` when absence is **normal** and needs no explanation
- When the caller needs to know **why**, the next section uses \`Either\``,
  narration:
    "Some values are simply allowed to be missing. A customer might have a discount code, or might not, and that is not an error. Option puts that fact into the type. An option of string is either Some, holding a string, or None. Because the type says so, every caller has to decide what absence means before it can use the value. The method on the left composes two optional steps. The customer's code is optional. If there is a code, flat map looks it up in the discount table, and that lookup is optional too, because the code might not be in the table. If either step gives None, the None passes straight through to the end, where get or else supplies zero, stated once. Ada's VIP code gives twenty. Bo has no code and gets zero. Cy has a code that is not in the table, and also gets zero. Look at those last two results. They are identical, but the reasons are different, and the option has thrown that difference away. That is exactly right when absence is normal and needs no explanation. When the caller needs to know why something failed, the next section reaches for Either.",
}
