import type { Scene } from '@graphlearning/flow'

// §7 — operation costs per collection (TB), from the Scala collections performance table, with the
// empty and ordering cases above it.
export const complexityTable: Scene = {
  id: 'complexity-table',
  title: 'Cost, order and the empty case',
  flow: 'TB',
  padding: 0.04, // a wide, short board: let it float to the edges
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Edges.scala',
      label: `val xs = List(3, 1, 2)
xs.head                      // 3
List.empty[Int].head         // throws NoSuchElementException
List.empty[Int].headOption   // None
xs.sorted                    // List(1, 2, 3): an order you chose
Set(3, 1, 2).toList          // some order, not promised

// C constant · eC effectively constant · aC amortised · L linear`,
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Cost as the collection grows',
      headers: ['', 'head', 'apply(i)', 'prepend', 'append'],
      values: [
        ['List', 'C', 'L', 'C', 'L'],
        ['Vector', 'eC', 'eC', 'eC', 'eC'],
        ['ArrayBuffer', 'C', 'C', 'L', 'aC'],
        ['LazyList', 'C', 'L', 'C', 'L'],
        ['Queue', 'aC', 'L', 'C', 'C'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'table' }],
}
