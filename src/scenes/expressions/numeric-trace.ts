import type { Scene } from '@graphlearning/flow'

// §3 — division, overflow, widening and rounding (CT). Every line's result is in its comment.
export const numericTrace: Scene = {
  id: 'numeric-trace',
  title: 'Arithmetic at the edges',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Numbers.scala',
      label: `7 / 2                    // 3            Int division truncates
7 / 2.0                  // 3.5          one Double operand
Int.MaxValue + 1         // -2147483648  overflow wraps
2_000_000_000 * 2        // -294967296   still Int arithmetic
2_000_000_000L * 2       // 4000000000   Long before multiplying

import scala.math.BigDecimal.RoundingMode.HALF_EVEN
BigDecimal("12.345").setScale(2, HALF_EVEN)   // 12.34`,
    },
    {
      id: 'trace',
      label: 'The four boundaries',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'division', label: 'Int ÷ Int', sub: 'drops the fraction', pattern: 'warn', icon: 'scissors' },
        { id: 'overflow', label: 'Overflow', sub: 'wraps with no error', pattern: 'warn', icon: 'repeat' },
        { id: 'widen', label: 'Widen first', sub: 'make an operand Long', pattern: 'service', icon: 'scale' },
        { id: 'rounding', label: 'Rounding', sub: 'state the rule', pattern: 'service', icon: 'ruler' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
