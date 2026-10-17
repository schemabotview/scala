import type { Scene } from '@graphlearning/flow'

// §6 — an index-driven while beside an element-driven for (VS), stacked.
export const whileVsFor: Scene = {
  id: 'while-vs-for',
  title: 'Two loops, one total',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'while',
      kind: 'code',
      filename: 'while — you own the counter',
      label: `val prices = List(1200, 2550, 500)
var i = 0
var total = 0
while i < prices.length do
  total += prices(i)
  i += 1                // delete this line: never ends`,
    },
    {
      id: 'for',
      kind: 'code',
      filename: 'for — one pass per element',
      label: `var total = 0
for price <- prices do
  total += price        // no index, no off-by-one`,
    },
    {
      id: 'compare',
      label: 'Same result, different risks',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'counter', label: 'Counter', sub: 'start, test, step', pattern: 'warn', icon: 'hash' },
        { id: 'element', label: 'Element', sub: 'the loop supplies it', pattern: 'service', icon: 'repeat' },
        { id: 'termination', label: 'Termination', sub: 'the test must turn false', pattern: 'warn', icon: 'circleslash' },
        { id: 'result', label: 'Result', sub: 'both: total = 4250', pattern: 'external', icon: 'sigma' },
      ],
    },
  ],
  edges: [
    { source: 'while', target: 'for', label: 'same sum' },
    { source: 'for', target: 'compare' },
  ],
}
