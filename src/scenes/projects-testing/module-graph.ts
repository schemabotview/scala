import type { Scene } from '@graphlearning/flow'

// §2 — sbt subprojects and their dependency direction (PS): the build lines, then the graph they make.
export const moduleGraph: Scene = {
  id: 'module-graph',
  title: 'Modules and the direction of dependencies',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'build.sbt',
      label: `lazy val domain  = project
lazy val parsing = project.dependsOn(domain)
lazy val report  = project.dependsOn(domain)
lazy val app     = project.dependsOn(parsing, report)`,
    },
    { id: 'app', label: 'app', sub: '@main and the wiring', pattern: 'user', icon: 'terminal' },
    { id: 'parsing', label: 'parsing', sub: 'text into domain values', pattern: 'service', icon: 'scissors' },
    { id: 'report', label: 'report', sub: 'domain values into text', pattern: 'service', icon: 'scroll' },
    { id: 'domain', label: 'domain', sub: 'types and rules, no I/O', pattern: 'storage', icon: 'box' },
  ],
  edges: [
    { source: 'code', target: 'app', label: 'builds this graph' },
    { source: 'app', target: 'parsing', label: 'dependsOn' },
    { source: 'app', target: 'report', label: 'dependsOn' },
    { source: 'parsing', target: 'domain' },
    { source: 'report', target: 'domain' },
  ],
}
