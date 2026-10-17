import type { Scene } from '@graphlearning/flow'

// §1 — extension methods on Int, and what the compiler rewrites them to (CT).
export const extensionTrace: Scene = {
  id: 'extension-trace',
  title: 'New methods on an existing type',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'MoneySyntax.scala',
      label: `extension (cents: Int)
  def asMoney: String = f"\${cents / 100}.\${cents % 100}%02d"
  def withTax(rate: Int): Int = cents + cents * rate / 100

4205.asMoney                 // "42.05"
1000.withTax(20).asMoney     // "12.00"

// what the compiler calls:  asMoney(withTax(1000)(20))`,
    },
    {
      id: 'trace',
      label: 'Method syntax, function underneath',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'receiver', label: 'Receiver', sub: '(cents: Int) before the dot', pattern: 'storage', icon: 'box' },
        { id: 'syntax', label: 'Call syntax', sub: 'reads like a method', pattern: 'service', icon: 'pencil' },
        { id: 'function', label: 'Underneath', sub: 'an ordinary function', pattern: 'network', icon: 'braces' },
        { id: 'scope', label: 'Scope', sub: 'visible only if imported', pattern: 'warn', icon: 'lock' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
