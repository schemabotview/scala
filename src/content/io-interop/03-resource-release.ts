import type { Section } from '../types'

export const resourceRelease: Section = {
  id: 'resource-release',
  title: 'Deterministic resource release',
  scene: 'using-release',
  focus: 'escape',
  slide: `## Deterministic resource release

An open file is a **resource**: it must be closed, on success **and** on failure. \`scala.util.Using\` opens it, lends it to your code, and closes it on every path.

### How Using behaves
- The source is acquired **inside** \`Using\`, so a failure to open becomes a \`Failure\`
- The body reads with \`toList\`, so all data is **in memory** before the close
- If reading fails, the file is still closed; if closing fails too, that is **recorded**

### The two traps
- Returning \`getLines()\` without \`toList\` hands out an iterator over a **closed file**
- **Read the returned \`Try\`** — discarding it discards the failure
- Some APIs, like \`Files.readString\`, open and close **internally** — no \`Using\` needed
- Own a resource in **one place**, for the shortest time that works`,
  narration:
    "An open file is a resource. The operating system lends it to your program, and it must be given back, whether the reading succeeded or failed. Using, from scala dot util, takes care of that. Read lines, on the left, opens the file inside using, lends the open source to the body, and closes it on every path out. Several details matter. Because the file is opened inside using, a missing file does not throw. It becomes a failure, as the second call shows. The body calls to list, so every line is read into memory before the source is closed. If reading throws, the file is still closed. And if closing fails as well, that second failure is recorded rather than lost. Now the trap in the last line. Without to list, the body would return get lines, which is a lazy iterator. Using would close the file as soon as the body returns, and the caller would hold an iterator over a closed file, failing on first use. Two more habits. Always read the try that using returns; ignoring it ignores the failure. And recognise APIs like read string that open and close internally. They need no using at all.",
}
