<script setup lang="ts">
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/hero-bg.webp",
      type: "image/webp",
      fetchpriority: "high",
    },
  ],
});
/**
 * HeroSection.vue
 * Purpose: Premium landing hero
 */
const { open } = useAppointmentModal();
</script>

<template>
  <section
    class="relative min-h-[85vh] flex items-center pt-20 overflow-hidden"
  >
    <!-- Background Image with Layered Overlays -->
    <div class="absolute inset-0 z-0">
      <NuxtImg
        src="/images/hero-bg.webp"
        alt="Dental treatment at Plaza Dental Clinic"
        class="w-full h-full object-cover object-[center_30%]"
        format="webp"
        loading="eager"
        fetchpriority="high"
        preload
      />
      <!-- Base deep teal tint -->
      <div class="absolute inset-0 bg-pd-primary/50" />
      <!-- Left-to-right gradient for readability -->
      <div
        class="absolute inset-0 bg-gradient-to-r from-pd-primary/80 via-pd-primary/30 to-transparent"
      />
      <!-- Radial glow behind content -->
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(43,181,160,0.15),transparent_60%)]"
      />
    </div>
    <!-- Content container -->
    <div class="container-pd relative z-10 py-16">
      <div
        class="max-w-[600px] bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
      >
        <UiSectionLabel
          label="Nairobi's Trusted Dental Clinic"
          class="mb-5 inline-block"
        />

        <h1
          class="font-heading text-4xl md:text-5xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight"
        >
          Your Perfect Smile <br />
          Starts Here
        </h1>

        <p
          class="text-pd-primary-light text-lg mb-10 leading-relaxed max-w-[500px]"
        >
          We combine modern technology with personalised care to deliver
          beautiful, healthy smiles across Nairobi.
        </p>

        <div class="flex flex-wrap gap-4">
          <UiBaseButton variant="primary" size="md" @click="open()">
            Book Appointment
          </UiBaseButton>
          <UiBaseButton variant="ghost" size="md" to="/services">
            View Our Services
          </UiBaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
