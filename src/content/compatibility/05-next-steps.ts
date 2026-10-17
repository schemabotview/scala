import type { Section } from '../types'

export const nextSteps: Section = {
  id: 'next-steps',
  title: 'Ecosystem choices and continued study',
  scene: 'next-steps',
  focus: 'paths',
  slide: `## Ecosystem choices and continued study

This course built one application with the **standard library** alone. Beyond it, the ecosystem offers several **distinct** directions, each with its own prerequisites.

### Choosing a direction
- **Effect systems** add cancellation and scoped resources that \`Future\` lacks
- **Streaming** processes data larger than memory, with **bounded** buffers
- **Services**, **actors** and **Spark** each bring their own operational responsibilities
- **JVM depth**, derivation and macros extend what this course **introduced**

### Continuing well
- Build small applications and review them **independently**
- Investigate failures deliberately, and **refine by measurement**
- Recheck tool and library compatibility for **every** new project`,
  narration:
    "Everything in this course was built with Scala's standard library and one small test library. That was deliberate: it kept the ideas visible. Beyond it, the ecosystem offers several directions, and they are genuinely distinct, each with its own concepts and prerequisites. Effect systems, such as Cats Effect and ZIO, add exactly what chapter eleven found missing from futures: cancellation, and resources with a scoped lifetime. Streaming libraries process data larger than memory, with bounded buffers between stages. Service development brings HTTP, JSON, and databases, and with them operational responsibilities like configuration and monitoring. Actor systems such as Pekko model work as messages between supervised actors. Spark has its own companion course. And Scala dot js and Scala Native compile Scala for other platforms, each with its own library support. Choose one of these at a time, and learn its prerequisites before its features. Whichever you choose, keep the habits this course practised. Build small applications and have them reviewed. Investigate failures deliberately. Refine by measurement, not guesswork. And for every new project, check tool and library compatibility again, from evidence.",
}
