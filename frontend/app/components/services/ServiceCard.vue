<script setup lang="ts">
/**
 * ServiceCard.vue
 * Purpose: Individual service card atom
 */
import type { Service } from '~/types/service'

defineProps<{
  service: Service
  variant?: 'compact' | 'detailed'
}>()
</script>

<template>
  <NuxtLink 
    :to="service.slug.startsWith('/') ? service.slug : `/services#${service.id}`"
    class="bg-white p-8 rounded-2xl border border-pd-neutral-100 shadow-pd-card hover:shadow-pd-card-hover hover:border-pd-accent-light/60 hover:-translate-y-1 transition-all duration-300 group flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-pd-accent focus:ring-offset-2"
  >
    <div class="w-14 h-14 bg-pd-primary-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-pd-accent transition-all duration-300">
      <Icon :name="service.icon" class="text-2xl text-pd-primary group-hover:text-white transition-colors duration-300" aria-hidden="true" />
    </div>
    
    <h3 class="text-xl font-bold mb-3 text-pd-neutral-900 group-hover:text-pd-accent transition-colors leading-snug">
      {{ service.name }}
    </h3>
    
    <p class="text-pd-neutral-600 text-sm leading-relaxed mb-6 flex-grow">
      {{ variant === 'detailed' ? service.description : service.description.substring(0, 80) + '...' }}
    </p>
    
    <div class="flex items-center gap-2 text-pd-accent font-semibold text-sm">
      <span>{{ service.ctaLabel || 'Learn More' }}</span>
      <Icon name="lucide:arrow-right" class="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
    </div>
  </NuxtLink>
</template>

