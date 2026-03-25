<script setup lang="ts">
import { computed } from 'vue';
import { useProgressStore } from '../store/progress';
import PostOpSection from '../components/PostOpSection.vue';

const progressStore = useProgressStore();

const years = computed(() =>
  [...progressStore.years].sort((a, b) => b.year - a.year)
);

function progressFor(year: number) {
  return progressStore.calculateOverallProgress(year);
}
</script>

<template>
  <main id="main-content" tabindex="-1" aria-label="Archives" class="outline-none">
    <h1 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
      Archives
    </h1>
    <p class="text-center text-gray-600 dark:text-gray-400 mb-12">
      A look back at progress across the years.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <router-link
        v-for="yearData in years"
        :key="yearData.year"
        :to="`/year/${yearData.year}`"
        class="block p-6 rounded-xl bg-white dark:bg-slate-800 shadow hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700"
      >
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">{{ yearData.year }}</h2>
        <p v-if="progressFor(yearData.year) > 0" class="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          {{ progressFor(yearData.year) }}%
        </p>
        <p v-else class="text-sm text-gray-400 dark:text-gray-500 italic mb-4">In progress</p>
        <ul class="space-y-1">
          <li
            v-for="item in yearData.items"
            :key="item.category"
            class="text-sm text-gray-600 dark:text-gray-400"
          >
            {{ item.category }}: {{ item.completed }}/{{ item.total }}
          </li>
        </ul>
      </router-link>
    </div>
    <PostOpSection
      notes="A running log of years — each one a different version of the same question: is Nerando done yet? Spoiler: not yet."
      :recap="[
        'Every year the goals shift, but the categories stay the same: talks, projects, articles',
        'The trend line is up — more done each year than the last',
        'This archive exists as a receipt, not a resume',
      ]"
    />
  </main>
</template>
