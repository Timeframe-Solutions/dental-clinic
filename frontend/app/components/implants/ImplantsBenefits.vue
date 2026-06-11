<script setup lang="ts">
/**
 * ImplantsBenefits.vue
 * Purpose: 4-card benefits grid
 */
const benefits = [
  { title: 'Natural Appearance', desc: 'Matched precisely to your existing teeth for a seamless look.' },
  { title: 'Permanent Solution', desc: 'Can last 20+ years or even a lifetime with proper care.' },
  { title: 'Bone Preservation', desc: 'Prevents the jawbone loss that typically follows tooth extraction.' },
  { title: 'No Restrictions', desc: 'Eat, speak, and smile with full confidence knowing they are secure.' }
]
</script>

<template>
  <section class="section-py bg-pd-off-white">
    <div class="container-pd text-center mb-16">
      <UiSectionLabel label="Benefits" />
      <h2>Why Implants Are the Gold Standard</h2>
    </div>

    <div class="container-pd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="benefit in benefits" 
        :key="benefit.title"
        class="bg-white p-8 rounded-2xl shadow-pd-card hover:shadow-pd-card-hover border border-pd-neutral-100/60 hover:border-pd-accent-light/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col h-full"
      >
        <div class="w-10 h-10 bg-pd-accent-light text-pd-accent rounded-full flex items-center justify-center mb-6 group-hover:bg-pd-accent group-hover:text-white transition-colors duration-300" aria-hidden="true">
          <Icon name="lucide:check" class="text-lg" />
        </div>
        <h3 class="text-lg font-bold text-pd-neutral-900 mb-3 tracking-tight transition-colors group-hover:text-pd-accent">{{ benefit.title }}</h3>
        <p class="text-pd-neutral-600 text-sm leading-relaxed flex-grow">
          {{ benefit.desc }}
        </p>
      </div>
    </div>

  </section>
</template>
