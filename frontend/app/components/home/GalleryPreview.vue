<script setup lang="ts">
/**
 * GalleryPreview.vue
 * Purpose: Before/after gallery teaser
 */
import { gallery } from '~/data/gallery'
const previewItems = gallery.slice(0, 3)
</script>

<template>
  <section class="section-py bg-pd-primary text-white overflow-hidden rounded-[2.5rem]">
    <div class="container-pd">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
        <div class="max-w-2xl">
          <UiSectionLabel label="Real Results" dark />
          <h2 class="text-white">Transformations That Speak for Themselves</h2>
        </div>
        <UiBaseButton variant="ghost" to="/services#gallery">View Full Gallery</UiBaseButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="item in previewItems" 
          :key="item.id"
          class="group"
        >
          <GalleryBeforeAfterSlider 
            :before-src="item.images.before"
            :after-src="item.images.after"
            :title="item.title"
            class="mb-6"
          />
          <h3 class="text-white text-xl font-bold transition-colors group-hover:text-pd-accent mb-2">{{ item.title }}</h3>
          <p class="text-pd-primary-light/70 text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>
