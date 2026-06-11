<script setup lang="ts">
/**
 * default.vue
 * Purpose: Standard site layout
 */
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutAppHeader />
    
    <main class="flex-grow">
      <slot />
    </main>
    
    <LayoutAppFooter />
    
    <!-- Global UI -->
    <GlobalAppointmentModal />
    <GlobalWhatsAppButton />
    <GlobalCookieBanner />
  </div>
</template>
