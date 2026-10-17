import type { Section } from '../types'

export const pureCore: Section = {
  id: 'pure-core',
  title: 'Separating pure logic from I/O',
  scene: 'pure-core',
  focus: 'core',
  slide: `## Separating pure logic from I/O

The importer now has a shape: a **pure core** that only transforms values, between two thin layers that **read** the world and **change** it.

### The core
- \`parseFile\`, validation, aggregation and rendering are **pure functions**
- Each takes values and returns values — no files, no clock, no environment
- So each is tested with **plain examples**, fast, with no setup

### The shell
- The input side reads arguments, environment and the file, then **hands over values**
- The output side writes stdout and stderr and sets the **exit code**
- Bugs in the shell are about **resources and boundaries**; bugs in the core are logic
- Keep the shell **thin**: if it grows decisions, move them into the core`,
  narration:
    "Put the pieces of this chapter together, and the importer has a clear shape. The diagram shows it as three layers. At the top is the shell that reads the world. It takes the command line arguments, reads the configuration from the environment, and reads the file, safely, with a size limit and a named encoding. Then it hands plain values downward. In the middle is the core, and every function in it is pure. Parse file turns text into good lines and errors. Validation applies the domain rules. Aggregation computes totals per product. Rendering builds the report as a string. None of them opens a file, reads a clock, or looks at the environment. They take values and return values, which is why every one of them can be tested with small, fast examples and no setup at all. At the bottom is the shell that changes the world: the report to standard output, rejected rows to standard error, and the exit code. This separation also tells you where to look when something breaks. Shell bugs are about resources and boundaries; core bugs are about logic. Keep the shell thin, and move any decisions it grows into the core.",
}
