import type { Scene } from '@graphlearning/flow'

// §2 — Either with a domain error enum (CT).
export const eitherTrace: Scene = {
  id: 'either-trace',
  title: 'Success or a typed reason',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ParseQty.scala',
      label: `enum ImportError:
  case MissingField(name: String)
  case BadNumber(field: String, raw: String)
  case UnknownSku(code: String)

def parseQty(raw: String): Either[ImportError, Int] =
  raw.toIntOption match
    case Some(n) if n > 0 => Right(n)
    case _                => Left(ImportError.BadNumber("qty", raw))

parseQty("3")                  // Right(3)
parseQty("three")              // Left(BadNumber(qty,three))
parseQty("3").map(_ * 1200)    // Right(3600)`,
    },
    {
      id: 'trace',
      label: 'Two sides, one type',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'right', label: 'Right', sub: 'the success value', pattern: 'service', icon: 'circlecheck' },
        { id: 'left', label: 'Left', sub: 'a typed reason', pattern: 'warn', icon: 'ban' },
        { id: 'map', label: 'map', sub: 'touches Right only', pattern: 'network', icon: 'repeat' },
        { id: 'enum', label: 'Domain errors', sub: 'an enum you can match', pattern: 'storage', icon: 'layers' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
