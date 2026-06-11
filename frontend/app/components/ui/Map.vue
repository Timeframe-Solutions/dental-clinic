<script setup lang="ts">
defineProps<{
  lat: number;
  lng: number;
  label?: string;
}>();
</script>

<template>
  <iframe
    :src="`https://maps.google.com/maps?q=${lat},${lng}&z=16&output=embed`"
    width="100%"
    height="100%"
    style="border: 0"
    allowfullscreen
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
    class="w-full h-full"
    :title="label ?? 'Location map'"
  />
</template>
