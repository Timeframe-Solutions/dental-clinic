<script setup lang="ts">
/**
 * OurStory.vue
 * Purpose: Founding story narrative
 */
</script>

<template>
  <section class="section-py overflow-hidden">
    <div class="container-pd grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
      <div class="order-2 lg:order-1">
        <UiSectionLabel label="Our Story" />
        <h2 class="mb-8">Built on Trust, Driven by Excellence</h2>
        <div class="space-y-6 text-pd-neutral-600 leading-relaxed">
          <p>
            Plaza Dental Clinic was founded in Nairobi with one clear purpose: to make premium dental care accessible, affordable, and genuinely enjoyable for every Nairobi family and professional.
          </p>
          <p>
            We saw a city where people were delaying dental treatment out of anxiety, cost concerns, or simply not knowing where to go. We set out to change that — building a clinic that combines the very latest in dental technology with a warm, human approach.
          </p>
          <p>
            Today, we have served over 2,000 patients across Nairobi, with a team of eight specialist dentists and an award-winning patient satisfaction record.
          </p>
        </div>
      </div>
      <div class="order-1 lg:order-2 relative">
        <NuxtImg 
          src="/images/about-team.webp" 
          alt="Plaza Dental Clinic Specialist Team" 
          class="rounded-2xl shadow-pd-lg w-full aspect-[4/5] object-cover" 
          format="webp"
          loading="lazy"
          width="500"
          height="625"
        />
        <div class="absolute -bottom-10 -right-10 w-40 h-40 bg-pd-accent/10 rounded-full blur-3xl -z-10" />
      </div>

    </div>
  </section>
</template>
