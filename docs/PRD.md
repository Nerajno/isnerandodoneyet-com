# PRD: IsNerandoDoneYet

## Product Overview

A public accountability dashboard tracking yearly goals across Talks, Projects, and Articles. Currently deployed at `isnerandodoneyet.com`. Also serves as a reference/boilerplate for developers who want to build similar trackers.

## Target Audience

- Primary: Developer peers and hiring managers assessing consistency of output
- Secondary: Developers looking for a Vue 3 + Tailwind v4 boilerplate/reference

## Core Metrics

The site answers one question: **"Is Nerando done yet?"** — quantified as a percentage of annual goals completed across three categories.

## Pages & Routes

| Route | Page | Purpose |
|---|---|---|
| `/` | AboutPage | Philosophy, history, boilerplate resources |
| `/current` | HomePage | Current year's progress dashboard |
| `/archives` | ArchivesPage | Grid overview of all years |
| `/history` | HistoryPage | Year-by-year timeline (2019-2025) |
| `/year/:year` | YearPage | Per-year detail view |
| `/:pathMatch(.*)*` | NotFoundPage | 404 fallback |

## Tech Stack

- **Framework:** Vue 3.5 (Composition API, `<script setup>`)
- **Language:** TypeScript
- **Build:** Vite 6 + `@vitejs/plugin-vue`
- **State:** Pinia 3
- **Routing:** Vue Router 4 (lazy-loaded, HTML5 history)
- **Styling:** Tailwind v4 + custom CSS token system (see Design Tokens drift note below)
- **Fonts:** Outfit Variable (display) + Inter Variable (body)
- **Linting:** ESLint 9 + vue-eslint-parser + typescript-eslint
- **Type Checking:** vue-tsc

## Design Tokens

Custom CSS properties defined in `src/style.css` for:
- Color: text, backgrounds, borders, accent/info/active/milestone (all sky blue), success, warning, error
- Spacing, border-radius, shadows
- Dark/light mode via `.dark` / `.light` classes + `prefers-color-scheme`
- Focus-visible outlines, scrollbar styling, selection colors

