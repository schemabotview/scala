import type { Scene } from '@graphlearning/flow'

// §6 — eager, by-name and lazy evaluation traced with one counter (TB). Each row starts at calls = 0.
export const evaluationTable: Scene = {
  id: 'evaluation-table',
  title: 'When an argument is evaluated',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Evaluation.scala',
      label: `var calls = 0
def next(): Int =
  calls += 1
  calls

def twiceEager(x: Int): Int     = x + x
def twiceByName(x: => Int): Int = x + x
lazy val cached = next()        // cached + cached`,
    },
    {
      id: 'table',
      kind: 'table',
      label: 'Each row starts from calls = 0',
      headers: ['Form', 'next() runs', 'Result', 'calls'],
      values: [
        ['twiceEager(next())', 'once, before the call', '1 + 1 = 2', '1'],
        ['twiceByName(next())', 'at every use of x', '1 + 2 = 3', '2'],
        ['cached + cached', 'once, at first use', '1 + 1 = 2', '1'],
      ],
    },
  ],
  edges: [{ source: 'code', target: 'table' }],
}
