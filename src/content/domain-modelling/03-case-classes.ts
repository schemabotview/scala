import type { Section } from '../types'

export const caseClasses: Section = {
  id: 'case-classes',
  title: 'Case classes and copying',
  scene: 'copy-memory',
  focus: 'memory',
  slide: `## Case classes and copying

A **case class** is a class for immutable data. The compiler adds public fields, a constructor without \`new\`, field-by-field equality, a readable \`toString\` and \`copy\`.

### What copy does
- \`a.copy(id = 18)\` builds a **new** \`Order\` with one field changed
- Every other field is copied **by reference**, not duplicated
- Shared \`List\` lines are safe: an immutable list **cannot change**

### Where copy goes wrong
- The \`ArrayBuffer\` of tags is shared, so \`b.tags += "rush"\` **changes \`a\` too**
- Keep case-class fields **immutable** and sharing stops mattering
- \`copy\` skips any factory, so it can build a value your **checks would reject**
- A \`private\` constructor makes Scala 3 hide \`apply\` and \`copy\` as well`,
  narration:
    "Most domain data is plain data: an order, a line, a price. Case classes are made for it. Mark a class as a case class, and the compiler adds public fields, construction without new, equality that compares fields, a readable to string, and a method called copy. Copy builds a new value with some fields changed and the rest kept. On the left, b is a copy of a with the id changed to eighteen. The memory card shows what keeping the rest means. Order two is a new object, but its lines and its tags are not new. They are the very same objects that order one points to. Copy copies references. For the list of lines that is perfectly safe, because an immutable list can never change underneath either order. The tags are a mutable array buffer, though, so adding rush through b changes what a sees. Nothing in the code mentioned a. The cure is to keep case class fields immutable, and then sharing stops mattering. One more caution: copy bypasses any validating factory. Making the constructor private makes Scala three hide apply and copy too.",
}
