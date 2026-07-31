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
- **Styling:** Tailwind v4 + custom CSS token system
- **Font:** Inter Variable
- **Linting:** ESLint 9 + vue-eslint-parser + typescript-eslint
- **Type Checking:** vue-tsc

## Design Tokens

Custom CSS properties defined in `src/style.css` for:
- Color: text, backgrounds, borders, accent (green / lime), info (sky blue), success, warning, error
- Spacing, border-radius, shadows
- Dark/light mode via `.dark` / `.light` classes + `prefers-color-scheme`
- Focus-visible outlines, scrollbar styling, selection colors

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
9. Page transitions (opacity + translateY)
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

### Dial Settings
- **DESIGN_VARIANCE: 6** — card-grid layouts with some asymmetry
- **MOTION_INTENSITY: 3** — SVG ring animation, page transitions
- **VISUAL_DENSITY: 5** — content-dashboard with moderate spacing

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

### Strengths
- Thoughtful CSS token system with full dark mode
- Accessible nav with keyboard handling, aria attributes, focus management
- SVG progress ring animation is restrained and meaningful
- Content-first approach with real historical data
- Dual boilerplate strategy (HTML/CSS/JS + Vue/Tailwind)
- Page transitions are subtle and non-distracting

## Roadmap (from README)

### Content
- Expand existing data, add more granular categories
- Link talk resources more consistently (video, slides)
- Include technical notes or blog cross-references

### Features
- Per-year statistics dashboard (best month, trends, streaks)
- Tag-based filtering across years
- Embed/export individual year snapshots
- API endpoint for programmatic access

### Code Quality
- Add comprehensive unit tests (Vitest)
- ~~Eliminate Options API in favor of Composition API~~ **RESOLVED** — All active components use `<script setup>`
- ~~Extract data into JSON/remote source~~ **DEFERRED** — Pinia store is sufficient for current scale
- ~~Remove orphan / dead code~~ **RESOLVED** — 7 orphan files deleted, dead subsystem removed
- ~~Fix `any` types across codebase~~ **RESOLVED** — All loose `any` types replaced with proper types

### Accessibility
- Full WCAG 2.2 audit (multiple pages at AA already tested)
- Screen reader testing (VoiceOver, NVDA)
- Touch target audit, focus indicators, reduced motion parity

### Deployment
- CI pipeline with lint → typecheck → test → build → deploy
- Cache headers, compression, asset hashing
- Periodic data refresh without full build
