import type { Section } from '../types'

export const bounds: Section = {
  id: 'bounds',
  title: 'Bounds and constraints',
  scene: 'bound-trace',
  focus: 'kept',
  slide: `## Bounds and constraints

An **upper bound** \`A <: Priced\` restricts which types \`A\` may be. In return, code inside can use everything \`Priced\` promises — here, \`totalCents\`.

### What the bound permits
- \`_.totalCents\` compiles because every \`A\` **is a** \`Priced\`
- Without the bound, \`A\` could be anything, and the call would be **rejected**
- \`List("tea")\` is refused at the call site: \`String\` is **not** \`Priced\`

### What the bound preserves
- \`mostExpensive\` returns \`Option[A]\`, so a list of \`Gift\` gives back an \`Option[Gift]\`
- A parameter typed \`List[Priced]\` would return only \`Option[Priced]\` — the caller's **precise type is lost**
- Use a bound when the result must **keep** the caller's type
- Use a plain \`Priced\` parameter when it **need not**: simpler to read`,
  narration:
    "A completely unconstrained type parameter is safe, but it also cannot do much. A bound changes that trade. Most expensive, on the left, declares A with an upper bound: A must be a Priced. Inside the method, that bound is what makes underscore dot total cents legal. Every A is guaranteed to be a Priced, and every Priced has total cents. Without the bound, A could be String or Int, and the compiler would reject the call. The bound also works at the call site. Passing a list of strings is refused, because a String is not a Priced. Now the less obvious benefit. The result type is option of A, not option of Priced. Give it a list of gifts, and you get back an option of Gift, still a Gift, with its name available. Compare that with a simpler signature taking a list of Priced. That version would work for the same inputs, but it would return only an option of Priced, and the caller would have lost the knowledge that it was a gift. So the rule of thumb is: use a bound when the result must keep the caller's precise type. When it does not, a plain parameter is simpler to read.",
}
