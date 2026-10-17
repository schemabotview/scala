import type { Section } from '../types'

export const futureExecution: Section = {
  id: 'future-execution',
  title: 'Future creation and execution contexts',
  scene: 'future-start',
  focus: 'apply',
  slide: `## Future creation and execution contexts

A \`Future[A]\` is a value that will hold an \`A\` — or a failure — **later**. Creating one with \`Future { … }\` **schedules the work immediately**.

### Where the work runs
- An \`ExecutionContext\` is the **thread pool** that runs the body
- It is a \`using\` parameter, supplied by the \`given\` — chapter 8's mechanism
- \`enrich("TEA-01")\` returns **at once**; the lookup runs on a pool thread

### Composing before it completes
- \`price.map(_ * 2)\` builds a **new** Future that runs after \`price\` completes
- \`price.value\` is \`None\` until then, and \`Some(Success(…))\` afterwards
- A Future is **not lazy**: defining it starts it, whether or not anyone reads it
- \`ExecutionContext.global\` suits **short, non-blocking** work`,
  narration:
    "A future of A is a value that will hold an A, or a failure, at some later time. The important detail is when its work begins. Creating a future, with Future and a block, schedules that block to run immediately. Where does it run? On an execution context, which is a pool of threads. Future takes the execution context as a using parameter, and the given on the second line supplies the global pool. This is chapter eight's contextual mechanism doing real work. Now look at enrich. Calling it with tea zero one returns straight away, before the price has been looked up. The lookup is running on a pool thread while your code carries on. You can compose with the result before it exists. Price dot map times two does not wait. It builds a new future describing a step to run once the price arrives. And if you ask a future for its value early, you get None. Afterwards, you get Some of Success, or Some of Failure. Remember that futures are not lazy. Defining one starts it, whether or not anything ever reads the result. And the global pool is meant for short work that does not block.",
}
