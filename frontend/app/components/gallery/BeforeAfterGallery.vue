<script setup lang="ts">
/**
 * BeforeAfterGallery.vue
 * Purpose: Full gallery with category filter
 */
import { gallery } from '~/data/gallery'

const categories = ['all', 'braces', 'whitening', 'implants', 'veneers']
const activeCategory = ref('all')

const filteredGallery = computed(() => {
  if (activeCategory.value === 'all') return gallery
  return gallery.filter(item => item.category === activeCategory.value)
})
</script>

<template>
  <div class="py-12">
    <!-- Filters -->
    <div class="flex flex-wrap justify-center gap-4 mb-16">
      <button 
        v-for="cat in categories" 
        :key="cat"
        class="px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 capitalize"
        :class="activeCategory === cat ? 'bg-pd-accent text-white shadow-pd-md' : 'bg-white text-pd-neutral-600 hover:bg-pd-accent-light hover:text-pd-accent'"
        @click="activeCategory = cat"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <div 
        v-for="item in filteredGallery" 
        :key="item.id"
        class="group"
      >
        <GalleryBeforeAfterSlider 
          :before-src="item.images.before"
          :after-src="item.images.after"
          :title="item.title"
          class="mb-6"
        />
        <h4 class="text-xl mb-2">{{ item.title }}</h4>
        <p class="text-pd-neutral-600 text-sm">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>
