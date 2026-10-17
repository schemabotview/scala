import type { Section } from '../types'

export const recovery: Section = {
  id: 'recovery',
  title: 'Failures and recovery',
  scene: 'recovery',
  focus: 'recover',
  slide: `## Failures and recovery

A Future can **fail**: it then holds an exception instead of a value. Failure travels through the chain like a \`Left\` through an \`Either\`.

### How failure travels
- \`map\` and \`flatMap\` are **skipped** on a failed Future; the failure passes on
- \`recover\` turns chosen failures back into a **value**
- \`recoverWith\` replaces a failure with **another Future**, such as a fallback lookup

### Not losing failures
- Recover **specific** exceptions; a catch-all hides bugs as defaults
- \`onComplete\` sees both \`Success\` and \`Failure\` — use it for **logging**, not logic
- A Future nobody reads can fail **silently**: its exception is never observed
- Decide per call: is a fallback **correct**, or should the failure reach the report?`,
  narration:
    "A future can fail. When the work inside it throws, the future completes holding that exception instead of a value. From there, failure travels through the chain much like a Left travels through an Either. The first line on the left maps over a lookup for a product that does not exist. The lookup fails, so map is skipped entirely, and the result is the same failure. To get back on track, there are two tools. Recover turns chosen failures into a value. Here, a timeout becomes a price of zero. Recover with turns a failure into another future, such as a lookup in a fallback catalogue for an unknown product. Notice that both name specific exception types. A catch-all recover would turn every bug into a silent default price, which is far worse than a visible failure. On complete runs a callback with either a success or a failure, which makes it suitable for logging, but not for program logic, since nothing waits for it. One hazard deserves a name: a future whose result nobody reads can fail without anyone ever seeing the exception. For every call, decide whether a fallback is genuinely correct, or whether the failure belongs in the report.",
}
