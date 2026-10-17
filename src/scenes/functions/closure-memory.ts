import type { Scene } from '@graphlearning/flow'

// §4 — a closure over a var (MEM): the function captures the variable, not its value at creation.
export const closureMemory: Scene = {
  id: 'closure-memory',
  title: 'What a closure captures',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Closure.scala',
      label: `var rate = 20
val addTax: Int => Int = cents => cents + cents * rate / 100

addTax(1000)        // 1200
rate = 25
addTax(1000)        // 1250 — same call, different answer

val addTaxAt = (cents: Int, rate: Int) => cents + cents * rate / 100`,
    },
    {
      id: 'memory',
      kind: 'memory',
      label: 'After line 5',
      slots: [
        { at: 'rate', name: '25', note: 'var: was 20', group: 'enclosing scope' },
        { at: 'addTax', name: '→ closure #1', note: 'created when rate was 20', group: 'enclosing scope' },
        { at: '#1', name: 'cents => … rate …', note: 'reads rate at each call', group: 'function object' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'memory', label: 'captured: the variable' }],
}
