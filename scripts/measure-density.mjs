// Rendered-density report. `npm run check` models the slide's height from its markdown; nothing
// models the SCENE, because the layout engine decides it. This script renders every section the way
// the recorder does (1920×1080, `?capture=1`) and reads the numbers off the DOM:
//
//   slide   rendered slide height / slide pane height          target 0.80–0.95
//   axis    scene bounding box / scene pane, on the binding axis  target ≥ 0.85
//   area    scene bounding box area / scene pane area             target ≥ 0.55
//   eyebrow does any node sit under the top-left eyebrow label?    target: no
//
// Targets, not thresholds (AUTHORING-PLAN.md §1): it flags and exits 0. It does not see an edge label
// landing on a card — look at the screenshots for that.
//
// Run: npm run measure                       every section of every course
//      npm run measure -- first-program      only routes starting with that prefix
//      npm run measure -- --shots out/density   also save a screenshot per route
//
// Uses puppeteer's own browser; set PUPPETEER_EXECUTABLE_PATH to use an installed Chromium instead.
import { readdirSync, readFileSync, existsSync, mkdirSync } from 'node:fs'
import { join } from 'node:path'
import { createServer } from 'vite'
import puppeteer from 'puppeteer'

const args = process.argv.slice(2)
const shotsAt = args.indexOf('--shots')
const shots = shotsAt === -1 ? null : args[shotsAt + 1]
const prefix = args.find((a, i) => !a.startsWith('--') && (shotsAt === -1 || i !== shotsAt + 1)) ?? ''
if (shots) mkdirSync(shots, { recursive: true })

// Course ids, from src/content/<course>/index.ts. The shell's `__scene.plan()` lists only the
// sections of the course on screen, so each course is visited once to ask for its plan.
const courses = readdirSync('src/content')
  .filter((d) => existsSync(join('src/content', d, 'index.ts')))
  .map((d) => (readFileSync(join('src/content', d, 'index.ts'), 'utf8').match(/\bid: '([\w-]+)'/) || [])[1])
  .filter(Boolean)

const server = await createServer({ server: { port: 0 }, logLevel: 'error' })
await server.listen()
const base = server.resolvedUrls.local[0]
const browser = await puppeteer.launch({ args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1920, height: 1080 })

const settle = () => new Promise((r) => setTimeout(r, 900)) // fitView + fonts; networkidle is not enough
const rows = []
for (const course of courses) {
  await page.goto(`${base}?capture=1#/${course}`, { waitUntil: 'networkidle0' })
  await page.waitForFunction(() => window.__scene)
  const plan = await page.evaluate(() => window.__scene.plan())
  for (const { slug } of plan) {
    if (!slug.startsWith(prefix)) continue
    await page.evaluate((s) => (location.hash = `#/${s}`), slug)
    await page.waitForSelector('.react-flow__node')
    await settle()
    const r = await page.evaluate(() => {
      const box = (el) => el?.getBoundingClientRect()
      const pane = box(document.querySelector('.react-flow'))
      const nodes = [...document.querySelectorAll('.react-flow__node')].map(box)
      const u = nodes.reduce(
        (a, n) => ({ l: Math.min(a.l, n.left), t: Math.min(a.t, n.top), r: Math.max(a.r, n.right), b: Math.max(a.b, n.bottom) }),
        { l: Infinity, t: Infinity, r: -Infinity, b: -Infinity },
      )
      const brow = box(document.querySelector('.reel-head__eyebrow'))
      const under = brow && nodes.some((n) => n.left < brow.right && n.right > brow.left && n.top < brow.bottom + 8 && n.bottom > brow.top)
      const panel = box(document.querySelector('.slide-panel'))
      const slide = box(document.querySelector('.slide-panel__scaler'))
      const w = (u.r - u.l) / pane.width
      const h = (u.b - u.t) / pane.height
      return { slide: slide.height / panel.height, w, h, area: w * h, eyebrow: !!under }
    })
    if (shots) await page.screenshot({ path: join(shots, `${slug}.png`) })
    rows.push({ slug, ...r })
  }
}
await browser.close()
await server.close()

if (!rows.length) {
  console.error(`✗ no route starts with "${prefix}" — routes are <course>-<section>, e.g. first-program-repl`)
  process.exit(1)
}
const f = (n) => n.toFixed(2)
let inBand = 0
console.log('slide  w     h     area  route')
for (const r of rows) {
  const flags = []
  if (r.slide < 0.8) flags.push('slide sparse')
  if (r.slide > 0.95) flags.push('slide near clip')
  if (Math.max(r.w, r.h) < 0.85) flags.push('scene short of binding edge')
  if (r.area < 0.55) flags.push('scene area low')
  if (r.eyebrow) flags.push('node under eyebrow')
  if (!flags.length) inBand++
  console.log(`${f(r.slide)}   ${f(r.w)}  ${f(r.h)}  ${f(r.area)}  ${r.slug}${flags.length ? '  ⚠ ' + flags.join(', ') : ''}`)
}
console.log(`${inBand === rows.length ? '✓' : '⚠'} density: ${inBand}/${rows.length} routes in band${shots ? ` · screenshots in ${shots}/` : ''}`)
