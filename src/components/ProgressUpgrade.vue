<template>
    <div class="mb-4 text-gray-800 dark:text-white">
      <p>
        <strong>{{ date }}:</strong> {{ text }}
        <template v-if="links && links.length > 0">
          <template v-for="(link, linkIndex) in links" :key="linkIndex">
            <a :href="link.url" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
              {{ link.text }}
            </a>
            <template v-if="linkIndex < links.length - 1">, </template>
          </template>
        </template>
      </p>
    </div>
  </template>

  <script lang="ts">
  import { defineComponent, PropType } from 'vue';

  interface Link {
    text: string;
    url: string;
  }

  export default defineComponent({
    name: 'ProgressUpdate',
    props: {
      date: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      links: {
        type: Array as PropType<Link[]>,
        default: () => []
      }
    }
  });
  </script>
