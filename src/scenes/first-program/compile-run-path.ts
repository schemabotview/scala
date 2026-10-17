import type { Scene } from '@graphlearning/flow'

// §1 — source → compiler → JVM → output, restacked (PS): each stage is a 2-column container so the
// board grows down toward the pane's ~1:1 aspect instead of running off as a flat LR chain. The top row
// is 3 wide so the board is not a narrow tower: 2-wide measured 0.52 area, 4-wide stages 0.41.
export const compileRunPath: Scene = {
  id: 'compile-run-path',
  title: 'From source to printed total',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'source',
      label: 'You write',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'file', label: 'Order.scala', sub: 'plain UTF-8 text', pattern: 'storage', icon: 'filecode' },
        { id: 'entry', label: '@main method', sub: 'where running starts', pattern: 'user', icon: 'zap' },
        { id: 'runner', label: 'scala run', sub: 'drives both stages', pattern: 'user', icon: 'terminal' },
      ],
    },
    {
      id: 'compile',
      label: 'Compile time — the Scala compiler',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'parse', label: 'Parse', sub: 'text into a syntax tree', pattern: 'service', icon: 'braces' },
        { id: 'typecheck', label: 'Type-check', sub: 'mismatches stop here', pattern: 'service', icon: 'shieldcheck' },
        { id: 'bytecode', label: 'Bytecode', sub: '.class files for the JVM', pattern: 'storage', icon: 'box' },
        { id: 'tasty', label: 'TASTy', sub: 'typed trees for tools', pattern: 'storage', icon: 'layers' },
      ],
    },
    {
      id: 'run',
      label: 'Run time — the JVM',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'load', label: 'Class loading', sub: 'finds the main class', pattern: 'network', icon: 'folder' },
        { id: 'library', label: 'Scala library', sub: 'a jar on the classpath', pattern: 'network', icon: 'boxes' },
        { id: 'execute', label: 'Execute', sub: 'interpreted, then JIT', pattern: 'service', icon: 'cpu' },
        { id: 'output', label: 'Output', sub: 'Total: 4250', pattern: 'external', icon: 'terminal' },
      ],
    },
  ],
  edges: [
    { source: 'source', target: 'compile', label: 'scalac' },
    { source: 'compile', target: 'run', label: 'java' },
  ],
}
