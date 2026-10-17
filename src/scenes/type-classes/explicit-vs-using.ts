import type { Scene } from '@graphlearning/flow'

// §2 — the same capability passed explicitly, then supplied by the compiler (VS), stacked.
export const explicitVsUsing: Scene = {
  id: 'explicit-vs-using',
  title: 'Passing a capability, or letting the compiler',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'explicit',
      kind: 'code',
      filename: 'explicit argument',
      label: `trait Render[A]:
  def render(a: A): String

object MoneyRender extends Render[Int]:
  def render(c: Int) = f"\${c / 100}.\${c % 100}%02d"

def show[A](a: A, r: Render[A]): String = r.render(a)
show(4250, MoneyRender)                 // "42.50"`,
    },
    {
      id: 'using-code',
      kind: 'code',
      filename: 'given and using',
      label: `given Render[Int] = MoneyRender

def show[A](a: A)(using r: Render[A]): String = r.render(a)
show(4250)                              // "42.50": supplied
show(4250)(using MoneyRender)           // or passed by hand`,
    },
    {
      id: 'parts',
      label: 'Who provides the Render',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'capability', label: 'Capability', sub: 'Render[A]: a value', pattern: 'storage', icon: 'key' },
        { id: 'given', label: 'given', sub: 'the default for its type', pattern: 'service', icon: 'circlecheck' },
        { id: 'using', label: 'using', sub: 'a parameter it fills', pattern: 'network', icon: 'plug' },
        { id: 'same', label: 'Same call', sub: 'explicit still works', pattern: 'user', icon: 'repeat' },
      ],
    },
  ],
  edges: [
    { source: 'explicit', target: 'using-code', label: 'the compiler passes it' },
    { source: 'using-code', target: 'parts' },
  ],
}
