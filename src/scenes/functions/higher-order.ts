import type { Scene } from '@graphlearning/flow'

// §3 — a method taking a function, a method returning one, and composition (CT).
export const higherOrder: Scene = {
  id: 'higher-order',
  title: 'Functions in, functions out',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Rules.scala',
      label: `def applyAll(prices: List[Int], rule: Int => Int): List[Int] =
  prices.map(rule)

val tenOff: Int => Int = p => p - p / 10
def atLeast(min: Int): Int => Int = p => p.max(min)

applyAll(List(1200, 450), tenOff)         // List(1080, 405)
applyAll(List(1200, 450), atLeast(500))   // List(1200, 500)
(tenOff andThen atLeast(500))(450)        // 405, then 500`,
    },
    {
      id: 'trace',
      label: 'Three higher-order moves',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'takes', label: 'Takes one', sub: 'rule: Int => Int', pattern: 'service', icon: 'plug' },
        { id: 'returns', label: 'Returns one', sub: 'atLeast(500) is a rule', pattern: 'service', icon: 'share' },
        { id: 'compose', label: 'andThen', sub: 'left result feeds right', pattern: 'network', icon: 'workflow' },
        { id: 'order', label: 'Order matters', sub: 'the other way gives 450', pattern: 'warn', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
