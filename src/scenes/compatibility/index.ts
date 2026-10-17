import type { Scene } from '@graphlearning/flow'
import { scala2VsScala3 } from './scala2-vs-scala3'
import { compatibilityTable } from './compatibility-table'
import { endToEnd } from './end-to-end'
import { clearVsFast } from './clear-vs-fast'
import { nextSteps } from './next-steps'

export const compatibilityScenes: Scene[] = [scala2VsScala3, compatibilityTable, endToEnd, clearVsFast, nextSteps]
