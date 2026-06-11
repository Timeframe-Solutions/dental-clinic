<script setup lang="ts">
/**
 * ContactForm.vue
 * Purpose: Inline form for Contact page
 */
const config = useRuntimeConfig()
</script>

<template>
  <div class="bg-white p-8 lg:p-12 rounded-3xl shadow-pd-xl border border-pd-neutral-100">
    <div class="mb-10">
      <h2 class="text-3xl font-bold mb-4">Book Your Appointment</h2>
      <p class="text-pd-neutral-600 text-sm leading-relaxed">
        Fill in the form below and our team will confirm your appointment within 2 hours. Prefer WhatsApp? Message us at <a :href="`tel:${config.public.phoneRaw}`" class="text-pd-accent hover:underline font-semibold">{{ config.public.phone }}</a>.
      </p>
    </div>

    <FormsAppointmentForm />
  </div>
</template>

