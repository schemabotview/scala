import type { Scene } from '@graphlearning/flow'

// §6 — three failures at three stages (CT). Each trace row pairs a stage with what to read for it;
// `cols: 2` keeps the board near 1:1 — `cols: 3` measured 0.45 area, wide and short.
export const failureStages: Scene = {
  id: 'failure-stages',
  title: 'Where a failure happens',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Order.scala — three mistakes',
      label: `val prices = List(1200, 2550, 500)

val total: Int = "4250"     // ① type mismatch
val fifth = prices(5)       // ② IndexOutOfBounds
val sum   = prices.tail.sum // ③ runs; prints 3050`,
    },
    {
      id: 'stages',
      label: 'Stage first, then the fix',
      pattern: 'group',
      cols: 2, // each row: the stage, then what to read for it
      children: [
        { id: 'compile', label: '① Compile', sub: 'rejected; nothing runs', pattern: 'warn', icon: 'ban' },
        { id: 'read-error', label: 'Read the error', sub: 'file, line, both types', pattern: 'service', icon: 'search' },
        { id: 'runtime', label: '② Runtime', sub: 'starts, then throws', pattern: 'warn', icon: 'zap' },
        { id: 'read-trace', label: 'Read the trace', sub: 'first frame in your code', pattern: 'service', icon: 'scroll' },
        { id: 'logic', label: '③ Logic', sub: 'runs, wrong answer', pattern: 'warn', icon: 'bug' },
        { id: 'expected', label: 'Compare', sub: 'expected 4250, got 3050', pattern: 'service', icon: 'scale' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'stages' }],
}
