<script setup lang="ts">
/**
 * ImplantsExplainer.vue
 * Purpose: "What are dental implants" educational section
 */
</script>

<template>
  <section class="section-py overflow-hidden">
    <div
      class="container-pd grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      <div>
        <h2 class="mb-8">What Are Dental Implants?</h2>
        <div class="space-y-6 text-pd-neutral-600 leading-relaxed">
          <p>
            A dental implant is a small titanium screw placed into the jawbone
            to act as an artificial tooth root. Once integrated with the bone, a
            custom-made porcelain crown is attached on top.
          </p>
          <p>
            The result is a tooth that looks, feels, and functions exactly like
            the real thing. Unlike dentures, implants are fixed permanently they
            do not shift, slip, or require removal at night.
          </p>
          <p class="font-semibold text-pd-neutral-900">
            Dental implants are the only option that preserves jawbone density
            and maintains facial structure over time.
          </p>
        </div>
      </div>
      <div class="relative">
        <div
          class="aspect-square bg-pd-primary-light rounded-2xl overflow-hidden shadow-pd-lg"
        >
          <NuxtImg
            src="/images/clinic-interior-3.webp"
            alt="Modern clinic room for dental implant procedures"
            class="w-full h-full object-cover"
            format="webp"
            loading="lazy"
            width="500"
            height="500"
          />
        </div>
      </div>
    </div>
  </section>
</template>
