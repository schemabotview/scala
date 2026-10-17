import type { Scene } from '@graphlearning/flow'

// §3 — map, filter and flatMap over three labelled orders, one of them empty (CT).
export const transformTrace: Scene = {
  id: 'transform-trace',
  title: 'Three orders through three combinators',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Transform.scala',
      label: `case class Order(id: Int, lines: List[Line])
val orders = List(
  Order(1, List(Line("TEA-01", 2), Line("MUG-02", 1))),
  Order(2, List()),                          // empty order
  Order(3, List(Line("TEA-01", 5))))

orders.map(_.lines.size)                     // List(2, 0, 1)
orders.filter(_.lines.nonEmpty).map(_.id)    // List(1, 3)
orders.flatMap(_.lines).map(_.qty)           // List(2, 1, 5)`,
    },
    {
      id: 'trace',
      label: 'In versus out',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'map', label: 'map', sub: 'one out for each in', pattern: 'service', icon: 'repeat' },
        { id: 'filter', label: 'filter', sub: 'keeps or drops each', pattern: 'network', icon: 'funnel' },
        { id: 'flatmap', label: 'flatMap', sub: 'many out, flattened', pattern: 'storage', icon: 'layers' },
        { id: 'empty', label: 'Empty order', sub: 'adds nothing to flatMap', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
