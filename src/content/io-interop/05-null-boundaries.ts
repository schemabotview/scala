import type { Section } from '../types'

export const nullBoundaries: Section = {
  id: 'null-boundaries',
  title: 'null and collection conversion boundaries',
  scene: 'null-boundary',
  focus: 'wrapper',
  slide: `## null and collection conversion boundaries

Java APIs signal absence with **\`null\`** and hand back **mutable Java collections**. Both need one deliberate decision at the boundary, so they never leak inward.

### Absence: null into Option
- \`getProperty\` returns \`null\` for a missing key; calling \`.length\` on it **throws**
- \`Option(x)\` turns \`null\` into \`None\` and anything else into \`Some\`
- Scala's type \`String\` does **not** exclude \`null\` by default

### Collections: wrapper or copy
- \`asScala\` wraps the Java list — later Java-side changes **show through**
- \`asScala.toList\` copies into an immutable list you **own**
- Explicit-nulls is an **optional** compiler mode that types Java returns as \`String | Null\`
- Even with it, Java code can still return \`null\` where its **signature** did not say so`,
  narration:
    "Java and Scala disagree about two everyday things: how to say a value is absent, and what a collection is. The boundary is where you reconcile them. The upper card reads a property from a Java properties object. When the key is missing, get property returns null. The value is declared as a String, the compiler accepts it, and calling length on it throws a null pointer exception. Scala's String type does not rule out null by default. The lower card guards the boundary. Option applied to a value turns null into None and anything else into Some, so the missing region becomes None, and get or else supplies a default. Wrap every nullable Java return like that, once, where it enters. Collections need a similar decision. The converters turn a Java list into something Scala can use, but as Scala gives you a wrapper over the same Java list, so later changes on the Java side show through. Adding to list makes an immutable copy you own. Scala three also offers an optional explicit nulls mode, which types such returns as String or Null. It helps, but Java can still return null where its own signature never said so.",
}
