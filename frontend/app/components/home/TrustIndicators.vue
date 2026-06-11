<script setup lang="ts">
/**
 * TrustIndicators.vue
 * Purpose: Social proof stats strip
 */
const stats = [
  { value: '2,000+', label: 'Patients Served' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction' },
  { value: '8', label: 'Expert Dentists' }
]
</script>

<template>
  <div class="py-12 lg:py-20 bg-white border-y border-pd-neutral-100">
    <div class="container-pd">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
        <div 
          v-for="stat in stats" 
          :key="stat.label"
          class="text-center border-pd-neutral-100 last:border-r-0 md:border-r px-4"
        >
          <div class="text-4xl lg:text-5xl font-extrabold text-pd-primary mb-2 tracking-tight">
            {{ stat.value }}
          </div>
          <div class="text-pd-neutral-500 text-sm font-semibold uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

