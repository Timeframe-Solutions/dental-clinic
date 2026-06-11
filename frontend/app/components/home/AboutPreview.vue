<script setup lang="ts">
/**
 * AboutPreview.vue
 * Purpose: "Our Story" teaser
 */
</script>

<template>
  <section class="section-py overflow-hidden">
    <div
      class="container-pd grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
    >
      <!-- Images -->
      <div class="relative">
        <div class="grid grid-cols-2 gap-4">
          <div class="pt-12">
            <NuxtImg
              src="/images/clinic-interior-1.webp"
              alt="Plaza Dental Clinic Interior"
              class="rounded-2xl shadow-pd-md w-full aspect-square object-cover"
              format="webp"
              loading="lazy"
              width="280"
              height="280"
            />
          </div>
          <div>
            <NuxtImg
              src="/images/clinic-interior-1.webp"
              alt="Plaza Dental Clinic Team"
              class="rounded-2xl shadow-pd-md w-full aspect-[4/5] object-cover mb-4"
              format="webp"
              loading="lazy"
              width="280"
              height="350"
            />
            <NuxtImg
              src="/images/clinic-interior-3.webp"
              alt="Modern dental diagnostic equipment"
              class="rounded-2xl shadow-pd-md w-full aspect-square object-cover"
              format="webp"
              loading="lazy"
              width="280"
              height="280"
            />
          </div>
        </div>
        <!-- Accent element -->
        <div
          class="absolute -bottom-6 -left-6 w-32 h-32 bg-pd-accent/10 rounded-full blur-3xl -z-10"
        />
      </div>

      <!-- Content -->
      <div>
        <UiSectionLabel label="Our Story" />
        <h2 class="mb-8">Redefining Dental Care with Trust and Innovation</h2>
        <div class="space-y-6 text-pd-neutral-600 mb-10">
          <p>
            At Plaza Dental Clinic, we believe great dental care starts with a
            great relationship. Since opening our doors in Nairobi, we have
            combined the latest in dental technology with a team that genuinely
            cares about your comfort.
          </p>
          <p>
            From routine check-ups to life-changing smile makeovers, every
            patient walks out with more than just healthier teeth — they walk
            out feeling proud of their smile.
          </p>
        </div>
        <UiBaseButton variant="outline" to="/about" icon-right>
          Learn More About Us
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>
