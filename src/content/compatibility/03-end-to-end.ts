import type { Section } from '../types'

export const endToEnd: Section = {
  id: 'end-to-end',
  title: 'End-to-end application synthesis',
  scene: 'end-to-end',
  focus: 'reject',
  slide: `## End-to-end application synthesis

One import, traced from the command line to the exit code. Every stage is a chapter of this course, and every **failure** has a place to go.

### The path of one report
- **Read**: typed arguments, an environment default, a file opened with \`Using\`
- **Core**: rows parsed to \`Either\`, totals by \`groupMapReduce\`, rendered by a type class
- **Enrich**: price lookups started together with \`traverse\`
- **Write**: the report, the problems, and an **exit code** that tells the truth

### Two failures, both reported
- Row 2's quantity \`x\` becomes \`BadNumber\` — a **rejected record**, with its line number
- CUP-03's lookup fails — an **external failure**, kept as a reason, not a crash
- Exit code 1 says *done, but not clean* — the caller **decides** what that means`,
  narration:
    "Here is the whole application, with one import traced from the command line to the exit code. Each layer in the diagram is a chapter you have already worked through. The read layer takes typed arguments from at main, reads the currency from the environment with a default, and opens the file with using, in UTF eight, within a size limit. The file has three rows. The pure core parses each row into an either. Row two has the letter x where a quantity belongs, so it becomes a bad number error, carrying its line number: a rejected record. The good rows are aggregated by product with group map reduce, and the report is rendered through the render type class. The enrich layer starts all the price lookups together with traverse, recovering inside each one. The lookup for cup zero three fails, so it is kept as a reason rather than crashing the import: an external failure. Finally, the write layer prints the report for two priced products, writes the two problems to standard error, and exits with status one, meaning done, but not clean. Neither failure was a surprise. Each had a designed place to go, and that is the real outcome of this course.",
}
