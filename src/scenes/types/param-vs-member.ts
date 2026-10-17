import type { Scene } from '@graphlearning/flow'

// §4 — the same parser contract as a type parameter and as an abstract type member (VS), stacked.
export const paramVsMember: Scene = {
  id: 'param-vs-member',
  title: 'Type parameter or type member',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'param',
      kind: 'code',
      filename: 'type parameter',
      label: `trait Parser[A]:
  def parse(raw: String): Either[ImportError, A]

object QtyParser extends Parser[Int]:
  def parse(raw: String) = parseQty(raw)`,
    },
    {
      id: 'member',
      kind: 'code',
      filename: 'abstract type member',
      label: `trait Parser:
  type Out
  def parse(raw: String): Either[ImportError, Out]

object QtyParser extends Parser:
  type Out = Int
  def parse(raw: String) = parseQty(raw)`,
    },
    {
      id: 'choose',
      label: 'Same contract, different reader',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'user', label: 'Parameter', sub: 'visible in every use', pattern: 'service', icon: 'tag' },
        { id: 'impl', label: 'Member', sub: 'fixed by the implementer', pattern: 'network', icon: 'wrench' },
        { id: 'signature', label: 'Parser[Int]', sub: 'says it in the type', pattern: 'storage', icon: 'search' },
        { id: 'default', label: 'Default', sub: 'the parameter version', pattern: 'user', icon: 'circlecheck' },
      ],
    },
  ],
  edges: [
    { source: 'param', target: 'member', label: 'the same contract' },
    { source: 'member', target: 'choose' },
  ],
}
