<script setup lang="ts">
/**
 * contact.vue
 * Purpose: Premium Contact page
 */
import { generateSeoMeta } from "~/utils/seo";

useSeoMeta(
  generateSeoMeta({
    title: "Contact Plaza Dental Clinic Nairobi",
    description:
      "Book your dental appointment at Plaza Dental Nairobi. Premium care, modern clinic, convenient location. Contact us today!",
  }),
);

const config = useRuntimeConfig();

const contactItems = [
  {
    icon: "lucide:phone",
    title: "Call Us",
    value: config.public.phone,
    href: `tel:${config.public.phoneRaw}`,
    desc: "Mon–Fri 8am–5pm",
  },
  {
    icon: "lucide:mail",
    title: "Email Us",
    value: "bookings@plazadental.co.ke",
    href: "mailto:bookings@plazadental.co.ke",
    desc: "Response within 2 hours",
  },
  {
    icon: "lucide:map-pin",
    title: "Location",
    value: "Plaza Dental, Nairobi",
    href: "https://maps.google.com",
    desc: "Get directions",
  },
];
</script>

<template>
  <div class="bg-white">
    <GlobalPageHero
      title="Let's Start Your Smile Journey"
      subtitle="Whether you have a question or are ready to book, our team is here to provide a warm, professional experience."
      :breadcrumbs="[{ name: 'Contact', item: '/contact' }]"
    />

    <section class="section-py bg-pd-off-white">
      <div class="container-pd">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <a
            v-for="item in contactItems"
            :key="item.title"
            :href="item.href"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white p-8 rounded-2xl shadow-pd-card hover:shadow-pd-lg transition-all duration-300 border border-pd-neutral-100 hover:border-pd-accent/30 group"
          >
            <div
              class="w-12 h-12 rounded-xl bg-pd-primary-light flex items-center justify-center mb-6 group-hover:bg-pd-accent transition-colors duration-300"
            >
              <Icon
                :name="item.icon"
                class="text-xl text-pd-primary group-hover:text-white transition-colors duration-300"
              />
            </div>
            <h3 class="font-bold text-lg mb-1">{{ item.title }}</h3>
            <p
              class="text-pd-neutral-800 font-semibold mb-2 group-hover:text-pd-accent transition-colors"
            >
              {{ item.value }}
            </p>
            <p class="text-sm text-pd-neutral-500">{{ item.desc }}</p>
          </a>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div
            class="bg-white p-8 lg:p-12 rounded-3xl shadow-pd-xl border border-pd-neutral-100"
          >
            <h2 class="text-3xl font-extrabold mb-2">Request an Appointment</h2>
            <p class="text-pd-neutral-600 mb-8">
              Fill in the details, and we’ll be in touch shortly to confirm.
            </p>
            <FormsContactForm />
          </div>
          <!-- Map -->
          <div
            class="h-full min-h-[400px] rounded-3xl overflow-hidden shadow-pd-xl"
          >
            <ClientOnly>
              <UiMap
                :lat="-1.2921"
                :lng="36.8219"
                label="Plaza Dental — Nairobi"
              />
            </ClientOnly>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
