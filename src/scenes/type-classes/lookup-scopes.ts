import type { Scene } from '@graphlearning/flow'

// §3 — where the compiler finds a given: the lexical scope (with given imports), then the companions
// of the types involved (PS as code + the places searched).
export const lookupScopes: Scene = {
  id: 'lookup-scopes',
  title: 'Where a given is found',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Lookup.scala',
      label: `object Formats:
  given Render[Int] with
    def render(c: Int) = s"$c cents"

case class Order(id: Int)
object Order:
  given Render[Order] with               // in Order's companion
    def render(o: Order) = s"order \${o.id}"

show(Order(17))        // "order 17": found in the companion
// show(4250)          ✗ No given instance of type Render[Int]
import Formats.given   // Formats.* alone would NOT bring it in
show(4250)             // "4250 cents"`,
    },
    {
      id: 'places',
      label: 'Places the compiler searches',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'local', label: 'This scope', sub: 'defined or imported here', pattern: 'service', icon: 'search' },
        { id: 'import', label: 'import .given', sub: 'givens need it named', pattern: 'network', icon: 'key' },
        { id: 'companion', label: 'Companions', sub: 'of Render and of Order', pattern: 'storage', icon: 'link' },
        { id: 'missing', label: 'Not found', sub: 'a compile error, by type', pattern: 'warn', icon: 'ban' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'places' }],
}
