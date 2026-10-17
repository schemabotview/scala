import type { Scene } from '@graphlearning/flow'
import { pathRead } from './path-read'
import { fileParse } from './file-parse'
import { usingRelease } from './using-release'
import { javaCall } from './java-call'
import { nullBoundary } from './null-boundary'
import { entryPoint } from './entry-point'
import { pureCore } from './pure-core'

export const ioInteropScenes: Scene[] = [pathRead, fileParse, usingRelease, javaCall, nullBoundary, entryPoint, pureCore]
