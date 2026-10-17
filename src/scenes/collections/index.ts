import type { Scene } from '@graphlearning/flow'
import { collectionChoice } from './collection-choice'
import { ownershipMemory } from './ownership-memory'
import { transformTrace } from './transform-trace'
import { foldTrace } from './fold-trace'
import { forDesugar } from './for-desugar'
import { lazyForms } from './lazy-forms'
import { complexityTable } from './complexity-table'

export const collectionsScenes: Scene[] = [collectionChoice, ownershipMemory, transformTrace, foldTrace, forDesugar, lazyForms, complexityTable]
