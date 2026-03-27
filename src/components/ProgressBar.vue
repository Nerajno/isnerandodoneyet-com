<template>
  <div class="w-full rounded-full h-2.5" style="background-color: var(--color-bg-tertiary);">
    <div
      class="h-2.5 rounded-full transition-all duration-500"
      :style="{ width: `${percentage}%`, backgroundColor: color }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  percentage: {
    type: Number,
    required: true
  },
  color: {
    type: String,
    default: 'var(--color-accent)'
  }
});
</script>
