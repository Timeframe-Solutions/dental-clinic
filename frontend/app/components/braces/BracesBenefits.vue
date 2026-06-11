<script setup lang="ts">
/**
 * BracesBenefits.vue
 * Purpose: Braces benefits grid
 */
const benefits = [
  { title: 'Improved Confidence', desc: 'Smile freely in photos and conversations with a straighter smile.' },
  { title: 'Better Hygiene', desc: 'Straight teeth are easier to brush and floss, reducing decay risk.' },
  { title: 'Reduced Wear', desc: 'Correct bite alignment prevents uneven tooth wear and jaw pain.' },
  { title: 'Long-term Health', desc: 'Proper alignment reduces the risk of gum disease and headaches.' }
]
</script>

<template>
  <section class="section-py">
    <div class="container-pd text-center mb-16">
      <UiSectionLabel label="Benefits" />
      <h2>Why Straighten Your Teeth?</h2>
    </div>

    <div class="container-pd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div 
        v-for="benefit in benefits" 
        :key="benefit.title"
        class="p-8 border border-pd-neutral-100 rounded-2xl hover:bg-pd-accent-light/30 transition-colors duration-300"
      >
        <h4 class="text-lg mb-4 text-pd-primary">{{ benefit.title }}</h4>
        <p class="text-pd-neutral-600 text-sm leading-relaxed">
          {{ benefit.desc }}
        </p>
      </div>
    </div>
  </section>
</template>
