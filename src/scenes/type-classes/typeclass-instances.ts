import type { Scene } from '@graphlearning/flow'

// §4 — a type class with instances in its companion, including one built from another (CT).
export const typeclassInstances: Scene = {
  id: 'typeclass-instances',
  title: 'One interface, an instance per type',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Render.scala',
      label: `trait Render[A]:
  def render(a: A): String

object Render:
  given Render[Int] with
    def render(c: Int) = f"\${c / 100}.\${c % 100}%02d"
  given Render[String] with
    def render(s: String) = s
  given [A](using r: Render[A]): Render[List[A]] with
    def render(xs: List[A]) = xs.map(r.render).mkString("[", ", ", "]")

show(List(1200, 505))           // "[12.00, 5.05]"`,
    },
    {
      id: 'trace',
      label: 'The parts of a type class',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'interface', label: 'Interface', sub: 'Render[A]: what A can do', pattern: 'service', icon: 'braces' },
        { id: 'instances', label: 'Instances', sub: 'one given per type', pattern: 'storage', icon: 'boxes' },
        { id: 'derived', label: 'Built from', sub: 'List from its element', pattern: 'network', icon: 'layers' },
        { id: 'open', label: 'Open', sub: 'new types, no edits here', pattern: 'user', icon: 'plug' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
