<script setup lang="ts">
/**
 * StarRating.vue
 * Purpose: Visual star rating display
 */
defineProps<{
  rating: number
  max?: number
}>()
</script>

<template>
  <div class="flex gap-1 text-pd-star">
    <Icon 
      v-for="i in (max || 5)" 
      :key="i"
      name="material-symbols:star-rounded"
      class="w-5 h-5"
      :class="i <= rating ? 'text-pd-star' : 'text-pd-neutral-200'"
    />
  </div>
</template>
