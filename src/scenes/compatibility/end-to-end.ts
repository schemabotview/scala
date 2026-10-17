import type { Scene } from '@graphlearning/flow'

// §3 — one report traced through the whole application, with a rejected row and an external failure
// (PS).
export const endToEnd: Scene = {
  id: 'end-to-end',
  title: 'One report, start to finish',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'read',
      label: 'Read — chapter 10',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'args', label: 'Arguments', sub: '@main, typed', pattern: 'user', icon: 'terminal' },
        { id: 'env', label: 'Environment', sub: 'currency, defaulted', pattern: 'user', icon: 'gears' },
        { id: 'file', label: 'File', sub: 'Using, UTF-8, 3 rows', pattern: 'user', icon: 'file' },
      ],
    },
    {
      id: 'core',
      label: 'Pure core — chapters 4 to 8',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'parse', label: 'Parse', sub: 'Either per row', pattern: 'service', icon: 'scissors' },
        { id: 'reject', label: 'Row 2 rejected', sub: 'BadNumber(qty,x)', pattern: 'warn', icon: 'ban' },
        { id: 'aggregate', label: 'Aggregate', sub: 'groupMapReduce by SKU', pattern: 'service', icon: 'sigma' },
        { id: 'render', label: 'Render', sub: 'a type class instance', pattern: 'service', icon: 'scroll' },
      ],
    },
    {
      id: 'enrich',
      label: 'Enrich — chapter 11',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'prices', label: 'Price lookups', sub: 'traverse, started early', pattern: 'network', icon: 'zap' },
        { id: 'timeout', label: 'CUP-03 failed', sub: 'kept as a reason', pattern: 'warn', icon: 'clock' },
      ],
    },
    {
      id: 'write',
      label: 'Write — chapter 10',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'stdout', label: 'Report', sub: '2 SKUs priced', pattern: 'external', icon: 'share' },
        { id: 'stderr', label: 'Problems', sub: 'row 2, CUP-03', pattern: 'external', icon: 'bell' },
        { id: 'exit', label: 'Exit code', sub: '1: not all clean', pattern: 'external', icon: 'power' },
      ],
    },
  ],
  edges: [
    { source: 'read', target: 'core' },
    { source: 'core', target: 'enrich' },
    { source: 'enrich', target: 'write' },
  ],
}
