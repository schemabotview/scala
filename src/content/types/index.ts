import type { Course } from '../types'
import { generics } from './01-generics'
import { bounds } from './02-bounds'
import { variance } from './03-variance'
import { typeMembers } from './04-type-members'
import { opaqueTypes } from './05-opaque-types'
import { unionIntersection } from './06-union-intersection'
import { inferenceFailures } from './07-inference-failures'

// Course 7 — SCALA-COURSE-PLAN.md chapter 7.
export const typesCourse: Course = {
  id: 'types',
  title: 'Types for Reusable and Precise APIs',
  sections: [generics, bounds, variance, typeMembers, opaqueTypes, unionIntersection, inferenceFailures],
}
