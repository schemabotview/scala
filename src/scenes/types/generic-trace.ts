import type { Scene } from '@graphlearning/flow'

// §1 — a generic class and a generic method, with inference at each call (CT).
export const genericTrace: Scene = {
  id: 'generic-trace',
  title: 'One definition, many element types',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Generic.scala',
      label: `case class Checked[A](value: A, warnings: List[String]):
  def map[B](f: A => B): Checked[B] = Checked(f(value), warnings)

def firstOr[A](xs: List[A], default: A): A =
  xs.headOption.getOrElse(default)

Checked(1200, Nil).map(_ * 2)         // Checked[Int](2400, List())
firstOr(List("TEA-01"), "NONE")       // A = String
firstOr(List(1, 2), "NONE")           // compiles: A widens to a supertype
firstOr[Int](List(1, 2), "NONE")      // ✗ Found: String  Required: Int`,
    },
    {
      id: 'trace',
      label: 'Where A comes from',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'param', label: 'Type parameter', sub: '[A] names a slot', pattern: 'service', icon: 'braces' },
        { id: 'inferred', label: 'Inferred', sub: 'from the arguments', pattern: 'network', icon: 'search' },
        { id: 'widened', label: 'Widened', sub: 'mixed inputs: a supertype', pattern: 'warn', icon: 'scale' },
        { id: 'explicit', label: 'Explicit [Int]', sub: 'turns it into an error', pattern: 'user', icon: 'tag' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
