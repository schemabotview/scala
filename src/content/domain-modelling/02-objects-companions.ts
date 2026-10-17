import type { Section } from '../types'

export const objectsCompanions: Section = {
  id: 'objects-companions',
  title: 'Objects and companions',
  scene: 'companion-factory',
  focus: 'factory',
  slide: `## Objects and companions

An \`object\` defines **exactly one** instance. When it shares a name and a file with a class, it is that class's **companion**, and each can see the other's private members.

### A validating factory
- \`Sku\`'s constructor is \`private\`, so no code outside can build an **arbitrary** \`Sku\`
- \`Sku.parse\` checks the format and returns \`Some(sku)\` or \`None\`
- Every \`Sku\` that exists has therefore **passed the check**

### Where objects fit
- Constants and helpers that need **no instance**, like \`Format\`
- An \`@main\` method lives in an object generated for it
- \`Option\` here is a preview: chapter 6 treats **absence and failure** in full
- \`final\` stops subclasses from **reopening** the construction rules`,
  narration:
    "Some things exist exactly once: a set of constants, a factory, the entry point of a program. Scala declares them with object, which defines a single instance with no class to instantiate. When an object has the same name as a class and lives in the same file, it is that class's companion, and the two can see each other's private members. The code on the left uses that to guard construction. The constructor of Sku is marked private, so nothing outside can write new Sku with an arbitrary string; that is the commented error. Construction goes through the companion instead. Sku dot parse checks the raw text against a format, three capital letters, a dash, and two digits, and only then builds a Sku. It returns Some of the Sku when the text is valid and None when it is not, so a caller cannot forget that parsing can fail. TEA dash zero one is accepted; lowercase tea space one is not. The guarantee that follows is strong: any Sku anywhere in the program has passed the check. Option is only previewed here. Chapter six covers absence and failure properly.",
}
