import type { Scene } from '@graphlearning/flow'

// §5 — what the course established, and the distinct next-study paths (PS).
export const nextSteps: Scene = {
  id: 'next-steps',
  title: 'Where to go from here',
  flow: 'TB',
  padding: 0.04, // a wide board: let it float to the edges
  nodes: [
    {
      id: 'now',
      label: 'What you can now explain',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'model', label: 'Domain models', sub: 'products and choices', pattern: 'service', icon: 'layers' },
        { id: 'failures', label: 'Failures', sub: 'as typed values', pattern: 'service', icon: 'shieldcheck' },
        { id: 'boundaries', label: 'Boundaries', sub: 'files, Java, Futures', pattern: 'service', icon: 'plug' },
      ],
    },
    {
      id: 'paths',
      label: 'Pick one path — each has its own prerequisites',
      pattern: 'group',
      cols: 3,
      children: [
        { id: 'effects', label: 'Effect systems', sub: 'Cats Effect, ZIO', pattern: 'network', icon: 'gears' },
        { id: 'streaming', label: 'Streaming', sub: 'fs2: bounded data flow', pattern: 'network', icon: 'workflow' },
        { id: 'services', label: 'Services', sub: 'HTTP, JSON, databases', pattern: 'network', icon: 'server' },
        { id: 'actors', label: 'Actors', sub: 'Pekko: messages', pattern: 'network', icon: 'users' },
        { id: 'spark', label: 'Spark', sub: 'the companion course', pattern: 'network', icon: 'database' },
        { id: 'backends', label: 'Other backends', sub: 'Scala.js, Scala Native', pattern: 'network', icon: 'cpu' },
        { id: 'jvm', label: 'JVM depth', sub: 'profiling, GC, the JIT', pattern: 'network', icon: 'gauge' },
        { id: 'derivation', label: 'Derivation', sub: 'instances generated', pattern: 'network', icon: 'copy' },
        { id: 'macros', label: 'Macros', sub: 'inline and quotes', pattern: 'network', icon: 'wrench' },
      ],
    },
  ],
  edges: [{ source: 'now', target: 'paths', label: 'recheck compatibility each time' }],
}
