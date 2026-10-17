import type { Scene } from '@graphlearning/flow'

// §5 — a match with deconstruction, a guard and a missing case (CT).
export const matchTrace: Scene = {
  id: 'match-trace',
  title: 'Matching every case',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Describe.scala',
      label: `import Status.*

def describe(s: Status): String = s match
  case Pending                => "awaiting payment"
  case Paid(r) if r.isEmpty   => "paid, receipt missing"
  case Paid(r)                => s"paid: $r"
  case Shipped(t)             => s"shipped: $t"
// warning: match may not be exhaustive.
//   It would fail on pattern case: Cancelled(_)`,
    },
    {
      id: 'trace',
      label: 'How a match is chosen',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'deconstruct', label: 'Deconstruct', sub: 'Paid(r) binds r', pattern: 'service', icon: 'scissors' },
        { id: 'guard', label: 'Guard', sub: 'if adds a condition', pattern: 'network', icon: 'shieldcheck' },
        { id: 'first', label: 'First match', sub: 'order of cases matters', pattern: 'network', icon: 'sortarrows' },
        { id: 'exhaustive', label: 'Exhaustive?', sub: 'a missing case warns', pattern: 'warn', icon: 'bell' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
