import type { Course } from '../types'
import { readingScala2 } from './01-reading-scala-2'
import { compatibilityKinds } from './02-compatibility-kinds'
import { endToEnd } from './03-end-to-end'
import { performanceEvidence } from './04-performance-evidence'
import { nextSteps } from './05-next-steps'

// Course 12 — SCALA-COURSE-PLAN.md chapter 12.
export const compatibilityCourse: Course = {
  id: 'compatibility',
  title: 'Compatibility, Design Review, and Continued Practice',
  sections: [readingScala2, compatibilityKinds, endToEnd, performanceEvidence, nextSteps],
}
