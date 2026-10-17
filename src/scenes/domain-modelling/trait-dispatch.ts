import type { Scene } from '@graphlearning/flow'

// §6 — traits composed into classes, then dispatched through the trait type (CT).
export const traitDispatch: Scene = {
  id: 'trait-dispatch',
  title: 'Traits mixed into classes',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Priced.scala',
      label: `trait Priced:
  def baseCents: Int
  def totalCents: Int = baseCents

trait Taxed extends Priced:
  override def totalCents: Int = super.totalCents * 120 / 100

class OneOff(val baseCents: Int) extends Priced
class Subscription(val baseCents: Int) extends Priced, Taxed

val items: List[Priced] = List(OneOff(1000), Subscription(1000))
items.map(_.totalCents)          // List(1000, 1200)`,
    },
    {
      id: 'trace',
      label: 'Who answers totalCents',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'abstract', label: 'Abstract', sub: 'baseCents has no body', pattern: 'storage', icon: 'box' },
        { id: 'default', label: 'Default', sub: 'Priced: just the base', pattern: 'service', icon: 'wrench' },
        { id: 'override', label: 'Override', sub: 'Taxed adds 20%', pattern: 'network', icon: 'layers' },
        { id: 'dispatch', label: 'Dispatch', sub: 'the runtime class decides', pattern: 'user', icon: 'gitbranch' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
