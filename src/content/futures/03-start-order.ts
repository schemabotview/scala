import type { Section } from '../types'

export const startOrder: Section = {
  id: 'start-order',
  title: 'Composition and start-order effects',
  scene: 'start-order',
  focus: 'overlap',
  slide: `## Composition and start-order effects

Because creating a Future starts it, **where** you create it decides what runs at the same time. The same \`for\` can be sequential or overlapping.

### Created inside the for
- \`checkStock\` is created only **after** \`enrich\` completes
- The calls run **one after the other**: total time ≈ price + stock
- Correct when the second call **needs** the first result

### Created before the for
- \`priceF\` and \`stockF\` are both **already running** when the \`for\` begins
- The \`for\` only waits for results: total time ≈ the **slower** of the two
- Independent calls should be **started early**, then combined
- Same code shape, different timeline — the creation point is the **only** difference`,
  narration:
    "Since creating a future starts it, the place where you create one decides what runs at the same time. The two cards on the left combine the same two calls, a price lookup and a stock check, and they differ in exactly one respect. In the upper card, both futures are created inside the for expression. Remember the desugaring: the second generator lives inside a flat map on the first. So check stock is not even created until the price future has completed. The calls run one after the other, and the total time is roughly the price lookup plus the stock check. Sometimes that is exactly right. If the second call needed the price as an input, it would have to wait. But here it does not. In the lower card, both futures are created before the for. By the time the for begins, both calls are already running, and the for only waits for their results. The total time is roughly the slower of the two. So the rule is: when calls are independent, start them early and combine them afterwards. The code shapes look almost identical. The only difference is the point where each future is created.",
}
