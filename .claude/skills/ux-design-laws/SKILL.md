---
name: ux-design-laws
description: "Apply 19 foundational UX/psychology laws (Hick's law, Fitts's law, Jakob's law, Gestalt principles, Peak-end rule, etc.) when designing, building, or critiquing an interface."
---

# UX Design Laws

Use this skill when designing a new UI/page/component, building a frontend interface, or reviewing/critiquing an existing design for usability — alongside (not instead of) other design skills like design-critique or frontend-design. Each law below is a lens: when making a layout, interaction, or hierarchy decision, check it against the laws that apply and call out in your reasoning (briefly) which ones drove a choice, so the user can see the design logic rather than just the result.

The source list this skill is built from repeats "Postel's law" twice; it's included once below (item 11) rather than duplicated.

## The laws

### Decision-making & attention
1. **Hick's Law** — decision time increases with the number and complexity of choices. Limit options per screen/step; use progressive disclosure (advanced/secondary options behind a toggle or menu) instead of exposing everything at once.
2. **Fitts's Law** — the time to acquire a target depends on its distance and size. Make frequent or important actions large and close at hand; keep touch targets at least ~44px; don't make a primary action small or far from where attention naturally lands.
3. **Minimize target distance** — a practical corollary of Fitts's Law: place the next expected action near the user's current point of focus (e.g., a "Next" button appears right where they just finished interacting, not at the far end of the screen).
4. **Doherty Threshold** — productivity and engagement spike when a system responds within ~400ms. Anything slower needs visible feedback (skeleton loaders, optimistic UI, spinners) so the interface never feels like it's ignoring the user.
5. **Von Restorff Effect** (isolation effect) — an item that visually stands out from its surroundings is better noticed and remembered. Give the primary CTA a distinct visual treatment (color/size/shape) that sets it apart from secondary actions.
6. **Zeigarnik Effect** — people remember and feel pulled toward unfinished tasks more than completed ones. Use progress bars, checklists, and "X of Y complete" indicators to motivate users through multi-step flows (onboarding, checkout, forms).

### Memory & sequence
7. **Miller's Law** — working memory comfortably holds about 7 (±2) items. Chunk information into small groups — nav menus, form sections, phone-number formatting — rather than long unbroken lists.
8. **Serial Position Effect** — people best remember the first and last items in a sequence. Put your most important nav items, menu options, or list entries at the start or end, not buried in the middle.
9. **Peak-End Rule** — people judge an experience mainly by its most intense moment and how it ends. Make sure error/friction moments (the "peak") are handled gracefully, and design a strong, positive closing moment (a clear success state, a well-crafted confirmation) since that's what gets remembered.

### Familiarity & consistency
10. **Jakob's Law** — users spend most of their time on other sites/apps, so they expect yours to work the same way. Follow established conventions (nav placement, icon meanings, form patterns) unless there's a strong, specific reason to break from them.
11. **Postel's Law** (robustness principle) — be liberal in what you accept, conservative in what you produce. Accept varied user input formats (phone numbers, dates, casing) and normalize them internally, but keep your own outputs and UI states consistent and predictable.

### Gestalt grouping principles
12. **Law of Proximity** — elements placed near each other are perceived as related. Group related fields/controls with tighter spacing; separate unrelated groups with extra whitespace.
13. **Law of Similarity** — elements that look alike are perceived as related or serving the same function. Style all elements that share a function consistently (all links the same color, all primary buttons the same shape/weight).
14. **Law of Common Region / Uniform Connectedness** — elements enclosed or visually connected (by a border, shared background, or connecting line) read as more related than proximity alone provides. Use cards, dividers, or shaded sections to make grouping explicit rather than relying on spacing alone.
15. **Law of Prägnanz** — people perceive complex shapes in their simplest possible form. Favor clean, simple shapes and icons over ornate ones so meaning registers instantly rather than requiring decoding.

### Complexity & prioritization
16. **Tesler's Law** (law of conservation of complexity) — every process has inherent complexity that can't be eliminated, only moved between the system and the user. When a flow feels complex, push that complexity into smart defaults and automation rather than dumping it on the user as more fields, steps, or decisions.
17. **Parkinson's Law** — work expands to fill the time available for it. Give flows and sessions sensible constraints (defaults, gentle deadlines, timeouts) rather than leaving them open-ended, which invites drift and abandonment.
18. **Occam's Razor** — the simplest solution that solves the problem is usually the right one. When two design approaches both work, prefer the one with fewer steps, fewer elements, and less explanation required.
19. **Pareto Principle** (80/20 rule) — roughly 80% of usage/value comes from 20% of features or flows. Identify that core 20% for a given product and prioritize polish, performance, and usability there before investing in edge-case features.

## How to apply this

When building or reviewing a UI: scan for violations first (a wall of undifferentiated choices → Hick's Law; a tiny far-away primary button → Fitts's Law; a form with no visual grouping → Gestalt principles; a slow action with no feedback → Doherty Threshold), fix the highest-impact ones, and briefly name which law justifies each nontrivial layout/interaction decision so the reasoning is visible — don't cite a law for every trivial choice, only ones where it actually changed the design.
