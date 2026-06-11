<script setup lang="ts">
/**
 * ServicesPreview.vue
 * Purpose: 6-service preview grid
 */
import { services } from '~/data/services'
const previewServices = services.slice(0, 6)
</script>

<template>
  <section id="services" class="section-py bg-pd-off-white">
    <div class="container-pd">
      <div class="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div class="max-w-2xl">
          <UiSectionLabel label="Our Services" />
          <h2 class="mt-2 text-pd-neutral-900">Comprehensive Dental Care Under One Roof</h2>
          <p class="mt-4 text-lg text-pd-neutral-600">From everyday cleanings to complex cosmetic procedures, our expert team has you covered.</p>
        </div>
        <UiBaseButton variant="outline" to="/services">View All Services</UiBaseButton>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServicesServiceCard 
          v-for="service in previewServices" 
          :key="service.id" 
          :service="service"
          variant="compact"
        />
      </div>
    </div>
  </section>
</template>
