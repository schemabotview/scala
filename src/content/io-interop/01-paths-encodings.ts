import type { Section } from '../types'

export const pathsEncodings: Section = {
  id: 'paths-encodings',
  title: 'Paths, encodings and text input',
  scene: 'path-read',
  focus: 'encoding',
  slide: `## Paths, encodings and text input

Reading a file looks like one call. Underneath are four decisions — **which file**, whether it exists, **how much** to read, and how to turn bytes into text.

### Before reading
- \`Path.of("data", …)\` is **relative** to the directory the program runs in
- \`isRegularFile\` turns a confusing failure later into a **clear message** now
- Check the size first: an unbounded read of a huge file can **exhaust memory**

### Bytes into text
- Files hold **bytes**; text appears only after **decoding** with a charset
- \`readString(path, UTF_8)\` names the encoding instead of trusting a platform default
- Malformed UTF-8 **throws** rather than silently producing replacement characters
- The limit of 5 MB is a **stated assumption** of this importer, not a law`,
  narration:
    "The order importer has worked on strings typed into the code. This chapter connects it to real files, and reading a file, which looks like a single call, actually involves four decisions. The first is which file. Path dot of builds a path from parts, and a relative path like this one is resolved against the directory the program is started from, which is a common source of file-not-found surprises. The second is whether the file exists and is a regular file. Checking that up front, with the path in the message, turns a confusing failure later into a clear one now. The third is how much to read. Reading a whole file into memory is fine for a known, modest size, so the code checks the size first and refuses anything over five megabytes. That limit is a stated assumption of this importer, not a law of nature. The fourth is the one most often forgotten. A file holds bytes, not text. Text appears only when the bytes are decoded with a character set. Read string with UTF eight names that choice explicitly, and if the bytes are not valid UTF eight, it throws rather than quietly inventing characters.",
}
