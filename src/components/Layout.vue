<template>
  <div class="flex min-h-screen flex-col">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Layout'
});
</script>
