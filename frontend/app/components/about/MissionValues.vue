<script setup lang="ts">
/**
 * MissionValues.vue
 * Purpose: 3-pillar value cards
 */
const values = [
  {
    icon: 'lucide:award',
    title: 'Clinical Excellence',
    desc: 'We invest in continuous training and the latest technology so that every treatment meets the highest standards.'
  },
  {
    icon: 'lucide:heart-handshake',
    title: 'Patient Comfort',
    desc: 'Every aspect of our clinic is designed to put you at ease, from the environment to our communication.'
  },
  {
    icon: 'lucide:scale',
    title: 'Honest Transparency',
    desc: 'We explain every diagnosis, every option, and every cost before treatment begins.'
  }
]
</script>

<template>
  <section class="section-py bg-gradient-to-b from-pd-primary to-pd-primary-dark text-white overflow-hidden rounded-[2.5rem] relative">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
    
    <div class="container-pd text-center mb-16 relative z-10">
      <UiSectionLabel label="Our Mission" dark />
      <h2 class="text-white mt-2">What We Stand For</h2>
    </div>

    <div class="container-pd grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      <div 
        v-for="val in values" 
        :key="val.title"
        class="bg-white/5 border border-white/10 hover:border-pd-accent/20 p-10 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:-translate-y-1"
      >
        <div class="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-pd-accent/10 border border-pd-accent/20 text-pd-accent mb-6">
          <Icon :name="val.icon" class="text-2xl" aria-hidden="true" />
        </div>
        <h3 class="text-white text-lg font-bold mb-4 tracking-tight">{{ val.title }}</h3>
        <p class="text-pd-primary-light/70 text-sm leading-relaxed">
          {{ val.desc }}
        </p>
      </div>
    </div>
  </section>
</template>

