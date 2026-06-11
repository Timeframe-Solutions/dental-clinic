<script setup lang="ts">
/**
 * GalleryLightbox.vue
 * Purpose: Fullscreen image lightbox
 */
const { isOpen, activeItem, close } = useGalleryLightbox()
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen && activeItem" class="fixed inset-0 z-[100] bg-pd-neutral-900 flex flex-col">
        <!-- Header -->
        <div class="p-4 lg:p-6 flex items-center justify-between text-white relative z-10">
          <div>
            <h3 class="text-white text-xl">{{ activeItem.title }}</h3>
            <p class="text-pd-neutral-400 text-sm">{{ activeItem.description }}</p>
          </div>
          <button @click="close" class="p-2 hover:bg-white/10 rounded-full transition-colors">
            <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Content -->
        <div class="flex-grow flex items-center justify-center p-4 lg:p-12 overflow-hidden">
          <div class="w-full max-w-5xl">
            <GalleryBeforeAfterSlider 
              :before-src="activeItem.images.before"
              :after-src="activeItem.images.after"
            />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
