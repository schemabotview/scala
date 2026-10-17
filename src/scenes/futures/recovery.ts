import type { Scene } from '@graphlearning/flow'

// §4 — failure propagation through map, and recover / recoverWith (CT).
export const recovery: Scene = {
  id: 'recovery',
  title: 'A failed Future, and recovering from it',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Recovery.scala',
      label: `enrich("NOPE-00").map(_ * 2)       // still the same Failure: map skipped

def priceOrFallback(sku: String): Future[Int] =
  enrich(sku)
    .recover { case _: TimeoutException => 0 }              // a value
    .recoverWith { case _: UnknownSkuException => catalogPrice(sku) }

enrich("TEA-01").onComplete {
  case Success(p) => log(s"price $p")
  case Failure(e) => log(s"failed: \${e.getMessage}")      // never lost
}`,
    },
    {
      id: 'trace',
      label: 'How failure travels',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'failed', label: 'Failed Future', sub: 'holds the exception', pattern: 'warn', icon: 'bug' },
        { id: 'skipped', label: 'map, flatMap', sub: 'skipped on failure', pattern: 'network', icon: 'circleslash' },
        { id: 'recover', label: 'recover', sub: 'failure into a value', pattern: 'service', icon: 'shieldcheck' },
        { id: 'recoverwith', label: 'recoverWith', sub: 'failure into a Future', pattern: 'service', icon: 'repeat' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
