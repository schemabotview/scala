import type { Section } from '../types'

export const valuesAndScope: Section = {
  id: 'values-and-scope',
  title: 'Values, variables and scope',
  scene: 'binding-memory',
  focus: 'memory',
  slide: `## Values, variables and scope

A name is **bound** to a value. \`val\` fixes that binding; \`var\` lets it change. Neither says whether the object behind the name can change.

### Bindings
- \`val prices\` can never point anywhere else — reassigning it is a **compile error**
- \`var count\` can be re-bound, so its value depends on **when you read it**
- Prefer \`val\`; reach for \`var\` only when a value **really must change**

### Objects and scope
- A \`val\` holding an \`ArrayBuffer\` still lets \`+=\` **change the buffer** itself
- **Shallow, not deep**: a fixed name does not make the object immutable
- An inner name **shadows** an outer one with the same name — legal, but easy to misread
- A name declared in a block is visible **only inside that block** and its nested blocks`,
  narration:
    "Every value in a Scala program is reached through a name, and the first decision about a name is whether its binding may change. The code on the left makes one of each. Prices is a val, so it is bound once and can never point anywhere else; the commented last line, which tries to reassign it, would be rejected by the compiler. Count is a var, so the line count equals count plus one re-binds it from two to three. Now look at the memory card. The val's arrow to object number one never moved, yet the object itself grew from two prices to three, because plus equals on an array buffer changes the buffer in place. That is the distinction to hold onto. Val makes the name fixed. It says nothing about the object behind it. Immutability of the object comes from choosing an immutable type, which the next chapters lean on heavily. Finally, every name has a scope. A name declared inside a block exists only inside that block, so the same name can be reused elsewhere without collision.",
}
