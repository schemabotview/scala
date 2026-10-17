import type { Scene } from '@graphlearning/flow'
import { genericTrace } from './generic-trace'
import { boundTrace } from './bound-trace'
import { varianceTrace } from './variance-trace'
import { paramVsMember } from './param-vs-member'
import { aliasVsOpaque } from './alias-vs-opaque'
import { unionIntersection } from './union-intersection'
import { inferenceFailures } from './inference-failures'

export const typesScenes: Scene[] = [genericTrace, boundTrace, varianceTrace, paramVsMember, aliasVsOpaque, unionIntersection, inferenceFailures]
