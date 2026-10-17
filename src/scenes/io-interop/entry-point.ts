import type { Scene } from '@graphlearning/flow'

// §6 — an @main entry point with typed arguments, configuration from the environment and an exit
// code (CT).
export const entryPoint: Scene = {
  id: 'entry-point',
  title: 'The program at the command line',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ImportOrders.scala',
      label: `@main def importOrders(path: String, maxErrors: Int): Unit =
  val currency = sys.env.getOrElse("REPORT_CURRENCY", "EUR")
  run(path, maxErrors, currency) match
    case Right(report) => println(report)
    case Left(problem) =>
      System.err.println(problem)
      sys.exit(1)                    // non-zero: callers see the failure

// $ scala run . -- data/orders.csv 10
// $ scala run . -- data/orders.csv ten   → error: not an Int`,
    },
    {
      id: 'trace',
      label: 'What comes from outside',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'args', label: 'Arguments', sub: 'typed by @main', pattern: 'user', icon: 'terminal' },
        { id: 'env', label: 'Environment', sub: 'read once, with a default', pattern: 'network', icon: 'gears' },
        { id: 'exit', label: 'Exit code', sub: '1 when it failed', pattern: 'warn', icon: 'power' },
        { id: 'secrets', label: 'Secrets', sub: 'never in code or logs', pattern: 'storage', icon: 'key' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
