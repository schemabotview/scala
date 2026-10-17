import type { Course } from '../types'
import { sourceToRuntime } from './01-source-to-runtime'
import { toolchainVersions } from './02-toolchain-versions'
import { firstProgram } from './03-first-program'
import { repl } from './04-repl'
import { indentationBraces } from './05-indentation-braces'
import { failureStages } from './06-failure-stages'

// Course 1 — SCALA-COURSE-PLAN.md chapter 1. Section ids are fixed in AUTHORING-PLAN.md §5.
export const firstProgramCourse: Course = {
  id: 'first-program',
  title: "A First Program and Scala's Execution Model",
  sections: [sourceToRuntime, toolchainVersions, firstProgram, repl, indentationBraces, failureStages],
}
