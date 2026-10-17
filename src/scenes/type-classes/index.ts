import type { Scene } from '@graphlearning/flow'
import { extensionTrace } from './extension-trace'
import { explicitVsUsing } from './explicit-vs-using'
import { lookupScopes } from './lookup-scopes'
import { typeclassInstances } from './typeclass-instances'
import { contextBounds } from './context-bounds'
import { ambiguity } from './ambiguity'

export const typeClassesScenes: Scene[] = [extensionTrace, explicitVsUsing, lookupScopes, typeclassInstances, contextBounds, ambiguity]
