import type { Scene } from '@graphlearning/flow'

// §4 — a Java API that throws, wrapped once and translated into the domain error model (CT).
export const javaCall: Scene = {
  id: 'java-call',
  title: 'A Java call behind a Scala signature',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Dates.scala',
      label: `import java.time.LocalDate
import java.time.format.DateTimeParseException

// ImportError gains a case:  case BadDate(raw: String)
def parseDate(raw: String): Either[ImportError, LocalDate] =
  try Right(LocalDate.parse(raw))           // a Java static method
  catch case _: DateTimeParseException => Left(ImportError.BadDate(raw))

parseDate("2026-10-17")     // Right(2026-10-17)
parseDate("17/10/2026")     // Left(BadDate(17/10/2026))`,
    },
    {
      id: 'trace',
      label: 'Crossing into Java',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'call', label: 'Java API', sub: 'called with Scala syntax', pattern: 'service', icon: 'plug' },
        { id: 'throws', label: 'Throws', sub: 'listed in its Javadoc', pattern: 'warn', icon: 'zap' },
        { id: 'narrow', label: 'Catch narrowly', sub: 'only the one it throws', pattern: 'network', icon: 'funnel' },
        { id: 'translate', label: 'Translate', sub: 'into ImportError, once', pattern: 'storage', icon: 'repeat' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
