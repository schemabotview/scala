import type { Section } from '../types'

export const sourceToRuntime: Section = {
  id: 'source-to-runtime',
  title: 'Source, compiler, JVM and runtime',
  scene: 'compile-run-path',
  focus: 'typecheck',
  slide: `## Source, compiler, JVM and runtime

A Scala program is text until the **compiler** checks it and turns it into bytecode; the **JVM** then runs that bytecode and produces output.

### Two different times
- **Compile time** — the compiler parses the text and checks every type before anything runs
- A type mismatch stops here, so the program **never starts** and nothing is printed
- **Run time** — the JVM loads the compiled classes and executes them, with the Scala library on its classpath

### What the compiler leaves behind
- **\`.class\` files** — JVM bytecode, the same format Java compiles to
- **\`.tasty\` files** — typed trees that tools and later compilations read
- Neither is something you edit; change the source and **compile again**`,
  narration:
    "Every Scala program in this course travels the same path, and it helps to see it once before writing anything. It starts as a plain text file. That text means nothing to the machine yet. The Scala compiler reads it, parses it into a tree, and checks the type of every expression. If something does not fit, say a piece of text where a number belongs, compilation stops right there. The program never starts, and nothing is printed. When the checks pass, the compiler writes two kinds of output: class files holding bytecode for the Java Virtual Machine, and tasty files holding typed trees that tools and later compilations read. Then the second time begins. The JVM loads the main class, finds the Scala standard library on its classpath, and executes the code, first by interpreting it and then by compiling the busy parts to native code. Only at the very end does our order total appear on the screen. Keeping these two times apart, compile time and run time, is the first debugging skill this course builds.",
}
