import type { Scene } from '@graphlearning/flow'
import { optionTrace } from './option-trace'
import { eitherTrace } from './either-trace'
import { tryTrace } from './try-trace'
import { dependentParse } from './dependent-parse'
import { failfastVsAccumulate } from './failfast-vs-accumulate'
import { partialVsTotal } from './partial-vs-total'

export const errorsScenes: Scene[] = [optionTrace, eitherTrace, tryTrace, dependentParse, failfastVsAccumulate, partialVsTotal]
