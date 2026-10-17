import type { Section } from '../types'

export const diagnostics: Section = {
  id: 'diagnostics',
  title: 'Compiler diagnostics, debugging and reproducible checks',
  scene: 'diagnostics',
  focus: 'frame',
  slide: `## Diagnostics and reproducible checks

When something fails, the first job is to make the failure **repeatable**; the second is to read the evidence in the right order.

### Reading a compile error
- \`sbt clean test\` starts from **no compiled classes**, so stale output cannot mislead
- The position \`Report.scala:14:19\` points at the **exact expression**
- **Found** \`String\`, **Required** \`Int\`: the fix is between those two lines

### Reading a stack trace
- The top frames are often **library code**: \`Integer.parseInt\`, \`StringOps\`
- Read down to the **first frame in your code**: \`LineParser.parseQty\`, line 21
- Record the command, the input and the **versions** that reproduce it
- A failure you cannot repeat cannot be **confirmed** fixed`,
  narration:
    "When something fails, two jobs come before any fix. First, make the failure repeatable. Second, read the evidence in the right order. The terminal on the left starts with sbt clean test. Clean throws away every compiled class, so nothing stale from an earlier build can hide or invent an error. The compile error that follows has a code, E zero zero seven, a type mismatch, and an exact position: the report file, line fourteen, column nineteen. Then the two lines that matter most. Found String, required Int. The fix lies between those two types; here, a stray to string at the end. The second half is a run time failure. A number format exception, for the input four x. Notice that the top frames are not your code at all. They belong to Java's integer parsing and to Scala's string operations. Read down until you reach the first frame from your own code: parse quantity, in the line parser, at line twenty one. That is where to start. Finally, write down the command, the input, and the versions that reproduced it. A failure you cannot repeat is a failure you cannot confirm you have fixed.",
}
