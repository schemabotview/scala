import type { Section } from '../types'

export const performanceEvidence: Section = {
  id: 'performance-evidence',
  title: 'Performance evidence and design trade-offs',
  scene: 'clear-vs-fast',
  focus: 'measure',
  slide: `## Performance evidence and design trade-offs

A rewrite *for speed* is a claim, and claims need **evidence**. Until it is measured, the clear version is the better one.

### Reasoning first
- Both versions walk the lines **once**: the same order of growth
- The rewrite trades an immutable result for a **mutable map** callers can change
- It is longer, index-based, and easier to get **wrong**

### Then measuring
- Count what each version **allocates**; on the JVM, allocation is often the cost
- Measure with a harness such as **JMH**, at realistic sizes, after warm-up
- Keep the faster version only if the gain is **real and needed**
- Most time in this importer is **I/O and network**, not this loop`,
  narration:
    "Sooner or later, someone rewrites clear code to make it faster. The upper card is the clear version from chapter five: group map reduce, one line, obviously correct, returning an immutable map. The lower card is a rewrite for speed. It uses an array, an index, a while loop, and a mutable hash map. Is it faster? Nobody has measured, and that is the point of this section. Start by reasoning. Both versions walk the lines exactly once, so they have the same order of growth. Any difference is a constant factor, and constant factors on the JVM are hard to predict by eye, because the just-in-time compiler optimises running code. What the rewrite certainly costs is visible now: more lines, an index to get wrong, and a mutable map handed to callers, who can change it. Next, reason about allocation, because on the JVM, creating objects is often where the time goes. Then measure, with a benchmarking harness such as JMH, at realistic sizes, after warm-up. Keep the rewrite only if the gain is real and actually needed. In this importer, most of the time is spent reading files and waiting on the network, not in this loop.",
}
