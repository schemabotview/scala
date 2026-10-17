import type { Scene } from '@graphlearning/flow'
import { compileRunPath } from './compile-run-path'
import { toolchainPins } from './toolchain-pins'
import { orderTotalMain } from './order-total-main'
import { fileVsRepl } from './file-vs-repl'
import { indentVsBraces } from './indent-vs-braces'
import { failureStages } from './failure-stages'

// One bundle per course folder, spread into src/scenes/index.ts.
export const firstProgramScenes: Scene[] = [compileRunPath, toolchainPins, orderTotalMain, fileVsRepl, indentVsBraces, failureStages]
