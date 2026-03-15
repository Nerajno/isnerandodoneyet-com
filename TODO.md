# IsNerandoDoneYet - TODO List

## Overview
This document outlines remaining tasks, improvements, and enhancements needed for the **IsNerandoDoneYet** progress tracker application.

**Last Updated:** March 14, 2026
**Current Branch:** Speed-run-v2
**Status:** Active Development

---

## 🚨 Critical / High Priority

### 1. Fix Unused Imports in Store
- **File:** `src/store/progress.ts:1`
- **Issue:** TypeScript warnings for unused imports `ProgressItem` and `Update`
- **Action:** Remove or use these imports to clean up TypeScript diagnostics

### 2. Add Screenshot to README
- **File:** `README.md:14`
- **Issue:** Missing screenshot placeholder (currently shows Vite logo)
- **Action:** Create and add actual application screenshots showing:
  - Homepage with progress cards
  - Dark mode view
  - Mobile responsive layout
  - Year detail page

### 3. Implement Archives Page
- **File:** `src/router/index.ts:13-17`
- **Issue:** `/archives` route exists but doesn't have a proper view implementation
- **Action:** Create an Archives view that:
  - Lists all available years (2019-2025)
  - Shows summary stats for each year
  - Links to individual year detail pages
  - Provides year-over-year comparison

---

## 🎨 UI/UX Enhancements

### 4. Complete Dark Mode Implementation
- **Current Status:** Theme toggle exists in composables
- **Missing:**
  - Verify dark mode works across all components
  - Test color contrast ratios for accessibility
  - Add smooth transitions for theme switching
  - Persist theme preference in localStorage

### 5. Improve Accessibility
- **Areas to Address:**
  - Add ARIA labels to interactive elements
  - Ensure keyboard navigation works for accordions
  - Add focus indicators for all interactive elements
  - Test with screen readers
  - Add skip-to-content links

### 6. Mobile Responsiveness Review
- **Action Items:**
  - Test on various device sizes
  - Optimize accordion behavior on mobile
  - Review touch targets (minimum 44x44px)
  - Test horizontal scrolling issues

### 7. Add Loading States
- **Missing:**
  - Loading indicators for data fetching
  - Skeleton screens for initial load
  - Error boundaries for component failures

---

## 📊 Features & Functionality

### 8. Year Detail Page Enhancement
- **File:** `src/views/YearPage.vue`
- **Current:** Very minimal implementation
- **Needed:**
  - Add filtering by category
  - Add search functionality for updates
  - Add date range filtering
  - Display statistics (completion rate, trends)
  - Add export functionality (PDF/CSV)

### 9. Progress Data Management
- **Current:** Hardcoded in `src/store/progress.ts`
- **Improvements Needed:**
  - Create admin interface to update progress
  - Add data validation
  - Implement data persistence (local or backend)
  - Add ability to edit/delete entries
  - Add bulk import/export

### 10. Timeline Visualization
- **Status:** Not implemented
- **Action:** Create interactive timeline component showing:
  - All activities chronologically
  - Filtering by year/category
  - Visual indicators for different activity types
  - Hover states with details

### 11. Analytics Dashboard
- **Status:** Not implemented
- **Features:**
  - Year-over-year comparison charts
  - Category breakdown (talks vs projects vs articles)
  - Completion trends over time
  - Monthly/quarterly progress views
  - Goal achievement predictions

---

## 🔧 Technical Improvements

### 12. Type Safety Enhancements
- **Files:** Various TypeScript files
- **Actions:**
  - Remove `any` types (e.g., `src/views/HomePage.vue:40`)
  - Strengthen type definitions
  - Add runtime type validation
  - Fix TypeScript warnings

### 13. State Management Review
- **Current:** Using Pinia
- **Improvements:**
  - Add state persistence
  - Implement optimistic updates
  - Add undo/redo functionality
  - Create actions for all mutations

### 14. Router Enhancements
- **File:** `src/router/index.ts`
- **Missing:**
  - Meta tags for SEO
  - Route guards for invalid years
  - Better 404 handling
  - Breadcrumb navigation
  - Dynamic route titles

### 15. Component Organization
- **Actions:**
  - Split large components into smaller pieces
  - Create shared/common components directory
  - Document component props and events
  - Add component unit tests

---

## 🧪 Testing

