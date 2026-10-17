import type { Scene } from '@graphlearning/flow'

// §4 — the three interpolators and the cents trap (CT).
export const interpolationTrace: Scene = {
  id: 'interpolation-trace',
  title: 'Building text from values',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Strings.scala',
      label: `val id    = 17
val total = 4205

s"Order $id: \${total / 100}.\${total % 100}"   // Order 17: 42.5  ✗
f"Order $id%03d: \${total / 100.0}%.2f"         // Order 017: 42.05
raw"C:\\orders\\new"                            // C:\\orders\\new
"""Total:
   |  42.05""".stripMargin                      // margin removed`,
    },
    {
      id: 'trace',
      label: 'Which interpolator',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 's', label: 's"…"', sub: 'substitutes values as text', pattern: 'service', icon: 'pencil' },
        { id: 'f', label: 'f"…"', sub: 'formats; checks the types', pattern: 'service', icon: 'ruler' },
        { id: 'raw', label: 'raw"…"', sub: 'keeps backslashes', pattern: 'network', icon: 'filecode' },
        { id: 'trap', label: 'The trap', sub: '5 cents prints as .5', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
