import type { Course } from '../types'
import { pathsEncodings } from './01-paths-encodings'
import { untrustedParsing } from './02-untrusted-parsing'
import { resourceRelease } from './03-resource-release'
import { javaCalls } from './04-java-calls'
import { nullBoundaries } from './05-null-boundaries'
import { entryPoints } from './06-entry-points'
import { pureCore } from './07-pure-core'

// Course 10 — SCALA-COURSE-PLAN.md chapter 10.
export const ioInteropCourse: Course = {
  id: 'io-interop',
  title: 'Files, Resources, and Java Interoperability',
  sections: [pathsEncodings, untrustedParsing, resourceRelease, javaCalls, nullBoundaries, entryPoints, pureCore],
}
