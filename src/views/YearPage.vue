<script setup lang="ts">
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useProgressStore } from '../store/progress';
import ProgressCard from '../components/ProgressCard.vue';
import PostOpSection from '../components/PostOpSection.vue';
import AccordionWithCheckboxes from '../components/AccordionWithCheckboxes.vue';
import { useLocalStorage } from '../composables/useLocalStorage';

const props = defineProps<{ year: number }>();
const router = useRouter();
const progressStore = useProgressStore();
const { getCheckbox, setCheckbox } = useLocalStorage();

const yearData = computed(() => progressStore.getYearData(props.year));

const categories = computed(() =>
  yearData.value?.items.map((item, index) => ({ id: index + 1, ...item })) ?? []
);

const totalProgressPercentage = computed(() =>
  progressStore.calculateOverallProgress(props.year)
);

function getSectionItems(category: string) {
  return yearData.value?.updates.filter((u) => u.category === category) || [];
}

const uniqueCategories = computed(() =>
  [...new Set(yearData.value?.updates.map((u) => u.category) ?? [])]
);
</script>

<template>
  <main id="main-content" tabindex="-1" aria-label="Year detail" class="outline-none">
    <div v-if="yearData">
      <div class="flex items-center gap-4 mb-4">
        <button
          @click="router.back()"
          class="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          aria-label="Go back"
        >
          ← Back
        </button>
      </div>

      <h1 class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
        {{ year }}
      </h1>

      <div class="text-center mb-12" aria-live="polite" aria-atomic="true">
        <span class="text-6xl font-bold text-gray-900 dark:text-white">{{ totalProgressPercentage }}%</span>
        <p class="text-lg text-gray-500 dark:text-gray-400 mt-1">complete</p>
      </div>

      <section class="mb-16" aria-labelledby="goals-heading">
        <h2 id="goals-heading" class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
          {{ year }} Goals Progress
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <progress-card
            v-for="category in categories"
            :key="category.id"
            :item="category"
          />
        </div>
      </section>

      <section v-if="uniqueCategories.length > 0" class="min-h-[40vh]">
        <AccordionWithCheckboxes
          v-for="cat in uniqueCategories"
          :key="cat"
          :id="cat.toLowerCase()"
          :title="cat"
          :description="`${cat} for ${year}.`"
          :items="getSectionItems(cat)"
          :getCheckboxState="getCheckbox"
          :setCheckboxState="setCheckbox"
        />
      </section>

      <PostOpSection
        :year="year"
        :notes="yearData.notes"
        :recap="yearData.recap"
      />
    </div>

    <div v-else class="text-center py-24">
      <p class="text-2xl font-bold text-gray-900 dark:text-white mb-4">No data for {{ year }}</p>
      <router-link to="/archives" class="text-blue-600 dark:text-blue-400 hover:underline">
        ← Back to Archives
      </router-link>
    </div>
  </main>
</template>
