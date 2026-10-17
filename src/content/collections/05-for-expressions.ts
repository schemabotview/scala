import type { Section } from '../types'

export const forExpressions: Section = {
  id: 'for-expressions',
  title: 'for expressions and desugaring',
  scene: 'for-desugar',
  focus: 'outer',
  slide: `## for expressions and desugaring

A \`for … yield\` expression is **notation**, not a loop. The compiler rewrites it into \`flatMap\`, \`withFilter\` and \`map\`, so its meaning is exactly theirs.

### The translation
- Each **outer** generator \`x <- xs\` becomes a \`flatMap\`
- The **last** generator becomes a \`map\` that produces the \`yield\` value
- An \`if\` guard becomes \`withFilter\`, which **skips** elements without copying

### Why it matters
- Both versions produce \`List(1:TEA-01, 3:TEA-01)\` — **identical** results
- Nested generators read like nested loops, but each yields a **value**
- Any type with \`map\` and \`flatMap\` works — chapter 6 uses it for **errors**
- When a \`for\` is confusing, **desugar it by hand** and read the combinators`,
  narration:
    "Chapter two used for as a loop. With yield added, it becomes an expression that produces a value, and the compiler treats it as notation for combinators you already know. The upper card asks for every order and every line in that order, keeps the lines with a quantity above one, and yields a label made of the order id and the product code. The lower card is what the compiler writes for you. The outer generator, order taken from orders, becomes a flat map. The last generator, line taken from the order's lines, becomes a map, and the value it produces is whatever the yield says. The guard becomes with filter, which skips the lines that fail the test without building an intermediate list. Run either version, and the result is the same: one colon tea and three colon tea. Order two has no lines, so it contributes nothing, and the mug line fails the guard. This translation is the reason for expressions matter so much. Anything with map and flat map can be written this way, and chapter six uses exactly the same notation to chain operations that might fail. When a for expression confuses you, desugar it by hand.",
}
