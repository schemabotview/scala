import type { Section } from '../types'

export const mutability: Section = {
  id: 'mutability',
  title: 'Immutable and mutable ownership',
  scene: 'ownership-memory',
  focus: 'memory',
  slide: `## Immutable and mutable ownership

Scala's default collections are **immutable**: operations return new collections. Mutable ones change in place, and then the question is **who else holds** the same object.

### Mutable: one object, many holders
- \`shared += 500\` changes the buffer for **every** name that refers to it
- \`toList\` takes an immutable **snapshot** — later changes do not reach it
- Keep a mutable buffer **local** to one method, and hand out snapshots

### Immutable: new values, shared safely
- \`500 :: owned\` builds a new list **without copying** \`owned\`
- The new list points at the old one — **structural sharing**
- Sharing is safe precisely because neither list **can ever change**
- Import \`scala.collection.mutable\` and write \`mutable.ListBuffer\` so the choice is **visible**`,
  narration:
    "Scala's default collections are immutable. Every operation that seems to change one actually returns a new collection, and the original stays exactly as it was. Mutable collections exist too, and they change in place. The difference becomes visible as soon as two parts of a program hold the same object. In the upper half of the code, shared is a mutable list buffer. Adding five hundred changes that one object, so every name that refers to it, anywhere in the program, now sees three prices. To hand the current contents to someone else safely, the code takes a snapshot with to list, an immutable copy frozen at that moment. The lower half shows the immutable side. Prepending five hundred to owned builds a new list, more, and owned is untouched. Look at the memory card, though. The new list does not copy the old one. It points at it. That is structural sharing, and it is safe for one reason: neither list can ever change. A useful habit follows. Keep mutable buffers local to a single method, return immutable snapshots, and write mutable dot list buffer so the choice is always visible.",
}
