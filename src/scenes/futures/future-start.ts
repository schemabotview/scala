import type { Scene } from '@graphlearning/flow'

// §2 — creating a Future schedules it at once on the given ExecutionContext (CT).
export const futureStart: Scene = {
  id: 'future-start',
  title: 'When a Future starts',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Enrich.scala',
      label: `import scala.concurrent.{ExecutionContext, Future}
given ExecutionContext = ExecutionContext.global    // where work runs

def enrich(sku: String): Future[Int] = Future {
  lookupPrice(sku)                // runs on a pool thread
}

val price = enrich("TEA-01")      // scheduled now; returns at once
val doubled = price.map(_ * 2)    // runs when price completes
price.value                       // None until done, then Some(Success(…))`,
    },
    {
      id: 'trace',
      label: 'Creating is starting',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'apply', label: 'Future { … }', sub: 'scheduled immediately', pattern: 'warn', icon: 'zap' },
        { id: 'ec', label: 'Execution context', sub: 'the given thread pool', pattern: 'storage', icon: 'gears' },
        { id: 'map', label: 'map', sub: 'a step after completion', pattern: 'service', icon: 'repeat' },
        { id: 'value', label: 'value', sub: 'None until it is done', pattern: 'network', icon: 'clock' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
