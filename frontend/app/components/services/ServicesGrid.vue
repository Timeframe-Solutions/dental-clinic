<script setup lang="ts">
/**
 * ServicesGrid.vue
 * Purpose: Full 8-service grid
 */
import { services } from '~/data/services'
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <ServicesServiceCard 
      v-for="service in services" 
      :key="service.id" 
      :service="service"
      variant="detailed"
    />
  </div>
</template>
