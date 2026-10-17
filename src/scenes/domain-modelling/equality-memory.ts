import type { Scene } from '@graphlearning/flow'

// §7 — structural equality vs identity, and a mutable field lost inside a hash set (MEM).
export const equalityMemory: Scene = {
  id: 'equality-memory',
  title: 'Equal, identical, and lost',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Equality.scala',
      label: `case class Price(cents: Int)
val p1 = Price(500); val p2 = Price(500)
p1 == p2                 // true   same fields
p1 eq p2                 // false  two objects

case class Bad(var cents: Int)
val set = scala.collection.mutable.HashSet(Bad(500))
val b = set.head
b.cents = 900
set.contains(b)          // false  hashed as 500, now 900`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'After line 9',
      slots: [
        { at: 'p1', name: '→ #1', group: 'names' },
        { at: 'p2', name: '→ #2', group: 'names' },
        { at: 'b', name: '→ #3', group: 'names' },
        { at: '#1', name: 'Price(500)', note: '== #2, not eq', group: 'objects' },
        { at: '#2', name: 'Price(500)', note: '== #1, not eq', group: 'objects' },
        { at: '#3', name: 'Bad(900)', note: 'filed in the set under 500', group: 'objects' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory' }],
}
