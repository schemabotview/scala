import type { Course } from '../types'
import { classes } from './01-classes'
import { objectsCompanions } from './02-objects-companions'
import { caseClasses } from './03-case-classes'
import { enumsSealed } from './04-enums-sealed'
import { patternMatching } from './05-pattern-matching'
import { traits } from './06-traits'
import { equalityInvariants } from './07-equality-invariants'

// Course 4 — SCALA-COURSE-PLAN.md chapter 4.
export const domainModellingCourse: Course = {
  id: 'domain-modelling',
  title: 'Modelling Domains with Products and Alternatives',
  sections: [classes, objectsCompanions, caseClasses, enumsSealed, patternMatching, traits, equalityInvariants],
}
