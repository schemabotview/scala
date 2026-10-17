import type { Scene } from '@graphlearning/flow'

// §1 — val vs var vs the object behind the name (MEM): the code card mutates through a val and
// re-binds a var; the memory card shows that the val's reference never moved while the object grew.
export const bindingMemory: Scene = {
  id: 'binding-memory',
  title: 'Names, bindings and objects',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Bindings.scala',
      label: `import scala.collection.mutable.ArrayBuffer

val prices = ArrayBuffer(1200, 2550)
var count  = prices.size
prices += 500         // ok: the object changes
count = count + 1     // ok: a var can be re-bound
// prices = ArrayBuffer()   ✗ reassignment to val`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'After line 6',
      slots: [
        { at: 'prices', name: '→ object #1', note: 'val: this arrow is fixed', group: 'names' },
        { at: 'count', name: '3', note: 'var: was 2, re-bound', group: 'names' },
        { at: '#1', name: 'ArrayBuffer(1200, 2550, 500)', note: 'mutable: grew in place', group: 'objects' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory', label: 'run lines 3–6' }],
}
