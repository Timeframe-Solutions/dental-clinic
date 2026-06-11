<script setup lang="ts">
/**
 * AwardsStrip.vue
 * Purpose: Awards logo strip
 */
const awards = [
  'Business Excellence 2023',
  'Top Rated - Google Reviews',
  'KMA Member'
]
</script>

<template>
  <div class="py-12 border-t border-pd-neutral-100/60 bg-pd-off-white/40">
    <div class="container-pd">
      <div class="flex flex-wrap justify-center items-center gap-8 lg:gap-16 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
        <div v-for="award in awards" :key="award" class="flex items-center gap-2 text-sm lg:text-base font-bold text-pd-neutral-800 tracking-tight">
          <Icon name="lucide:trophy" class="text-pd-accent text-lg flex-shrink-0" aria-hidden="true" />
          <span>{{ award }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

