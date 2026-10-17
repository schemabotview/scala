import type { Scene } from '@graphlearning/flow'

// §5 — Future.sequence and traverse: input order kept, fail-fast unless recovered per item (CT).
export const combine: Scene = {
  id: 'combine',
  title: 'Many Futures into one',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Combine.scala',
      label: `val skus = List("TEA-01", "MUG-02", "CUP-03")

val all: Future[List[Int]] = Future.sequence(skus.map(enrich))
// in SKU order, whatever order they finished in
// one failure → the whole Future fails

val each: Future[List[Either[String, Int]]] =
  Future.traverse(skus) { sku =>
    enrich(sku)
      .map(p => Right(p))
      .recover { case e => Left(s"$sku: \${e.getMessage}") }
  }                                   // every SKU reported`,
    },
    {
      id: 'trace',
      label: 'Reading the combined result',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'sequence', label: 'sequence', sub: 'List of Futures, flipped', pattern: 'service', icon: 'layers' },
        { id: 'order', label: 'Result order', sub: 'the input order', pattern: 'storage', icon: 'sortarrows' },
        { id: 'failfast', label: 'Fail-fast', sub: 'one failure, all fail', pattern: 'warn', icon: 'zap' },
        { id: 'peritem', label: 'Per item', sub: 'recover inside: Either', pattern: 'network', icon: 'shieldcheck' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
