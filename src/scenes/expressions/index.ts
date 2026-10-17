import type { Scene } from '@graphlearning/flow'
import { bindingMemory } from './binding-memory'
import { inferenceTrace } from './inference-trace'
import { numericTrace } from './numeric-trace'
import { interpolationTrace } from './interpolation-trace'
import { ifExpression } from './if-expression'
import { whileVsFor } from './while-vs-for'
import { methodTrace } from './method-trace'

export const expressionsScenes: Scene[] = [bindingMemory, inferenceTrace, numericTrace, interpolationTrace, ifExpression, whileVsFor, methodTrace]
