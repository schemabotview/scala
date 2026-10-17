import type { Section } from '../types'

export const sbtBuild: Section = {
  id: 'sbt-build',
  title: 'sbt build and dependency versions',
  scene: 'sbt-build',
  focus: 'suffix',
  slide: `## sbt build and dependency versions

A build definition is **evidence**: it says which compiler, which libraries and which versions produced a result. Read it before trusting a claim about the code.

### Reading the build
- \`ThisBuild / scalaVersion\` sets the compiler for **every** module
- \`"org.scalameta" %% "munit"\` — \`%%\` appends the Scala suffix, fetching \`munit_3\`
- \`% Test\` puts the library on the **test** classpath only, not in the shipped app

### Pinning versions
- The \`x\` and \`y\` here are **placeholders**: a lesson pins a real release
- Record the resolved compiler, JDK, sbt and test library **together**
- A single \`%\` takes the artifact name **literally** — right for Java libraries
- Check a library publishes for **your** Scala version before adding it`,
  narration:
    "A build definition is not just configuration. It is evidence of which compiler, which libraries, and which versions produced a result, so it is worth reading carefully. The first line sets the Scala version for every module in the build. The value on the left is a deliberate placeholder. A real lesson pins an exact patch release and writes it down, and this slide will not pretend to know which release is current when you watch it. The test library version is a placeholder for the same reason. Now the dependency line. The organisation is org dot scalameta, and the library is munit. The double percent sign matters. It appends the Scala binary suffix, so sbt fetches munit underscore three, the build compiled for Scala three. A single percent would take the name literally, which is right for Java libraries that have no suffix. The final percent Test scopes the library to the test classpath, so it never ships inside the application. Source files go under source main scala, tests under source test scala. Before adding any library, check that it actually publishes for your Scala version.",
}
