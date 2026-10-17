import type { Scene } from '@graphlearning/flow'

// §6 — a union eliminated by matching, and an intersection as combined requirements (CT).
export const unionIntersection: Scene = {
  id: 'union-intersection',
  title: 'Either type, or both at once',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'UnionIntersection.scala',
      label: `def describe(key: Int | String): String = key match
  case n: Int    => s"order $n"
  case s: String => s"sku $s"

trait Priced { def totalCents: Int }
trait Named  { def name: String }
def label(x: Priced & Named): String = s"\${x.name}: \${x.totalCents}"

case class Gift(name: String, totalCents: Int) extends Priced, Named
label(Gift("tea", 1200))       // "tea: 1200"
// describe(12.5)              ✗ Double is not Int | String`,
    },
    {
      id: 'trace',
      label: 'Reading | and &',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'union', label: 'Union A | B', sub: 'one or the other', pattern: 'network', icon: 'gitbranch' },
        { id: 'eliminate', label: 'Match', sub: 'handles each side', pattern: 'service', icon: 'search' },
        { id: 'intersection', label: 'Intersection', sub: 'A & B: both at once', pattern: 'storage', icon: 'link' },
        { id: 'erasure', label: 'Erasure', sub: 'List[Int] looks like List[String]', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
