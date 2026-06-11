<script setup lang="ts">
/**
 * error404.vue
 * Purpose: Premium 404 page
 */
useSeoMeta({
  title: 'Page Not Found - Plaza Dental Clinic',
})
</script>

<template>
  <div class="min-h-[60vh] flex flex-col items-center justify-center bg-pd-off-white text-center px-4">
    <div class="mb-8">
       <h1 class="text-9xl font-extrabold text-pd-primary/20">404</h1>
    </div>
    <h2 class="text-4xl font-bold text-pd-neutral-900 mb-6">This Page Has Gone Missing</h2>
    <p class="text-lg text-pd-neutral-600 mb-10 max-w-md">It seems this page has moved or does not exist. Let us help you get back on track.</p>
    
    <div class="flex flex-col sm:flex-row gap-4">
      <UiBaseButton variant="primary" to="/" size="lg">Go to Homepage</UiBaseButton>
      <UiBaseButton variant="outline" to="/contact" size="lg">Contact Clinic</UiBaseButton>
    </div>
  </div>
</template>
