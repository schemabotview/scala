import type { Section } from '../types'

export const repl: Section = {
  id: 'repl',
  title: 'REPL and feedback',
  scene: 'file-vs-repl',
  focus: 'echo',
  slide: `## REPL and feedback

Two loops run the same Scala. A **file run** compiles and runs the whole program; the **REPL** evaluates one expression at a time and shows its type.

### What the REPL tells you
- Each line is echoed back with its **name, type and value**, before the next prompt
- An unnamed result gets a generated name like \`res0\` you can reuse
- \`:type prices.sum\` shows a type **without evaluating** the expression
- It is the fastest way to ask **what type is this?**

### When to switch back to a file
- The REPL session is **not saved** — copy what works into a source file
- A file run is **repeatable**: the same input gives the same output
- \`:quit\` ends the session; the next one **starts empty**
- Programs with several definitions read better as a file than as a scrollback`,
  narration:
    "There are two ways to run the code from the last section, and they suit different moments. The first is the one you have seen: scala run with the file name. It compiles the whole program, then runs it, and prints the total. The second is the REPL, short for read, evaluate, print, loop. Start it with scala repl, and type the same lines one at a time. Watch what comes back. After the first line, the REPL echoes the name, the inferred type, and the value: prices is a list of integers. After asking for the sum, it prints val res zero colon Int equals four thousand two hundred fifty. The result had no name, so the REPL gave it one, and you can use res zero in the next line. That echo is the real value of the REPL. It answers the question, what type is this, faster than anything else. But a REPL session disappears when you close it. Once an expression does what you want, move it into a file, where it can be run again tomorrow and give the same answer.",
}
