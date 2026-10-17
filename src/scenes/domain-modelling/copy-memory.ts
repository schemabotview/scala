import type { Scene } from '@graphlearning/flow'

// §3 — copy is shallow (MEM): two Orders, one shared mutable tag buffer.
export const copyMemory: Scene = {
  id: 'copy-memory',
  title: 'What copy shares',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Copy.scala',
      label: `import scala.collection.mutable.ArrayBuffer

case class Line(sku: String, qty: Int)
case class Order(id: Int, lines: List[Line], tags: ArrayBuffer[String])

val a = Order(17, List(Line("TEA-01", 2)), ArrayBuffer("gift"))
val b = a.copy(id = 18)       // a new Order; same lines, same tags
b.tags += "rush"              // a.tags now contains "rush" too`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'After line 8',
      slots: [
        { at: 'a', name: '→ #1', group: 'names' },
        { at: 'b', name: '→ #2', group: 'names' },
        { at: '#1', name: 'Order(17, → #3, → #4)', note: 'the original', group: 'objects' },
        { at: '#2', name: 'Order(18, → #3, → #4)', note: 'the copy', group: 'objects' },
        { at: '#3', name: 'List(Line(TEA-01, 2))', note: 'shared, immutable: safe', group: 'objects' },
        { at: '#4', name: 'ArrayBuffer(gift, rush)', note: 'shared, mutable: both see it', group: 'objects' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory', label: 'copy copies references' }],
}
