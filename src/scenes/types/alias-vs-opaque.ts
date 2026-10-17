import type { Scene } from '@graphlearning/flow'

// §5 — a transparent alias that lets ids be swapped, above an opaque type that does not (VS).
export const aliasVsOpaque: Scene = {
  id: 'alias-vs-opaque',
  title: 'Two ids that must not be confused',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'alias',
      kind: 'code',
      filename: 'transparent alias',
      label: `type OrderId    = Int
type CustomerId = Int
def lookup(order: OrderId, customer: CustomerId): Order = ???

lookup(customerId, orderId)     // compiles: both are just Int`,
    },
    {
      id: 'opaque',
      kind: 'code',
      filename: 'opaque type',
      label: `object Ids:
  opaque type OrderId = Int
  object OrderId:
    def from(n: Int): Option[OrderId] = Option.when(n > 0)(n)
    def value(id: OrderId): Int = id

import Ids.OrderId
val o = OrderId.from(17)        // Some(17): an Option[OrderId]
// val n: Int = o.get           ✗ outside Ids, OrderId is not an Int`,
    },
    {
      id: 'kinds',
      label: 'What each one promises',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'same', label: 'Alias', sub: 'a second name only', pattern: 'warn', icon: 'copy' },
        { id: 'new', label: 'Opaque', sub: 'a new type outside', pattern: 'service', icon: 'lock' },
        { id: 'inside', label: 'Inside Ids', sub: 'still an Int, no cost', pattern: 'storage', icon: 'box' },
        { id: 'validation', label: 'Validation', sub: 'a separate choice: from', pattern: 'network', icon: 'shieldcheck' },
      ],
    },
  ],
  edges: [
    { source: 'alias', target: 'opaque', label: 'make the mix-up an error' },
    { source: 'opaque', target: 'kinds' },
  ],
}
