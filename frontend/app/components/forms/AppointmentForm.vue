<script setup lang="ts">
/**
 * AppointmentForm.vue
 * Purpose: Shared form fields for booking
 */
import { services } from '~/data/services'
import type { AppointmentFormData } from '~/types/form'

const emit = defineEmits(['success'])
const { servicePreset } = useAppointmentModal()
const { submitForm, isLoading, isSuccess, error } = useContactForm()

const formData = reactive<AppointmentFormData>({
  fullName: '',
  phone: '',
  email: '',
  preferredDate: '',
  preferredTime: 'morning',
  service: servicePreset.value || '',
  message: ''
})

const handleSubmit = async () => {
  await submitForm(formData)
  if (isSuccess.value) {
    emit('success')
  }
}

watch(servicePreset, (newVal) => {
  if (newVal) formData.service = newVal
})
</script>

<template>
  <div v-if="isSuccess" class="bg-pd-success/5 border border-pd-success/20 p-8 rounded-2xl text-center relative overflow-hidden animate-fade-in">
    <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pd-success/10 text-pd-success mb-4">
      <Icon name="lucide:check-circle-2" class="text-3xl" aria-hidden="true" />
    </div>
    <h3 class="text-pd-neutral-900 text-xl font-bold mb-2">Request Received!</h3>
    <p class="text-pd-neutral-600 text-sm leading-relaxed max-w-sm mx-auto">
      Thank you, <span class="font-semibold text-pd-neutral-900">{{ formData.fullName }}</span>. Our team will contact you within 2 hours to confirm your appointment details.
    </p>
  </div>

  <form v-else @submit.prevent="handleSubmit" class="space-y-5" aria-label="Book a dental appointment">
    <div v-if="error" class="bg-pd-error/10 border border-pd-error/20 p-4 rounded-xl text-pd-error text-sm flex items-center gap-2" role="alert">
      <Icon name="lucide:alert-circle" class="text-lg flex-shrink-0" />
      <span>{{ error }}</span>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label for="fullName" class="block text-sm font-bold text-pd-neutral-900 mb-2">Full Name *</label>
        <input 
          id="fullName"
          v-model="formData.fullName" 
          type="text" 
          required 
          aria-required="true"
          placeholder="Jane Doe"
          class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200"
        />
      </div>
      <div>
        <label for="phone" class="block text-sm font-bold text-pd-neutral-900 mb-2">Phone Number *</label>
        <input 
          id="phone"
          v-model="formData.phone" 
          type="tel" 
          required 
          aria-required="true"
          placeholder="+254 7XX XXX XXX"
          class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200"
        />
      </div>
    </div>

    <div>
      <label for="email" class="block text-sm font-bold text-pd-neutral-900 mb-2">Email Address *</label>
      <input 
        id="email"
        v-model="formData.email" 
        type="email" 
        required 
        aria-required="true"
        placeholder="jane@example.com"
        class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200"
      />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <label for="preferredDate" class="block text-sm font-bold text-pd-neutral-900 mb-2">Preferred Date *</label>
        <input 
          id="preferredDate"
          v-model="formData.preferredDate" 
          type="date" 
          required 
          aria-required="true"
          class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200"
        />
      </div>
      <div>
        <label for="preferredTime" class="block text-sm font-bold text-pd-neutral-900 mb-2">Preferred Time *</label>
        <div class="relative">
          <select 
            id="preferredTime"
            v-model="formData.preferredTime" 
            aria-required="true"
            class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200 appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
            style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%232BB5A0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')"
          >
            <option value="morning">Morning (8:00 - 12:00)</option>
            <option value="afternoon">Afternoon (12:00 - 17:00)</option>
            <option value="saturday">Saturday (9:30 - 16:30)</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <label for="service" class="block text-sm font-bold text-pd-neutral-900 mb-2">Service Needed *</label>
      <div class="relative">
        <select 
          id="service"
          v-model="formData.service" 
          required
          aria-required="true"
          class="w-full px-4 py-3 rounded-xl border border-pd-neutral-200 focus:border-pd-accent focus:ring-2 focus:ring-pd-accent-light outline-none transition-all duration-200 appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
          style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%232BB5A0%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')"
        >
          <option value="" disabled>Select a service</option>
          <option v-for="s in services" :key="s.id" :value="s.id">{{ s.name }}</option>
          <option value="other">Other Inquiry</option>
        </select>
      </div>
    </div>

    <UiBaseButton 
      type="submit" 
      class="w-full mt-2" 
      size="lg" 
      :loading="isLoading"
    >
      Book My Appointment
    </UiBaseButton>
  </form>
</template>

