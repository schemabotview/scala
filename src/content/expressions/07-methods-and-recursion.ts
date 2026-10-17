import type { Section } from '../types'

export const methodsAndRecursion: Section = {
  id: 'methods-and-recursion',
  title: 'Methods, parameters and recursion',
  scene: 'method-trace',
  focus: 'base',
  slide: `## Methods, parameters and recursion

A method names a computation, with **typed parameters** and a result type. Its body is a single expression, and that expression's value is what it returns.

### Arguments
- A **default** like \`discount: Int = 0\` is used when the caller leaves it out
- **Named arguments** let the caller pass them in any order, and read clearly
- No \`return\` needed — the last expression **is** the result

### Recursion
- \`sumAll\` calls itself on a **smaller problem**: the tail of the list
- The **base case** — an empty list gives \`0\` — is what makes it stop
- Each call keeps a **stack frame**, so a very long list can overflow the stack
- \`@tailrec\` asks the compiler to **prove** a call can run as a loop`,
  narration:
    "A method gives a computation a name, typed parameters, and a result type. The first method on the left computes a line total from a quantity, a price, and a discount. The discount has a default of zero, so the first call, which passes only two arguments, uses it and returns two thousand four hundred. The second call passes its arguments by name, in a different order from the declaration. The compiler matches them by name, so the order no longer matters, and the call reads like a sentence. There is no return keyword in either method. The body is an expression, and its value is the result. The second method is recursive: it calls itself. To sum a list, it adds the first element to the sum of the rest. Each call works on a smaller list, and the base case, an empty list returning zero, is what finally stops it. Without that base case, the recursion would never end. Each pending call holds a stack frame, so a list with a million elements can overflow the stack. The tail rec annotation asks the compiler to prove a method can run as a loop instead.",
}
