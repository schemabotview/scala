import type { Section } from '../types'

export const modules: Section = {
  id: 'modules',
  title: 'Modules and dependency boundaries',
  scene: 'module-graph',
  focus: 'domain',
  slide: `## Modules and dependency boundaries

Packages only **ask** for a direction. sbt **subprojects** enforce it: a module can use only the modules it \`dependsOn\`, so a wrong import fails to compile.

### Four modules
- \`domain\` holds types and rules and depends on **nothing**
- \`parsing\` and \`report\` each depend on \`domain\` — and **not on each other**
- \`app\` holds the \`@main\` and wires the others together

### What the boundaries buy
- An import of \`parsing\` from inside \`domain\` is a **compile error**, not a review comment
- Each module compiles and tests **separately**, so feedback is faster
- A cycle between modules is **impossible** to declare in sbt
- Split into modules when a boundary is worth **enforcing**, not before`,
  narration:
    "A package only asks for a direction of dependency. Nothing stops a hurried change from importing parsing code into the domain. Build modules turn that request into a rule. The four lines of build dot s b t on the left declare four subprojects, and the graph beneath shows what they make. The domain depends on nothing. It holds the types and rules of an order, with no input or output at all. Parsing depends on the domain, and so does report, but neither depends on the other. The app module sits on top. It holds the main method and wires the other modules together. Each module can use only the modules it depends on. So if someone adds an import of parsing inside the domain, it is no longer a matter for code review. It simply fails to compile. That is the main benefit, and there are others. Each module compiles and tests on its own, which shortens feedback. And sbt will not let you declare a cycle between modules at all. Modules do cost some build complexity, though. Split a project into them when a boundary is worth enforcing, not by default on day one.",
}
