import type { Course } from '../types'
import { valuesAndScope } from './01-values-and-scope'
import { typesAndInference } from './02-types-and-inference'
import { numericBoundaries } from './03-numeric-boundaries'
import { strings } from './04-strings'
import { conditions } from './05-conditions'
import { loops } from './06-loops'
import { methodsAndRecursion } from './07-methods-and-recursion'

// Course 2 — SCALA-COURSE-PLAN.md chapter 2.
export const expressionsCourse: Course = {
  id: 'expressions',
  title: 'Values, Expressions, and Methods',
  sections: [valuesAndScope, typesAndInference, numericBoundaries, strings, conditions, loops, methodsAndRecursion],
}
