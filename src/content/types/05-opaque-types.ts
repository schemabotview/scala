import type { Section } from '../types'

export const opaqueTypes: Section = {
  id: 'opaque-types',
  title: 'Aliases and opaque domain types',
  scene: 'alias-vs-opaque',
  focus: 'new',
  slide: `## Aliases and opaque domain types

Order ids and customer ids are both integers, and confusing them is a **real bug**. A type alias does not prevent it; an **opaque type** does, at no runtime cost.

### Alias versus opaque
- \`type OrderId = Int\` is only a **second name**: the arguments swap silently
- \`opaque type OrderId = Int\` is a **distinct type** outside its defining scope
- Inside \`Ids\`, it is still an \`Int\` — no wrapper object, **no allocation**

### Two separate decisions
- **Representation**: callers cannot see that an \`OrderId\` is an \`Int\`
- **Validation**: \`from\` rejects non-positive numbers and returns an \`Option\`
- Opaque does not validate anything by itself — only the **constructors you write** do
- Give each id its own opaque type, and the swapped call **will not compile**`,
  narration:
    "Order ids and customer ids are both integers, and passing one where the other belongs is a genuine, common bug. The upper card shows why a type alias does not help. Order id and customer id are aliases, second names for Int. The lookup method asks for an order id first, and the call passes them the other way round. It compiles without complaint, because both are simply Int. The lower card defines order id as an opaque type inside an object called Ids. Inside that object, an order id really is an Int, so there is no wrapper and no extra allocation at run time. Outside, it is a completely distinct type. Code there cannot treat an order id as an Int, which is the commented error, and could not pass a customer id in its place. Two decisions are worth keeping apart. One is representation: callers cannot see the Int. The other is validation. Here, from rejects zero and negative numbers and returns an option. An opaque type validates nothing on its own. The guarantee comes from the constructors you choose to provide. Give every id its own opaque type, and the swapped call stops compiling.",
}
