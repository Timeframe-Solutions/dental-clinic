<script setup lang="ts">
/**
 * braces.vue
 * Purpose: Braces & Orthodontics page
 */
import { generateSeoMeta } from "~/utils/seo";
import { faqs as faqData } from "~/data/faqs";

useSeoMeta(
  generateSeoMeta({
    title: "Straighten Your Smile with Expert Orthodontics",
    description:
      "Get braces in Nairobi at Plaza Dental Clinic. Metal, ceramic & clear aligners for teens and adults.",
  }),
);
</script>

<template>
  <div>
    <GlobalPageHero
      title="Braces & Orthodontics"
      subtitle="Whether you are 14 or 44 it is never too late for a straighter, more confident smile."
      :breadcrumbs="[
        { name: 'Services', item: '/services' },
        { name: 'Braces', item: '/braces' },
      ]"
    />

    <BracesTypes />
    <BracesBenefits />
    <BracesTimeline />

    <section class="section-py bg-pd-off-white">
      <div class="container-pd max-w-4xl">
        <div class="text-center mb-16">
          <UiSectionLabel label="FAQ" />
          <h2>Braces Questions?</h2>
        </div>
        <UiAccordionGroup :faqs="faqData.braces.items" />
      </div>
    </section>

    <GlobalCtaBanner />
  </div>
</template>
