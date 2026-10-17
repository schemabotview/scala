import type { Scene } from '@graphlearning/flow'

// §2 — a fully written lambda beside the shorthand forms (VS), stacked.
export const lambdaForms: Scene = {
  id: 'lambda-forms',
  title: 'Long and short lambdas',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'full',
      kind: 'code',
      filename: 'fully written',
      label: `val discount: (Int, Int) => Int =
  (price: Int, percent: Int) => price - price * percent / 100

discount(2000, 10)            // 1800`,
    },
    {
      id: 'short',
      kind: 'code',
      filename: 'shorthand — types from context',
      label: `val prices = List(1200, 2550, 500)
prices.map(p => p * 2)        // List(2400, 5100, 1000)
prices.map(_ * 2)             // the same: _ is the parameter
prices.filter(_ > 1000)       // List(1200, 2550)`,
    },
    {
      id: 'parts',
      label: 'The parts of a lambda',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'type', label: 'Function type', sub: '(Int, Int) => Int', pattern: 'storage', icon: 'tag' },
        { id: 'arrow', label: 'Lambda', sub: 'parameters => body', pattern: 'service', icon: 'zap' },
        { id: 'inferred', label: 'Inferred', sub: 'map expects Int => B', pattern: 'network', icon: 'search' },
        { id: 'placeholder', label: 'Placeholder _', sub: 'each _ is a new parameter', pattern: 'warn', icon: 'pencil' },
      ],
    },
  ],
  edges: [
    { source: 'full', target: 'short', label: 'less to write' },
    { source: 'short', target: 'parts' },
  ],
}
