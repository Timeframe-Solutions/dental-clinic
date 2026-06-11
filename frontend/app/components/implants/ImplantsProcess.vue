<script setup lang="ts">
/**
 * ImplantsProcess.vue
 * Purpose: Treatment process timeline
 */
const steps = [
  { title: 'Initial Consultation', desc: 'We assess your oral health with 3D scans and discuss your personalized plan.' },
  { title: 'Treatment Planning', desc: 'A custom plan is created, addressing any preparatory work like bone grafting.' },
  { title: 'Implant Placement', desc: 'The titanium post is placed into the jawbone under local anaesthesia.' },
  { title: 'Healing Period', desc: 'Over 3–6 months, the implant fuses with the bone in a process called osseointegration.' },
  { title: 'Crown Fitting', desc: 'Once healed, your custom porcelain crown is fitted, perfectly matching your smile.' }
]
</script>

<template>
  <section class="section-py">
    <div class="container-pd">
      <div class="max-w-3xl mx-auto text-center mb-16">
        <UiSectionLabel label="Your Journey" />
        <h2>Your Implant Journey — Step by Step</h2>
      </div>

      <div class="max-w-3xl mx-auto space-y-10 relative">
        <div 
          v-for="(step, index) in steps" 
          :key="step.title"
          class="flex gap-8 relative"
        >
          <!-- Line -->
          <div v-if="index !== steps.length - 1" class="absolute left-[22px] top-12 w-[2px] h-[calc(100%+24px)] bg-pd-accent-light/60 -z-10" />
          
          <div class="flex-shrink-0 w-12 h-12 bg-pd-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-pd-md border-4 border-pd-accent-light/40 z-10" aria-hidden="true">
            {{ index + 1 }}
          </div>
          <div class="pt-2">
            <h3 class="text-xl font-bold mb-2 text-pd-neutral-900 leading-snug">{{ step.title }}</h3>
            <p class="text-pd-neutral-600 text-sm lg:text-base leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
