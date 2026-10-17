import type { Section } from '../types'

export const promises: Section = {
  id: 'promises',
  title: 'Promise completion and lifecycle ownership',
  scene: 'promises',
  focus: 'first',
  slide: `## Promise completion and lifecycle ownership

A \`Promise\` is the **write side** of a Future. Whoever holds the Promise completes it, once; everyone holding \`p.future\` reads the result.

### Completing exactly once
- \`trySuccess(1200)\` completes the Future and returns \`true\`
- A later \`tryFailure\` returns \`false\`: the **first completion wins**
- \`success\` on a completed Promise **throws** — use \`try*\` when completions can race

### Owning what you create
- A pool from \`newFixedThreadPool\` belongs to the code that **created** it
- That owner must \`shutdown()\` it, or its threads can keep the JVM **running**
- Futures give no structured lifetime: nothing closes resources **for** you
- Effect libraries add cancellation and scoped lifetimes — a **next-study** topic`,
  narration:
    "Every future so far has been completed by the work inside it. A promise lets you complete one yourself. A promise is the write side, and its future is the read side. Hand out p dot future to as many readers as you like, and keep the promise for the code that will produce the answer. The rule is that a promise is completed exactly once. Try success with twelve hundred completes the future and returns true. When a second completion arrives, here a late failure, try failure returns false, because the first completion already won. Two competing sources, a fast cache and a slow service for instance, can race safely this way. The plain success method, by contrast, throws if the promise is already complete, so prefer the try versions whenever completions might race. The lower half is about ownership. A fixed thread pool belongs to the code that created it, and that code must shut it down. Forget, and its threads can keep the program from exiting. Ordinary futures give no structured lifetime: nothing closes resources for you, and nothing cancels work. Effect libraries add exactly those guarantees, and they are a natural next step after this course.",
}
