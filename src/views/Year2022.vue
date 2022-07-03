<template>
    <main class="flex-grow container mx-auto px-6 py-8">
      <h1 class="text-3xl text-center text-gray-800 dark:text-white">{{ yearData.year }} Progress</h1>
      <h2 class="text-5xl font-bold text-center text-gray-800 dark:text-white">{{ yearData.progress }}%</h2>

      <div v-if="yearData.goals && yearData.goals.length > 0" class="mt-10 text-2xl text-center">
        <h2 class="text-3xl text-gray-800 dark:text-white">Stuff to do for {{ yearData.year }}</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
          <li v-for="(goal, index) in yearData.goals" :key="index" class="p-20 text-center shadow-lg rounded-xl bg-white dark:bg-gray-800">
            <div class="text-4xl font-bold text-gray-800 dark:text-white">{{ goal.completed }}/{{ goal.total }}</div>
            <span class="text-gray-800 dark:text-white">{{ goal.label }}</span>
          </li>
        </ul>
      </div>

      <div v-if="yearData.updates && yearData.updates.length > 0" class="mt-10 text-left w-full max-w-3xl mx-auto">
        <h2 class="text-3xl text-center mb-6 text-gray-800 dark:text-white">Progress Updates</h2>
        <div v-for="(update, index) in yearData.updates" :key="index" class="mb-4 text-gray-800 dark:text-white">
          <p>
            <strong>{{ update.date }}:</strong> {{ update.text }}
            <template v-if="update.links && update.links.length > 0">
              <template v-for="(link, linkIndex) in update.links" :key="linkIndex">
                <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
                  {{ link.text }}
                </a>
                <template v-if="linkIndex < update.links.length - 1">, </template>
              </template>
            </template>
          </p>
        </div>
      </div>
    </main>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import progressData from '../data/progressData';

  export default defineComponent({
    name: 'Year2022',
    setup() {
      const yearData = progressData['2022'];

      return {
        yearData
      };
    }
  });
  </script>
