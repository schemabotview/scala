import type { Scene } from '@graphlearning/flow'

// §4 — a clear aggregation above a speculative "faster" rewrite (VS), stacked.
export const clearVsFast: Scene = {
  id: 'clear-vs-fast',
  title: 'Clear, or faster on a guess',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'clear',
      kind: 'code',
      filename: 'clear — obviously right',
      label: `def totals(lines: List[OrderLine]): Map[String, Int] =
  lines.groupMapReduce(_.sku)(_.total)(_ + _)`,
    },
    {
      id: 'fast',
      kind: 'code',
      filename: 'speculative — is it faster? nobody measured',
      label: `def totalsFast(lines: Array[OrderLine]): mutable.HashMap[String, Int] =
  val m = mutable.HashMap.empty[String, Int]
  var i = 0
  while i < lines.length do
    val l = lines(i)
    m(l.sku) = m.getOrElse(l.sku, 0) + l.total
    i += 1
  m                                  // mutable result leaks to callers`,
    },
    {
      id: 'evidence',
      label: 'What a speed claim needs',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'reasoning', label: 'Cost model', sub: 'both walk the list once', pattern: 'service', icon: 'sigma' },
        { id: 'allocation', label: 'Allocation', sub: 'count the objects made', pattern: 'network', icon: 'memory' },
        { id: 'measure', label: 'Measure', sub: 'JMH, realistic sizes', pattern: 'storage', icon: 'gauge' },
        { id: 'cost', label: 'Real cost', sub: 'mutable, longer, riskier', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [
    { source: 'clear', target: 'fast', label: 'rewritten for speed?' },
    { source: 'fast', target: 'evidence' },
  ],
}
