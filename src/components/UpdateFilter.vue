<template>
  <div class="mb-6 flex flex-wrap gap-2" role="group" aria-label="Filter categories">
    <button
      v-for="category in categories"
      :key="category"
      @click="toggleFilter(category)"
      class="px-3 py-1 rounded-full text-sm transition-colors duration-200"
      :class="isActive(category)
        ? 'bg-blue-500 text-white dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700'
        : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'"
      :aria-pressed="isActive(category)"
      :aria-label="`Filter by ${category}`"
    >
      {{ category }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// Define emit events
const emit = defineEmits<{
  'filter-change': [filters: string[]];
}>();

const ALL_CATEGORY = 'All' as const;

// Move the categories to props definition directly
const { categories = [ALL_CATEGORY, 'Talks', 'Projects', 'Articles'] } = defineProps<{
  categories?: string[];
}>();
const activeFilters = ref<string[]>([ALL_CATEGORY]);

const toggleFilter = (category: string): void => {
  if (category === ALL_CATEGORY) {
    activeFilters.value = [ALL_CATEGORY];
  } else {
    // Remove 'All' when selecting a specific category
    if (activeFilters.value.includes(ALL_CATEGORY)) {
      activeFilters.value = activeFilters.value.filter(f => f !== ALL_CATEGORY);
    }

    // Toggle the selected category
    if (activeFilters.value.includes(category)) {
      activeFilters.value = activeFilters.value.filter(f => f !== category);
      // Reset to 'All' if no filters remain
      if (activeFilters.value.length === 0) {
        activeFilters.value = [ALL_CATEGORY];
      }
    } else {
      activeFilters.value.push(category);
    }
  }

  emit('filter-change', activeFilters.value);
};

const isActive = (category: string): boolean => {
  return activeFilters.value.includes(category);
};

// Emit initial filter state when mounted
onMounted(() => {
  emit('filter-change', activeFilters.value);
});
</script>
