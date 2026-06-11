<script setup lang="ts">
/**
 * about.vue
 * Purpose: About Us page
 */
import { generateSeoMeta } from '~/utils/seo'

useSeoMeta(generateSeoMeta({
  title: 'About Plaza Dental Clinic',
  description: 'Learn about Plaza Dental — Nairobi\'s trusted dental practice. Meet our qualified team and our commitment to your smile.'
}))
</script>

<template>
  <div>
    <GlobalPageHero 
      title="Meet the Team Behind Your Smile"
      subtitle="Qualified, caring, and dedicated to making every visit a positive experience."
      :breadcrumbs="[{ name: 'About Us', item: '/about' }]"
    />

    <AboutOurStory />
    <AboutMissionValues />
    <AboutTeamGrid />
    <AboutAwardsStrip />
    <HomeTestimonialsSection />
    <GlobalCtaBanner />
  </div>
</template>
