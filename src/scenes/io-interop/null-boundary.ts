import type { Scene } from '@graphlearning/flow'

// §5 — a nullable Java return used directly, above the guarded version and the collection adapters
// (VS), stacked.
export const nullBoundary: Scene = {
  id: 'null-boundary',
  title: 'Where null and Java collections come in',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'unguarded',
      kind: 'code',
      filename: 'unguarded',
      label: `val props = java.util.Properties()
val region: String = props.getProperty("region")   // null when absent
region.length                                      // NullPointerException`,
    },
    {
      id: 'guarded',
      kind: 'code',
      filename: 'guarded at the boundary',
      label: `val region = Option(props.getProperty("region"))  // None
region.getOrElse("EU")                            // "EU"

import scala.jdk.CollectionConverters.*
val skus = java.util.ArrayList[String]()
val view = skus.asScala          // a wrapper: sees later Java changes
val copy = skus.asScala.toList   // a copy: independent from now on`,
    },
    {
      id: 'kinds',
      label: 'Two boundary decisions',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'null', label: 'null', sub: 'how Java says absent', pattern: 'warn', icon: 'circleslash' },
        { id: 'option', label: 'Option(…)', sub: 'null becomes None', pattern: 'service', icon: 'shieldcheck' },
        { id: 'wrapper', label: 'asScala', sub: 'shared, not copied', pattern: 'network', icon: 'link' },
        { id: 'copy', label: 'toList', sub: 'a copy you own', pattern: 'storage', icon: 'copy' },
      ],
    },
  ],
  edges: [
    { source: 'unguarded', target: 'guarded', label: 'wrap it once' },
    { source: 'guarded', target: 'kinds' },
  ],
}
