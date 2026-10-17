import type { Scene } from '@graphlearning/flow'

// §4 — example-based tests for the parser: success, failure and the empty case (CT).
export const exampleTests: Scene = {
  id: 'example-tests',
  title: 'Examples that pin behaviour down',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'LineParserSuite.scala',
      label: `class LineParserSuite extends munit.FunSuite:
  test("a valid line gives its total"):
    assertEquals(parseLine("TEA-01,2,1200").map(_.total), Right(2400))

  test("a word as quantity is a BadNumber"):
    assertEquals(parseLine("TEA-01,two,1200").map(_.total),
                 Left(ImportError.BadNumber("qty", "two")))

  test("an empty file totals zero"):
    assertEquals(totalOf(Nil), 0)`,
    },
    {
      id: 'trace',
      label: 'What the three tests cover',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'example', label: 'Example', sub: 'one input, one answer', pattern: 'service', icon: 'circlecheck' },
        { id: 'failure', label: 'Failure path', sub: 'the Left is checked too', pattern: 'warn', icon: 'ban' },
        { id: 'edge', label: 'Edge case', sub: 'empty, zero, one', pattern: 'network', icon: 'ruler' },
        { id: 'name', label: 'Test name', sub: 'states the rule', pattern: 'storage', icon: 'pencil' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
