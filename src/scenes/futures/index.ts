import type { Scene } from '@graphlearning/flow'
import { lostUpdate } from './lost-update'
import { futureStart } from './future-start'
import { startOrder } from './start-order'
import { recovery } from './recovery'
import { combine } from './combine'
import { blocking } from './blocking'
import { promises } from './promises'

export const futuresScenes: Scene[] = [lostUpdate, futureStart, startOrder, recovery, combine, blocking, promises]
