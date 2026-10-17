import type { Scene } from '@graphlearning/flow'

// §3 — an annotated build.sbt with a pinned test dependency (CT). Versions are deliberate placeholders:
// a lesson pins and records real releases, it does not copy them from a slide.
export const sbtBuild: Scene = {
  id: 'sbt-build',
  title: 'Reading a build definition',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'build.sbt',
      label: `ThisBuild / scalaVersion := "3.3.x"      // pin the resolved patch
val MunitVersion = "1.x.y"                // pin a real release; record it

lazy val domain = project
  .settings(
    libraryDependencies += "org.scalameta" %% "munit" % MunitVersion % Test
  )

// %% adds the Scala binary suffix:  munit  →  munit_3
// domain/src/main/scala/…   domain/src/test/scala/…`,
    },
    {
      id: 'trace',
      label: 'What each part decides',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'suffix', label: '%%', sub: 'adds the _3 suffix', pattern: 'network', icon: 'tag' },
        { id: 'scope', label: '% Test', sub: 'test classpath only', pattern: 'service', icon: 'shieldcheck' },
        { id: 'pinned', label: 'Pinned', sub: 'exact, and written down', pattern: 'storage', icon: 'lock' },
        { id: 'layout', label: 'Layout', sub: 'main and test trees', pattern: 'user', icon: 'folder' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
