import type { Section } from '../types'

export const extensionMethods: Section = {
  id: 'extension-methods',
  title: 'Extension methods',
  scene: 'extension-trace',
  focus: 'function',
  slide: `## Extension methods

An **extension method** adds method-call syntax to a type you do not own. \`4205.asMoney\` reads like a method on \`Int\`, but \`Int\` itself is unchanged.

### How it works
- \`extension (cents: Int)\` names the **receiver** — the value before the dot
- Each \`def\` inside becomes callable as \`cents.method(…)\`
- The compiler rewrites the call to an **ordinary function call**: \`asMoney(4205)\`

### Using them well
- Calls chain left to right: \`1000.withTax(20).asMoney\` gives \`"12.00"\`
- An extension is visible only where it is **defined or imported**
- It cannot add fields or override existing methods — a real method **always wins**
- Group a domain's extensions in one object so the import **says where they come from**`,
  narration:
    "This chapter is about capabilities that the compiler can supply, and it starts with the simplest one: syntax. An extension method adds method-call syntax to a type you did not write. The code on the left extends Int with two methods. Extension, followed by cents of type Int in parentheses, names the receiver, the value that will appear before the dot. Inside are two ordinary definitions. As money formats cents as currency text, with the remainder padded to two digits. With tax adds a percentage. Now the calls read naturally. Four two oh five dot as money gives forty two point zero five. One thousand with tax twenty, then as money, gives twelve point zero zero, and the calls chain from left to right. Int itself has not changed at all. The last line shows what the compiler actually calls: plain functions, with the receiver passed as an argument. That explains the rules. An extension is visible only where it is defined or imported. It cannot add fields, and if the type already has a real method with the same name, the real one wins. Keep a domain's extensions together in one object, so that every import says where they come from.",
}
