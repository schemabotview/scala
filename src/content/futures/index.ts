import type { Course } from '../types'
import { concurrencyBasics } from './01-concurrency-basics'
import { futureExecution } from './02-future-execution'
import { startOrder } from './03-start-order'
import { recovery } from './04-recovery'
import { combiningResults } from './05-combining-results'
import { blockingTimeouts } from './06-blocking-timeouts'
import { promises } from './07-promises'

// Course 11 — SCALA-COURSE-PLAN.md chapter 11.
export const futuresCourse: Course = {
  id: 'futures',
  title: 'Concurrency with Futures and Promises',
  sections: [concurrencyBasics, futureExecution, startOrder, recovery, combiningResults, blockingTimeouts, promises],
}
