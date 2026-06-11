<script setup lang="ts">
/**
 * BracesTimeline.vue
 * Purpose: Braces journey timeline
 */
const steps = [
  { title: 'Assessment', desc: 'X-rays, photos, and a comprehensive treatment plan tailored to you.' },
  { title: 'Fitting', desc: 'Brackets are bonded to your teeth and the first archwire is placed.' },
  { title: 'Adjustments', desc: 'Quick visits every 4–8 weeks to tighten wires and guide tooth movement.' },
  { title: 'Refinement', desc: 'Fine adjustments near the end to perfect your alignment and bite.' },
  { title: 'Removal', desc: 'Braces come off! We fit a custom retainer to keep your results permanent.' }
]
</script>

<template>
  <section class="section-py bg-pd-primary text-white overflow-hidden rounded-[2.5rem]">
    <div class="container-pd flex flex-col lg:flex-row gap-16 items-center">
      <div class="lg:w-1/3">
        <UiSectionLabel label="Timeline" dark />
        <h2 class="text-white mb-6">Your Orthodontic Journey</h2>
        <p class="text-pd-primary-light/60">
          From your first scan to your final reveal, we are with you every step of the way.
        </p>
      </div>
      
      <div class="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div 
          v-for="(step, index) in steps" 
          :key="step.title"
          class="bg-white/5 p-8 rounded-2xl border border-white/10"
        >
          <div class="text-pd-accent font-bold text-lg mb-4">0{{ index + 1 }}</div>
          <h4 class="text-white mb-3">{{ step.title }}</h4>
          <p class="text-pd-primary-light/60 text-sm leading-relaxed">
            {{ step.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
