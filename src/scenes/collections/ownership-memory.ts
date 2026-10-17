import type { Scene } from '@graphlearning/flow'

// §2 — a shared mutable buffer vs an immutable list with structural sharing (MEM).
export const ownershipMemory: Scene = {
  id: 'ownership-memory',
  title: 'Shared buffers and shared structure',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Ownership.scala',
      label: `import scala.collection.mutable

val shared = mutable.ListBuffer(1200, 2550)
shared += 500                      // every holder of shared sees it
val snapshot = shared.toList       // an immutable copy, taken now

val owned = List(1200, 2550)
val more  = 500 :: owned           // a new list; owned unchanged`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'After line 8',
      slots: [
        { at: 'shared', name: '→ #1', group: 'names' },
        { at: 'snapshot', name: '→ #2', group: 'names' },
        { at: 'owned', name: '→ #3', group: 'names' },
        { at: 'more', name: '→ #4', group: 'names' },
        { at: '#1', name: 'ListBuffer(1200, 2550, 500)', note: 'changes in place', group: 'objects' },
        { at: '#2', name: 'List(1200, 2550, 500)', note: 'frozen at line 5', group: 'objects' },
        { at: '#3', name: 'List(1200, 2550)', note: 'never changes', group: 'objects' },
        { at: '#4', name: '500 :: → #3', note: 'reuses #3, safely', group: 'objects' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory' }],
}
