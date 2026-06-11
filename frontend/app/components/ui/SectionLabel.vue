<script setup lang="ts">
/**
 * SectionLabel.vue
 * Purpose: Pill eyebrow label above section headings
 * Props:
 *   label: string
 *   dark: boolean (white text for dark backgrounds)
 */
defineProps<{
  label: string
  dark?: boolean
}>()
</script>

<template>
  <span 
    class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
    :class="dark ? 'bg-white/10 text-white' : 'bg-pd-accent-light text-pd-accent'"
  >
    <span class="mr-1.5">•</span>
    {{ label }}
  </span>
</template>
