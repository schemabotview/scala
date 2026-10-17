import type { Scene } from '@graphlearning/flow'

// §3 — the first program and its trace (CT). The trace leaves are the types and the printed result
// the narration reads out, top to bottom.
export const orderTotalMain: Scene = {
  id: 'order-total-main',
  title: 'The first program',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Order.scala',
      label: `// amounts in minor units: 1200 means 12.00
@main def orderTotal(): Unit =
  val prices = List(1200, 2550, 500)
  val total  = prices.sum
  println(s"Total: $total")`,
    },
    {
      id: 'trace',
      label: 'What each line produces',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'entry', label: 'Entry point', sub: '@main makes a runnable', pattern: 'user', icon: 'zap' },
        { id: 'prices', label: 'prices', sub: 'List[Int], inferred', pattern: 'storage', icon: 'table' },
        { id: 'total', label: 'total', sub: 'Int = 4250', pattern: 'service', icon: 'sigma' },
        { id: 'output', label: 'println', sub: 'prints; returns Unit', pattern: 'external', icon: 'terminal' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace', label: 'scala run Order.scala' }],
}
