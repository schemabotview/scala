import type { Scene } from '@graphlearning/flow'

// §5 — a for expression above the combinators it becomes (VS), stacked.
export const forDesugar: Scene = {
  id: 'for-desugar',
  title: 'What a for expression means',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'sugar',
      kind: 'code',
      filename: 'for expression',
      label: `for
  order <- orders
  line  <- order.lines
  if line.qty > 1
yield s"\${order.id}:\${line.sku}"      // List(1:TEA-01, 3:TEA-01)`,
    },
    {
      id: 'desugared',
      kind: 'code',
      filename: 'what the compiler writes',
      label: `orders.flatMap(order =>
  order.lines
    .withFilter(line => line.qty > 1)
    .map(line => s"\${order.id}:\${line.sku}"))`,
    },
    {
      id: 'rules',
      label: 'The translation rules',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'outer', label: 'Outer <-', sub: 'becomes flatMap', pattern: 'service', icon: 'layers' },
        { id: 'last', label: 'Last <-', sub: 'becomes map', pattern: 'service', icon: 'repeat' },
        { id: 'guard', label: 'if', sub: 'becomes withFilter', pattern: 'network', icon: 'funnel' },
        { id: 'yield', label: 'yield', sub: 'the value map produces', pattern: 'storage', icon: 'share' },
      ],
    },
  ],
  edges: [
    { source: 'sugar', target: 'desugared', label: 'desugars to' },
    { source: 'desugared', target: 'rules' },
  ],
}
