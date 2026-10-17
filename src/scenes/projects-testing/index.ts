import type { Scene } from '@graphlearning/flow'
import { packageVisibility } from './package-visibility'
import { moduleGraph } from './module-graph'
import { sbtBuild } from './sbt-build'
import { exampleTests } from './example-tests'
import { propertyTests } from './property-tests'
import { diagnostics } from './diagnostics'

export const projectsTestingScenes: Scene[] = [packageVisibility, moduleGraph, sbtBuild, exampleTests, propertyTests, diagnostics]
