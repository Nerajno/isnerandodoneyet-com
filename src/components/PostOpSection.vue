<script setup lang="ts">
defineProps<{
  notes?: string;
  recap?: string[];
  year?: number;
}>();
</script>

<template>
  <section class="mt-20 border-t border-gray-200 dark:border-slate-700 pt-12" aria-labelledby="postop-heading">
    <h2 id="postop-heading" class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
      {{ year ? `${year} — Reflections & Recap` : 'Reflections & Recap' }}
    </h2>
    <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
      Notes and key takeaways from the year.
    </p>

    <div v-if="notes || (recap && recap.length > 0)" class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Notes -->
      <div v-if="notes" class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-gray-100 dark:border-slate-700">
        <h3 class="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Notes</h3>
        <p class="text-gray-700 dark:text-gray-300 leading-relaxed">{{ notes }}</p>
      </div>

      <!-- Recap -->
      <div v-if="recap && recap.length > 0" class="bg-white dark:bg-slate-800 rounded-xl p-6 shadow border border-gray-100 dark:border-slate-700">
        <h3 class="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">Key Takeaways</h3>
        <ul class="space-y-3">
          <li
            v-for="(point, i) in recap"
            :key="i"
            class="flex items-start gap-2 text-gray-700 dark:text-gray-300"
          >
            <span class="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true"></span>
            <span>{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="bg-white dark:bg-slate-800 rounded-xl p-8 shadow border border-dashed border-gray-200 dark:border-slate-600 text-center">
      <p class="text-gray-400 dark:text-gray-500 italic">Reflections for this year haven't been added yet.</p>
    </div>
  </section>
</template>
