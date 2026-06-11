<script setup lang="ts">
/**
 * TeamCard.vue
 * Purpose: Individual doctor card
 */
import type { TeamMember } from '~/types/team'

defineProps<{
  member: TeamMember
}>()
</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden shadow-pd-card hover:shadow-pd-card-hover border border-pd-neutral-100/60 hover:border-pd-accent-light/50 transition-all duration-300 group flex flex-col h-full">
    <div class="relative aspect-[3/4] overflow-hidden bg-pd-neutral-50">
      <NuxtImg 
        :src="member.photo" 
        :alt="member.name" 
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        format="webp"
        loading="lazy"
        width="300"
        height="400"
      />
    </div>
    <div class="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 class="text-lg font-bold text-pd-neutral-900 mb-1">{{ member.name }}</h3>
        <p class="text-pd-accent text-xs font-bold uppercase tracking-wider mb-4">{{ member.title }}</p>
        <p class="text-pd-neutral-600 text-sm leading-relaxed mb-6">
          {{ member.bio }}
        </p>
      </div>
      <UiSocialIcons variant="dark" />
    </div>
  </div>
</template>

