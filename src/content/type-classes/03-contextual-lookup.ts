import type { Section } from '../types'

export const contextualLookup: Section = {
  id: 'contextual-lookup',
  title: 'Contextual lookup and imports',
  scene: 'lookup-scopes',
  focus: 'import',
  slide: `## Contextual lookup and imports

When a \`using\` parameter needs a value, the compiler searches a **small set of places** for a given of that type. Knowing those places explains every *not found* error.

### Where it looks
- The **current scope**: givens defined here, or imported here
- The **companion objects** of the types involved: \`Render\` and \`Order\`
- A given in \`Order\`'s companion is found **without any import**

### Imports and givens
- \`import Formats.*\` brings in ordinary members but **not givens**
- \`import Formats.given\` is required — the import itself **announces** a given
- The error names the **missing type**: \`No given instance of type Render[Int]\`
- Put an instance in a **companion** when it is the natural default for that type`,
  narration:
    "When a call needs a using parameter, the compiler does not search the whole program. It looks in a small set of places, and knowing them explains almost every error about a missing instance. The first place is the current scope: givens defined right here, or imported here. The second is the companion objects of the types involved. In the code on the left, order's companion defines a given render of order. So show of order seventeen works with no import at all, because the compiler looks in order's companion when it needs a render of order. Rendering a plain Int is different. The only render of Int lives in an object called formats, which is neither in scope nor a companion of Int or Render. So the commented call fails, and the error names exactly the type it could not find. Now the import. Scala three's wildcard import, formats dot star, deliberately does not bring givens in. You must write formats dot given. That makes every import of contextual values visible in the source, so a reader can see where an instance came from. When an instance is the natural default for a type, put it in that type's companion.",
}
