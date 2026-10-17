import type { Scene } from '@graphlearning/flow'

// §3 — scala.util.Using: acquire, use, release on every path, and the iterator that escapes (CT).
export const usingRelease: Scene = {
  id: 'using-release',
  title: 'Closing what you open',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ReadLines.scala',
      label: `import scala.io.Source
import scala.util.{Try, Using}

def readLines(path: String): Try[List[String]] =
  Using(Source.fromFile(path, "UTF-8")) { src =>
    src.getLines().toList          // read everything BEFORE it closes
  }

readLines("orders.csv")    // Success(List(…)); the file is closed
readLines("missing.csv")   // Failure(FileNotFoundException)

// ✗ Using(Source.fromFile(p))(_.getLines())  iterator outlives the file`,
    },
    {
      id: 'trace',
      label: 'Ownership, start to finish',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'acquire', label: 'Acquire', sub: 'opened inside Using', pattern: 'storage', icon: 'dooropen' },
        { id: 'use', label: 'Use', sub: 'read it all inside', pattern: 'service', icon: 'file' },
        { id: 'release', label: 'Release', sub: 'closed on every path', pattern: 'network', icon: 'lock' },
        { id: 'escape', label: 'Escape', sub: 'a lazy iterator leaks', pattern: 'warn', icon: 'bug' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
