<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import type { ProgressItem } from '../types';
import ProgressBar from './ProgressBar.vue';

const props = defineProps<{ item: ProgressItem }>();

const circumference = 2 * Math.PI * 40;
const dashOffset = ref(circumference);

const progressPercentage = computed(() => {
  return Math.round((props.item.completed / props.item.total) * 100);
});

const formattedTitle = computed(() => {
  return props.item.title.replace('\n', '<br />');
});

onMounted(() => {
  setTimeout(() => {
    dashOffset.value = circumference - (progressPercentage.value / 100) * circumference;
  }, 100);
});
</script>

<template>
  <div class="progress-card" role="region" :aria-label="`${item.title} progress card`" tabindex="0">
    <div class="mb-4">
      <svg class="w-full h-32" viewBox="0 0 100 100" role="img"
        :aria-label="`${progressPercentage}% complete for ${item.title}`" :aria-describedby="`progress-desc-${item.title}`">
        <circle class="text-gray-200 dark:text-gray-700 stroke-current" stroke-width="8" cx="50" cy="50" r="40"
          fill="transparent"></circle>
        <circle class="progress-ring stroke-current" stroke-width="8" style="color: var(--color-accent-bright);"
          :stroke-dasharray="circumference" :stroke-dashoffset="dashOffset" stroke-linecap="round" cx="50" cy="50"
          r="40" fill="transparent"></circle>
        <text x="50" y="50" font-size="20" text-anchor="middle" alignment-baseline="middle"
          class="font-bold fill-current text-gray-800 dark:text-white">
          {{ item.completed }}/{{ item.total }}
        </text>
        <desc :id="`progress-desc-${item.title}`">{{ progressPercentage }}% complete for {{ item.title }}</desc>
      </svg>
    </div>
    <div class="text-xl text-center font-medium text-gray-800 dark:text-white" v-html="formattedTitle"></div>
    <div class="mt-2 text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
      {{ progressPercentage }}% Complete
    </div>
    <progress-bar :percentage="progressPercentage" color="var(--color-accent)" />
  </div>
</template>

<style scoped>
@reference "tailwindcss";

.progress-card {
  @apply p-8 md:p-12 lg:p-20 text-center shadow-lg rounded-xl bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1;
}
</style>
