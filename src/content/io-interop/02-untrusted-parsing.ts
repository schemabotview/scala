import type { Section } from '../types'

export const untrustedParsing: Section = {
  id: 'untrusted-parsing',
  title: 'Parsing at an untrusted boundary',
  scene: 'file-parse',
  focus: 'numbers',
  slide: `## Parsing at an untrusted boundary

A file comes from **outside** the program, so every row is a claim to check, not a fact. The parser's job is to account for **every** row, good or bad.

### Parsing the whole file
- Each row goes through chapter 6's \`parseLine\`, returning an \`Either\`
- Blank rows are skipped; every other row lands in **good** or **bad**
- Errors keep their **line number**, so the report points at the source

### Being honest about the format
- The format is **documented**: three fields, comma-separated, no quoting
- Real CSV allows quoted fields with commas inside — that needs a **real parser**
- A bad row does not stop the import; the **caller** decides what to do with errors
- Never \`split\` and index blindly: chapter 6's checks are **why** this is safe`,
  narration:
    "Everything inside the program has been checked by the compiler. A file has not. It comes from outside, so every row in it is a claim to be verified, not a fact to be trusted. Parse file, on the left, takes the whole text and accounts for every row. It walks the lines with their index, skips blank ones, and runs each remaining row through parse line from chapter six, which returns either an order line or an import error. Then it splits the results in two: the good lines, and the bad ones paired with their line numbers. The sample input has two rows. The first is valid. The second has an x where the quantity belongs, so the result holds one good line, and one error tagged with line two. That line number is what lets a person find and fix the source. Two honesty points. First, the format is documented in the comment: three fields, separated by commas, no quoting. Real CSV allows quoted fields that contain commas, and handling that correctly needs a proper parser, not split. Second, a bad row does not stop the import. The parser reports, and the caller decides what to do about errors.",
}
