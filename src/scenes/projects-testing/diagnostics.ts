import type { Scene } from '@graphlearning/flow'

// §6 — a clean-build compile error and a runtime stack trace, read for the line that matters (CT).
export const diagnostics: Scene = {
  id: 'diagnostics',
  title: 'Reading what the tools report',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'terminal',
      label: `$ sbt clean test
[error] -- [E007] Type Mismatch Error: report/src/main/scala/Report.scala:14:19
[error] 14 |  val total: Int = lines.map(_.total).sum.toString
[error]    |                   Found:    String
[error]    |                   Required: Int

java.lang.NumberFormatException: For input string: "4x"
  at java.lang.Integer.parseInt(Integer.java)
  at scala.collection.StringOps$.toInt$extension(StringOps.scala)
  at orders.parsing.LineParser$.parseQty(LineParser.scala:21)   ← yours`,
    },
    {
      id: 'trace',
      label: 'Where to look first',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'clean', label: 'Clean build', sub: 'no stale classes', pattern: 'service', icon: 'repeat' },
        { id: 'position', label: 'Position', sub: 'file:line:column', pattern: 'network', icon: 'search' },
        { id: 'frame', label: 'Your frame', sub: 'below the library ones', pattern: 'warn', icon: 'layers' },
        { id: 'record', label: 'Record', sub: 'command and versions', pattern: 'storage', icon: 'pencil' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
