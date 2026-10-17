import type { Scene } from '@graphlearning/flow'

// §5 — if as an expression with a value (CT).
export const ifExpression: Scene = {
  id: 'if-expression',
  title: 'A condition that produces a value',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Shipping.scala',
      label: `val total  = 4250
val member = false

val shipping =
  if total >= 5000 || member then 0
  else if total >= 2000 then 300
  else 600

println(s"Shipping: $shipping")       // Shipping: 300`,
    },
    {
      id: 'trace',
      label: 'Evaluated top to bottom',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'value', label: 'A value', sub: 'shipping: Int = 300', pattern: 'service', icon: 'sigma' },
        { id: 'first', label: 'First true wins', sub: 'later branches skipped', pattern: 'network', icon: 'gitbranch' },
        { id: 'short', label: 'Short-circuit', sub: '|| stops at true', pattern: 'network', icon: 'zap' },
        { id: 'else', label: 'Final else', sub: 'drop it, lose the Int', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
