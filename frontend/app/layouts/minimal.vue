<script setup lang="ts">
/**
 * minimal.vue
 * Purpose: Layout for legal/utility pages
 */
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutAppHeader />
    
    <main class="flex-grow pt-32 pb-20">
      <div class="container-pd">
        <slot />
      </div>
    </main>
    
    <LayoutAppFooter />
  </div>
</template>
