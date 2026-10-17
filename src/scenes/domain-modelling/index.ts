import type { Scene } from '@graphlearning/flow'
import { classTrace } from './class-trace'
import { companionFactory } from './companion-factory'
import { copyMemory } from './copy-memory'
import { productVsChoice } from './product-vs-choice'
import { matchTrace } from './match-trace'
import { traitDispatch } from './trait-dispatch'
import { equalityMemory } from './equality-memory'

export const domainModellingScenes: Scene[] = [classTrace, companionFactory, copyMemory, productVsChoice, matchTrace, traitDispatch, equalityMemory]
