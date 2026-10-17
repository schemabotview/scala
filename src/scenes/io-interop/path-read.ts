import type { Scene } from '@graphlearning/flow'

// §1 — choosing a path, checking it, bounding the read and naming the encoding (PS as code + steps).
export const pathRead: Scene = {
  id: 'path-read',
  title: 'From a path to decoded text',
  flow: 'TB',
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'ReadOrders.scala',
      label: `import java.nio.file.{Files, Path}
import java.nio.charset.StandardCharsets.UTF_8

val path = Path.of("data", "orders-2026-10.csv")   // relative to the working dir
if !Files.isRegularFile(path) then sys.error(s"missing: $path")

val size = Files.size(path)
require(size <= 5_000_000, s"too large: $size bytes")
val text = Files.readString(path, UTF_8)          // malformed UTF-8 throws`,
    },
    {
      id: 'steps',
      label: 'Four decisions before parsing',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'path', label: '① Path', sub: 'relative to where it runs', pattern: 'storage', icon: 'folder' },
        { id: 'exists', label: '② A file?', sub: 'checked, with its name', pattern: 'service', icon: 'search' },
        { id: 'bounded', label: '③ Bounded', sub: 'size before reading', pattern: 'warn', icon: 'gauge' },
        { id: 'encoding', label: '④ Encoding', sub: 'UTF-8, said out loud', pattern: 'network', icon: 'file' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'steps' }],
}
