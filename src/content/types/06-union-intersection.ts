import type { Section } from '../types'

export const unionIntersection: Section = {
  id: 'union-intersection',
  title: 'Union and intersection types',
  scene: 'union-intersection',
  focus: 'eliminate',
  slide: `## Union and intersection types

A **union** \`A | B\` is a value of either type. An **intersection** \`A & B\` is a value of both at once. Each is read through what you may do with it.

### Unions are eliminated by matching
- \`describe\` accepts an \`Int\` **or** a \`String\` and nothing else
- Each \`case\` handles one side; together they **cover** the union
- Prefer an \`enum\` when the alternatives are **domain concepts** with names

### Intersections combine requirements
- \`label\` needs something that is **both** \`Priced\` and \`Named\`
- \`Gift\` extends both traits, so it qualifies; a type with only one **does not**
- Type arguments are **erased** at run time: \`case xs: List[Int]\` cannot tell a \`List[String]\` apart
- A cast does not check a generic type either — it only **postpones** the failure`,
  narration:
    "Scala three can combine types in two directions. A union, written with a bar, is a value of one type or another. An intersection, written with an ampersand, is a value of both at once. Describe, on the left, takes a key that is an Int or a String. Inside, you cannot use it as either until you find out which, and the match does exactly that. The first case handles the Int side and the second the String side, so together they cover the union, and passing a Double is rejected at the call. For alternatives that are real domain concepts, an enum with named cases is usually clearer. Unions shine for small, local either-or inputs like this one. Label goes the other way. It needs a value that is both priced and named, so it can use the name and the total together. Gift extends both traits, so it qualifies; something with only one of them would not. One warning belongs with matching on types. Type arguments are erased at run time, so a case for a list of Int cannot distinguish it from a list of String. Casts have the same blind spot. They only postpone the failure.",
}
