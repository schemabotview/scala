import type { Section } from '../types'

export const failureStages: Section = {
  id: 'failure-stages',
  title: 'Compile, runtime and logic failures',
  scene: 'failure-stages',
  focus: 'logic',
  slide: `## Compile, runtime and logic failures

Every failure happens at a **stage**. Locate the stage first; it decides what evidence exists and what to read.

### Three mistakes, three stages
- **Compile** — \`"4250"\` is a \`String\` where an \`Int\` is required, so nothing runs
- **Runtime** — \`prices(5)\` asks a three-item list for index 5 and **throws**
- **Logic** — \`prices.tail.sum\` runs cleanly and prints **3050**, not 4250
- The stage also says **who notices**: the compiler, the user, or nobody

### What to read first
- Compile error: the **file and line**, then the found and required types
- Exception: the **first stack frame in your code**, not the deepest one
- Wrong answer: compare against an **expected value** you wrote down before running`,
  narration:
    "Programs fail, and the fastest way to fix one is to ask first when it failed. The card on the left holds three mistakes, and each one fails at a different stage. The first assigns a piece of text to a value declared as an integer. The compiler rejects it. Nothing runs, and the error names the file, the line, the type it found, and the type it required. Read those two types before anything else. The second compiles without complaint, because asking a list for index five is perfectly well typed. But the list has three items, so at run time it throws an index out of bounds exception. Here the evidence is a stack trace, and the useful line is the first frame that points into your own code. The third is the dangerous one. Tail drops the first price, the sum is thirty fifty, and the program prints it happily. No error, no exception. The only way to catch it is to know the expected answer, forty two fifty, before running. Compile time, run time, logic: name the stage, and you know where to look.",
}
