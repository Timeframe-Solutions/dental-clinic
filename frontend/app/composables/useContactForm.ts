import type { AppointmentFormData } from '~/types/form'

export const useContactForm = () => {
  const isLoading = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  const submitForm = async (data: AppointmentFormData) => {
    isLoading.value = true
    error.value = null
    
    try {
      const response = await $fetch('/api/contact', {
        method: 'POST',
        body: data
      })
      isSuccess.value = true
    } catch (e: any) {
      error.value = e.data?.message || 'Something went wrong. Please try again.'
    } finally {
      isLoading.value = false
    }
  }

  const resetForm = () => {
    isSuccess.value = false
    error.value = null
  }

  return {
    isLoading,
    isSuccess,
    error,
    submitForm,
    resetForm
  }
}
