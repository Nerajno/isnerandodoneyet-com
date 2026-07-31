<script setup lang="ts">
import { computed } from "vue";
import { useProgressStore } from "../store/progress";
import ProgressCard from "../components/ProgressCard.vue";
import PostOpSection from "../components/PostOpSection.vue";
import type { ProgressItemWithId, TimelineUpdate } from "../types";
import { useLocalStorage } from "../composables/useLocalStorage";
import AccordionWithCheckboxes from "../components/AccordionWithCheckboxes.vue";

const progressStore = useProgressStore();
const { fetchProgressData, getYearData, calculateOverallProgress } = progressStore;
const { getCheckbox, setCheckbox } = useLocalStorage();

const progressData = computed<ProgressItemWithId[]>(
  () => fetchProgressData().categories
);

const currentYear = new Date().getFullYear();

const totalProgressPercentage = computed(() =>
  calculateOverallProgress(currentYear)
);

const yearData = computed(() => getYearData(currentYear));

function getSectionItems(category: string) {
  return (
    yearData.value?.updates.filter((u: TimelineUpdate) => u.category === category) || []
  );
}
</script>

<template>
  <main
    id="main-content"
    tabindex="-1"
    aria-label="Main content"
    class="outline-none"
  >
    <h1
      class="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
    >
      Is Nerando Done Yet?
    </h1>

    <div
      id="total-progress"
      class="text-center mb-12"
      aria-live="polite"
      aria-atomic="true"
    >
      <span class="text-6xl font-bold text-gray-900 dark:text-white">{{ totalProgressPercentage }}%</span>
      <p class="text-lg text-gray-500 dark:text-gray-400 mt-1">complete</p>
    </div>

    <section class="mb-16 min-h-[70vh]" aria-labelledby="goals-heading">
      <h2
        id="goals-heading"
        class="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white"
      >
        {{ currentYear }} Goals Progress
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <progress-card
          v-for="category in progressData"
          :key="category.id"
          :item="category"
        />
      </div>
    </section>
    <section class="min-h-[70vh]">
      <!-- New Sections for Projects, Talks, and Articles -->
      <AccordionWithCheckboxes
        id="projects"
        title="Projects"
        description="A list of projects for the current year."
        :items="getSectionItems('Projects')"
        :getCheckboxState="getCheckbox"
        :setCheckboxState="setCheckbox"
      />
      <AccordionWithCheckboxes
        id="talks"
        title="Talks"
        description="Talks and presentations for the current year."
        :items="getSectionItems('Talks')"
        :getCheckboxState="getCheckbox"
        :setCheckboxState="setCheckbox"
      />
      <AccordionWithCheckboxes
        id="articles"
        title="Articles"
        description="Articles written or published this year."
        :items="getSectionItems('Articles')"
        :getCheckboxState="getCheckbox"
        :setCheckboxState="setCheckbox"
      />
    </section>

    <PostOpSection
      :year="currentYear"
      :notes="yearData?.notes"
      :recap="yearData?.recap"
    />
  </main>
</template>
