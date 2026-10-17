# Authoring plan — Scala, with density

How `SCALA-COURSE-PLAN.md` (12 chapters, 77 sections) becomes 77 rendered frames that **use the
space they have**. The course plan says *what* to teach; this file says *how each frame is shaped*
so it lands inside the density band on the first pass instead of being padded afterwards.

Every number here is either read off the `check` height model or **measured on the rendered route**
(headless Chromium, 1920×1080, `?capture=1`). Where a number is still a guess, it says so and the
pilot (course 1) replaces it.

## 1. The two density budgets

The frame is 1920×1080. The scene pane is **1114×1080 px**; the slide pane is the rest.

| surface | target | how it is checked |
| --- | --- | --- |
| slide | **865–1000 modelled px** (80–93 % of the pane) | `check` caps 1000; the floor is read off the model (§2) |
| scene, binding axis | ≥ 0.85 of the pane | measured on the route |
| scene, area | ≥ 0.55 of the pane | measured on the route |
| narration | **160–210 words** (≈ 65–85 s) | word count |

Baseline — the template's two demo sections, measured:

| section | slide (model) | slide fill | scene w / h | scene area | verdict |
| --- | --- | --- | --- | --- | --- |
| `demo-what-a-section-is` | 739 px | 0.61 | 0.89 / 0.30 | **0.27** | both under — a 5-leaf LR chain binds on width and leaves 70 % of the height empty |
| `demo-scene-kinds` | 777 px | 0.72 | 0.89 / 0.78 | **0.70** | scene good; slide ~120 px short |

Two lessons from the baseline drive the whole plan: a **code card stacked over a 2-column leaf
container** fills the pane, and a **flat LR chain never does**. And the demo slides — written by the
people who wrote the guard — still sit under the floor, so the floor has to be designed in, not
hoped for.

## 2. Slide recipe — measured against the height model

A bullet line holds **52 characters**, a prose line **55** (26 px Plex Sans in a 686 px column).
Every rendered line costs ≈ 38 px; a `###` block costs ≈ 73 px before its first bullet; each extra
bullet adds a 14 px gap. What counts is **rendered lines**, not characters.

| shape (H2 + 2-line lede, then …) | modelled |
| --- | --- |
| 2 `###` × 3 one-line bullets | 626 — under |
| 2 `###` × 4 one-line bullets | 729 — under |
| 3 `###` × 3 one-line bullets | 846 — just under |
| 2 `###` × 3 two-line bullets | 852 — just under |
| **3 `###` × 2 two-line bullets** | **918 ✓** |
| **2 `###` × (3 + 4) mostly two-line bullets** | **≈ 940 ✓** |
| 2 `###` × 4 two-line bullets | 1031 — clips |
| 3 `###` × 3 two-line bullets | 1186 — clips |

**The default slide for this course:** `##` title · a 2-line lede that states the claim · **two
`###` blocks of 3–4 bullets, most of which wrap to two lines** (one idea plus its consequence) — or
three `###` blocks of 2 when the section has three moves (e.g. *mechanism / failure / choice*). Aim
for **~23 rendered lines**. Inline `` `code` `` chips are wider than prose (the model adds 2 chars per
chip), so a code-heavy bullet wraps sooner — count it as two lines.

Content to fill the band with — never padding. In this course the third thing on most slides is
already in the course plan's *Worked illustrations*: the **contrasting failure** (the wrong-but-running
total, the omitted `case`, the `.get`, the shared mutable counter). If a slide is short, add its
failure case, not an adjective.

## 3. Scene shapes — the five this course uses

Measured: the code-over-container shape fills **0.70** of the pane; the LR chain **0.27**. The pane is
~1:1, so every shape below is built to be roughly square.

