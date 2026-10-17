import type { Scene } from '@graphlearning/flow'

// §3 — futures started inside a for run one after another; started before it, they overlap (VS).
export const startOrder: Scene = {
  id: 'start-order',
  title: 'Sequential by accident, or overlapping on purpose',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'inside',
      kind: 'code',
      filename: 'started inside the for — one after the other',
      label: `val total = for
  price <- enrich("TEA-01")       // starts now
  stock <- checkStock("TEA-01")   // starts only when price is done
yield price * stock               // time ≈ price + stock`,
    },
    {
      id: 'before',
      kind: 'code',
      filename: 'started before the for — overlapping',
      label: `val priceF = enrich("TEA-01")      // both start here
val stockF = checkStock("TEA-01")
val total = for price <- priceF; stock <- stockF yield price * stock
                                  // time ≈ max(price, stock)`,
    },
    {
      id: 'rules',
      label: 'Where the Future is created decides',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'dependent', label: 'Dependent', sub: 'needs the earlier result', pattern: 'network', icon: 'link' },
        { id: 'independent', label: 'Independent', sub: 'start both early', pattern: 'service', icon: 'boxes' },
        { id: 'sequential', label: 'Inside the for', sub: 'waits for the one before', pattern: 'warn', icon: 'clock' },
        { id: 'overlap', label: 'Before the for', sub: 'already running', pattern: 'storage', icon: 'zap' },
      ],
    },
  ],
  edges: [
    { source: 'inside', target: 'before', label: 'move the creation up' },
    { source: 'before', target: 'rules' },
  ],
}
