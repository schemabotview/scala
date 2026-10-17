import type { Section } from '../types'

export const lambdas: Section = {
  id: 'lambdas',
  title: 'Lambdas and function types',
  scene: 'lambda-forms',
  focus: 'placeholder',
  slide: `## Lambdas and function types

A **lambda** writes a function value in place: parameters, an arrow, and a body. How much you must spell out depends on what the context already says.

### Reading a function type
- \`(Int, Int) => Int\` takes **two** \`Int\`s and returns one
- The lambda's parameter types can be **dropped** when the expected type supplies them
- \`map\` on a \`List[Int]\` expects \`Int => B\`, so \`p => p * 2\` needs no annotation

### The placeholder \`_\`
- \`_ * 2\` is short for \`p => p * 2\` — **one underscore, one parameter**
- \`_ + _\` takes **two** parameters, not the same one twice
- Use \`_\` only when the body is **tiny**; name the parameter otherwise
- A lambda with no expected type **must** annotate its parameters`,
  narration:
    "A lambda is a function value written in place, and it always has the same three parts: parameters, an arrow, and a body. The upper card writes one in full. Its type, Int comma Int arrow Int, says it takes two integers and returns one, and the lambda declares both parameters with their types before computing the discounted price. Calling it with two thousand and ten gives eighteen hundred. Most lambdas are not written this way, because the context usually supplies the types. In the lower card, map on a list of integers expects a function from Int to something, so p arrow p times two needs no annotation at all. The next line goes further with the placeholder underscore. Underscore times two means exactly the same thing: the underscore stands for the parameter. Be careful with it, though. Each underscore is a new parameter, so underscore plus underscore takes two arguments, not one argument twice. Use the placeholder for tiny bodies like these filters, and give the parameter a real name as soon as the body grows. And when nothing tells the compiler what is expected, the parameters must carry their types.",
}
