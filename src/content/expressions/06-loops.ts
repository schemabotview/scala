import type { Section } from '../types'

export const loops: Section = {
  id: 'loops',
  title: 'Loops and iteration',
  scene: 'while-vs-for',
  focus: 'termination',
  slide: `## Loops and iteration

Two loops compute the same total. The difference is **who controls the iteration**: your counter, or the collection.

### The while loop
- You own three things: the **start**, the **test** and the **step**
- Forget the step and the test never turns false — the loop **never terminates**
- \`while\` still suits loops with **no collection** behind them, such as retrying until done
- An off-by-one test like \`i <= prices.length\` **throws** on the last index

### The for loop
- \`for price <- prices do\` runs **once per element**, with no index to get wrong
- Both loops use a \`var\` total and return \`Unit\`; the answer is a **side effect**
- Chapter 5 replaces both with \`prices.sum\` and folds, which **return** the total`,
  narration:
    "Here are two loops that compute the same order total, and the interesting difference is who is in charge of the iteration. The upper loop is a while loop. It owns a counter. It starts the counter at zero, tests it against the length of the list, and steps it by one at the end of each pass. All three are your responsibility. Delete the step, the line i plus equals one, and the test never becomes false, so the loop runs forever. Change the test to less than or equal, and the last pass asks for an index that does not exist, which throws. The lower loop is a for loop over the list itself. It runs once for each price, handing you the element directly. There is no counter, so there is no off-by-one to make. Both loops leave the total at forty two fifty, and both do it the same way: by changing a var. The loop itself returns Unit, and the answer is a side effect. That is fine for now. In chapter five, collection methods compute the same total as a returned value, with no var at all.",
}
