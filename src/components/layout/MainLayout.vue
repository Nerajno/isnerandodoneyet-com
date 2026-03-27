<template>
  <div class="main-layout-wrapper">
    <a href="#main-content"
      class="skip-link sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 bg-blue-600 text-white px-4 py-2 rounded">Skip
      to main content</a>
    <app-header />

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <app-footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    AppHeader,
    AppFooter
  }
});
</script>

<style scoped>
@reference "tailwindcss";

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Visually hidden but accessible skip link */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link:focus:not(.sr-only) {
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 50;
  width: auto;
  height: auto;
  padding: 0.5rem 1rem;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal;
  border-radius: 0.375rem;
  background: #2563eb;
  color: #fff;
}

.main-layout-wrapper {
  @apply flex flex-col min-h-screen bg-gradient-to-b via-green-200 to-blue-300 from-yellow-200 dark:bg-gradient-to-b dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-200;
}
</style>
