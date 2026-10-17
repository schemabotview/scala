import type { Section } from '../types'

export const patternMatching: Section = {
  id: 'pattern-matching',
  title: 'Pattern matching and exhaustiveness',
  scene: 'match-trace',
  focus: 'exhaustive',
  slide: `## Pattern matching and exhaustiveness

A \`match\` tries each case **from the top** and evaluates the first one whose pattern fits. Patterns can take a value apart and **bind** its pieces to names.

### Reading the cases
- \`Paid(r)\` matches a paid status and binds its receipt to \`r\`
- \`if r.isEmpty\` is a **guard**: the case fits only if it is also true
- Put the guarded case **before** the general one, or it never runs
- The whole \`match\` is an expression: here, a \`String\`

### What exhaustiveness checking gives you
- \`Status\` is closed, so a missing \`Cancelled\` case is **reported at compile time**
- Unhandled at run time, it would throw a \`MatchError\`
- A wildcard \`case _\` silences the check — and hides **cases added later**
- The check proves **every case is handled**, not that each answer is right`,
  narration:
    "Pattern matching is how code reads a choice type. A match takes a value and tries each case from the top, and the first case whose pattern fits is the one that runs. The method on the left describes a status. Pending is a simple pattern: it matches only the pending case. Paid of r does two things at once. It matches only a paid status, and it binds the receipt inside it to the name r, so the right-hand side can use it. The second case adds a guard, if r is empty. That case fits only when the status is paid and the receipt is empty. Order matters here. Because the guarded case comes first, an empty receipt is caught by it; swap the two, and the general case would take every payment, and the guarded one could never run. Now the important part. Status is closed, so the compiler knows its four cases, and it notices that cancelled is never handled. It warns at compile time. Without that warning, a cancelled order would throw a match error at run time. Be clear about the limit, though: the check proves every case is handled, not that each answer is correct.",
}
