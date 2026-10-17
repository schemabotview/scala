import type { Scene } from '@graphlearning/flow'

// §1 — a method converted to a function value, stored in a list and applied (CT).
export const functionValues: Scene = {
  id: 'function-values',
  title: 'Functions you can store and pass',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Pricing.scala',
      label: `def withTax(cents: Int): Int = cents + cents * 20 / 100

val addTax: Int => Int = withTax        // method → function value
val half:   Int => Int = cents => cents / 2

val rules: List[Int => Int] = List(addTax, half)
rules.map(rule => rule(1000))           // List(1200, 500)`,
    },
    {
      id: 'trace',
      label: 'Method and function value',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'method', label: 'Method', sub: 'def: part of its scope', pattern: 'service', icon: 'braces' },
        { id: 'value', label: 'Function value', sub: 'type Int => Int', pattern: 'storage', icon: 'box' },
        { id: 'converted', label: 'Converted', sub: 'where a function is expected', pattern: 'network', icon: 'repeat' },
        { id: 'stored', label: 'Stored', sub: 'in a List, like any value', pattern: 'storage', icon: 'table' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
