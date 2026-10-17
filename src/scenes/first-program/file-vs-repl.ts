import type { Scene } from '@graphlearning/flow'

// §4 — running a file vs a REPL session (VS), stacked rather than side by side: two code cards at the
// same rank would sit next to each other and bind the board on width.
export const fileVsRepl: Scene = {
  id: 'file-vs-repl',
  title: 'A file run and a REPL session',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'run',
      kind: 'code',
      filename: 'terminal — run a file',
      label: `$ scala run Order.scala    # compile, then run
Total: 4250`,
    },
    {
      id: 'repl',
      kind: 'code',
      filename: 'terminal — REPL',
      label: `$ scala repl
scala> val prices = List(1200, 2550, 500)
val prices: List[Int] = List(1200, 2550, 500)
scala> prices.sum
val res0: Int = 4250`,
    },
    {
      id: 'choose',
      label: 'Which loop to use',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'file-whole', label: 'File run', sub: 'the whole program, repeatable', pattern: 'service', icon: 'filecode' },
        { id: 'repl-line', label: 'REPL', sub: 'one expression at a time', pattern: 'user', icon: 'terminal' },
        { id: 'echo', label: 'Echoed types', sub: 'name, type and value', pattern: 'network', icon: 'search' },
        { id: 'scratch', label: 'Not saved', sub: 'copy what works into a file', pattern: 'warn', icon: 'pencil' },
      ],
    },
  ],
  edges: [
    { source: 'run', target: 'repl', label: 'same lines, one at a time' },
    { source: 'repl', target: 'choose' },
  ],
}
