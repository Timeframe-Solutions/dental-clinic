<!-- components/braces/BracesTypes.vue -->
<script setup lang="ts">
const { open } = useAppointmentModal();
const types = [
  {
    name: "Traditional Metal",
    desc: "The most effective and affordable option. Ideal for children and complex cases requiring precise control.",
    best: "Complex cases · Budget-friendly",
    image: "/images/traditional-metal.webp",
    tag: "Most Popular",
  },
  {
    name: "Discreet Ceramic",
    desc: "Tooth-coloured brackets that blend in naturally. The choice of Nairobi professionals who want results without compromise.",
    best: "Aesthetics-conscious · Adults",
    image: "/images/discrete-ceramic.webp",
    tag: null,
  },
  {
    name: "Clear Aligners",
    desc: "Custom-made removable trays that are nearly invisible. Eat freely, clean easily, and smile confidently throughout treatment.",
    best: "Mild cases · Maximum flexibility",
    image: "/images/clear-aligners.webp",
    tag: "Premium",
  },
];
</script>

<template>
  <section class="section-py bg-pd-off-white">
    <!-- Header -->
    <div class="container-pd text-center mb-16">
      <UiSectionLabel label="Treatment Options" />
      <h2 class="mt-3 mb-4">Which Braces Are Right for You?</h2>
      <p class="text-pd-neutral-500 text-lg max-w-xl mx-auto leading-relaxed">
        Every smile is unique. We help you choose the path that fits your
        lifestyle, budget, and goals.
      </p>
    </div>

    <!-- Cards -->
    <div class="container-pd grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="type in types"
        :key="type.name"
        class="bg-white rounded-2xl shadow-card hover:shadow-elevated border border-pd-neutral-100 overflow-hidden group flex flex-col transition-all duration-300 hover:-translate-y-1.5"
      >
        <!-- Image Area -->
        <div class="relative aspect-[4/3] overflow-hidden">
          <NuxtImg
            :src="type.image"
            :alt="type.name"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            format="webp"
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <!-- Subtle gradient overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          <!-- Tag badge -->
          <span
            v-if="type.tag"
            class="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest bg-pd-accent text-white px-3 py-1 rounded-full shadow-sm"
          >
            {{ type.tag }}
          </span>
        </div>

        <!-- Body -->
        <div class="p-8 flex flex-col flex-1">
          <h3 class="text-xl font-bold text-pd-neutral-900 mb-3 font-heading">
            {{ type.name }}
          </h3>
          <p class="text-pd-neutral-600 leading-relaxed text-sm flex-1">
            {{ type.desc }}
          </p>

          <!-- Best for -->
          <div class="mt-6 pt-6 border-t border-pd-neutral-100">
            <div class="flex items-center gap-2 mb-3">
              <Icon name="lucide:target" class="text-pd-accent text-sm" />
              <span
                class="text-[10px] font-bold text-pd-accent uppercase tracking-widest"
                >Best For</span
              >
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in type.best.split('·')"
                :key="tag"
                class="text-xs font-semibold text-pd-neutral-700 bg-pd-neutral-100 px-3 py-1 rounded-full"
              >
                {{ tag.trim() }}
              </span>
            </div>
          </div>

          <!-- CTA -->
          <button
            class="mt-6 w-full flex items-center justify-center gap-2 text-sm font-semibold text-pd-primary bg-pd-primary/5 rounded-xl py-3 hover:bg-pd-primary hover:text-white transition-all duration-200"
            @click="open()"
          >
            Book Consultation
            <Icon
              name="lucide:arrow-right"
              class="text-sm transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
