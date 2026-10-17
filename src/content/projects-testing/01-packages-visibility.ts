import type { Section } from '../types'

export const packagesVisibility: Section = {
  id: 'packages-visibility',
  title: 'Packages, imports and visibility',
  scene: 'package-visibility',
  focus: 'package',
  slide: `## Packages, imports and visibility

As the order importer grows, its code splits into **packages**: \`domain\`, \`parsing\`, \`report\`. Packages name things; visibility decides **who may use them**.

### Three levels
- **Public** by default: \`parseLine\` is the package's intended entry point
- \`private[parsing]\` is visible across the **whole package**, and nowhere else
- \`private\` is visible inside **this object** only — a pure implementation detail

### Direction matters
- \`parsing\` imports from \`domain\`; \`domain\` **never** imports from \`parsing\`
- The domain then compiles and tests **without** any parsing or I/O code
- Import the names you use: \`orders.domain.{ImportError, OrderLine, Sku}\`
- Start everything \`private\` and widen it **only when a caller needs it**`,
  narration:
    "So far, every example has fitted in a single file. The order importer has outgrown that, and this chapter organises it. The first tool is the package. The file on the left declares package orders dot parsing, and imports three domain types from orders dot domain. Packages name things. Visibility decides who may use them, and the parser object shows three levels. Parse line has no modifier, so it is public, the entry point other packages are meant to call. Split fields is marked private in brackets parsing, which makes it visible throughout the parsing package but nowhere else. Tests in the same package can use it, and the report package cannot. Trim all is plain private, a detail of this one object. Now the more important rule, which is about direction. Parsing depends on the domain, so it imports domain types. The domain must never import from parsing. Keeping that one-way arrow means the domain compiles and is tested on its own, with no parsing or input and output code anywhere near it. A good habit follows: start members private, and widen them only when a real caller needs access.",
}
