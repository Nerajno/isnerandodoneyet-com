<script setup lang="ts">
import { ref } from 'vue';
import type { TimelineUpdate } from '../types';

defineProps<{
    id: string;
    title: string;
    description?: string;
    items: TimelineUpdate[];
    getCheckboxState: (id: string) => boolean;
    setCheckboxState: (id: string, value: boolean) => void;
}>();

const emit = defineEmits(['change']);

const open = ref(false);

function onToggle() {
    open.value = !open.value;
}
</script>

<template>
    <section class="w-[70vw] mx-auto my-16" :aria-labelledby="`${id}-heading`">
        <h2 :id="`${id}-heading`" class="text-2xl font-bold mb-2 text-gray-900 dark:text-white flex items-center">
            <span>{{ title }}</span>
        </h2>
        <p v-if="description" class="mb-4 text-gray-600 dark:text-gray-400">{{ description }}</p>
        <details
            class="mb-2 bg-white dark:bg-gray-800 rounded shadow-sm border border-gray-200 dark:border-gray-700"
            @toggle="onToggle"
            :id="`${id}-accordion`"
        >
            <summary
                class="cursor-pointer px-4 py-3 font-semibold flex items-center justify-between focus-visible:outline-2 focus-visible:outline-blue-500 rounded text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-750"
                :aria-controls="`${id}-content`" tabindex="0">
                <span>Show {{ title }}</span>
                <svg :class="['h-4 w-4 ml-2 transition-transform', open ? 'rotate-180' : '']" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div :id="`${id}-content`" class="px-4 pb-4 space-y-2" role="list">
                <label v-for="(item, idx) in items" :key="idx"
                    class="flex items-center gap-3 px-3 py-2 rounded hover:bg-gray-50 dark:hover:bg-gray-750 cursor-pointer text-gray-700 dark:text-gray-300">
                    <input type="checkbox" class="accent-blue-500 size-4"
                        :checked="getCheckboxState(idx.toString())"
                        @change="setCheckboxState(idx.toString(), ($event.target as HTMLInputElement).checked); emit('change', item, ($event.target as HTMLInputElement).checked)"
                        :id="`${id}-checkbox-${idx}`" />
                    <span>
                        <template v-if="item.link && item.link.url">
                            <a :href="item.link.url" target="_blank" rel="noopener noreferrer"
                                class="text-blue-600 dark:text-blue-400 hover:underline">
                                {{ item.link.text || item.text || `Item ${idx + 1}` }}
                            </a>
                        </template>
                        <template v-else>
                            {{ item.text || `Item ${idx + 1}` }}
                        </template>
                    </span>
                </label>
                <p v-if="items.length === 0" class="text-sm text-gray-400 dark:text-gray-500 italic px-3">
                    No {{ title.toLowerCase() }} added yet.
                </p>
            </div>
        </details>
    </section>
</template>