### 16. Add Test Suite
- **Status:** No tests currently
- **Needed:**
  - Unit tests for components
  - Integration tests for store
  - E2E tests for critical paths
  - Visual regression tests
  - Accessibility tests

### 17. Add Linting Rules
- **Current:** ESLint configured
- **Actions:**
  - Add Vue-specific rules
  - Add accessibility linting
  - Configure pre-commit hooks
  - Add TypeScript strict mode

---

## 📝 Documentation

### 18. Component Documentation
- **Missing:**
  - JSDoc comments for components
  - Props documentation
  - Usage examples
  - Storybook or similar component explorer

### 19. Developer Documentation
- **Needed:**
  - Architecture decision records (ADRs)
  - Contributing guidelines
  - Code style guide
  - Component patterns guide
  - State management patterns

### 20. User Documentation
- **Needed:**
  - How to update progress data
  - Feature usage guide
  - FAQ section
  - Troubleshooting guide

---

## 🚀 Deployment & DevOps

### 21. CI/CD Pipeline
- **Status:** Not configured
- **Needed:**
  - GitHub Actions workflow
  - Automated testing
  - Build validation
  - Deployment automation
  - Version tagging

### 22. Production Optimization
- **Actions:**
  - Enable code splitting
  - Optimize bundle size
  - Add PWA capabilities
  - Implement caching strategy
  - Add error tracking (e.g., Sentry)

### 23. SEO & Performance
- **Improvements:**
  - Add meta tags
  - Create sitemap
  - Add Open Graph tags
  - Optimize images
  - Implement lazy loading
  - Add performance monitoring

---

## 🌟 Nice-to-Have Features

### 24. Social Sharing
- Add share buttons for achievements
- Generate shareable progress images
- Create yearly recap graphics

### 25. Notifications & Reminders
- Add progress reminders
- Celebrate milestone achievements
- Weekly/monthly summary emails

### 26. Comparison & Benchmarking
- Compare progress across years
- Set and track stretch goals
- Add motivational elements

### 27. Data Export
- Export progress reports (PDF, CSV)
- Generate yearly summaries
- Create presentation-ready slides

### 28. Integrations
- Connect to calendar for talks/events
- Sync with GitHub for projects
- Integration with blog platforms for articles

---

## 🐛 Known Issues

### Bug Fixes Needed
1. **Checkbox state persistence:** Verify localStorage implementation works correctly
2. **Route year validation:** `/year/:year` doesn't validate if year exists in data
3. **Update filter:** UpdateFilter component needs better error handling
4. **Type inconsistencies:** Some components use `any` type (HomePage.vue:40)

---

## 📋 Data Updates

### Current Year (2025) Progress Tracking
- **Talks:** 8/10 completed
- **Projects:** 2/10 completed
- **Articles:** 9/10 completed

### Missing Data
- Need to add 2026 goals structure
- Historical data before 2019 (if applicable)
- Missing project URLs for some entries
- Incomplete metadata for some talks/articles

---

## 🔄 Maintenance Tasks

### Regular Updates Needed
- [ ] Update progress data monthly
- [ ] Review and update dependencies quarterly
- [ ] Security audit every 6 months
- [ ] Performance review quarterly
- [ ] Accessibility audit annually

### Dependency Management
- [ ] Update to latest Tailwind CSS features
- [ ] Review and update Vue 3 patterns
- [ ] Keep Vite configuration current
- [ ] Monitor TypeScript version compatibility

---

## Priority Ranking

### Must Have (Next Sprint)
1. Fix TypeScript warnings (#1)
2. Add screenshots to README (#2)
3. Implement proper Archives page (#3)
4. Add basic tests (#16)

### Should Have (Next Quarter)
1. Complete dark mode (#4)
2. Improve accessibility (#5)
3. Enhance year detail page (#8)
4. Add loading states (#7)

### Could Have (Future)
1. Analytics dashboard (#11)
2. Timeline visualization (#10)
3. Social sharing (#24)
4. Data export features (#27)

---

## Notes

- The application is built with Vue 3, TypeScript, Vite, Pinia, and Tailwind CSS
- Current focus appears to be on speed-running to an MVP
- Recent commits show progress data updates and CSS refinements
- The project structure is clean but needs more feature completeness
- Good foundation for accessibility and responsive design exists

---

**For questions or to contribute, please review the main README.md file.**
