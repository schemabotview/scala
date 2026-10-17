import type { Course } from '../types'
import { choosingCollections } from './01-choosing-collections'
import { mutability } from './02-mutability'
import { mapFilterFlatMap } from './03-map-filter-flatmap'
import { folds } from './04-folds'
import { forExpressions } from './05-for-expressions'
import { lazyEvaluation } from './06-lazy-evaluation'
import { complexity } from './07-complexity'

// Course 5 — SCALA-COURSE-PLAN.md chapter 5.
export const collectionsCourse: Course = {
  id: 'collections',
  title: 'Collections and Data Transformation',
  sections: [choosingCollections, mutability, mapFilterFlatMap, folds, forExpressions, lazyEvaluation, complexity],
}
