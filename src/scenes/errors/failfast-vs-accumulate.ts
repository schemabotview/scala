import type { Scene } from '@graphlearning/flow'

// §5 — fail-fast composition above an accumulating validation (VS), stacked.
export const failfastVsAccumulate: Scene = {
  id: 'failfast-vs-accumulate',
  title: 'Stop at one error, or collect them all',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'failfast',
      kind: 'code',
      filename: 'fail-fast — for over Either',
      label: `for
  qty   <- parseQty("two")
  price <- parseCents("-5")
yield (qty, price)          // Left(BadNumber(qty,two)) — price unseen`,
    },
    {
      id: 'accumulate',
      kind: 'code',
      filename: 'accumulate — check every field',
      label: `def both(q: Either[ImportError, Int], p: Either[ImportError, Int])
    : Either[List[ImportError], (Int, Int)] =
  (q, p) match
    case (Right(qty), Right(price)) => Right((qty, price))
    case _ => Left(List(q, p).collect { case Left(e) => e })

both(parseQty("two"), parseCents("-5"))
// Left(List(BadNumber(qty,two), BadNumber(price,-5)))`,
    },
    {
      id: 'kinds',
      label: 'Which one the input needs',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dependent', label: 'Dependent', sub: 'step 2 needs step 1', pattern: 'service', icon: 'link' },
        { id: 'independent', label: 'Independent', sub: 'fields checked apart', pattern: 'network', icon: 'boxes' },
        { id: 'first', label: 'Fail-fast', sub: 'first Left wins', pattern: 'warn', icon: 'zap' },
        { id: 'all', label: 'Accumulate', sub: 'a List of every error', pattern: 'storage', icon: 'table' },
      ],
    },
  ],
  edges: [
    { source: 'failfast', target: 'accumulate', label: 'same input, more told' },
    { source: 'accumulate', target: 'kinds' },
  ],
}
