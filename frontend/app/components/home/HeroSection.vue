<script setup lang="ts">
/**
 * HeroSection.vue
 * Purpose: Redesigned premium landing hero based on new aesthetic
 */
const { open } = useAppointmentModal();

// Preload the main hero image
useHead({
  link: [
    {
      rel: "preload",
      as: "image",
      href: "/images/hero-bg.webp",
      type: "image/webp",
      fetchpriority: "high",
    },
  ],
});
</script>

<template>
  <section class="relative pt-24 lg:pt-32 pb-12 lg:pb-20 overflow-hidden bg-white">
    <div class="container-pd">
      <div class="grid lg:grid-cols-12 gap-8 items-center">
        
        <!-- Left Content Column -->
        <div class="lg:col-span-6 relative z-10">
          <div class="bg-pd-primary-light/50 rounded-[40px] p-8 md:p-12 lg:p-16 relative overflow-hidden">
            <!-- Decorative circle -->
            <div class="absolute -top-24 -left-24 w-64 h-64 bg-pd-accent/5 rounded-full blur-3xl" />
            
            <div class="relative z-10">
              <!-- Rating Badge -->
              <div class="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-8">
                <div class="flex gap-0.5">
                  <Icon v-for="i in 5" :key="i" name="lucide:star" class="w-4 h-4 fill-pd-star text-pd-star" />
                </div>
                <span class="text-sm font-bold text-pd-neutral-800">5.0 (400+ reviews)</span>
              </div>

              <h1 class="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-pd-neutral-900 mb-6 leading-[1.1] tracking-tight">
                Exceptional Dental Care, <br class="hidden md:block" />
                Every Step Of The Way
              </h1>

              <p class="text-pd-neutral-600 text-lg mb-10 leading-relaxed max-w-[500px]">
                Our clinic offers the highest standard of modern dental solutions with a personalized, friendly touch for your comfort.
              </p>

              <div class="flex flex-wrap gap-4 mb-12">
                <UiBaseButton variant="dark" size="lg" @click="open()">
                  Book Appointment
                </UiBaseButton>
                <UiBaseButton variant="outline" size="lg" to="/services">
                  Get Consultation
                </UiBaseButton>
              </div>

              <!-- Doctor Preview Cards -->
              <div class="flex flex-wrap gap-4">
                <div class="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-white shadow-sm flex items-center gap-4 pr-6">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-pd-neutral-100">
                    <NuxtImg src="/images/team/dr-kariuki.webp" alt="Dr. Kariuki" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p class="text-xs text-pd-neutral-400 font-medium">2024 Service Available</p>
                    <p class="text-sm font-bold text-pd-neutral-900">Dr. Kariuki</p>
                  </div>
                </div>
                
                <div class="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-white shadow-sm flex items-center gap-4 pr-6">
                  <div class="w-12 h-12 rounded-xl overflow-hidden bg-pd-neutral-100">
                    <NuxtImg src="/images/team/dr-hassan.webp" alt="Dr. Hassan" class="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p class="text-xs text-pd-neutral-400 font-medium">Find The Best Doctors</p>
                    <p class="text-sm font-bold text-pd-neutral-900">Dr. Hassan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image Column -->
        <div class="lg:col-span-6 relative">
          <div class="relative rounded-[40px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[700px]">
            <NuxtImg
              src="/images/hero-bg.webp"
              alt="Dental treatment at Plaza Dental Clinic"
              class="w-full h-full object-cover"
              format="webp"
              loading="eager"
              fetchpriority="high"
            />
            
            <!-- Stats Overlays -->
            <div class="absolute bottom-8 left-8 right-8 grid grid-cols-3 gap-3">
              <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg text-center border border-white/20">
                <p class="text-2xl font-extrabold text-pd-neutral-900">10+</p>
                <p class="text-[10px] uppercase tracking-wider font-bold text-pd-neutral-400">Expert Doctors</p>
              </div>
              <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg text-center border border-white/20">
                <p class="text-2xl font-extrabold text-pd-neutral-900">5k+</p>
                <p class="text-[10px] uppercase tracking-wider font-bold text-pd-neutral-400">Happy Patients</p>
              </div>
              <div class="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg text-center border border-white/20">
                <p class="text-2xl font-extrabold text-pd-neutral-900">99%</p>
                <p class="text-[10px] uppercase tracking-wider font-bold text-pd-neutral-400">Satisfaction Rate</p>
              </div>
            </div>
          </div>
          
          <!-- Floating decorative element -->
          <div class="absolute -top-6 -right-6 w-32 h-32 bg-pd-accent/10 rounded-full blur-2xl -z-10" />
        </div>

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional: specific adjustments for the hero cards */
.container-pd {
  @apply max-w-[1400px];
}
</style>
