import type { Section } from '../types'

export const purityAndEvaluation: Section = {
  id: 'purity-and-evaluation',
  title: 'Purity, effects and evaluation',
  scene: 'evaluation-table',
  focus: 'table',
  slide: `## Purity, effects and evaluation

A **pure** function's result depends only on its arguments, and calling it changes nothing else. \`next()\` is not pure: it changes \`calls\`, so **when** it runs becomes visible.

### Three evaluation strategies
- **Eager** \`x: Int\` — the argument is evaluated **once, before** the call
- **By-name** \`x: => Int\` — evaluated **at every use**, so \`next()\` runs twice
- \`lazy val\` — evaluated **once, at first use**, then remembered

### What follows from the trace
- With a pure argument, all three give the **same result**; only cost differs
- With an effect, the strategy **changes the answer**: 2 versus 3
- None of them is **asynchronous** — each runs on the caller's thread
- Keep effects like printing and mutation at the **edges**, and calculations pure`,
  narration:
    "A pure function is one whose result depends only on its arguments, and which changes nothing else when it runs. The method next on the left is deliberately not pure. Each call adds one to a counter and returns the new count. That makes it a good probe, because with an effect involved, the moment an expression is evaluated becomes visible. The table traces three strategies, each starting from a counter of zero. Twice eager takes an ordinary parameter. Its argument is evaluated once, before the call, so next runs once, and the result is one plus one, two. Twice by name declares its parameter with an arrow before the type. Now the argument is evaluated every time x is used, so next runs twice, and the result is one plus two, three. The lazy val is evaluated once, at first use, and remembered, so the sum is two again. With a pure argument, all three would agree, and only the cost would differ. With an effect, the strategy changes the answer. None of them is asynchronous. The practical rule follows: keep calculations pure, and push effects like printing and mutation to the edges.",
}
