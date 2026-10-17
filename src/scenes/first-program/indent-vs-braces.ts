import type { Scene } from '@graphlearning/flow'

// §5 — one program in two layouts (VS). Stacked, with the shared meaning underneath.
export const indentVsBraces: Scene = {
  id: 'indent-vs-braces',
  title: 'Indentation and braces',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'indent',
      kind: 'code',
      filename: 'indentation (this course)',
      label: `@main def orderTotal(): Unit =
  val total = List(1200, 2550, 500).sum
  if total > 4000 then
    println(s"Large order: $total")
  else
    println(s"Total: $total")
end orderTotal`,
    },
    {
      id: 'braces',
      kind: 'code',
      filename: 'braces (existing code)',
      label: `@main def orderTotal(): Unit = {
  val total = List(1200, 2550, 500).sum
  if (total > 4000) println(s"Large order: $total")
  else println(s"Total: $total")
}`,
    },
    {
      id: 'same',
      label: 'Same program',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'colon', label: 'Indentation', sub: 'the block is the indent', pattern: 'service', icon: 'ruler' },
        { id: 'end', label: 'end marker', sub: 'optional; closes long blocks', pattern: 'service', icon: 'scissors' },
        { id: 'then', label: 'then', sub: 'replaces the parentheses', pattern: 'network', icon: 'gitbranch' },
        { id: 'rewrite', label: '-rewrite', sub: 'converts either way', pattern: 'storage', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'indent', target: 'braces', label: 'same semantics' },
    { source: 'braces', target: 'same' },
  ],
}
