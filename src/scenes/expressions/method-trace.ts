import type { Scene } from '@graphlearning/flow'

// §7 — default and named arguments, then a recursive method with its base case (CT).
export const methodTrace: Scene = {
  id: 'method-trace',
  title: 'Methods, arguments and recursion',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Methods.scala',
      label: `def lineTotal(qty: Int, price: Int, discount: Int = 0): Int =
  qty * price - discount

lineTotal(2, 1200)                // 2400   default discount
lineTotal(price = 500, qty = 3)   // 1500   named arguments

def sumAll(ps: List[Int]): Int =
  if ps.isEmpty then 0            // base case
  else ps.head + sumAll(ps.tail)  // smaller problem`,
    },
    {
      id: 'trace',
      label: 'What each call relies on',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'default', label: 'Default', sub: 'used when omitted', pattern: 'service', icon: 'wrench' },
        { id: 'named', label: 'Named', sub: 'order stops mattering', pattern: 'service', icon: 'tag' },
        { id: 'base', label: 'Base case', sub: 'empty list returns 0', pattern: 'network', icon: 'circlecheck' },
        { id: 'frames', label: 'Stack frames', sub: 'one per element', pattern: 'warn', icon: 'layers' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
