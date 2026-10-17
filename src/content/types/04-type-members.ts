import type { Section } from '../types'

export const typeMembers: Section = {
  id: 'type-members',
  title: 'Abstract type members',
  scene: 'param-vs-member',
  focus: 'signature',
  slide: `## Abstract type members

A type can be a **member** of a trait, like a method: declared abstract and fixed by each implementation. It expresses the same contract as a type parameter, seen from a different side.

### The same parser, twice
- \`Parser[A]\` puts the result type **in the name**: \`Parser[Int]\`
- \`Parser\` with \`type Out\` puts it **inside**, chosen by \`QtyParser\`
- Both promise \`parse\` returns an \`Either[ImportError, …]\` of that type

### Choosing between them
- A parameter is visible at **every use**: \`List[Parser[Int]]\` reads clearly
- A member suits a type that callers rarely need to **name**
- Members can make signatures **harder to read** when they leak into method types
- Start with a type parameter; move to a member only for a **concrete reason**`,
  narration:
    "There are two ways to leave a type open in a trait, and they express the same contract from different sides. The upper card uses a type parameter. A parser of A promises that parse returns either an import error or an A. The quantity parser extends parser of Int, so the result type appears in its very name. The lower card uses an abstract type member instead. The trait declares a type called Out, without saying what it is, and parse returns either an error or an Out. The quantity parser then fixes Out to be Int inside its own body. Both versions compile, and both describe a parser of integers. The difference is who sees the type, and where. With the parameter, every use names it. A list of parsers of Int is completely clear at a glance. With the member, the type is tucked inside the implementation, which suits types that callers rarely need to mention. It can also make signatures harder to read when the member leaks into other method types. The recommendation for this course is simple. Start with a type parameter, and reach for a type member only when you have a concrete reason.",
}
