import type { Scene } from '@graphlearning/flow'
import { functionValues } from './function-values'
import { lambdaForms } from './lambda-forms'
import { higherOrder } from './higher-order'
import { closureMemory } from './closure-memory'
import { currying } from './currying'
import { evaluationTable } from './evaluation-table'

export const functionsScenes: Scene[] = [functionValues, lambdaForms, higherOrder, closureMemory, currying, evaluationTable]
