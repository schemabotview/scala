import type { Section } from '../types'

export const javaCalls: Section = {
  id: 'java-calls',
  title: 'Java calls and exception translation',
  scene: 'java-call',
  focus: 'translate',
  slide: `## Java calls and exception translation

Scala runs on the JVM, so the whole Java library is **directly callable**. The work is at the boundary: Java signals failure by **throwing**, and the domain model expects values.

### Calling Java
- \`LocalDate.parse(raw)\` is a Java **static method**, called like any Scala method
- Its documentation lists what it throws: \`DateTimeParseException\`
- Nothing in the Scala type system **warns** you that it can throw

### Translating the failure
- Catch **only** \`DateTimeParseException\` — an unrelated bug should still surface
- Translate it **once**, here, into \`ImportError.BadDate\`
- Callers see an \`Either\` and never need to know a Java exception **existed**
- Keep every Java call behind a small Scala function with an **honest signature**`,
  narration:
    "Scala compiles to the same bytecode as Java, so the entire Java standard library, and every Java library you can find, is directly callable from Scala. Calling it is the easy part. The real work is at the boundary, because Java reports failure by throwing, and the domain model built in this course expects failures as values. Parse date, on the left, calls local date dot parse, a static method on a Java class, using ordinary Scala syntax. Its documentation says that it throws a date time parse exception when the text is not a valid ISO date. Nothing in the Scala types warns about that; you learn it by reading the Javadoc. So the call is wrapped, and only that exception is caught. That narrowness matters. If some unrelated bug threw a different exception, it should surface, not be relabelled as a bad date. The caught exception is translated once, right here, into a new import error case, bad date, carrying the raw text. Callers now see an either with a domain error, and never need to know a Java exception existed. That is the general pattern: keep each Java call behind a small Scala function whose signature tells the truth.",
}
