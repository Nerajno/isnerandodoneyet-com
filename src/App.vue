<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
import { useThemeStore } from './store/theme';

const theme = useThemeStore();
theme.init();
</script>

<template>
  <div class="min-h-screen" style="background-color: var(--color-bg);">
    <app-header />
    <main class="w-full max-w-7xl mx-auto px-4 py-8">
      <router-view />
    </main>
    <app-footer />
  </div>
</template>
