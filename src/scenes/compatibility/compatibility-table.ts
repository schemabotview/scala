import type { Scene } from '@graphlearning/flow'

// §2 — four compatibility questions and the evidence for each (TB). Versions are placeholders.
export const compatibilityTable: Scene = {
  id: 'compatibility-table',
  title: 'Four questions, four kinds of evidence',
  flow: 'TB',
  padding: 0.04, // a wide, short board: let it float to the edges
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'build.sbt',
      label: `scalaVersion := "3.3.x"                     // source: what compiles
libraryDependencies += "org.scalameta" %% "munit" % "1.x.y" % Test
                                            // binary: resolves munit_3
libraryDependencies += ("org.example" %% "legacy" % "2.x")
  .cross(CrossVersion.for3Use2_13)          // a _2.13 jar from Scala 3

// $ sbt evicted       which version won each conflict`,
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Ask each question separately',
      headers: ['Question', 'Evidence'],
      values: [
        ['Does the source compile?', 'the compiler version, run it'],
        ['Can I link this library?', 'its artifact suffix: _3, _2.13'],
        ['Does it run on this JDK?', 'the bytecode target, the JDK'],
        ['Do dependencies agree?', 'the resolved tree, evictions'],
        ['Is it still maintained?', 'release dates, open issues'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'table' }],
}
