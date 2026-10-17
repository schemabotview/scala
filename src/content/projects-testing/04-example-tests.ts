import type { Section } from '../types'

export const exampleTests: Section = {
  id: 'example-tests',
  title: 'Example-based tests and edge cases',
  scene: 'example-tests',
  focus: 'edge',
  slide: `## Example-based tests and edge cases

An **example-based test** fixes one input and states the answer you expect. A good suite pins down the normal case, the **failure** cases and the **edges**.

### Three tests, three jobs
- A valid line gives \`Right(2400)\` — the **normal** path
- A word as the quantity gives the exact \`BadNumber\` — the **failure** path
- An empty file totals \`0\` — the **edge** where loops and folds go wrong

### Writing them well
- The test name states the **rule**, so a failure report reads as a sentence
- Compare whole values with \`assertEquals\`; a failure shows **both** sides
- Choose edges deliberately: empty, one element, the **largest** stated value
- A passing suite shows these cases work — **not** that all cases do`,
  narration:
    "An example-based test is the simplest kind there is. You fix one input, run the code, and state the answer you expect. The suite on the left uses the munit library, and each of its three tests has a different job. The first is the normal path. A valid line, tea zero one, quantity two, at twelve hundred, should give a total of twenty four hundred, wrapped in Right. The second is the failure path. The quantity is the word two, and the test does not merely check that parsing failed. It checks that the failure is exactly a bad number for the field quantity, with the raw text two. Errors are behaviour too, and they deserve the same precision. The third is an edge case. An empty file should total zero. Empty inputs are where loops, folds, and reductions most often go wrong. Notice how the tests are named. Each name states a rule, so when one fails, the report reads like a sentence about what broke. Assert equals compares whole values and shows both sides when they differ. Be honest about what a green suite means: these cases work. It does not show that every case does.",
}
