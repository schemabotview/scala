import type { Scene } from '@graphlearning/flow'

// §2 — parsing a whole untrusted file: every bad line reported with its line number (CT).
export const fileParse: Scene = {
  id: 'file-parse',
  title: 'Every line accounted for',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ParseFile.scala',
      label: `// format: sku,qty,unitCents — one order line per row, no quoting
def parseFile(text: String): (List[OrderLine], List[(Int, ImportError)]) =
  val rows = text.linesIterator.zipWithIndex
    .filter((row, _) => row.trim.nonEmpty)
    .map((row, i) => (i + 1, parseLine(row)))
    .toList
  val good = rows.collect { case (_, Right(line)) => line }
  val bad  = rows.collect { case (n, Left(err))   => (n, err) }
  (good, bad)

parseFile("TEA-01,2,1200\\nMUG-02,x,900\\n")
// (List(TEA-01 x2), List((2,BadNumber(qty,x))))`,
    },
    {
      id: 'trace',
      label: 'Treating the input as untrusted',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'format', label: 'Stated format', sub: 'no quotes, no commas in fields', pattern: 'storage', icon: 'scroll' },
        { id: 'numbers', label: 'Line numbers', sub: 'travel with each error', pattern: 'service', icon: 'hash' },
        { id: 'keep', label: 'Keep going', sub: 'collect every bad row', pattern: 'network', icon: 'funnel' },
        { id: 'csv', label: 'Real CSV', sub: 'needs a real parser', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
