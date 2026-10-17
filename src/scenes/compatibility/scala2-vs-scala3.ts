import type { Scene } from '@graphlearning/flow'

// §1 — a Scala 2 fragment and the Scala 3 code with the same intent (VS), stacked.
export const scala2VsScala3: Scene = {
  id: 'scala2-vs-scala3',
  title: 'The same intent in two dialects',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'scala2',
      kind: 'code',
      filename: 'Scala 2 — as you will find it',
      label: `object Report {
  implicit val moneyRender: Render[Int] = new Render[Int] {
    def render(c: Int): String = f"\${c / 100}.\${c % 100}%02d"
  }
  implicit class MoneyOps(val cents: Int) extends AnyVal {
    def asMoney: String = moneyRender.render(cents)
  }
  def show[A](a: A)(implicit r: Render[A]): String = r.render(a)
}
import scala.collection.mutable._`,
    },
    {
      id: 'scala3',
      kind: 'code',
      filename: 'Scala 3 — the same intent',
      label: `object Report:
  given moneyRender: Render[Int] with
    def render(c: Int) = f"\${c / 100}.\${c % 100}%02d"
  extension (cents: Int) def asMoney: String = moneyRender.render(cents)
  def show[A](a: A)(using r: Render[A]): String = r.render(a)
import scala.collection.mutable.*`,
    },
    {
      id: 'map',
      label: 'Reading implicit by its job',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'given', label: 'implicit val', sub: 'a given instance', pattern: 'storage', icon: 'key' },
        { id: 'extension', label: 'implicit class', sub: 'an extension method', pattern: 'service', icon: 'plug' },
        { id: 'using', label: 'implicit param', sub: 'a using parameter', pattern: 'network', icon: 'link' },
        { id: 'wildcard', label: 'import _', sub: 'import * in Scala 3', pattern: 'user', icon: 'search' },
      ],
    },
  ],
  edges: [
    { source: 'scala2', target: 'scala3', label: 'same meaning' },
    { source: 'scala3', target: 'map' },
  ],
}
