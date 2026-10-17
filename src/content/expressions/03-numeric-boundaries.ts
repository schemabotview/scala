import type { Section } from '../types'

export const numericBoundaries: Section = {
  id: 'numeric-boundaries',
  title: 'Arithmetic and numerical boundaries',
  scene: 'numeric-trace',
  focus: 'overflow',
  slide: `## Arithmetic and numerical boundaries

Numbers in Scala have **fixed sizes** and rules at their edges. The compiler checks the types, but not whether a result still fits.

### Integer arithmetic
- \`7 / 2\` is \`3\`: dividing two \`Int\`s **truncates** the fraction
- \`Int.MaxValue + 1\` **wraps** to the most negative \`Int\`, with no error
- \`2_000_000_000 * 2\` overflows too — the multiplication happens **in \`Int\`** before any assignment

### Choosing the representation
- Make an operand \`Long\` **before** the arithmetic, not after it overflows
- \`Double\` is binary floating point: fine for measurements, **wrong for money**
- \`BigDecimal\` with a **named rounding rule** for decimal amounts
- This course keeps money in \`Int\` minor units under a **stated range**`,
  narration:
    "Arithmetic looks like school mathematics until it reaches an edge, and Scala's number types have edges because they have fixed sizes. The first line divides seven by two and gets three, because dividing two integers keeps only the whole part. Make one side a Double, and the answer is three point five. The third line is the one that surprises people. Add one to the largest Int, and the value wraps around to the most negative Int. There is no exception and no warning; the program simply carries on with a wrong number. The fourth line overflows the same way, even though four billion would fit comfortably in a Long, because both operands are Ints and the multiplication happens in Int. The fix is to make an operand a Long before multiplying, as the fifth line does. For money, binary Doubles are the wrong tool, since most decimal fractions cannot be stored exactly. BigDecimal can, but rounding then needs a rule you name, like half even. This course stores money as Int cents, and says out loud the range that assumption covers.",
}
