import type { Scene } from '@graphlearning/flow'

// §5 — context bounds and summon in a generic report, with Ordering as the familiar example (CT).
export const contextBounds: Scene = {
  id: 'context-bounds',
  title: 'Generic code that needs a capability',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Report.scala',
      label: `def show[A: Render](a: A): String = summon[Render[A]].render(a)

def report[A: Render](title: String, items: List[A]): String =
  (title :: items.map(a => show(a))).mkString("\\n")

report("Totals", List(1200, 505))   // Totals / 12.00 / 5.05

List(1200, 505).sorted              // List(505, 1200): a given Ordering[Int]
List(Gift("tea", 1200)).sorted      // ✗ no Ordering[Gift] in scope
List(Gift("tea", 1200)).sortBy(_.totalCents)   // ok: Ordering[Int]`,
    },
    {
      id: 'trace',
      label: 'Reading [A: Render]',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'bound', label: 'Context bound', sub: 'a using Render[A]', pattern: 'service', icon: 'key' },
        { id: 'summon', label: 'summon', sub: 'fetch it by type', pattern: 'network', icon: 'search' },
        { id: 'ordering', label: 'Ordering', sub: 'a type class in daily use', pattern: 'storage', icon: 'sortarrows' },
        { id: 'missing', label: 'Missing', sub: 'Gift has no Ordering', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
