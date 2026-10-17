import type { Section } from '../types'

export const combiningResults: Section = {
  id: 'combining-results',
  title: 'Combining independent results',
  scene: 'combine',
  focus: 'order',
  slide: `## Combining independent results

Enriching every SKU starts many independent Futures. \`Future.sequence\` and \`Future.traverse\` turn them into **one** Future of all the results.

### sequence and traverse
- \`sequence\` turns a \`List[Future[Int]]\` into a \`Future[List[Int]]\`
- \`traverse(skus)(f)\` maps **and** sequences in one step
- Results come back in **input order**, even if they completed in another order

### Deciding what one failure means
- By default, **one failed** lookup fails the whole combined Future
- Recover **inside** each item to get an \`Either\` per SKU instead
- Then every SKU is reported: prices for some, **reasons** for the rest
- Starting thousands at once is a separate risk — the next section **bounds** it`,
  narration:
    "Enriching an order means looking up a price for every product in it. Those lookups are independent, so they can all run at once, and the question becomes how to combine many futures into one. Future dot sequence does exactly that. It takes a list of futures of Int and turns it inside out, into one future of a list of Int, which completes when all of them have. Traverse does the mapping and the sequencing in one step: give it the SKUs and the lookup function. Two properties of the result are worth stating plainly. First, the results come back in the order of the input, regardless of which lookup happened to finish first. Second, by default, one failure fails the whole thing. If one SKU out of three is unknown, the combined future fails, and the two good prices are lost with it. For an import report, that is usually the wrong outcome. The lower code recovers inside each item instead, turning each lookup into an Either. Now the combined future always succeeds, and it reports a price for every SKU that worked and a reason for every one that did not. Starting thousands of lookups at once is a separate risk, which the next section bounds.",
}
