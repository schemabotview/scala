import type { Course } from '../types'
import { extensionMethods } from './01-extension-methods'
import { givens } from './02-givens'
import { contextualLookup } from './03-contextual-lookup'
import { typeClassInstances } from './04-type-class-instances'
import { contextBounds } from './05-context-bounds'
import { ambiguity } from './06-ambiguity'

// Course 8 — SCALA-COURSE-PLAN.md chapter 8.
export const typeClassesCourse: Course = {
  id: 'type-classes',
  title: 'Contextual Abstraction and Type Classes',
  sections: [extensionMethods, givens, contextualLookup, typeClassInstances, contextBounds, ambiguity],
}
