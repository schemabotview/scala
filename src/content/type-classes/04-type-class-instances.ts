import type { Section } from '../types'

export const typeClassInstances: Section = {
  id: 'type-class-instances',
  title: 'Type-class interfaces and instances',
  scene: 'typeclass-instances',
  focus: 'derived',
  slide: `## Type-class interfaces and instances

A **type class** is a generic trait describing a capability, plus **instances** for each type that has it. \`Render[A]\` is one: an interface and a given per type.

### The three parts
- The **interface** \`Render[A]\` says what any renderable type can do
- **Instances** for \`Int\` and \`String\` live in the companion, found by default
- An instance for \`List[A]\` is **built from** the element's instance

### What this design buys
- \`show(List(1200, 505))\` asks for \`Render[List[Int]]\`, which needs a \`Render[Int]\`
- The compiler **assembles** the instance from the pieces, at compile time
- New types get instances **without editing** \`Render\` or the existing types
- A type with no instance fails to compile at the call — **not** at run time`,
  narration:
    "The pieces from the last three sections combine into a pattern called a type class. A type class has two parts: a generic trait describing a capability, and instances of that trait for each type that has the capability. Render is one. The interface, render of A, says only that a renderable type can be turned into a string. The companion object holds the instances. Integers render as money. Strings render as themselves. The third instance is the interesting one. It renders a list of any A, provided there is a render of A. It takes that element instance with using, and builds the list instance from it. Watch what happens at the last call. Show of a list of integers asks for a render of list of Int. The compiler finds the list instance, sees that it needs a render of Int, finds that too, and assembles the whole thing at compile time. The result is twelve point zero zero and five point zero five, in brackets. This design is open. A new type gets rendering by adding an instance, without editing the trait or the type. And a type with no instance fails at the call, during compilation, not in production.",
}
