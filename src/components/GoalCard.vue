<template>
    <div class="p-20 text-center shadow-lg rounded-xl bg-white dark:bg-gray-800">
      <div class="text-4xl font-bold text-gray-800 dark:text-white">{{ completed }}/{{ total }}</div>
      <span class="text-gray-800 dark:text-white">{{ label }}</span>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'GoalCard',
    props: {
      completed: {
        type: Number,
        required: true
      },
      total: {
        type: Number,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  });
  </script>
