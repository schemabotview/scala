import type { Section } from '../types'

export const contextBounds: Section = {
  id: 'context-bounds',
  title: 'Context bounds and generic algorithms',
  scene: 'context-bounds',
  focus: 'ordering',
  slide: `## Context bounds and generic algorithms

A **context bound** \`[A: Render]\` is shorthand for a \`using Render[A]\` parameter. It reads as *any \`A\` that can be rendered*, and keeps generic signatures short.

### Writing with context bounds
- \`show[A: Render]\` declares the need; \`summon[Render[A]]\` **fetches** the instance
- \`report\` passes the requirement on by declaring the **same bound**
- \`report("Totals", List(1200, 505))\` works for any type with a \`Render\`

### A type class you already use
- \`sorted\` takes a \`using Ordering[A]\`; \`Int\` has one, so it **just works**
- \`Gift\` has no \`Ordering\`, so \`sorted\` is **rejected at compile time**
- \`sortBy(_.totalCents)\` reuses the \`Ordering[Int]\` — often the **simplest fix**
- Define an \`Ordering[Gift]\` only when gifts have **one obvious** order`,
  narration:
    "Writing using render of A on every generic method gets repetitive, so Scala has a shorthand called a context bound. A colon Render inside the type parameter list means exactly the same as a using parameter of type render of A. Read it as: any A that can be rendered. Show, on the left, declares the bound and then fetches the instance with summon, which retrieves a given by its type. Report is a generic algorithm built on top. It needs to show each item, so it declares the same bound, and the requirement passes along to its callers. Report of a title and two totals produces three lines. You have in fact been using a type class since chapter five. Sorted needs a using ordering of A. Integers have an ordering, so sorting prices simply works. A list of gifts has no ordering, because there is no single obvious way to order gifts, so sorted is rejected at compile time. The simplest fix is usually sort by, with a key that already has an ordering, like the total in cents. Define an ordering of gift itself only when gifts really do have one natural order.",
}
