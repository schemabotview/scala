import type { Section } from '../types'

export const givens: Section = {
  id: 'givens',
  title: 'given instances and using parameters',
  scene: 'explicit-vs-using',
  focus: 'using',
  slide: `## given instances and using parameters

Some arguments are **capabilities**: how to render, how to order, how to compare. A \`using\` parameter lets the compiler pass one for you, from a \`given\` in scope.

### Start explicit
- \`Render[A]\` is an ordinary trait, and \`MoneyRender\` an ordinary **value** of it
- \`show(4250, MoneyRender)\` passes the capability **by hand**
- Nothing here is special yet: it is a **dictionary of functions** passed as an argument

### Then let the compiler pass it
- \`given Render[Int] = MoneyRender\` marks it as the **default** for \`Render[Int]\`
- \`(using r: Render[A])\` declares a parameter the compiler **fills by type**
- \`show(4250)\` and \`show(4250)(using MoneyRender)\` are the **same call**
- If no given matches, the call **does not compile** — it never guesses at run time`,
  narration:
    "Some arguments are not data. They are capabilities: how to render a value, how to order two values, how to compare them. Scala lets the compiler pass such arguments for you, and the clearest way to understand that is to start without it. In the upper card, render of A is an ordinary trait with one method, and money render is an ordinary object implementing it for integers. Show takes a value and a render for that value's type, and the call passes money render by hand. There is nothing special here. A capability is just a small dictionary of functions passed as an argument. The lower card changes two things. Given render of Int equals money render marks that value as the default capability for its type. And show now declares its render in a separate list with the keyword using. That tells the compiler it may fill the parameter itself, by finding a given of the right type. So show of four two five zero receives money render without mentioning it. You can still pass it explicitly with using, and it is the same call. And if no matching given exists, the call does not compile. Nothing is guessed at run time.",
}
