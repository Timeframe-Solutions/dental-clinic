<script setup lang="ts">
/**
 * SchemaLocalBusiness.vue
 * Purpose: Injects LocalBusiness + Dentist JSON-LD
 */
import { generateLocalBusinessSchema } from '~/utils/schema'

const schema = generateLocalBusinessSchema()

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(schema)
    }
  ]
})
</script>

<template>
  <div />
</template>
