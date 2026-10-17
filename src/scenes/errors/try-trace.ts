import type { Scene } from '@graphlearning/flow'

// §3 — Try at an exception boundary, converted to Either (CT).
export const tryTrace: Scene = {
  id: 'try-trace',
  title: 'Catching an exception as a value',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Rate.scala',
      label: `import scala.util.{Try, Success, Failure}

Try("42".toInt)          // Success(42)
Try("4x".toInt)          // Failure(java.lang.NumberFormatException: …)

def readRate(text: String): Either[String, Int] =
  Try(text.trim.toInt).toEither
    .left.map(e => s"bad rate: \${e.getMessage}")

Try(throw new StackOverflowError())   // not caught: fatal`,
    },
    {
      id: 'trace',
      label: 'What Try captures',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'success', label: 'Success', sub: 'the computed value', pattern: 'service', icon: 'circlecheck' },
        { id: 'failure', label: 'Failure', sub: 'the caught exception', pattern: 'warn', icon: 'bug' },
        { id: 'boundary', label: 'Boundary', sub: 'wrap the throwing call', pattern: 'network', icon: 'shieldcheck' },
        { id: 'fatal', label: 'Fatal errors', sub: 'escape Try anyway', pattern: 'warn', icon: 'skull' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
