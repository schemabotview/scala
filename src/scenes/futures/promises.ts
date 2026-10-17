import type { Scene } from '@graphlearning/flow'

// §7 — a Promise completed once, competing completions, and an owned executor's shutdown (CT).
export const promises: Scene = {
  id: 'promises',
  title: 'Completing a Future yourself',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Promises.scala',
      label: `val p = Promise[Int]()
val f: Future[Int] = p.future          // hand out the read side

p.trySuccess(1200)                     // true: completes f
p.tryFailure(Exception("too late"))    // false: already completed
// p.success(900)                      ✗ IllegalStateException
f.value                                // Some(Success(1200))

val pool = java.util.concurrent.Executors.newFixedThreadPool(4)
val ec = ExecutionContext.fromExecutor(pool)
// … run work on ec …
pool.shutdown()                        // whoever created it, closes it`,
    },
    {
      id: 'trace',
      label: 'Write once, read many',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'write', label: 'Promise', sub: 'the write side, once', pattern: 'storage', icon: 'pencil' },
        { id: 'read', label: 'p.future', sub: 'the read side, shared', pattern: 'service', icon: 'share' },
        { id: 'first', label: 'First wins', sub: 'try* reports who won', pattern: 'warn', icon: 'sortarrows' },
        { id: 'owner', label: 'Owner', sub: 'shuts down its pool', pattern: 'network', icon: 'power' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
