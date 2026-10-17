import type { Scene } from '@graphlearning/flow'

// §5 — multiple parameter lists vs a curried function vs partial application (VS), stacked.
export const currying: Scene = {
  id: 'currying',
  title: 'Supplying arguments in stages',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'lists',
      kind: 'code',
      filename: 'multiple parameter lists',
      label: `def price(rate: Int)(cents: Int): Int =
  cents + cents * rate / 100

val vat: Int => Int = price(20)      // first list supplied
List(1000, 500).map(price(20))       // List(1200, 600)`,
    },
    {
      id: 'curried',
      kind: 'code',
      filename: 'curried function · partial application',
      label: `val curried: Int => Int => Int =
  rate => cents => cents + cents * rate / 100
curried(20)(1000)                    // 1200

def plain(rate: Int, cents: Int): Int = cents + cents * rate / 100
val vat2 = plain(20, _)              // Int => Int`,
    },
    {
      id: 'parts',
      label: 'Three ways to fix the rate',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'stages', label: 'Parameter lists', sub: 'supplied one list at a time', pattern: 'service', icon: 'layers' },
        { id: 'chain', label: 'Curried', sub: 'one argument per arrow', pattern: 'network', icon: 'link' },
        { id: 'partial', label: 'Partial', sub: '_ marks the missing one', pattern: 'user', icon: 'scissors' },
        { id: 'reuse', label: 'Same result', sub: 'configure once, reuse', pattern: 'external', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'lists', target: 'curried', label: 'the same idea, spelled out' },
    { source: 'curried', target: 'parts' },
  ],
}
