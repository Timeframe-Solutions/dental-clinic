<script setup lang="ts">
/**
 * AccordionItem.vue
 * Purpose: Single expandable FAQ row
 */
const props = defineProps<{
  question: string
  answer: string
  isOpen?: boolean
}>()

const emit = defineEmits(['toggle'])
</script>

<template>
  <div class="border-b border-pd-neutral-100 last:border-0">
    <button
      class="flex items-center justify-between w-full py-5 text-left transition-colors hover:text-pd-accent"
      @click="emit('toggle')"
    >
      <span class="text-lg font-semibold text-pd-neutral-900">{{ question }}</span>
      <Icon 
        name="lucide:chevron-down" 
        class="flex-shrink-0 ml-4 transition-transform duration-300 text-pd-neutral-400"
        :class="{ 'rotate-180 text-pd-accent': isOpen }"
      />
    </button>
    <div 
      v-show="isOpen"
      class="pb-5 transition-all duration-300"
    >
      <p class="text-pd-neutral-600">
        {{ answer }}
      </p>
    </div>
  </div>
</template>
