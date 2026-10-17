import type { Scene } from '@graphlearning/flow'

// §2 — where version evidence comes from (CT): the directives that pin a run, the commands that report
// what is actually installed, and the four things a lesson records.
export const toolchainPins: Scene = {
  id: 'toolchain-pins',
  title: 'Pinned and reported versions',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'project.scala',
      label: `//> using scala 3.3   // language line; resolves a 3.3.x patch
//> using jvm 21       // the JDK this project runs on

// Report what is really installed:
//   $ scala version   → runner + default Scala version
//   $ java -version   → the JDK on your PATH
//   $ scala run .     → compiles with the pins above`,
    },
    {
      id: 'evidence',
      label: 'Record beside every lesson',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'runner', label: 'Runner', sub: 'scala is Scala CLI since 3.5', pattern: 'service', icon: 'terminal' },
        { id: 'compiler', label: 'Compiler', sub: 'the resolved patch, not 3.3', pattern: 'service', icon: 'gears' },
        { id: 'jdk', label: 'JDK', sub: 'from java -version', pattern: 'network', icon: 'cpu' },
        { id: 'deps', label: 'Dependencies', sub: 'fetched on first run', pattern: 'storage', icon: 'boxes' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'evidence', label: 'evidence, not memory' }],
}
