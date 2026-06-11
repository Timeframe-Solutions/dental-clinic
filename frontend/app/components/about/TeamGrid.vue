<script setup lang="ts">
/**
 * TeamGrid.vue
 * Purpose: Doctor profile grid
 */
import { team } from '~/data/team'
</script>

<template>
  <section class="section-py">
    <div class="container-pd text-center mb-16">
      <UiSectionLabel label="Our Team" />
      <h2>Our Expert Dentists</h2>
    </div>

    <div class="container-pd grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      <AboutTeamCard 
        v-for="member in team" 
        :key="member.id" 
        :member="member" 
      />
    </div>
  </section>
</template>
