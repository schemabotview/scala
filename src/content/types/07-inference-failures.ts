import type { Section } from '../types'

export const inferenceFailures: Section = {
  id: 'inference-failures',
  title: 'Reading inference failures and choosing simpler APIs',
  scene: 'inference-failures',
  focus: 'read',
  slide: `## Reading inference failures

Inference works from **context**. When there is too little, the compiler stops and asks; when there is plenty, it may infer a type wider than you meant.

### Three failures, three fixes
- A lambda with **no expected type** cannot guess \`x\`: annotate the parameter
- A **recursive** method needs its result type written, to type the recursive call
- A mixed list infers a wide supertype; annotate to keep \`Int | String\`

### Reading the message, choosing the API
- Find **Found** and **Required** first — the mismatch is between those two
- Add one annotation at a time, closest to the error, then **recompile**
- If callers keep needing annotations, the API is **too abstract**
- Prefer fewer type parameters and plain signatures when they **say the same thing**`,
  narration:
    "Inference works from context, and nearly every inference failure is a case of too little context, or a type wider than you wanted. The first line on the left defines a lambda with nothing around it. There is no expected type, so the compiler has no way to know what x is, and it says the parameter type is missing. Annotate x as Int, and the function's type follows. The second failure is recursion. Count down calls itself, and to type that inner call the compiler would need the result type it is still in the middle of working out. So recursive methods need their result type written. The third case does compile, and that is the problem. A list mixing an integer and a string infers a wide common supertype. Annotating the val as a list of Int or String keeps the precise union. When you read an error, find the words found and required first. The mismatch is always between those two. Fix one annotation at a time, closest to the error. And notice a design signal. If callers keep needing annotations to use your API, the API is probably too abstract, and a plainer signature would serve them better.",
}
