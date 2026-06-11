<script setup lang="ts">
/**
 * WhyChooseUs.vue
 * Purpose: Differentiator section
 */
const features = [
  {
    icon: 'lucide:microscope',
    title: 'Advanced Equipment',
    desc: 'We invest in the latest dental technology — digital X-rays and 3D scanning.'
  },
  {
    icon: 'lucide:users',
    title: 'Experienced Team',
    desc: 'Our dentists bring decades of combined expertise and professional care.'
  },
  {
    icon: 'lucide:heart',
    title: 'Comfortable Environment',
    desc: 'Designed to help you relax from the moment you walk in.'
  },
  {
    icon: 'lucide:shield-check',
    title: 'Transparent Pricing',
    desc: 'No hidden fees. We discuss costs before treatment begins.'
  }
]
</script>

<template>
  <section class="section-py bg-pd-primary-light/30 overflow-hidden relative">
    <!-- Decorative background glow -->
    <div class="absolute top-0 left-0 w-64 h-64 bg-pd-accent/5 rounded-full blur-3xl -z-10" />
    
    <div class="container-pd">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UiSectionLabel label="Why Plaza Dental" />
        <h2 class="mt-2">The Clinic That Puts You First</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="feature in features" 
          :key="feature.title"
          class="bg-white p-8 rounded-2xl shadow-pd-card hover:shadow-pd-card-hover border border-pd-neutral-100/60 hover:border-pd-accent-light/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col h-full"
        >
          <div class="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pd-primary-light text-pd-primary group-hover:bg-pd-accent group-hover:text-white transition-all duration-300">
            <Icon :name="feature.icon" class="text-2xl" aria-hidden="true" />
          </div>
          <h3 class="text-lg font-bold text-pd-neutral-900 mb-3 tracking-tight transition-colors group-hover:text-pd-accent">{{ feature.title }}</h3>
          <p class="text-pd-neutral-600 text-sm leading-relaxed flex-grow">
            {{ feature.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

