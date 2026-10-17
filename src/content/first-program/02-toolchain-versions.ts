import type { Section } from '../types'

export const toolchainVersions: Section = {
  id: 'toolchain-versions',
  title: 'Toolchain and version evidence',
  scene: 'toolchain-pins',
  focus: 'compiler',
  slide: `## Toolchain and version evidence

Three tools are in play: the **runner**, the **compiler** and the **JDK**. Each has a version, and a lesson is only repeatable when all three are recorded.

### Pin, then report
- **\`//> using\`** directives pin the Scala line and the JDK inside the project itself
- \`scala version\` and \`java -version\` report what is **actually installed**
- A partial pin like \`3.3\` resolves to a patch — record the one you got

### Downloads are code you run
- The first run **fetches** a compiler, libraries and possibly a JDK
- Course code is reviewed; an arbitrary script from the web is **not**
- Downloads land in a **cache**, so later runs start faster and can work offline
- Read a script before running it, the same as any program`,
  narration:
    "Before running anything, it is worth knowing which tools are involved, because each one has a version and each version can change what you see. The runner is the scala command, which since Scala three point five is Scala CLI. The compiler is chosen by the project, not by whatever happens to be installed. The JDK is the Java runtime underneath both. The file on the left pins two of these with using directives: the Scala three point three line, and JDK twenty one. A pin like three point three is a line, not a release, so Scala CLI resolves it to a specific patch, and that resolved number is what belongs in your notes. Then two commands report the truth of your machine: scala version, and java dash version. Answer version questions from that evidence, never from memory. One more thing happens on a first run. The runner downloads a compiler, libraries, and sometimes a whole JDK. That is code arriving on your machine, so treat a script from the internet the way you would treat any program: read it before you run it.",
}
