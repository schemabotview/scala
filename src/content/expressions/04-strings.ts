import type { Section } from '../types'

export const strings: Section = {
  id: 'strings',
  title: 'Strings and interpolation',
  scene: 'interpolation-trace',
  focus: 'trap',
  slide: `## Strings and interpolation

An **interpolator** is a prefix on a string literal that turns values into text. Scala ships three, and each answers a different question.

### The three interpolators
- \`s"…"\` substitutes \`$name\` or \`\${expression}\` using each value's text form
- \`f"…"\` adds **printf-style formats** like \`%.2f\`, and checks that the types match them
- \`raw"…"\` leaves **backslashes** exactly as written
- Every result is a plain \`String\`; the prefix only decides **how it is built**

### Text that looks right until it doesn't
- \`\${total % 100}\` prints 5 cents as \`.5\` — the **padding** is missing
- \`%02d\` or a decimal format fixes it; test with an amount **under ten cents**
- Triple quotes keep line breaks; \`stripMargin\` removes the **indentation** up to \`|\``,
  narration:
    "Programs spend a lot of time turning values into text, and Scala's interpolators make that direct. An interpolator is a prefix on a string literal. With s, a dollar sign followed by a name, or by an expression in braces, is replaced by that value's text. The first interpolated line on the left uses it to print an order total, splitting cents into whole units and remainder. Run it with a total of four thousand two hundred and five, and it prints forty two point five. That is wrong by a factor of ten in the cents, because the remainder is five, and nothing pads it to two digits. The line below uses f instead. F understands formats such as percent zero three d and percent point two f, and the compiler checks that the value given to each format has a matching type. It prints zero one seven, and forty two point zero five. Raw keeps backslashes exactly as typed, which suits paths. And a triple quoted string keeps its line breaks, with strip margin trimming the indentation up to each bar. Whenever money becomes text, test it with an amount under ten cents.",
}
