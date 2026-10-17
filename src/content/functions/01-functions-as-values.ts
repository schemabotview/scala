import type { Section } from '../types'

export const functionsAsValues: Section = {
  id: 'functions-as-values',
  title: 'Functions as values',
  scene: 'function-values',
  focus: 'value',
  slide: `## Functions as values

A **function value** is a computation you can hold in a name, store in a list and pass as an argument. Its type is written with an arrow: \`Int => Int\`.

### Methods and function values
- A \`def\` is a **method**: it belongs to the class or object that declares it
- \`Int => Int\` is a **value** of a function type, like \`3\` is a value of \`Int\`
- Where a function is expected, Scala 3 **converts** a method automatically
- Calling either looks the same: \`addTax(1000)\` is \`1200\`

### What that makes possible
- \`rules\` is a \`List[Int => Int]\` — data that **contains behaviour**
- \`rules.map(rule => rule(1000))\` applies each rule in turn
- New pricing rules become **new values**, not new branches in an \`if\``,
  narration:
    "So far, every value has been a number, a string, or a collection. This section adds one more kind: a value that is itself a computation. The first line on the left is an ordinary method, with tax, which adds twenty percent. The next line binds it to the name add tax, whose type is written with an arrow: Int arrow Int, a function from an integer to an integer. Because a function is expected there, Scala converts the method into a function value automatically. The line below writes a function value directly, as a lambda that halves its input. Now the useful part. Both function values have the same type, so they can sit together in a list. Rules is a list of functions, data that contains behaviour. Mapping over it applies each rule to one thousand, giving twelve hundred and five hundred. The point is not the arithmetic. It is that a new pricing rule can now be added as a new value in a list, without editing a chain of if branches. The rest of this chapter builds on that single idea: computations can be passed around like any other value.",
}
