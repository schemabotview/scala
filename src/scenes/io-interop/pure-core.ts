import type { Scene } from '@graphlearning/flow'

// §7 — the importer as a pure core between two thin I/O layers (PS).
export const pureCore: Scene = {
  id: 'pure-core',
  title: 'A pure core inside an I/O shell',
  flow: 'TB',
  nodes: [
    {
      id: 'input',
      label: 'Shell — reads the world',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'args', label: 'Arguments', sub: 'path, maxErrors', pattern: 'user', icon: 'terminal' },
        { id: 'env', label: 'Environment', sub: 'REPORT_CURRENCY', pattern: 'user', icon: 'gears' },
        { id: 'file', label: 'File', sub: 'Using, UTF-8, bounded', pattern: 'user', icon: 'file' },
      ],
    },
    {
      id: 'core',
      label: 'Core — pure functions, no I/O',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'parse', label: 'parseFile', sub: 'text to lines and errors', pattern: 'service', icon: 'scissors' },
        { id: 'validate', label: 'Validate', sub: 'rules from the domain', pattern: 'service', icon: 'shieldcheck' },
        { id: 'aggregate', label: 'Aggregate', sub: 'totals per SKU', pattern: 'service', icon: 'sigma' },
        { id: 'render', label: 'Render', sub: 'a report as a String', pattern: 'service', icon: 'scroll' },
      ],
    },
    {
      id: 'output',
      label: 'Shell — changes the world',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'stdout', label: 'stdout', sub: 'the report', pattern: 'external', icon: 'share' },
        { id: 'stderr', label: 'stderr', sub: 'rejected rows', pattern: 'external', icon: 'bell' },
        { id: 'code', label: 'Exit code', sub: '0 or 1', pattern: 'external', icon: 'power' },
      ],
    },
  ],
  edges: [
    { source: 'input', target: 'core', label: 'plain values in' },
    { source: 'core', target: 'output', label: 'plain values out' },
  ],
}
