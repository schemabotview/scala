import type { Scene } from '@graphlearning/flow'

// §7 — three inference failures and the annotation that fixes each (CT).
export const inferenceFailures: Scene = {
  id: 'inference-failures',
  title: 'When inference needs help',
  flow: 'TB',
  padding: 0.17, // tall board: the 0.12 default lets it run up under the eyebrow
  nodes: [
    {
      id: 'code',
      kind: 'code',
      filename: 'Inference.scala',
      label: `val double = x => x * 2
// ✗ Missing parameter type for x
val double2 = (x: Int) => x * 2                   // Int => Int

def countdown(n: Int) = if n == 0 then Nil else n :: countdown(n - 1)
// ✗ Overloaded or recursive method countdown needs return type
def countdown2(n: Int): List[Int] =
  if n == 0 then Nil else n :: countdown2(n - 1)

val keys: List[Int | String] = List(17, "TEA-01") // keep the union`,
    },
    {
      id: 'trace',
      label: 'The fix is one annotation',
      pattern: 'group',
      cols: 2,
      children: [
        { id: 'missing', label: 'No context', sub: 'annotate the parameter', pattern: 'warn', icon: 'circleslash' },
        { id: 'recursive', label: 'Recursion', sub: 'annotate the result', pattern: 'warn', icon: 'repeat' },
        { id: 'wide', label: 'Too wide', sub: 'annotate the val', pattern: 'network', icon: 'scale' },
        { id: 'read', label: 'Read it', sub: 'Found versus Required', pattern: 'service', icon: 'search' },
      ],
    },
  ],
  edges: [{ source: 'code', target: 'trace' }],
}
