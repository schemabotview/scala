import type { Scene } from '@graphlearning/flow'

// §4 — foldLeft with an initial value, the empty case, and a pair accumulator (CT).
export const foldTrace: Scene = {
  id: 'fold-trace',
  title: 'Folding a list into one answer',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Fold.scala',
      label: `val totals = List(2400, 500, 6000)

totals.foldLeft(0)(_ + _)              // 8900
List.empty[Int].foldLeft(0)(_ + _)     // 0
List.empty[Int].reduce(_ + _)          // throws: empty.reduceLeft

totals.foldLeft((0, 0)) { case ((count, sum), t) =>
  (count + 1, sum + t)
}                                      // (3, 8900)`,
    },
    {
      id: 'trace',
      label: 'Parts of a fold',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'initial', label: 'Initial value', sub: 'and the empty answer', pattern: 'service', icon: 'circlecheck' },
        { id: 'step', label: 'Step', sub: '(acc, x) => next acc', pattern: 'network', icon: 'repeat' },
        { id: 'reduce', label: 'reduce', sub: 'no initial: empty throws', pattern: 'warn', icon: 'ban' },
        { id: 'pair', label: 'Accumulator', sub: 'any type: a pair here', pattern: 'storage', icon: 'box' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
