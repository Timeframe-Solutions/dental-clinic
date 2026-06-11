<script setup lang="ts">
/**
 * WhatsAppButton.vue
 * Purpose: Fixed bottom-right floating CTA
 */
const config = useRuntimeConfig()
const whatsappNumber = config.public.whatsappNumber || '254XXXXXXXXX'
const defaultMsg = encodeURIComponent("Hi, I'd like to book a dental appointment.")
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMsg}`
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 group">
    <!-- Tooltip -->
    <div class="absolute bottom-full right-0 mb-3 px-3 py-2 bg-pd-neutral-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-pd-lg">
      Chat with us on WhatsApp
      <!-- Tooltip arrow -->
      <div class="absolute top-full right-4 -mt-1 border-4 border-transparent border-t-pd-neutral-900" />
    </div>

    <!-- Pulsing background -->
    <div class="absolute inset-0 bg-pd-accent rounded-full animate-ping opacity-25" />
    
    <a 
      :href="whatsappUrl"
      target="_blank"
      class="relative flex items-center justify-center w-14 h-14 bg-pd-accent text-white rounded-full shadow-pd-lg hover:bg-pd-accent-hover hover:scale-110 transition-all duration-300"
    >
      <span class="sr-only">WhatsApp</span>
      <Icon name="ic:baseline-whatsapp" class="w-8 h-8" />
    </a>
  </div>
</template>
