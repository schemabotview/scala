import type { Course } from '../types'
import { packagesVisibility } from './01-packages-visibility'
import { modules } from './02-modules'
import { sbtBuild } from './03-sbt-build'
import { exampleTests } from './04-example-tests'
import { propertyTests } from './05-property-tests'
import { diagnostics } from './06-diagnostics'

// Course 9 — SCALA-COURSE-PLAN.md chapter 9.
export const projectsTestingCourse: Course = {
  id: 'projects-testing',
  title: 'Project Structure, Testing, and Build Evidence',
  sections: [packagesVisibility, modules, sbtBuild, exampleTests, propertyTests, diagnostics],
}
