import type { Course } from '../types'
import { functionsAsValues } from './01-functions-as-values'
import { lambdas } from './02-lambdas'
import { higherOrder } from './03-higher-order'
import { closures } from './04-closures'
import { currying } from './05-currying'
import { purityAndEvaluation } from './06-purity-and-evaluation'

// Course 3 — SCALA-COURSE-PLAN.md chapter 3.
export const functionsCourse: Course = {
  id: 'functions',
  title: 'Functions and Composable Computation',
  sections: [functionsAsValues, lambdas, higherOrder, closures, currying, purityAndEvaluation],
}
