import type { Section } from '../types'

export const concurrencyBasics: Section = {
  id: 'concurrency-basics',
  title: 'Concurrency, parallelism and shared state',
  scene: 'lost-update',
  focus: 'memory',
  slide: `## Concurrency, parallelism and shared state

**Concurrency** is several tasks in progress at once; **parallelism** is several running at the same instant. Either way, shared mutable state becomes a hazard.

### Why the count comes out wrong
- \`processed += 1\` is three steps: **read**, add, **write**
- Two threads can read the same \`57\`, and both write \`58\` — **one update is lost**
- Four threads × 1000 increments usually gives **less than 4000**, and a different number each run

### What to do instead
- Prefer **immutable** results that each task returns, combined afterwards
- If state must be shared, use an **atomic** type: \`incrementAndGet\` is indivisible
- A test that passes once proves little: the bug depends on **timing**
- The next sections avoid shared counters entirely by **returning values**`,
  narration:
    "The final stage of the importer enriches orders by calling slow external services, and doing that well means doing several things at once. Two words first. Concurrency means several tasks are in progress during the same period. Parallelism means several are running at the very same instant, on different cores. Both share one hazard: mutable state that more than one task can touch. The code on the left starts four threads, and each one adds one to a shared counter a thousand times. You would expect four thousand. You will usually get less, and a different number each time. The memory card shows why. Plus equals one is not a single step. It reads the value, adds one, and writes the result back. Thread one reads fifty seven. Before it writes, thread two also reads fifty seven. Thread one writes fifty eight, then thread two writes fifty eight too, and one increment has vanished. An atomic integer performs the whole update as one indivisible step. Better still, avoid sharing altogether: let each task return its result, and combine the results afterwards. That is exactly what futures make natural.",
}
