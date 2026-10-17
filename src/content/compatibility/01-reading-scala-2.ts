import type { Section } from '../types'

export const readingScala2: Section = {
  id: 'reading-scala-2',
  title: 'Reading Scala 2 code',
  scene: 'scala2-vs-scala3',
  focus: 'given',
  slide: `## Reading Scala 2 code

Much existing Scala is Scala 2. You do not need to write it, but you must **read** it — and almost all of it maps onto ideas this course already taught.

### One keyword, three jobs
- \`implicit val\` is a **given** instance: the default \`Render[Int]\`
- \`implicit class … extends AnyVal\` is an **extension method**
- \`(implicit r: Render[A])\` is a **using** parameter

### Other differences you will see
- **Braces** everywhere, and \`_\` where Scala 3 writes \`*\` in imports
- Reading for **intent** is reliable; converting a codebase is a separate project
- The Scala 3 compiler can **rewrite** some syntax, but not every library or macro
- Scala 3 can still use most Scala 2.13 **libraries** — the next section checks how`,
  narration:
    "A great deal of the Scala you will meet was written in Scala two. You do not need to write it, but you do need to read it, and the good news is that almost all of it maps onto ideas this course has already covered. The upper card is a Scala two version of the reporting code from chapter eight. The striking thing is one keyword, implicit, doing three different jobs. Implicit val declares a given instance, the default render for integers. Implicit class, extending any val, declares an extension method: as money on an Int. And an implicit parameter list is a using parameter, filled by the compiler from the instances in scope. Scala three gave each job its own keyword, given, extension, and using, which is why the lower card says the same thing more plainly. The other differences are mostly surface: braces throughout, and an underscore where Scala three writes a star in wildcard imports. Read Scala two for its intent, and you will rarely go wrong. Converting a whole codebase is a separate project, though. The compiler can rewrite some syntax, but not every library or macro survives the move unchanged.",
}
