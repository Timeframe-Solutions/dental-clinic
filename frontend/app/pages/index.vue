<script setup lang="ts">
/**
 * index.vue
 * Purpose: Home page
 */
import { generateSeoMeta } from '~/utils/seo'

useSeoMeta(generateSeoMeta({
  title: 'Trusted Dental Care',
  description: 'Book your dental appointment at Plaza Dental Clinic Nairobi. Expert dentists, modern equipment, full dental services.'
}))
</script>

<template>
  <div>
    <SeoSchemaLocalBusiness />
    
    <HomeHeroSection />
    <HomeQuickInfoBar />
    <HomeTrustIndicators />
    <HomeAboutPreview />
    <HomeServicesPreview />
    <HomeWhyChooseUs />
    <HomeGalleryPreview />
    <HomeTestimonialsSection />
    <GlobalCtaBanner />
  </div>
</template>
