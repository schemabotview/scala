import type { Scene } from '@graphlearning/flow'

// §5 — a property that says something new, above one that restates the implementation (VS).
export const propertyTests: Scene = {
  id: 'property-tests',
  title: 'A useful property, and an echo',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'useful',
      kind: 'code',
      filename: 'useful — a fact about the domain',
      label: `val line = for q <- Gen.choose(1, 99); p <- Gen.choose(1, 100_000)
           yield (q, p)              // the ranges ARE the assumptions

property("line order does not change the total"):
  forAll(Gen.listOf(line)) { lines =>
    totalOf(lines) == totalOf(lines.reverse)
  }`,
    },
    {
      id: 'echo',
      kind: 'code',
      filename: 'an echo — the implementation, copied',
      label: `property("total is the sum of q * p"):
  forAll(Gen.listOf(line)) { lines =>
    totalOf(lines) == lines.map((q, p) => q * p).sum
  }                                  // a wrong formula passes too`,
    },
    {
      id: 'kinds',
      label: 'What a property can show',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'property', label: 'Property', sub: 'holds for every input', pattern: 'service', icon: 'sigma' },
        { id: 'generator', label: 'Generator', sub: 'states the input range', pattern: 'storage', icon: 'gears' },
        { id: 'restated', label: 'Restated', sub: 'checks code against itself', pattern: 'warn', icon: 'copy' },
        { id: 'proof', label: 'Not proof', sub: 'only samples are tried', pattern: 'warn', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'useful', target: 'echo', label: 'compare' },
    { source: 'echo', target: 'kinds' },
  ],
}