| key | shape | built as | use for |
| --- | --- | --- | --- |
| **CT** | code + trace | `flow: 'TB'`: a `kind: 'code'` card (6–14 lines, ≤ 60 chars/line) → edge → container `cols: 2` of 4 leaves (values, types, output, failure) | the default: any section whose point is a piece of code and what it evaluates to |
| **VS** | versus | `flow: 'TB'`: two short code cards stacked (≤ 8 lines each), each → its own 2-leaf result container — *or* one container `cols: 2` of two sub-containers | contrasts: `val`/`var`, eager/by-name/lazy, `List`/`Vector`, fail-fast/accumulate, Scala 2/3 |
| **PS** | pipeline, restacked | `flow: 'TB'` of 2–3 containers, each `cols: 2`, edges between containers | source→compiler→JVM, parse→validate→report, the end-to-end walk |
| **TB** | table | `kind: 'table'` + one code card or 2 leaves under it | complexity, `Option`/`Either`/`Try` comparison, compatibility kinds |
| **MEM** | memory | `kind: 'memory'` slots + a code card | references vs values, closure capture, shallow `copy`, shared mutation |

Rules that fall out of the measurements:

- **No bare LR chain of leaves.** If the idea is a flow, use **PS**: wrap the stages in containers
  with `cols: 2` so the board grows downward, toward the pane's 1:1 aspect.
- **A lone code card is sparse** unless it is ≥ 18 lines; always pair it with its trace (**CT**).
  The trace leaves are where the *type* and the *printed result* go — the thing the narration says
  out loud.
- **4 leaves per container, `cols: 2`.** Six fits too (3 rows); two leaves leave a hole.
- Leaf text budget: label ≤ 2 lines at 12 chars, sub ≤ 2 lines at 20 chars, no unbreakable token
  over 14 (label) / 20 (sub). `foldLeft(0)(_ + _)` cannot go in a leaf — put it in the code card.
- Code-card width: ≤ 60 chars/line is a **guess** for a single card that still binds on height;
  the pilot measures it. Two cards side by side are never used — they bind on width.
- Scene `padding`: 0.04 for CT/PS boards that float; 0.12–0.17 for tall boards that reach the
  eyebrow.
- Icons are not guarded. Verified present in the installed engine: `terminal code filecode braces
  cpu layers database wrench receipt tag gauge key shieldcheck scroll gitbranch ban circlecheck
  circleslash server boxes clock repeat lock scale workflow box gears memory zap brain share funnel
  copy table harddrive folder file users plug scissors link search pencil sigma hash sortarrows
  regex bug ruler monitor`. Use only these.

## 4. Narration budget

The demo narrations run 140 and 171 words for a slide that is 70 % full. A full slide carries more
claims, so **160–210 words** (65–85 s). Structure that matches the slide: the claim (lede) → walk
the scene left-pane top to bottom (the trace is the script) → the failure case → one-sentence bridge
to the next section. Prose only, no list cadence. Wavs come from the Colab pass after a course is
authored — never by hand.

## 5. Course and route map — all 77 section ids

Route = `#/<course>-<section>`. These ids are the route contract and the wav filenames; fix them
now so audio never has to be regenerated for a rename. Scene key from §3 in brackets.

**1 · `first-program` — A First Program and Scala's Execution Model** (6)
`source-to-runtime` [PS] · `toolchain-versions` [CT] · `first-program` [CT] · `repl` [VS] ·
`indentation-braces` [VS] · `failure-stages` [PS — three containers: compile / runtime / logic]

**2 · `expressions` — Values, Expressions, and Methods** (7)
`values-and-scope` [MEM] · `types-and-inference` [CT] · `numeric-boundaries` [CT] ·
`strings` [CT] · `conditions` [CT] · `loops` [VS] · `methods-and-recursion` [CT]

**3 · `functions` — Functions and Composable Computation** (6)
`functions-as-values` [CT] · `lambdas` [VS] · `higher-order` [CT] · `closures` [MEM] ·
`currying` [VS] · `purity-and-evaluation` [TB — eager / by-name / lazy counter trace]

**4 · `domain-modelling` — Modelling Domains with Products and Alternatives** (7)
`classes` [CT] · `objects-companions` [CT] · `case-classes` [MEM — shallow `copy`] ·
`enums-sealed` [VS — product vs choice] · `pattern-matching` [CT] · `traits` [PS] ·
`equality-invariants` [MEM]

**5 · `collections` — Collections and Data Transformation** (7)
`choosing-collections` [TB] · `mutability` [MEM] · `map-filter-flatmap` [CT] · `folds` [CT] ·
`for-expressions` [VS — sugar / desugared] · `lazy-evaluation` [VS] · `complexity` [TB]

