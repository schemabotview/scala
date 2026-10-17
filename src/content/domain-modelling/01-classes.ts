import type { Section } from '../types'

export const classes: Section = {
  id: 'classes',
  title: 'Classes and constructors',
  scene: 'class-trace',
  focus: 'require',
  slide: `## Classes and constructors

A **class** bundles data with the operations on it. Its parameter list is the constructor; the class body runs once, every time an instance is built.

### Parameters and members
- \`val sku\` and \`val qty\` become **public fields** you can read
- \`unitCents\` is a plain parameter — used inside, **invisible** outside
- \`def total\` is **computed on each call**, so it always agrees with the fields

### Checking on construction
- \`require(qty > 0, …)\` runs in the body, so **every** new line is checked
- A violation throws \`IllegalArgumentException\` with your **message**
- Scala 3 builds instances with \`OrderLine(…)\`; \`new\` is **optional**
- A check that throws is blunt; the next section **returns** the failure instead`,
  narration:
    "Until now, the order has been a list of numbers. This chapter gives it a shape, starting with a class. Order line, on the left, bundles a product code, a quantity, and a unit price with the operations that belong to them. The class's parameter list is its constructor. Two of the parameters are marked val, which makes them public fields: line dot qty reads back two. The unit price has no val. It can be used inside the class, and total uses it, but from outside it is not accessible at all, which is the commented error. Total itself is a def, so it is computed each time it is called, and it can never fall out of step with the fields. The body of the class runs every time an instance is built, which makes it the place for a check. Require tests that the quantity is positive. Build a line with a quantity of zero, and require throws an illegal argument exception carrying your message. That guarantees every order line that exists has a positive quantity. Throwing is a blunt way to say no, though. The next section shows a factory that returns the failure as a value.",
}
