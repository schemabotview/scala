import type { Scene } from '@graphlearning/flow'

// §4 — dependent parsing steps chained through Either; the first Left stops the chain (PS, as a
// code card over its numbered steps).
export const dependentParse: Scene = {
  id: 'dependent-parse',
  title: 'A chain that stops at the first failure',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ParseLine.scala',
      label: `def parseLine(row: String): Either[ImportError, OrderLine] =
  for
    fields <- splitFields(row, expected = 3)
    sku    <- Sku.parse(fields(0)).toRight(UnknownSku(fields(0)))
    qty    <- parseQty(fields(1))
    price  <- parseCents(fields(2))
  yield OrderLine(sku.code, qty, price)

parseLine("TEA-01,2,1200")     // Right(TEA-01 x2)
parseLine("TEA-01,two,1200")   // Left(BadNumber(qty,two))`,
    },
    {
      id: 'steps',
      label: 'parseLine("TEA-01,two,1200")',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'split', label: '① split', sub: 'three fields: Right', pattern: 'service', icon: 'scissors' },
        { id: 'sku', label: '② sku', sub: 'Option to Either: Right', pattern: 'service', icon: 'tag' },
        { id: 'qty', label: '③ qty', sub: 'Left: the chain stops', pattern: 'warn', icon: 'ban' },
        { id: 'price', label: '④ price', sub: 'never evaluated', pattern: 'network', icon: 'circleslash' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'steps' }],
}
