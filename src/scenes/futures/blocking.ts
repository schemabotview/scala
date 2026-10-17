import type { Scene } from '@graphlearning/flow'

// §6 — wrapping blocking work, waiting with a timeout, and bounding fan-out (PS as code + limits).
export const blocking: Scene = {
  id: 'blocking',
  title: 'Blocking, timeouts and their limits',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Legacy.scala',
      label: `import scala.concurrent.{Await, blocking}
import scala.concurrent.duration.*

def readLegacy(sku: String): Future[Int] = Future {
  blocking { legacyClient.fetch(sku) }  // still holds a thread while it waits
}

Await.result(readLegacy("TEA-01"), 2.seconds)
// TimeoutException after 2 s — the fetch itself keeps running

// fan-out: skus.grouped(8), one batch at a time, not 10 000 at once`,
    },
    {
      id: 'limits',
      label: 'What each tool does not do',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'marker', label: 'blocking { }', sub: 'lets the pool add threads', pattern: 'service', icon: 'gears' },
        { id: 'still', label: 'Still blocks', sub: 'one thread per wait', pattern: 'warn', icon: 'lock' },
        { id: 'timeout', label: 'Timeout', sub: 'stops waiting, not work', pattern: 'warn', icon: 'clock' },
        { id: 'bounded', label: 'Bounded', sub: 'batches cap the threads', pattern: 'network', icon: 'gauge' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'limits' }],
}
