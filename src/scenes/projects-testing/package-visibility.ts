import type { Scene } from '@graphlearning/flow'

// §1 — a package clause, its imports, and three levels of visibility (CT).
export const packageVisibility: Scene = {
  id: 'package-visibility',
  title: 'Packages and who can see what',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'src/main/scala/orders/parsing/LineParser.scala',
      label: `package orders.parsing

import orders.domain.{ImportError, OrderLine, Sku}

object LineParser:
  def parseLine(row: String): Either[ImportError, OrderLine] = ???
  private[parsing] def splitFields(row: String, n: Int): List[String] = ???
  private def trimAll(fields: List[String]): List[String] = ???

// orders.domain never imports orders.parsing`,
    },
    {
      id: 'levels',
      label: 'Three visibility levels',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'public', label: 'Public', sub: 'parseLine: any package', pattern: 'service', icon: 'share' },
        { id: 'package', label: 'Package-private', sub: 'private[parsing]', pattern: 'network', icon: 'folder' },
        { id: 'private', label: 'Private', sub: 'this object only', pattern: 'warn', icon: 'lock' },
        { id: 'direction', label: 'Direction', sub: 'parsing uses domain', pattern: 'storage', icon: 'sortarrows' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'levels' }],
}
