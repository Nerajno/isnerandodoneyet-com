<script setup lang="ts">
import { useThemeStore } from '../../store/theme';

const theme = useThemeStore();
</script>

<template>
  <header class="app-header">
    <div class="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">

      <!-- Logo -->
      <router-link to="/" class="logo">
        <span class="logo-full hidden sm:inline">IsNerandoDoneYet</span>
        <span class="logo-short sm:hidden">INDY</span>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="main-nav hidden md:flex" aria-label="Main navigation">
        <router-link to="/" class="nav-link" active-class="nav-link--active" exact-active-class="nav-link--active">
          About
        </router-link>
        <router-link to="/current" class="nav-link" active-class="nav-link--active">
          Current Year
        </router-link>
        <router-link to="/archives" class="nav-link" active-class="nav-link--active">
          Archives
        </router-link>
        <router-link to="/history" class="nav-link" active-class="nav-link--active">
          History
        </router-link>
      </nav>

      <!-- Right-side controls -->
      <div class="flex items-center gap-2">
        <button
          @click="theme.toggle()"
          class="theme-toggle"
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          <!-- Sun icon — shown in dark mode -->
          <svg v-if="theme.isDarkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <!-- Moon icon — shown in light mode -->
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

    </div>
  </header>
</template>

<style scoped>
@reference "tailwindcss";

/* ── Header shell ─────────────────────────────────────── */
.app-header {
  @apply sticky top-0 z-10;
  @apply bg-white/80 dark:bg-slate-900/80;
  @apply backdrop-blur-md;
  @apply border-b border-gray-100 dark:border-slate-700;
  @apply shadow-sm;
}

/* ── Logo ─────────────────────────────────────────────── */
.logo {
  @apply text-lg font-bold tracking-tight;
  @apply text-slate-800 dark:text-white;
  @apply hover:text-blue-600 dark:hover:text-blue-400;
  @apply transition-colors;
  @apply min-w-0 flex-shrink-0;
  text-decoration: none;
}

.logo-short {
  @apply text-base;
}

/* ── Desktop nav ──────────────────────────────────────── */
.main-nav {
  @apply items-center gap-8;
}

.nav-link {
  @apply text-sm font-medium;
  @apply text-slate-700 dark:text-slate-300;
  @apply hover:text-blue-600 dark:hover:text-blue-400;
  @apply transition-colors duration-150;
  @apply py-1 border-b-2 border-transparent;
  text-decoration: none;
}

.nav-link--active {
  @apply text-blue-600 dark:text-blue-400;
}

/* ── Theme toggle ─────────────────────────────────────── */
.theme-toggle {
  /* min 44×44px touch target */
  @apply flex items-center justify-center w-11 h-11 rounded-full;
  @apply text-gray-600 dark:text-gray-300;
  @apply hover:bg-gray-100 dark:hover:bg-slate-700;
  @apply transition-colors;
  background-color: transparent;
  border: none;
  box-shadow: none;
}

</style>
