import type { Scene } from '@graphlearning/flow'

// §6 — partial operations that throw above their total alternatives (VS), stacked.
export const partialVsTotal: Scene = {
  id: 'partial-vs-total',
  title: 'Throwing, or answering for every input',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'partial',
      kind: 'code',
      filename: 'partial — throws for some inputs',
      label: `val code: Option[String] = None
code.get                      // throws NoSuchElementException
List(1200, 500)(5)            // throws IndexOutOfBoundsException

val first: PartialFunction[List[Int], Int] = { case x :: _ => x }
first(Nil)                    // throws MatchError`,
    },
    {
      id: 'total',
      kind: 'code',
      filename: 'total — an answer for every input',
      label: `code.getOrElse("NONE")        // "NONE"
List(1200, 500).lift(5)       // None
first.lift(Nil)               // None
first.isDefinedAt(List(7))    // true`,
    },
    {
      id: 'kinds',
      label: 'Making failure visible',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'get', label: '.get', sub: 'assumes Some', pattern: 'warn', icon: 'skull' },
        { id: 'lift', label: 'lift', sub: 'Option, not a throw', pattern: 'service', icon: 'shieldcheck' },
        { id: 'defined', label: 'isDefinedAt', sub: 'says where it works', pattern: 'network', icon: 'search' },
        { id: 'types', label: 'A => B', sub: 'promises no totality', pattern: 'warn', icon: 'circleslash' },
      ],
    },
  ],
  edges: [
    { source: 'partial', target: 'total', label: 'the total version' },
    { source: 'total', target: 'kinds' },
  ],
}
