import type { Scene } from '@graphlearning/flow'

// §1 — Seq, Set and Map built from the same order lines, with a choice table (TB).
export const collectionChoice: Scene = {
  id: 'collection-choice',
  title: 'Sequence, set or map',
  flow: 'TB',
  padding: 0.04, // a wide, short board: let it float to the edges
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Choose.scala',
      label: `val lines = List(Line("TEA-01", 2), Line("MUG-02", 1), Line("TEA-01", 1))

val skus = lines.map(_.sku).toSet        // Set(TEA-01, MUG-02)
val qty  = lines.groupMapReduce(_.sku)(_.qty)(_ + _)
                                         // Map(TEA-01 -> 3, MUG-02 -> 1)
qty.get("CUP-03")                        // None: no such key`,
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Start from the question you will ask',
      headers: ['You need', 'Choose', 'It gives you'],
      values: [
        ['order and repeats', 'Seq: List, Vector', 'positions, duplicates'],
        ['membership', 'Set', 'contains, no duplicates'],
        ['lookup by key', 'Map', 'get(key): Option'],
        ['a stated order', 'SortedSet, SortedMap', 'order from an Ordering'],
        ['first in, first out', 'Queue', 'enqueue, dequeue'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'table' }],
}
