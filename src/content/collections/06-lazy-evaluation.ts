import type { Section } from '../types'

export const lazyEvaluation: Section = {
  id: 'lazy-evaluation',
  title: 'Iterators, views and lazy evaluation',
  scene: 'lazy-forms',
  focus: 'timing',
  slide: `## Iterators, views and lazy evaluation

Lazy collections compute elements **when asked**, not when defined. That saves work, but it moves effects in time, and each kind differs in what it **remembers**.

### Three kinds of later
- An **\`Iterator\`** is consumed as it is read: the second \`sum\` is **0**
- A **view** remembers nothing — each traversal **reruns** the whole \`map\`
- A **\`LazyList\`** computes each element once and **keeps** it, so it can be infinite

### What changes
- \`println\` inside a view runs at \`sum\`, **not** where the view is defined
- Run the view twice and the side effect runs **twice**
- A \`LazyList\` held by a long-lived name keeps **every computed element** in memory
- Use laziness for **large or infinite** inputs; keep effects out of the lazy steps`,
  narration:
    "Every collection so far has been strict: each operation does all of its work immediately. Lazy collections postpone work until an element is actually asked for, and the three kinds on the left differ in what they remember. The iterator is the simplest. Summing it gives forty two fifty, and summing it again gives zero, because reading an iterator consumes it. There is nothing left the second time. A view is a lazy description of a computation. Its map does nothing when the view is defined. The printing happens later, during sum, and it happens again on the second sum, because a view remembers nothing and reruns the whole pipeline on every traversal. The lazy list is the third kind. Each element is computed the first time it is needed, and then kept. That is why it can describe an infinite sequence safely. Taking three computes three, and taking three again reuses them. Two consequences follow. Laziness moves effects in time, so keep printing and mutation out of lazy steps. And a lazy list held by a long-lived name keeps every element it ever computed in memory.",
}
