<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
    id: string;
    title: string;
    description?: string;
    items: any[];
    getCheckboxState: (id: string) => boolean;
    setCheckboxState: (id: string, value: boolean) => void;
}>();

const emit = defineEmits(['change']);

const open = ref(false);

function toggleAccordion() {
    open.value = !open.value;
}

// Always render 10 items: real items first, then demo items
const combinedItems = computed(() => {
    const real = props.items.slice(0, 10);
    const demoCount = 10 - real.length;
    const demo = Array.from({ length: demoCount }, (_, i) => ({
        isDemo: true,
        idx: real.length + i + 1,
        label: `Demo ${props.title.slice(0, -1)} ${real.length + i + 1}`,
    }));
    return [...real, ...demo];
});
</script>

<template>
    <section class="w-[70vw] mx-auto my-16" :aria-labelledby="`${id}-heading`">
        <h2 :id="`${id}-heading`" class="text-2xl font-bold mb-2 text-white flex items-center">
            <span>{{ title }}</span>
            <!-- <svg :class="['ml-2 h-5 w-5 transition-transform', open ? 'rotate-180' : '']" fill="none"
                stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
            </svg> -->
        </h2>
        <p v-if="description" class="mb-4 text-white">{{ description }}</p>
        <details :open="open" class="mb-2 bg-white dark:bg-gray-800 rounded shadow group" @toggle="toggleAccordion"
            :id="`${id}-accordion`">
            <summary
                class="cursor-pointer px-4 py-2 font-semibold flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                :aria-controls="`${id}-content`" :aria-expanded="open" tabindex="0">
                <span>Show {{ title }}</span>
                <svg :class="['h-4 w-4 ml-2 transition-transform', open ? 'rotate-180' : '']" fill="none"
                    stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </summary>
            <div :id="`${id}-content`" class="p-4 space-y-2">
                <p v-if="items.length === 0" class="text-sm text-gray-400 dark:text-gray-500 italic mb-3">
                  No {{ title.toLowerCase() }} added yet — placeholders shown below.
                </p>
                <label v-for="(item, idx) in combinedItems" :key="item.id || item.idx || idx"
                    class="flex items-center space-x-2 group text-white" :class="item.isDemo ? 'opacity-60' : ''">
                    <input type="checkbox" class="form-checkbox accent-blue-500"
                        :checked="item.isDemo ? false : getCheckboxState((item.id || idx).toString())"
                        :disabled="item.isDemo"
                        @change="!item.isDemo && setCheckboxState((item.id || idx).toString(), ($event.target as HTMLInputElement).checked); emit('change', item, ($event.target as HTMLInputElement).checked)"
                        :id="`${id}-checkbox-${item.id || item.idx || idx}`" />
                    <span class="text-white">
                        <template v-if="item.isDemo">
                            {{ item.label }}
                        </template>
                        <template v-else-if="item.link && item.link.url">
                            <a :href="item.link.url" target="_blank" rel="noopener noreferrer"
                                class="text-blue-300 hover:underline">
                                {{ item.link.text || item.text || item.title || `Item ${idx + 1}` }}
                            </a>
                        </template>
                        <template v-else>
                            {{ item.text || item.title || `Item ${idx + 1}` }}
                        </template>
                    </span>
                </label>
            </div>
        </details>
    </section>
</template>

<style scoped>
.group:hover .group-hover\:bg-gray-100 {
    background-color: #f3f4f6;
}

.group:focus-within .group-hover\:bg-gray-100 {
    background-color: #f3f4f6;
}
</style>
