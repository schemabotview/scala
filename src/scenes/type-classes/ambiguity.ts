import type { Scene } from '@graphlearning/flow'

// §6 — two equally good givens, an explicit choice, and an implicit conversion to avoid (CT).
export const ambiguity: Scene = {
  id: 'ambiguity',
  title: 'Two candidates, and one to avoid',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Ambiguity.scala',
      label: `object Plain:
  given plain: Render[Int] with
    def render(c: Int) = s"$c"
object Money:
  given money: Render[Int] with
    def render(c: Int) = f"\${c / 100}.\${c % 100}%02d"

import Plain.given, Money.given
// show(4250)        ✗ Ambiguous given instances: plain and money
show(4250)(using Money.money)          // "42.50": your choice

given Conversion[String, Int] = _.toInt  // ✗ avoid: "4x" throws, unseen`,
    },
    {
      id: 'trace',
      label: 'Keeping evidence visible',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'ambiguous', label: 'Ambiguous', sub: 'two equally good', pattern: 'warn', icon: 'gitbranch' },
        { id: 'choose', label: 'Choose', sub: 'pass it with using', pattern: 'service', icon: 'circlecheck' },
        { id: 'conversion', label: 'Conversion', sub: 'silent, and can throw', pattern: 'warn', icon: 'skull' },
        { id: 'explicit', label: 'Prefer', sub: 'a named, visible call', pattern: 'network', icon: 'search' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
