<script setup lang="ts">
/**
 * AppointmentModal.vue
 * Purpose: Universal booking modal
 */
const { isOpen, close } = useAppointmentModal()

// Trap focus and close on ESC
onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen.value) close()
  })
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isOpen" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <!-- Backdrop -->
        <div class="absolute inset-0 bg-pd-primary/60 backdrop-blur-sm" @click="close" />
        
        <!-- Modal Content -->
        <div 
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          class="relative w-full max-w-xl bg-white rounded-3xl shadow-pd-modal overflow-hidden border border-pd-neutral-100/50"
        >
          <button 
            class="absolute top-4 right-4 p-2 text-pd-neutral-400 hover:text-pd-neutral-900 transition-colors focus:outline-none focus:ring-2 focus:ring-pd-accent focus:ring-offset-2 rounded-xl"
            aria-label="Close dialog"
            @click="close"
          >
            <Icon name="lucide:x" class="text-xl" aria-hidden="true" />
          </button>
          
          <div class="p-8 lg:p-10">
            <h2 id="modal-title" class="text-2xl font-bold mb-2 text-pd-neutral-900">Book Your Appointment</h2>
            <p class="text-pd-neutral-600 text-sm leading-relaxed mb-8">Fill in the form below and our team will confirm your visit within 2 hours.</p>
            
            <FormsAppointmentForm @success="close" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

