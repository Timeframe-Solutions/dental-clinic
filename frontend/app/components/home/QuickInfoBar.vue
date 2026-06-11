<script setup lang="ts">
/**
 * QuickInfoBar.vue
 * Purpose: 3-card info strip below hero
 */
const config = useRuntimeConfig()

const infoCards = computed(() => [
  {
    icon: 'lucide:calendar-check',
    title: 'Get An Appointment',
    text: 'Ready for a healthier smile? Book your visit today.',
    linkText: 'Book Now',
    action: () => useAppointmentModal().open()
  },
  {
    icon: 'lucide:phone-call',
    title: 'Emergency Contact',
    text: `Call: ${config.public.phone}`,
    subText: `Email: ${config.public.email}`,
    action: null
  },
  {
    icon: 'lucide:clock',
    title: 'Opening Hours',
    text: 'Mon – Fri: 8:00 – 17:00',
    subText: 'Sat – Sun: 9:30 – 16:30',
    action: null
  }
])
</script>


<template>
  <div class="container-pd -mt-10 lg:-mt-16 relative z-20">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div 
        v-for="card in infoCards" 
        :key="card.title"
        class="bg-gradient-to-br from-pd-primary to-pd-primary-dark text-white p-8 rounded-2xl shadow-pd-card hover:shadow-pd-card-hover border border-white/10 group transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
      >
        <div>
          <div class="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:bg-pd-accent/10 group-hover:border-pd-accent/20 transition-all duration-300">
            <Icon :name="card.icon" class="text-2xl text-pd-accent" />
          </div>
          <h3 class="text-white text-lg font-bold mb-2 tracking-tight">{{ card.title }}</h3>
          <p class="text-pd-primary-light/75 text-sm leading-relaxed mb-1">
            {{ card.text }}
          </p>
          <p v-if="card.subText" class="text-pd-primary-light/75 text-sm leading-relaxed">
            {{ card.subText }}
          </p>
        </div>
        
        <div v-if="card.linkText" class="mt-5">
          <button 
            class="text-pd-accent font-semibold text-sm flex items-center gap-1.5 group/btn transition-colors hover:text-pd-accent-hover focus:outline-none focus:underline"
            @click="card.action()"
          >
            <span>{{ card.linkText }}</span> 
            <Icon name="lucide:arrow-right" class="text-xs transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

