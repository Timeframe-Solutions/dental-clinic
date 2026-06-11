<script setup lang="ts">
/**
 * SchemaBreadcrumb.vue
 * Purpose: Injects BreadcrumbList JSON-LD
 */
import { generateBreadcrumbSchema } from '~/utils/schema'

const props = defineProps<{
  crumbs: { name: string; item: string }[]
}>()

const schema = generateBreadcrumbSchema(props.crumbs)

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
