import type { Section } from '../types'

export const firstProgram: Section = {
  id: 'first-program',
  title: 'First program and entry point',
  scene: 'order-total-main',
  focus: 'total',
  slide: `## First program and entry point

Five lines compute an order total. **\`@main\`** marks where running begins; everything else is values and one call that prints.

### Reading it line by line
- Amounts are **minor units**: \`1200\` means 12.00, so there is no rounding yet
- \`prices\` is a \`List[Int]\` — the compiler **infers** the type from the values
- \`prices.sum\` adds them: \`total\` is an \`Int\` with the value **4250**

### Printing is the only effect
- \`s"Total: $total"\` builds a string by **interpolation**
- \`println\` returns \`Unit\` — it is run for its effect, not its result
- \`@main\` generates a class named \`orderTotal\` with a standard JVM **\`main\`**
- Indentation after \`=\` is the **method body**; no braces needed`,
  narration:
    "Here is the first program, and it already contains the shape of the whole course: an order and its total. The method is marked with the at main annotation, which tells the compiler to generate an entry point, the place where running begins. Inside, the first value is a list of prices. They are written in minor units, so twelve hundred means twelve point zero zero. That choice keeps the arithmetic exact for now; decimals and rounding come later, when they are needed. Notice that no type is written. The compiler infers that prices is a list of integers from the values themselves. The next line asks the list for its sum, which gives an integer, forty two fifty. Then the last line builds a string with interpolation, substituting the total into the text, and prints it. Printing is the only effect here. The println call returns a value of type Unit, which carries no information; it exists to say this was done for its effect. Everything indented under the equals sign is the method's body. Run it, and Total colon four thousand two hundred fifty appears.",
}
