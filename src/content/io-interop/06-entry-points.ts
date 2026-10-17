import type { Section } from '../types'

export const entryPoints: Section = {
  id: 'entry-points',
  title: 'Configuration and application entry points',
  scene: 'entry-point',
  focus: 'exit',
  slide: `## Configuration and application entry points

The entry point is where the program meets its caller: **arguments** in, **configuration** from the environment, a report and an **exit code** out.

### Inputs
- \`@main\` with typed parameters parses \`path\` and \`maxErrors\` for you
- \`ten\` for an \`Int\` parameter is rejected **before** your code runs
- Environment values are read **once**, here, with a stated default

### Outputs
- The report goes to **stdout**; problems go to **stderr**
- \`sys.exit(1)\` tells a shell, a script or a scheduler that it **failed**
- Credentials never appear in code, examples or logs — read them from the **environment**
- Everything below the entry point receives **plain values**, not the environment`,
  narration:
    "The entry point is where the program meets whoever runs it, and it has more responsibilities than starting things off. On the left, at main declares import orders with two typed parameters, a path and a maximum number of errors. The generated entry point parses the command line into those types. Run it with ten as a word instead of a number, and it is rejected with a message before any of your code runs. Configuration comes from the environment. The report currency is read once, here, with a stated default of euros. Reading it in one place, at the edge, means nothing deeper in the program depends on the environment, which keeps that code testable. Then the outputs. A successful report goes to standard output. A problem goes to standard error, and the program exits with status one. That exit code is how a shell script, a build, or a scheduler knows the import failed. Printing an error but exiting with zero would report success. One rule about secrets: credentials never belong in code, examples, or log lines. Read them from the environment, and pass only plain values further in.",
}
