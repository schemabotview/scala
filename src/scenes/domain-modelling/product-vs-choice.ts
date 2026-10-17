import type { Scene } from '@graphlearning/flow'

// §4 — a product type above a choice type (VS), stacked.
export const productVsChoice: Scene = {
  id: 'product-vs-choice',
  title: 'This AND that, this OR that',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'product',
      kind: 'code',
      filename: 'product — every field, always',
      label: `case class Order(id: Int, customer: String, totalCents: Int)
// every Order has id AND customer AND totalCents`,
    },
    {
      id: 'choice',
      kind: 'code',
      filename: 'choice — exactly one case',
      label: `enum Status:
  case Pending
  case Paid(receipt: String)
  case Shipped(tracking: String)
  case Cancelled(reason: String)
// every Status is Pending OR Paid OR Shipped OR Cancelled`,
    },
    {
      id: 'kinds',
      label: 'Two ways to combine',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'and', label: 'Product', sub: 'fields: this AND that', pattern: 'storage', icon: 'table' },
        { id: 'or', label: 'Choice', sub: 'cases: this OR that', pattern: 'network', icon: 'gitbranch' },
        { id: 'enum', label: 'enum', sub: 'Scala 3 syntax for a choice', pattern: 'service', icon: 'layers' },
        { id: 'sealed', label: 'sealed trait', sub: 'the same, written longhand', pattern: 'service', icon: 'lock' },
      ],
    },
  ],
  edges: [
    { source: 'product', target: 'choice', label: 'a Status inside an Order' },
    { source: 'choice', target: 'kinds' },
  ],
}
