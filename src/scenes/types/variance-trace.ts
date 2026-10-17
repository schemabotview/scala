import type { Scene } from '@graphlearning/flow'

// §3 — producer, consumer, and both: covariant, contravariant, invariant (PS as code + three rules).
export const varianceTrace: Scene = {
  id: 'variance-trace',
  title: 'Which substitutions are safe',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Variance.scala',
      label: `trait Source[+A] { def next(): A }          // produces A
trait Sink[-A]   { def accept(a: A): Unit }  // consumes A
final class Box[A](var item: A)              // both

def use(gifts: Source[Gift], anyPriced: Sink[Priced]) =
  val p: Source[Priced] = gifts        // ok: every Gift is Priced
  val g: Sink[Gift]     = anyPriced    // ok: it accepts any Priced
// val b: Box[Priced] = Box(gift)
//   ✗ Box is invariant: b.item = otherPriced would break it`,
    },
    {
      id: 'rules',
      label: 'Gift <: Priced, so…',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'co', label: 'Covariant', sub: '+A: Source of Gift is a Source of Priced', pattern: 'service', icon: 'share' },
        { id: 'contra', label: 'Contravariant', sub: '-A: Sink of Priced is a Sink of Gift', pattern: 'network', icon: 'plug' },
        { id: 'inv', label: 'Invariant', sub: 'A: no substitution', pattern: 'warn', icon: 'lock' },
        { id: 'list', label: 'List[+A]', sub: 'immutable, and declared +', pattern: 'storage', icon: 'table' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'rules' }],
}
