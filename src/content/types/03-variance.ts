import type { Section } from '../types'

export const variance: Section = {
  id: 'variance',
  title: 'Variance and substitutability',
  scene: 'variance-trace',
  focus: 'inv',
  slide: `## Variance and substitutability

If a \`Gift\` is a \`Priced\`, is a \`Source[Gift]\` a \`Source[Priced]\`? **Variance** answers that question for each type parameter, and the answer depends on direction.

### Three answers
- **Covariant** \`+A\`: a type that only **produces** \`A\` can follow \`A\` upward
- **Contravariant** \`-A\`: a type that only **consumes** \`A\` goes the other way
- **Invariant** \`A\`: a type that both **reads and writes** \`A\` allows neither

### Why Box must be invariant
- If \`Box[Gift]\` were a \`Box[Priced]\`, you could store a **non-gift** in it
- Code still holding it as \`Box[Gift]\` would then read a **wrong type**
- \`List[+A]\` is covariant because it is immutable **and** declares \`+A\`
- Immutability alone is **not** covariance; the declaration is what the compiler checks`,
  narration:
    "A gift is a priced item. Does it follow that a source of gifts is a source of priced items? Variance is the name for that question, and the answer depends on which direction the values flow. The source trait only produces values; next returns an A. Anything that hands out gifts certainly hands out priced items, so the substitution is safe, and the plus sign declares source covariant. The sink trait only consumes values. A sink that accepts any priced item can certainly accept gifts, so a sink of priced can stand in for a sink of gift. The direction reverses, and the minus sign declares it contravariant. Box both reads and writes its item. Suppose a box of gifts were allowed to be used as a box of priced. Some code could then store an ordinary priced item into it, and code still holding it as a box of gifts would read back something that is not a gift. So box must be invariant, allowing neither substitution. List is covariant, which is why a list of gifts can be passed as a list of priced. That works because List is immutable and declares its parameter with a plus. Immutability alone does not make a type covariant.",
}
