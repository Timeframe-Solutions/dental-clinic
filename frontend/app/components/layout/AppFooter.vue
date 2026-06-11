<script setup lang="ts">
/**
 * AppFooter.vue
 * Purpose: Global footer
 */
const config = useRuntimeConfig();
const currentYear = new Date().getFullYear();

const links = {
  quick: [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Dental Implants", path: "/dental-implants" },
    { name: "Braces & Orthodontics", path: "/braces" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms" },
  ],
};
</script>

<template>
  <footer
    class="bg-pd-primary text-white pt-20 pb-10 mt-16 lg:mt-32 rounded-t-[2.5rem] border-t border-pd-accent-light/10 relative overflow-hidden"
  >
    <!-- Decorative background glow -->
    <div
      class="absolute -top-24 -left-24 w-96 h-96 bg-pd-accent/5 rounded-full blur-3xl pointer-events-none"
    />

    <div
      class="container-pd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20 relative z-10"
    >
      <!-- About -->
      <div class="space-y-6">
        <NuxtLink
          to="/"
          class="inline-block transition-transform duration-300 hover:scale-105"
          aria-label="Plaza Dental Home"
        >
          <NuxtImg
            src="/images/logo-white.svg"
            alt="Plaza Dental Clinic"
            class="h-10 w-auto"
            loading="lazy"
            width="200"
            height="40"
          />
        </NuxtLink>
        <p class="text-pd-primary-light/70 text-sm leading-relaxed max-w-sm">
          Nairobi's most trusted modern dental practice combining clinical
          excellence with a warm, patient-centred approach and the convenience
          of WhatsApp booking.
        </p>
        <UiSocialIcons
          variant="light"
          :whatsapp="`https://wa.me/${config.public.whatsappNumber}`"
        />
      </div>

      <!-- Quick Links -->
      <div>
        <h4
          class="text-white mb-6 uppercase text-xs font-bold tracking-widest text-pd-accent-light"
        >
          Quick Links
        </h4>
        <ul class="space-y-3.5 text-sm">
          <li v-for="link in links.quick" :key="link.path">
            <NuxtLink
              :to="link.path"
              class="text-pd-primary-light/75 hover:text-pd-accent hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
            >
              <span>{{ link.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4
          class="text-white mb-6 uppercase text-xs font-bold tracking-widest text-pd-accent-light"
        >
          Contact Us
        </h4>
        <ul class="space-y-4 text-sm text-pd-primary-light/75">
          <li class="flex items-start gap-3">
            <Icon
              name="lucide:map-pin"
              class="mt-1 text-pd-accent flex-shrink-0"
              aria-hidden="true"
            />
            <span class="leading-relaxed">{{ config.public.address }}</span>
          </li>
          <li class="flex items-center gap-3">
            <Icon
              name="lucide:phone"
              class="text-pd-accent flex-shrink-0"
              aria-hidden="true"
            />
            <a
              :href="`tel:${config.public.phoneRaw}`"
              class="hover:text-pd-accent transition-colors"
              >{{ config.public.phone }}</a
            >
          </li>
          <li class="flex items-center gap-3">
            <Icon
              name="lucide:mail"
              class="text-pd-accent flex-shrink-0"
              aria-hidden="true"
            />
            <a
              :href="`mailto:${config.public.email}`"
              class="hover:text-pd-accent transition-colors"
              >{{ config.public.email }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Hours -->
      <div>
        <h4
          class="text-white mb-6 uppercase text-xs font-bold tracking-widest text-pd-accent-light"
        >
          Opening Hours
        </h4>
        <ul class="space-y-4 text-sm text-pd-primary-light/75">
          <li
            class="flex justify-between items-center py-1 border-b border-white/5"
          >
            <span class="font-medium text-white/95">Monday – Friday</span>
            <span>8:00 – 17:00</span>
          </li>
          <li
            class="flex justify-between items-center py-1 border-b border-white/5"
          >
            <span class="font-medium text-white/95">Saturday – Sunday</span>
            <span>9:30 – 16:30</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div
      class="container-pd pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-pd-primary-light/50 relative z-10"
    >
      <p>© {{ currentYear }} Plaza Dental Clinic. All rights reserved.</p>
      <div class="flex gap-8">
        <NuxtLink
          v-for="link in links.legal"
          :key="link.path"
          :to="link.path"
          class="hover:text-white transition-colors"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
