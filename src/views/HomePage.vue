<script setup lang="ts">
import { computed } from "vue";
// import { storeToRefs } from 'pinia';
import { useProgressStore } from "../store/progress";
import ProgressCard from "../components/ProgressCard.vue";
import PostOpSection from "../components/PostOpSection.vue";
import type { ProgressItemWithId } from "../types";
import { useLocalStorage } from "../composables/useLocalStorage";
import AccordionWithCheckboxes from "../components/AccordionWithCheckboxes.vue";

// Type definitions
// (IDs are added in the store's getter)

const progressStore = useProgressStore();
const { fetchProgressData, getYearData } = progressStore;
const localStorage = useLocalStorage();

// Get progress data from the store
const progressData = computed<ProgressItemWithId[]>(
  () => fetchProgressData().categories
);

const totalProgressPercentage = computed(() => {
  if (!progressData.value.length) return 0;
  const totalCompleted = progressData.value.reduce(
    (sum: number, category: ProgressItemWithId) => sum + category.completed,
    0
  );
  const totalGoals = progressData.value.reduce(
    (sum: number, category: ProgressItemWithId) => sum + category.total,
    0
  );
  return Math.round((totalCompleted / totalGoals) * 100);
});

const currentYear = new Date().getFullYear();
const yearData = computed(() => getYearData(currentYear));

function getSectionItems(category: string) {
  return (
    yearData.value?.updates.filter((u: any) => u.category === category) || []
  );
}

function getCheckboxState(id: string) {
  return localStorage.getItem(`checkbox_${id}`) === "true";
}
function setCheckboxState(id: string, value: boolean) {
  localStorage.setItem(`checkbox_${id}`, value ? "true" : "false");
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
        :getCheckboxState="getCheckboxState"
        :setCheckboxState="setCheckboxState"
      />
      <AccordionWithCheckboxes
        id="talks"
        title="Talks"
        description="Talks and presentations for the current year."
        :items="getSectionItems('Talks')"
        :getCheckboxState="getCheckboxState"
        :setCheckboxState="setCheckboxState"
      />
      <AccordionWithCheckboxes
        id="articles"
        title="Articles"
        description="Articles written or published this year."
        :items="getSectionItems('Articles')"
        :getCheckboxState="getCheckboxState"
        :setCheckboxState="setCheckboxState"
      />
    </section>

    <PostOpSection
      :year="currentYear"
      :notes="yearData?.notes"
      :recap="yearData?.recap"
    />
  </main>
</template>
