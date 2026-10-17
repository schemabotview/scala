# scala

**Scala — From Expressions to Reliable Applications**, as a GraphL concept app: 12 courses,
77 sections, each a declarative scene, a slide and a narration clip. Served at `graphl.in/scala/`.

- `SCALA-COURSE-PLAN.md` — the syllabus: audience, learning spine, 12 chapters and their worked
  illustrations.
- `AUTHORING-PLAN.md` — how the syllabus becomes frames: density budgets, slide recipe, scene
  shapes, and every course/section id.

```sh
npm ci
npm run dev          # http://localhost:5173 — #/ is the catalog
```

## The content model

- **concept ⊃ course ⊃ section.** A **section** is the atomic unit of a video:
  `(scene, slide, narration)`. One section = one slide.
- **Left = scene, right = slide.** The scene is a react-flow diagram *or* a code card — both
  rendered by `@graphlearning/flow`. The slide is markdown.
- **Scenes are declarative.** Authors list nodes, edges and nesting; the engine computes every
  position and size. **Never write x or y** — deterministic layout is what makes the screenshots
  reproducible and the videos recordable.
- **`.md` is the source of truth** for both the slide (terse, for the eye) and the narration
  (flowing, for the ear).
- Narration wavs come from a Colab + Chatterbox pass, never by hand. Downstream timing reads the
  wav's length with `ffprobe`, never playback.
- A scene is content-agnostic and can be shared across sections.

## What is in here

```
src/content/    courses → sections (one file per section) + registry
src/scenes/     hand-authored scenes + registry
src/main.tsx    mounts <ConceptApp> from @graphlearning/shell
src/theme.css   --brand / --brand-hover / --accent-2 — the repo's whole design surface
scripts/        check-content.mjs · init-template.mjs · colab notebook · concept.json · titles.json
public/audio/<course>/    narration wavs
.github/workflows/deploy.yml    Pages deploy on push to main
```

The render engine (`@graphlearning/flow`) and the app shell (`@graphlearning/shell`) are **published
packages, pinned by version** — never a workspace symlink. `file:../ui-flow` is for local engine work
only and must never be committed: CI has no sibling checkout, and the pin is what stops one engine
change from breaking every site at once.

## Verifying a change

There is no test runner. The bar is all four:

```sh
npm run build        # must be clean
npx tsc --noEmit     # must be clean
npm run check        # content budgets: card overflow, slide clipping, dead focus, missing wavs
```

…and **the section looked at in the browser**. The three commands pass on frames that are visually
wrong — `npm run check` models a card's rendered height, but nothing models an edge label landing on
top of a card. The rendered route is the real bar.

Routes are `#/<course>-<section>`, e.g. `#/demo-what-a-section-is`. `#/` is the catalog.
