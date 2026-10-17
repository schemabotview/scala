import type { Section } from '../types'

export const compatibilityKinds: Section = {
  id: 'compatibility-kinds',
  title: 'Source, binary and dependency compatibility',
  scene: 'compatibility-table',
  focus: 'table',
  slide: `## Source, binary and dependency compatibility

*Is it compatible?* is really **several questions**, each with its own evidence. A yes to one says nothing about the others.

### Source and binary
- **Source**: does this code compile with **this** compiler? Only compiling it answers that
- **Binary**: can compiled classes be **linked** together? The artifact suffix tells you
- \`for3Use2_13\` lets Scala 3 use a \`_2.13\` artifact — check the library **supports** that

### Runtime and dependencies
- **JDK**: classes compiled for a newer JDK **will not load** on an older one
- **Dependencies**: two libraries may require different versions; \`evicted\` shows the winner
- An evicted version can fail at **run time**, long after a clean compile
- Record the evidence **with** the claim: versions, command, date checked`,
  narration:
    "Is this library compatible is not one question. It is several, each with its own evidence, and a yes to one of them says nothing about the others. The table on the left lists them. Source compatibility asks whether this code compiles with this compiler. The only reliable evidence is compiling it. Binary compatibility asks whether already compiled classes can be linked together. For Scala libraries, the artifact suffix tells you which compiler built them: underscore three, or underscore two thirteen. Scala three can use many two thirteen artifacts, and the build line with cross version for three use two thirteen asks for exactly that. Whether a particular library supports it is something to check, not assume. The JDK question is separate again. Classes compiled for a newer JDK will not load on an older one. Then dependencies. Two of your libraries may require different versions of a third. The build picks one, and sbt evicted shows which version won each conflict. An evicted version can compile cleanly and still fail at run time. And there is maintenance: is anyone still releasing it? Whatever you conclude, record the evidence with the claim: the versions, the command, and the date you checked.",
}
