import type { Section } from '../types'

export const tryBoundary: Section = {
  id: 'try',
  title: 'Try and exception boundaries',
  scene: 'try-trace',
  focus: 'boundary',
  slide: `## Try and exception boundaries

Some code reports failure by **throwing**: Java APIs and \`toInt\` among them. \`Try\` runs such code and turns the outcome into a value: \`Success\` or \`Failure\`.

### Where Try belongs
- Wrap the **throwing call itself**, at the boundary where exceptions enter
- \`Try("4x".toInt)\` is a \`Failure\` holding the \`NumberFormatException\`
- Convert promptly: \`toEither\`, then map the exception to **your** error type

### What Try does not do
- It catches **non-fatal** exceptions only — \`StackOverflowError\` still escapes
- It cannot catch failures that **never throw**: a wrong total stays wrong
- A \`Failure\` holds a \`Throwable\`, which callers cannot **match on meaningfully**
- Do not wrap whole programs in \`Try\`; it hides **which step** failed`,
  narration:
    "Not all code reports failure with a value. Plenty of it throws, including Java libraries and the to int method used throughout this course. Try is the adapter between the two styles. It runs a piece of code, and if the code returns, you get Success holding the value; if it throws, you get Failure holding the exception. Forty two parses to Success of forty two. Four x throws a number format exception, and Try catches it as a Failure. The right place for Try is the boundary, wrapped tightly around the call that throws, so you know exactly which step it describes. And it is best converted quickly. Read rate turns the try into an either, and then maps the exception into a message, or better, into your own error type. Be clear about the limits. Try catches only non-fatal exceptions. Fatal ones, like a stack overflow, still escape, as the last line shows, because there is nothing sensible to do with them. Try also cannot help with failures that never throw; a wrong total is still wrong. And wrapping a whole program in one Try hides which step failed.",
}
