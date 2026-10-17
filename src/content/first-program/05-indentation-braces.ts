import type { Section } from '../types'

export const indentationBraces: Section = {
  id: 'indentation-braces',
  title: 'Indentation and braces',
  scene: 'indent-vs-braces',
  focus: 'colon',
  slide: `## Indentation and braces

Scala 3 accepts two layouts for the **same program**. This course writes indentation; you will read braces in older and mixed codebases.

### Indentation syntax
- After \`=\`, \`then\` or \`else\`, the **indented lines are the block**
- \`if total > 4000 then\` needs no parentheses around the condition
- An optional \`end orderTotal\` marks where a **long block** finishes

### Braces syntax
- \`{ }\` delimit blocks and \`if (…)\` takes parentheses — the Scala 2 style
- Both compile to the **same program**; the layout changes nothing at run time
- Keep **one style per file**; mixing them is legal but hard to read
- The compiler's \`-rewrite\` options convert a file **from one to the other**`,
  narration:
    "The next program decides between two messages, and it is written twice, once on top and once below. Both versions compile to exactly the same program. The top one uses indentation syntax, which this course uses throughout. After an equals sign, or after then, or after else, the lines indented beneath are the block. The condition reads if total is greater than four thousand then, with no parentheses, because the keyword then marks where the condition ends. At the bottom of the method, end order total closes it. End markers are optional; they earn their place on long blocks, where the closing point would otherwise be hard to see. The lower version uses braces. Curly braces open and close each block, and the condition sits in parentheses. This is how Scala two code was written, and plenty of existing code still looks like it, so reading it fluently matters. Nothing about the layout survives into the running program. And when a file needs to move from one style to the other, the compiler's rewrite options can convert it, rather than anyone doing it by hand.",
}
