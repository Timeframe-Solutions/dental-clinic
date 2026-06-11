<script setup lang="ts">
/**
 * PageHero.vue
 * Purpose: Compact hero for inner pages
 */
interface Props {
  title: string;
  subtitle?: string;
  breadcrumbs: { name: string; item: string }[];
}

defineProps<Props>();
</script>

<template>
  <div
    class="relative bg-pd-primary pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden rounded-b-2xl"
  >
    <!-- Decorative background element -->
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"
    />

    <div class="container-pd relative z-10">
      <!-- Breadcrumbs -->
      <nav class="flex mb-6 text-sm font-medium text-white/50">
        <ol class="flex items-center space-x-2">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-white transition-colors duration-200"
              >Home</NuxtLink
            >
          </li>
          <li
            v-for="crumb in breadcrumbs"
            :key="crumb.item"
            class="flex items-center space-x-2"
          >
            <span class="text-white/30">/</span>
            <NuxtLink
              :to="crumb.item"
              class="hover:text-white transition-colors duration-200"
              >{{ crumb.name }}</NuxtLink
            >
          </li>
        </ol>
      </nav>

      <h1 class="text-white mb-4">{{ title }}</h1>
      <p
        v-if="subtitle"
        class="text-pd-primary-light text-lg lg:text-xl max-w-2xl"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- Schema Component -->
    <SeoSchemaBreadcrumb
      :crumbs="[{ name: 'Home', item: '/' }, ...breadcrumbs]"
    />
  </div>
</template>
