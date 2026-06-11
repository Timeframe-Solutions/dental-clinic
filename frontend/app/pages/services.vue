<script setup lang="ts">
/**
 * services.vue
 * Purpose: Services page
 */
import { generateSeoMeta } from '~/utils/seo'

useSeoMeta(generateSeoMeta({
  title: 'Expert Dental Services',
  description: 'Explore all dental services at Plaza Dental Nairobi — implants, braces, whitening, root canal, veneers and more.'
}))
</script>

<template>
  <div>
    <GlobalPageHero 
      title="Expert Dental Services in Nairobi"
      subtitle="Comprehensive, affordable dental care for every stage of life."
      :breadcrumbs="[{ name: 'Services', item: '/services' }]"
    />

    <section class="section-py bg-white">
      <div class="container-pd">
        <ServicesGrid />
      </div>
    </section>

    <section id="gallery" class="section-py bg-pd-off-white">
      <div class="container-pd">
        <div class="text-center max-w-3xl mx-auto mb-12">
          <UiSectionLabel label="Our Gallery" />
          <h2>Transformations That Speak for Themselves</h2>
        </div>
        <GalleryBeforeAfterGallery />
      </div>
    </section>

    <GlobalCtaBanner />
    <GalleryLightbox />
  </div>
</template>
