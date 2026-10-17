import type { Scene } from '@graphlearning/flow'

// §1 — four threads incrementing a shared var (MEM): one interleaving that loses an update.
export const lostUpdate: Scene = {
  id: 'lost-update',
  title: 'How an increment gets lost',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Counter.scala',
      label: `var processed = 0                             // shared and mutable
val workers = (1 to 4).map(_ => Thread(() =>
  for _ <- 1 to 1000 do processed += 1))      // read, add, write
workers.foreach(_.start()); workers.foreach(_.join())
processed                                     // often less than 4000

val safe = java.util.concurrent.atomic.AtomicInteger(0)
safe.incrementAndGet()                        // one indivisible step`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'One interleaving of two threads',
      slots: [
        { at: 'processed', name: '57', note: 'before both threads', group: 'shared' },
        { at: 'thread 1', name: 'reads 57', group: 'time ↓' },
        { at: 'thread 2', name: 'reads 57', note: 'same old value', group: 'time ↓' },
        { at: 'thread 1', name: 'writes 58', group: 'time ↓' },
        { at: 'thread 2', name: 'writes 58', note: 'thread 1’s update lost', group: 'time ↓' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory', label: 'processed += 1' }],
}
