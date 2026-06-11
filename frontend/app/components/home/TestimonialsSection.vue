<script setup lang="ts">
/**
 * TestimonialsSection.vue
 * Purpose: Social proof testimonials
 */
import { testimonials } from '~/data/testimonials'
const featuredTestimonials = testimonials.slice(0, 3)
</script>

<template>
  <section class="section-py">
    <div class="container-pd">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <UiSectionLabel label="Patient Stories" />
        <h2>Smiles That Say It Best</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div 
          v-for="item in featuredTestimonials" 
          :key="item.id"
          class="bg-white p-8 rounded-2xl shadow-pd-card hover:shadow-pd-card-hover border border-pd-neutral-100/60 hover:border-pd-accent-light/50 transition-all duration-300 flex flex-col h-full hover:-translate-y-1.5"
        >
          <UiStarRating :rating="item.rating" class="mb-5" />
          
          <blockquote class="text-pd-neutral-800 text-base lg:text-lg italic leading-relaxed mb-6 flex-grow">
            "{{ item.quote }}"
          </blockquote>
          
          <div class="flex items-center gap-4 pt-5 border-t border-pd-neutral-100/60 mt-auto">
            <div class="w-10 h-10 rounded-full bg-pd-accent-light text-pd-accent flex items-center justify-center font-bold text-sm flex-shrink-0" aria-hidden="true">
              {{ item.name.charAt(0) }}
            </div>
            <cite class="not-italic">
              <span class="block font-bold text-pd-neutral-900 text-sm lg:text-base">{{ item.name }}</span>
              <span class="block text-[10px] text-pd-neutral-400 uppercase tracking-widest font-bold mt-0.5">
                {{ item.service }}
              </span>
            </cite>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
