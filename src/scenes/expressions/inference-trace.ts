import type { Scene } from '@graphlearning/flow'

// §2 — inferred, widened and annotated types (CT).
export const inferenceTrace: Scene = {
  id: 'inference-trace',
  title: 'Where each type comes from',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Types.scala',
      label: `val quantity  = 3                    // Int
val unitPrice = 1200L                // Long
val subtotal  = quantity * unitPrice // Long
val label: String = "Order 17"       // annotated

def lineTotal(q: Int, p: Long): Long = q * p
val fail: Int = sys.error("no price") // Nothing fits Int`,
    },
    {
      id: 'trace',
      label: 'How the compiler decided',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'inferred', label: 'Inferred', sub: 'from the right-hand side', pattern: 'service', icon: 'search' },
        { id: 'widened', label: 'Widened', sub: 'Int × Long gives Long', pattern: 'network', icon: 'scale' },
        { id: 'annotated', label: 'Annotated', sub: 'parameters always are', pattern: 'user', icon: 'tag' },
        { id: 'nothing', label: 'Nothing', sub: 'a throw fits any type', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
