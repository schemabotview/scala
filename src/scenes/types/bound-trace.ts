import type { Scene } from '@graphlearning/flow'

// §2 — an upper bound that both permits a call and keeps the caller's type (CT).
export const boundTrace: Scene = {
  id: 'bound-trace',
  title: 'A bound that permits and preserves',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Bounds.scala',
      label: `trait Priced:
  def totalCents: Int

def mostExpensive[A <: Priced](items: List[A]): Option[A] =
  items.maxByOption(_.totalCents)

case class Gift(name: String, totalCents: Int) extends Priced
val best: Option[Gift] =
  mostExpensive(List(Gift("tea", 1200), Gift("mug", 900)))
                                  // Some(Gift(tea,1200)): still a Gift
// mostExpensive(List("tea"))     ✗ String does not conform to Priced`,
    },
    {
      id: 'trace',
      label: 'What A <: Priced buys',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'upper', label: 'Upper bound', sub: 'A must be a Priced', pattern: 'service', icon: 'shieldcheck' },
        { id: 'calls', label: 'Allowed calls', sub: '_.totalCents is known', pattern: 'network', icon: 'plug' },
        { id: 'kept', label: 'Type kept', sub: 'Option[Gift] comes back', pattern: 'storage', icon: 'box' },
        { id: 'rejected', label: 'Rejected', sub: 'String is not Priced', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