**6 · `errors` — Absence, Errors, and Validation** (6)
`option` [CT] · `either` [CT] · `try` [CT] · `dependent-failures` [PS] ·
`validation` [VS — fail-fast / accumulate] · `totality` [VS]

**7 · `types` — Types for Reusable and Precise APIs** (7)
`generics` [CT] · `bounds` [CT] · `variance` [PS — producer / consumer / both] ·
`type-members` [VS] · `opaque-types` [VS — alias / opaque] · `union-intersection` [CT] ·
`inference-failures` [CT]

**8 · `type-classes` — Contextual Abstraction and Type Classes** (6)
`extension-methods` [CT] · `givens` [VS — explicit arg / `using`] · `contextual-lookup` [PS] ·
`type-class-instances` [CT] · `context-bounds` [CT] · `ambiguity` [CT]

**9 · `projects-testing` — Project Structure, Testing, and Build Evidence** (6)
`packages-visibility` [PS] · `modules` [PS] · `sbt-build` [CT] · `example-tests` [CT] ·
`property-tests` [VS — useful property / restates implementation] · `diagnostics` [CT]

**10 · `io-interop` — Files, Resources, and Java Interoperability** (7)
`paths-encodings` [PS] · `untrusted-parsing` [CT] · `resource-release` [CT] · `java-calls` [CT] ·
`null-boundaries` [VS] · `entry-points` [CT] · `pure-core` [PS — pure core / I/O shell]

**11 · `futures` — Concurrency with Futures and Promises** (7)
`concurrency-basics` [MEM — shared counter] · `future-execution` [CT] ·
`start-order` [VS — dependent / independent timelines] · `recovery` [CT] · `combining-results` [CT] ·
`blocking-timeouts` [PS] · `promises` [CT]

**12 · `compatibility` — Compatibility, Design Review, and Continued Practice** (5)
`reading-scala-2` [VS — Scala 2 / Scala 3] · `compatibility-kinds` [TB] · `end-to-end` [PS] ·
`performance-evidence` [VS] · `next-steps` [PS]

Totals: 6 7 6 7 7 6 7 6 6 7 7 5 = **77**. Shape mix: CT 36, VS 18, PS 13, MEM 6, TB 4 — about
70 % of the course is CT or VS — CT is the shape measured at 0.70 area; VS is its stacked twin and is measured in the pilot.

Scene reuse: a scene may back **at most two** sections (different `focus`). More than that and
consecutive video segments show the same frame. The recurring order-import example gets one PS
scene per course that needs it (`first-program`, `errors`, `io-interop`, `compatibility`), not one
global scene.

## 6. Order of work

1. **Pilot — course 1, `first-program`, all 6 sections.** Scenes, slides, narration together.
   Then measure every frame on the route and record: actual scene area per shape, the code-card
   line-width that still binds on height, and whether the 865 floor reads right on screen. Update
   §1–§3 of this file with the measured numbers before course 2.
2. Delete the demo course in the same change as course 1 lands (`src/content/demo`,
   `src/scenes/demo`, `public/audio/demo`, both registries, its `titles.json` entry), and add
   course 1's title to `scripts/titles.json`.
3. **Courses 2–12, one course per change**, in syllabus order — the recurring example accumulates,
   so later code cards reuse earlier types (`Order`, `ImportError`, `OrderId`).
4. Per course, before handing over: `npm run build && npx tsc --noEmit && npm run check`, then the
   density read on every route (slide 865–1000, scene axis ≥ 0.85, area ≥ 0.55), then the owner's
   visual review, then the Colab audio pass, then `check` again (it now requires every wav).
5. Code in code cards follows the course plan's version rule: Scala 3 indentation syntax; any
   snippet that names a library or tool version gets it from one pinned table recorded with the
   course, not inline guesses.

## 7. Two small tools that would make this cheaper (not built — proposed)

- **`check --density`**: print each slide's modelled height and warn under 865. The model is
  already there; today it only reports the ceiling, so an under-filled slide is invisible to it.
- **`scripts/measure-density.mjs`**: the headless-Chromium measurement used for §1 — loads each
  route with `?capture=1`, reports scene w/h/area ratio and slide fill, saves a screenshot. It
  turns the "read it off the route by eye" step into a table per course.
