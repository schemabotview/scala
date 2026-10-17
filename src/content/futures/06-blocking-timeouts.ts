import type { Section } from '../types'

export const blockingTimeouts: Section = {
  id: 'blocking-timeouts',
  title: 'Blocking, timeouts and cancellation limits',
  scene: 'blocking',
  focus: 'timeout',
  slide: `## Blocking, timeouts and cancellation limits

Some work **blocks**: a legacy client that waits on the network while holding its thread. Putting it inside a Future does not change that; it only moves **where** it blocks.

### Blocking work
- \`readLegacy\` still occupies **one thread per call** for the whole wait
- \`blocking { … }\` lets the global pool **add threads** so others are not starved
- Unbounded fan-out over 10 000 SKUs means 10 000 waiting threads — **bound it**

### Timeouts are not cancellation
- \`Await.result(…, 2.seconds)\` stops **waiting** after two seconds
- The fetch itself **keeps running**, using its thread and the remote service
- A failed combined Future does not stop the lookups **already started**
- \`Await\` belongs at the program's **edge**, never inside library code`,
  narration:
    "Some work blocks. A legacy client that waits on the network holds its thread for the whole wait, doing nothing useful. A common misunderstanding is that wrapping such a call in a future makes it non-blocking. It does not. It only moves the blocking onto a pool thread. Read legacy, on the left, still occupies one thread for every call in progress. The blocking marker helps a little. It tells the global pool that this thread is about to wait, so the pool can add another thread and keep other work moving. But it cannot make the waiting free. Start ten thousand lookups at once, and you have ten thousand threads waiting. So bound the fan-out, for example by processing the SKUs in batches of eight. Now timeouts. Await result with two seconds stops waiting after two seconds and throws a timeout exception. It does not stop the fetch. The call keeps running, holding its thread and loading the remote service, and its result is simply ignored. In the same way, when a combined future fails, the lookups already started carry on. Ordinary futures have no built-in cancellation. And keep await at the edge of the program, never inside library code.",
}
