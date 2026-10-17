import type { Section } from '../types'

export const closures: Section = {
  id: 'closures',
  title: 'Closures and captured state',
  scene: 'closure-memory',
  focus: 'memory',
  slide: `## Closures and captured state

A **closure** is a function value that uses a name from the scope where it was created. It captures that **variable**, not a snapshot of its value.

### What the trace shows
- \`addTax\` reads \`rate\`, which is defined **outside** the lambda
- The first call uses \`rate = 20\` and returns **1200**
- After \`rate = 25\`, the **same call** returns 1250
- The closure holds **access to the variable**, read again on every call

### Why this is a hazard
- The function's result depends on an input that **does not appear** in its parameters
- A test that passes today can fail after **unrelated code** changes \`rate\`
- Capturing a \`val\` is safe: it can **never change** underneath the function
- Prefer \`addTaxAt(cents, rate)\` — the hidden input becomes **explicit**`,
  narration:
    "A closure is a function value that uses a name from the scope around it, and this section is about exactly what it captures. On the left, rate is a var set to twenty. Add tax is a lambda that computes tax using rate, a name declared outside the lambda. Call add tax with one thousand, and the result is twelve hundred. Now the program sets rate to twenty five and makes the identical call, and the result is twelve fifty. Nothing about the call changed. The memory card shows why. The closure does not hold the number twenty. It holds access to the variable rate itself, and it reads that variable every time it runs. That makes the function's result depend on an input that never appears in its parameter list. A test that passed this morning can fail because some unrelated code changed rate. Capturing a val is safe, because a val can never be re-bound. And the last line shows the general fix: add tax at takes the rate as a parameter. The hidden input has become an explicit one, and every call says exactly what it depends on.",
}
