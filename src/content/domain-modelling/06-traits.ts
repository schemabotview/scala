import type { Section } from '../types'

export const traits: Section = {
  id: 'traits',
  title: 'Traits and composition',
  scene: 'trait-dispatch',
  focus: 'dispatch',
  slide: `## Traits and composition

A **trait** declares behaviour that classes can mix in. It can leave members **abstract**, give others a **default**, and several traits can be combined in one class.

### Building the classes
- \`Priced\` requires \`baseCents\` and defaults \`totalCents\` to it
- \`Taxed\` **overrides** \`totalCents\`, calling \`super\` to reuse the default
- \`Subscription\` mixes in both: \`extends Priced, Taxed\`

### Dynamic dispatch
- \`items\` is a \`List[Priced]\`, yet each element answers **as its own class**
- \`_.totalCents\` gives \`1000\` for the one-off and \`1200\` for the subscription
- The **runtime class** chooses the method; the static type only promises it exists
- Prefer small traits combined, over deep **inheritance chains** that are hard to trace`,
  narration:
    "Classes often share behaviour without being the same kind of thing. A trait captures that behaviour so classes can mix it in. Priced, on the left, says that anything priced has base cents, which it leaves abstract, and total cents, which defaults to the base. Taxed builds on it. It overrides total cents, calls super to get the default, and adds twenty percent. Then two classes. A one off item is just priced. A subscription is priced and taxed, which Scala three writes with a comma after extends. Now the last two lines. Items is a list of priced values. Its elements have the static type Priced, and that is all the compiler knows about them. Yet when map asks each one for total cents, the one off answers one thousand and the subscription answers twelve hundred. Each element answers as the class it really is. That is dynamic dispatch: the runtime class chooses which method runs, and the static type only promises that some total cents exists. Prefer several small traits combined like this over a deep inheritance chain, where finding out which method actually runs means reading every level.",
}
