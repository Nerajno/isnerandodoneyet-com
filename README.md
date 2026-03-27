# Is Nerando Done Yet? – Progress Tracker

A public accountability dashboard for tracking yearly goals — Talks, Projects, and Articles. Built as a learning resource for beginner-to-intermediate developers to study real-world Vue 3 patterns in a production-style app.

> **The philosophy:** Build in public. Measure shipped output, not effort. Reflect annually.

## Live Demo
<!-- TODO: Add screenshot(s) here -->
[isnerandodoneyet.com](https://isnerandodoneyet.com)

## What You Can Learn From This Project

This codebase demonstrates patterns you'll use in real Vue apps:

| Pattern | Where to Find It |
|---|---|
| Pinia state management | `src/store/progress.ts`, `src/store/theme.ts` |
| Vue Router with lazy loading | `src/router/index.ts` |
| Composables (reusable logic) | `src/composables/` |
| TypeScript interfaces & types | `src/types/index.ts` |
| Dark mode with Pinia + Tailwind CSS | `src/store/theme.ts`, `AppHeader.vue` |
| CSS design tokens (dark-first) | `src/style.css`, `tailwind.config.js` |
| Reactive global provide/inject | `src/main.ts` — `categoryColors` computed |
| Slot-based layout pattern | `src/components/layout/MainLayout.vue` |
| Accessible HTML (ARIA, skip links) | `MainLayout.vue`, all view files |
| Page transitions (fade + slide) | `MainLayout.vue` |
| Dynamic route params (`/year/:year`) | `src/router/index.ts`, `src/views/YearPage.vue` |

## Features
- Track yearly goals with progress rings per category (Talks, Projects, Articles)
- Accordion checklists for individual items within each category
- Year-over-year archives page with historical data
- Per-year detail view with full breakdown and reflections
- Dark mode toggle, persisted to localStorage
- Fully responsive — mobile first
- Keyboard-accessible navigation with skip-to-content link
- 404 page with graceful routing fallback

## Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | About | Philosophy, use cases, fork guide |
| `/current` | CurrentYear | This year's dashboard |
| `/archives` | Archives | All years at a glance |
| `/year/:year` | YearDetail | Full breakdown for a specific year |
| `/*` | NotFound | 404 fallback |

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| [Vue 3](https://vuejs.org/) | 3.5.13 | UI framework (Composition API) |
| [Vue Router](https://router.vuejs.org/) | 4.5.0 | Client-side routing |
| [Pinia](https://pinia.vuejs.org/) | 3.0.3 | State management |
| [Vite](https://vitejs.dev/) | 6.2.0 | Build tool & dev server |
| [Tailwind CSS](https://tailwindcss.com/) | 4.0.12 | Utility-first styling with CSS design tokens |
| [TypeScript](https://www.typescriptlang.org/) | 5.7.2 | Type safety |

## Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Setup
```bash
# Install dependencies
npm install

# Start development server (runs on port 2222)
npm run dev

# Type-check + build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── AppHeader.vue       # Nav, dark mode toggle
│   │   └── MainLayout.vue      # Page wrapper, transitions, skip link
│   ├── AccordionWithCheckboxes.vue  # Expandable item lists
│   ├── PostOpSection.vue       # Year-end reflections block
│   ├── ProgressCard.vue        # Animated SVG progress ring
│   └── ProgressBar.vue         # Linear progress bar
├── composables/
│   ├── useLocalStorage.ts      # Read/write to localStorage
│   └── useTheme.ts             # Dark mode composable (legacy)
├── router/
│   └── index.ts                # All routes (lazy loaded)
├── store/
│   ├── progress.ts             # Pinia store — all goal data lives here
│   └── theme.ts                # Pinia store — dark/light mode, persisted to localStorage
├── types/
│   └── index.ts                # Shared TypeScript interfaces
└── views/
    ├── AboutPage.vue           # Landing / philosophy page
    ├── ArchivesPage.vue        # Year grid overview
    ├── HomePage.vue            # Current year dashboard
    ├── NotFoundPage.vue        # 404 page
    └── YearPage.vue            # Per-year detail view
```

## How to Add Your Own Data

All goal data lives in `src/store/progress.ts` in the `initialYears` array. To track your own year:

1. Add a new entry to `initialYears` following the existing shape
2. Populate `items` with your goal categories and totals
3. Add `updates` entries as you complete things
4. Optionally add `notes` and `recap` at year-end

Each update entry looks like:
```ts
{
  date: 'March 2026',
  text: 'Description of what you shipped',
  category: 'Projects',  // must match an item category
  year: 2026,
  link: { url: 'https://...', text: 'Link label' }  // optional
}
```

## Fork & Customize

Want to track your own goals? Fork this repo and:
1. Replace the data in `src/store/progress.ts` with your own
2. Update the site name/branding in `AppHeader.vue` and `index.html`
3. Deploy to [Netlify](https://netlify.com), [Vercel](https://vercel.com), or [GitHub Pages](https://pages.github.com)

## Roadmap

### Content
- [ ] Add 2026 goals and updates to `src/store/progress.ts` as the year progresses
- [ ] Add notes/recap to years that are missing them (2023, 2024)
- [ ] Replace placeholder screenshot in README with an actual screenshot
- [ ] Complete the boilerplate/fork section in `AboutPage.vue`

### Features
- [ ] Add a 2026 goals section to the current year dashboard
- [ ] Add a "copy to clipboard" button for sharing a year's progress summary
- [ ] Add an RSS or JSON feed for updates (good for API/composable learning)
- [ ] Persist checkbox state per-year, not just globally (currently uses flat keys)

### Code Quality
- [ ] Add JSDoc comments to all TypeScript interfaces in `src/types/index.ts`
- [ ] Add comments to `progress.ts` store getters explaining the logic
- [ ] Document each composable (`useLocalStorage`, `useTheme`) with usage examples
- [ ] Replace `any` types in `AccordionWithCheckboxes.vue` with proper interfaces

### Accessibility
> WCAG 2.2 audit findings — target Level AA conformance.

**Critical (Level A)**
- [ ] `index.html` — Add `lang="en"` to `<html>` (SC 1.1.1 / 3.1.1)
- [ ] `AccordionWithCheckboxes.vue` — Add `aria-label` to chevron SVG icon (SC 1.1.1)
- [ ] `AccordionWithCheckboxes.vue` — Wrap checkbox groups in `<fieldset>` + `<legend>` (SC 3.3.2)

**High (Level AA)**
- [ ] All routes — Implement per-route `document.title` updates (SC 2.4.2)
- [ ] `AccordionWithCheckboxes.vue` — Verify `opacity-60` text maintains 4.5:1 contrast ratio on all backgrounds (SC 1.4.3)
- [ ] `AppHeader.vue` — Add `scroll-padding-top` to `<html>` equal to sticky header height so anchors don't scroll behind it (SC 2.4.11)
- [ ] `ProgressCard.vue` — Remove `tabindex="0"` from non-interactive region div, or give it a meaningful interactive role (SC 4.1.2)

**Medium (Level AA)**
- [ ] `AccordionWithCheckboxes.vue` — Ensure checkbox touch targets are at least 24×24 CSS px; prefer 44×44 px (SC 2.5.8)
- [ ] `HomePage.vue` — Extend `aria-live` coverage to accordion expand/collapse state changes (SC 4.1.3)
- [ ] `YearPage.vue` — Add `aria-label` to back button to clarify its destination (SC 2.4.3)

**Ongoing**
- [ ] Test all pages with a screen reader (VoiceOver / NVDA) after above fixes
- [ ] Verify focus order is correct after route transitions

### Testing
- [ ] Add unit tests for Pinia store getters (`calculateOverallProgress`, `getYearData`)
- [ ] Add component tests for `ProgressCard` and `AccordionWithCheckboxes`
- [ ] Add a basic E2E smoke test (Playwright) covering the main routes

### Developer Experience
- [ ] Add a `.env.example` file documenting any env vars
- [ ] Add a `CONTRIBUTING.md` with a step-by-step guide for first-time contributors
- [ ] Set up GitHub Actions CI to run `npm run build` on every PR

### Deployment
- [ ] Configure `vite.config.ts` base path for GitHub Pages if needed
- [ ] Add a `netlify.toml` or `vercel.json` for SPA redirect rules (`/* -> /index.html`)
- [ ] Document the deploy process in README

## Contributing
Pull requests are welcome. For major changes, open an issue first to discuss the approach.

## License
MIT