> **Drift note (see audit #24):** the token system is currently aspirational. Views/components hardcode Tailwind palette utilities (`blue-600`, `slate-800`, `gray-900`); the CSS vars are only consumed by base styles in `style.css`, `App.vue` (page bg), and `ProgressCard`/`ProgressBar`. Stale header comment still reads "accent (green / lime)" while values are sky, and `accent`/`info`/`active`/`milestone` are four identical sky token families.

## Current Data Coverage

8 years of data (2019-2026) in `src/store/progress.ts`:
- 2026: 3 categories (Talks 0/10, Projects 0/10, Articles 0/10)
- 2025: 3 categories (Talks 8/10, Projects 2/10, Articles 9/10) — 20+ updates
- 2024: 4 categories including Media (Talks 2/10, Projects 0/10, Articles 2/10, Media 2/5)
- 2023: 3 categories (Talks 1/10, Projects 0/10, Articles 5/10)
- 2022: 4 categories including Media (Talks 10/10, Projects 2/10, Articles 2/10, Media 1/5)
- 2021: 4 categories (Talks 0/10, Projects 0/10, Articles 1/10, Media 1/5)
- 2020: 3 categories (Talks 0/10, Projects 0/10, Articles 1/10)
- 2019: 3 categories (Talks 0/10, Projects 0/10, Articles 4/10)

## Functional Requirements

1. Aggregate and display yearly progress as a percentage
2. Per-category progress rings with SVG animation
3. Timeline updates per year, filterable by category
4. Accordion checklists with localStorage persistence
5. Year archive with per-year drill-down
6. History page with chronological timeline
7. About page with philosophy, history snapshots, boilerplate links
8. Dark/light mode toggle (respects system preference)
9. ~~Page transitions (opacity + translateY)~~ **NOT IMPLEMENTED** — `App.vue` renders a bare `<router-view />` with no transition; scroll-reveal (useReveal) is the only page motion. See audit #29.
10. Keyboard-accessible navigation
11. 404 fallback page

## Quality Requirements

- Responsive down to mobile (Tailwind breakpoints)
- WCAG AA contrast (AAA target for hero copy)
- Reduced motion respected
- Keyboard focus visible
- Dark mode parity
- Lighthouse LCP < 2.5s, INP < 200ms, CLS < 0.1

## Taste-Skill Audit Findings

### Design Read
*"Reading this as: a public-accountability **scoreboard** for developer peers and hiring managers, with a data-honest scoreboard language, leaning toward a single question→answer hero (Outfit display), Tailwind v4 utilities, and restrained motion."*
The subject's own artifact is the live percentage that answers "Is Nerando done yet?" — the design should treat that number as the product, not as one stat among many.

### Dial Settings
- **DESIGN_VARIANCE: 5** (was 6) — the page family is symmetric card-grid + centered heroes; variance lives on History (editorial timeline) and About (marketing). Direction: converge on a stricter scoreboard grammar.
- **MOTION_INTENSITY: 3** — SVG ring draw, scroll-reveal, hover lifts. Held at 3: motion is motivated (hierarchy/feedback), nothing gratuitous.
- **VISUAL_DENSITY: 4** (was 5) — forced 70vh sections + `p-20` cards read airier than a real data dashboard; density should come from the data, not empty containers (audit #35).

### Violations / Issues to Fix

1. ~~**Eyebrow overuse (HIGH)** — AboutPage had 6 uppercase eyebrow labels across ~8 sections.~~ **RESOLVED** — Reduced to 3 (Problem, Philosophy, Resources), within the `ceil(8/3)` max.

2. **Numbered markers (MEDIUM)** — Philosophy section uses "01 / 02 / 03" numbered markers. Valid since rules are an ordered sequence, but borderline.

3. **Inter as sole font (LOW)** — Acceptable for a data dashboard, but consider a display pairing for hero headings (e.g., Cabinet Grotesk, Satoshi).

4. ~~**Dead code (MEDIUM)** — Hamburger button commented out but ref/toggle/keydown handler alive in AppHeader. `storeToRefs` commented import in HomePage. `useTheme` composable existed but unused.~~ **RESOLVED** — Removed hamburger dead code, cleaned HomePage import, deleted `useTheme.ts`.

5. ~~**API inconsistency (LOW)** — `fetchProgressData()` is called as a store method but defined as a Pinia getter.~~ **RESOLVED** — Verified it works; no change needed.

6. **Component API inconsistency (LOW)** — `ProgressCard.vue` migrated to `<script setup>`. `YearSummary.vue` deleted (orphaned).

7. ~~**Stale title tag (MEDIUM)** — Both `index.html` and `dist/index.html` said "2024 Progress Tracker".~~ **RESOLVED** — Updated to "Progress Tracker".

8. ~~**Orphaned assets (LOW)** — `dist/videos/` directory existed but empty.~~ **RESOLVED** — Removed.

9. ~~**Color consistency across modes (LOW)** — Verify light-mode blue and dark-mode lime accents.~~ **RESOLVED** — Intentional dual-brand; no change.

### Additional Issues Found & Fixed

10. ~~**Light mode invisible text (HIGH)** — AccordionWithCheckboxes used `text-white` on `bg-white` (WCAG 1.4.3 fail).~~ **RESOLVED** — Changed to `text-gray-900 dark:text-white`.

11. ~~**Orphan files (HIGH)** — 7 files in a dead subsystem: `MainLayout.vue`, `YearSummary.vue`, `ProgressUpdate.vue`, `UpdateFilter.vue`, `useUpdates.ts`, `updateService.ts`, `errors.ts`.~~ **RESOLVED** — Deleted all 7.

12. ~~**reactive/ref anti-pattern (HIGH)** — `useUpdates.ts` wrapped `reactive` properties in `ref()`.~~ **RESOLVED** — File deleted.

13. ~~**URL typo (MEDIUM)** — `developindvlpr.com` missing 'g'.~~ **RESOLVED** — Fixed to `developingdvlpr.com`.

14. ~~**Broken footer link (MEDIUM)** — GitHub link pointed to `fimion` fork.~~ **RESOLVED** — Fixed to `Nerajno`.

15. ~~**any types (MEDIUM)** — 6 loose `any` types across 4 files.~~ **RESOLVED** — All typed: `TimelineUpdate`, typed props, removed `[key: string]: any`.

16. ~~**Duplicated checkbox logic (MEDIUM)** — Identical `getCheckboxState`/`setCheckboxState` in 2 views.~~ **RESOLVED** — Extracted into `useLocalStorage.ts` as `getCheckbox`/`setCheckbox`.

17. ~~**`<details>` toggle binding issue (MEDIUM)** — `:open` + `@toggle` feedback loop.~~ **RESOLVED** — Removed `:open` binding, let `<details>` manage state natively.

18. ~~**Unused type exports (MEDIUM)** — 22 unused exports, including `Update` interface.~~ **RESOLVED** — Removed `Update` and related unused types.

19. ~~**Hardcoded "Demo" placeholders (LOW)** — Padding logic leaked placeholder text to users.~~ **RESOLVED** — Removed demo padding entirely.

20. ~~**ProgressBar runtime props (LOW)** — Used `defineProps({})` instead of typed generics.~~ **RESOLVED** — Migrated to `defineProps<{}>()`.

21. ~~**Duplicated percentage calc (LOW)** — `HomePage.vue` inlined `reduce()` instead of calling store getter.~~ **RESOLVED** — Now uses `calculateOverallProgress(currentYear)`.

22. ~~**Scoped CSS Tailwind conflict (LOW)** — `group-hover:` used in scoped CSS.~~ **RESOLVED** — Removed with Accordion rewrite.

### UX/UI Audit — 2026-07-31

23. **Mobile navigation absent (HIGH)** — `AppHeader.vue` hides `.main-nav` below `md` (`hidden md:flex`) and the hamburger was removed as dead code (PRD #4). Below 768px there is no navigation at all — logo and theme toggle only. Mobile users cannot reach `/current`, `/archives`, or `/history`.

24. **Token system vs. implementation drift (HIGH)** — `src/style.css` defines a full CSS-variable token system, but every view/component hardcodes Tailwind palette utilities (`blue-600`, `slate-800`, `gray-900`). `tailwind.config.js` maps `accent/info/active/milestone` to the vars, yet templates never use them (consumers are only base styles, `App.vue` bg, `ProgressCard`, `ProgressBar`). Token layer is aspirational, not operative. Stale "green / lime" comments; four identical sky token families.

25. **Per-category color language defined but never surfaced (MEDIUM)** — `main.ts` provides `categoryColors` (Talks=sky, Projects=green, Articles=amber), reactive to theme, but nothing consumes it; `ProgressCard.vue` hardcodes `var(--color-accent-bright)` on every ring. Color-coding categories aids scanning on a dashboard — it's wired but dead.

26. **Hero video asset missing; stock-photo fallback (MEDIUM)** — `public/videos/` is empty, so `/videos/hero-bg.mp4` never plays. AboutPage hero renders a blurred Pexels stock photo + dark overlay — decorative filler that says nothing about accountability/tracking.

27. **Three page personalities, no shared layout grammar (MEDIUM)** — About = marketing landing (video hero, pills, blue CTAs); Home/Year = dashboard (rings/cards); History = editorial longform. Content width is inconsistent: About/History constrain to `max-w-4xl`, Home/Archives/Year inherit App.vue's `max-w-7xl` with different `px`. No shared container/spacing contract across views.

28. **Accordion layout bug (HIGH)** — `AccordionWithCheckboxes.vue:24` uses `w-[70vw] mx-auto my-16`: 70vw matches neither the page container (max-w-7xl) nor mobile (~224px on a 320px phone), and `my-16` adds large vertical gaps vs. sibling spacing.

29. **Page transitions claim is stale (MEDIUM)** — Functional requirement #9 is not implemented; see note above. Either ship a real transition or keep the claim struck.

30. **The "answer" is under-framed (MEDIUM)** — Product thesis is one public question; HomePage renders `63% / complete` as a bare stat. The answer line ("Not yet — 63%") is the site's signature moment and currently reads like a template stat block. Scoreboard framing should own this.

31. **Empty states are directionless (LOW)** — 2026 (0% year) shows "No projects added yet." and "Reflections for this year haven't been added yet." in a dashed box. These are invitations and should speak in the brand voice ("0% — not yet. Go ship.").

32. **A11y: focusable-but-inert card (LOW)** — `ProgressCard.vue:27` sets `role="region" tabindex="0"` on a non-interactive card, creating a tab stop with no action.

33. **A11y: redundant tabindex on `<summary>` (LOW)** — `AccordionWithCheckboxes.vue:36` adds `tabindex="0"` to a natively focusable `<summary>`.

34. **Copy drift (LOW)** — AboutPage says "Seven years of shipping in public"; data covers 2019–2026 (`yearsActive` = 8). 2025 is still "Best year yet," which matches the store.

35. **Forced `min-h-[70vh]` sections (LOW)** — HomePage/YearPage force 70vh-empty sections even when a year has no data, amplifying the "empty" feel on a fresh year.

### Strengths
- Thoughtful CSS token system with full dark mode
- Accessible nav with keyboard handling, aria attributes, focus management
- SVG progress ring animation is restrained and meaningful
- Content-first approach with real historical data
- Dual boilerplate strategy (HTML/CSS/JS + Vue/Tailwind)
- Scroll-reveal motion is subtle, staggered, and reduced-motion safe
- History page is well-engineered: derived totals (no hand-tallied numbers), `ol reversed`, aria-hidden numerals
- The single-question concept ("Is Nerando done yet?") with 8 years of honest public data is genuinely distinctive

### Design Direction (Signature)
The one memorable element should be **the answer**: an enormous, unambiguous verdict on the home page — the question in display type, answered by the live percentage ("Not yet — 63%"), scored like a scoreboard/receipt rather than a marketing stat. Everything else stays quiet and disciplined:
- Make the current-year answer the hero on `/current`; let per-category color return so talks/projects/articles are scannable at a glance (resurrect `categoryColors`).
- Speak empty states in the brand voice — a 0% year is the "not yet" moment, not a dashed-box apology.
- One accent language, one corner-radius rule, one content-width contract across all views.
- Kill decorative filler (stock-photo hero) in favor of on-subject artifacts: year stamps, last-milestone date, per-year ticks.

## Roadmap (from README)

### Content
- Expand existing data, add more granular categories
- Link talk resources more consistently (video, slides)
- Include technical notes or blog cross-references
- Replace History page `[PLACEHOLDER]` screenshot slots with real year captures
- Add meta description, OG tags, and JSON-LD to `index.html` (SEO for the "answer" page)
- Fix "Seven years" copy drift on AboutPage (audit #34)

### Features
- Per-year statistics dashboard (best month, trends, streaks)
- Tag-based filtering across years
- Embed/export individual year snapshots
- API endpoint for programmatic access
- Scoreboard "answer" hero on `/current` with brand-voice empty states (audit #30, #31)
- Per-category color coding in progress rings/bars (resurrect `categoryColors`, audit #25)
- Mobile navigation menu below `md` (audit #23)
- Fix accordion width contract (`w-[70vw]` → container-aligned, audit #28)

### Code Quality
- Add comprehensive unit tests (Vitest)
- ~~Eliminate Options API in favor of Composition API~~ **RESOLVED** — All active components use `<script setup>`
- ~~Extract data into JSON/remote source~~ **DEFERRED** — Pinia store is sufficient for current scale
- ~~Remove orphan / dead code~~ **RESOLVED** — 7 orphan files deleted, dead subsystem removed
- ~~Fix `any` types across codebase~~ **RESOLVED** — All loose `any` types replaced with proper types
- Reconcile token system vs. hardcoded utilities: pick one strategy (CSS vars or `dark:` utilities) and delete the dead token families / stale comments (audit #24)
- Remove dead `.fixed-footer` CSS in `style.css` (footer lives in `AppFooter.vue`)

### Accessibility
- Full WCAG 2.2 audit (multiple pages at AA already tested)
- Screen reader testing (VoiceOver, NVDA)
- Touch target audit, focus indicators, reduced motion parity
- Remove redundant `tabindex` on `<summary>` and on non-interactive progress cards (audit #32, #33)

### Deployment
- CI pipeline with lint → typecheck → test → build → deploy
- Cache headers, compression, asset hashing
- Periodic data refresh without full build
