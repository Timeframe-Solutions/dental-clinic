<script setup lang="ts">
/**
 * dental-implants.vue
 * Purpose: Dental Implants service page
 */
import { generateSeoMeta } from "~/utils/seo";
import { faqs as faqData } from "~/data/faqs";

useSeoMeta(
  generateSeoMeta({
    title: "Restore Your Smile with Dental Implants in Nairobi",
    description:
      "Get permanent dental implants in Nairobi at Plaza Dental Clinic. Natural-looking, lifetime tooth replacement. Book a free consultation today.",
  }),
);
</script>

<template>
  <div>
    <GlobalPageHero
      title="Restore Your Smile with Dental Implants"
      subtitle="The permanent, natural-looking solution for missing teeth designed to last a lifetime."
      :breadcrumbs="[
        { name: 'Services', item: '/services' },
        { name: 'Dental Implants', item: '/dental-implants' },
      ]"
    />

    <ImplantsExplainer />
    <ImplantsBenefits />
    <ImplantsProcess />

    <section class="section-py bg-pd-off-white">
      <div class="container-pd max-w-4xl">
        <div class="text-center mb-16">
          <UiSectionLabel label="FAQ" />
          <h2>Implant Questions?</h2>
        </div>
        <UiAccordionGroup :faqs="faqData.implants.items" />
      </div>
    </section>

    <GlobalCtaBanner />
  </div>
</template>
