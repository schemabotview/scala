import { firstProgramCourse } from './first-program'
import { expressionsCourse } from './expressions'
import { functionsCourse } from './functions'
import { domainModellingCourse } from './domain-modelling'
import { collectionsCourse } from './collections'
import type { Course, Section } from './types'

// Course registry, in syllabus order. Courses are added here as each is authored.
export const COURSES: Record<string, Course> = {
  [firstProgramCourse.id]: firstProgramCourse,
  [expressionsCourse.id]: expressionsCourse,
  [functionsCourse.id]: functionsCourse,
  [domainModellingCourse.id]: domainModellingCourse,
  [collectionsCourse.id]: collectionsCourse,
}

export type { Course, Section }

// slugOf / allSections are the shell's — the slug rule (`<courseId>-<sectionId>`) is part of the
// route contract every recorder drives, so it cannot be a per-repo decision. Re-exported here
// because this module is what the app and the scripts import them from.
export { slugOf, allSections } from '@graphlearning/shell'

export function getCourse(id: string): Course | undefined {
  return COURSES[id]
}
