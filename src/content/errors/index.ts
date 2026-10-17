import type { Course } from '../types'
import { option } from './01-option'
import { either } from './02-either'
import { tryBoundary } from './03-try'
import { dependentFailures } from './04-dependent-failures'
import { validation } from './05-validation'
import { totality } from './06-totality'

// Course 6 — SCALA-COURSE-PLAN.md chapter 6.
export const errorsCourse: Course = {
  id: 'errors',
  title: 'Absence, Errors, and Validation',
  sections: [option, either, tryBoundary, dependentFailures, validation, totality],
}
