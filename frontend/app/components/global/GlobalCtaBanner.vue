<script setup lang="ts">
/**
 * CtaBanner.vue
 * Purpose: Shared teal CTA strip
 */
const { open } = useAppointmentModal();
const config = useRuntimeConfig();

withDefaults(
  defineProps<{
    heading?: string;
    subtext?: string;
    buttonLabel?: string;
  }>(),
  {
    heading: "Let's Talk Teeth We're Just a Smile Away",
    subtext:
      "Your health journey starts with one simple step. We are here to guide you to your best smile.",
    buttonLabel: "Get Started",
  },
);
</script>

<template>
  <section
    class="section-py bg-gradient-to-br from-pd-primary to-pd-primary-dark text-white overflow-hidden rounded-3xl my-8 lg:my-16 mx-4 lg:mx-auto container-pd relative border border-pd-accent-light/10 shadow-pd-lg"
  >
    <!-- Decorative background -->
    <div
      class="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(43,181,160,0.15),transparent_50%)] pointer-events-none"
    />
    <div
      class="absolute -bottom-24 -left-24 w-80 h-80 bg-pd-accent/5 rounded-full blur-3xl pointer-events-none"
    />

    <div
      class="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto px-4"
    >
      <UiSectionLabel label="Get In Touch" dark />
      <h2
        class="text-white mt-2 mb-6 text-3xl lg:text-4xl font-extrabold tracking-tight"
      >
        {{ heading }}
      </h2>
      <p
        class="text-pd-primary-light/85 text-base lg:text-lg mb-10 leading-relaxed"
      >
        {{ subtext }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4">
        <UiBaseButton variant="primary" size="lg" icon-right @click="open()">
          {{ buttonLabel }}
        </UiBaseButton>
        <UiBaseButton
          variant="ghost"
          size="lg"
          :href="`https://wa.me/${config.public.whatsappNumber}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </UiBaseButton>
      </div>
    </div>
  </section>
</template>
