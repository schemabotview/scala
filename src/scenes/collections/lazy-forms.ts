import type { Scene } from '@graphlearning/flow'

// §6 — a consumed iterator, a recomputing view, and a memoising LazyList (VS), stacked.
export const lazyForms: Scene = {
  id: 'lazy-forms',
  title: 'Three kinds of later',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'iter-view',
      kind: 'code',
      filename: 'iterator · view',
      label: `val it = Iterator(1200, 2550, 500)
it.sum                  // 4250
it.sum                  // 0: already consumed

val v = List(1200, 2550, 500).view.map(p => { println(p); p * 2 })
v.sum                   // prints 3 lines, then 8500
v.sum                   // prints them again: recomputed`,
    },
    {
      id: 'lazylist',
      kind: 'code',
      filename: 'LazyList',
      label: `val hundreds = LazyList.from(1).map(n => n * 100)  // infinite
hundreds.take(3).toList    // List(100, 200, 300): 3 computed
hundreds.take(3).toList    // same; those 3 are remembered`,
    },
    {
      id: 'kinds',
      label: 'When work happens',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'iterator', label: 'Iterator', sub: 'one pass, then empty', pattern: 'warn', icon: 'circleslash' },
        { id: 'view', label: 'View', sub: 'recomputed each time', pattern: 'network', icon: 'repeat' },
        { id: 'lazy', label: 'LazyList', sub: 'computed once, kept', pattern: 'storage', icon: 'memory' },
        { id: 'timing', label: 'Effects move', sub: 'printing happens later', pattern: 'warn', icon: 'clock' },
      ],
    },
  ],
  edges: [
    { source: 'iter-view', target: 'lazylist', label: 'remembering, too' },
    { source: 'lazylist', target: 'kinds' },
  ],
}
