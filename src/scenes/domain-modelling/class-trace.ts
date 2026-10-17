import type { Scene } from '@graphlearning/flow'

// §1 — a class with val and plain parameters, a precondition and a method (CT).
export const classTrace: Scene = {
  id: 'class-trace',
  title: 'A class and what it exposes',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'OrderLine.scala',
      label: `class OrderLine(val sku: String, val qty: Int, unitCents: Int):
  require(qty > 0, s"qty must be positive: $qty")
  def total: Int = qty * unitCents
  override def toString = s"$sku x$qty"

val line = OrderLine("TEA-01", 2, 1200)
line.total                  // 2400
line.qty                    // 2
// line.unitCents           ✗ not accessible: plain parameter
// OrderLine("TEA-01", 0, 1200)   throws IllegalArgumentException`,
    },
    {
      id: 'trace',
      label: 'What construction gives you',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'params', label: 'Class parameters', sub: 'the constructor', pattern: 'service', icon: 'braces' },
        { id: 'val-param', label: 'val parameter', sub: 'readable from outside', pattern: 'storage', icon: 'key' },
        { id: 'require', label: 'require', sub: 'checked on every build', pattern: 'warn', icon: 'shieldcheck' },
        { id: 'method', label: 'Method', sub: 'total, computed on call', pattern: 'network', icon: 'sigma' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
