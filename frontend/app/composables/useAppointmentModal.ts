export const useAppointmentModal = () => {
  const isOpen = useState<boolean>('appointment-modal-open', () => false)
  const servicePreset = useState<string | null>('appointment-service-preset', () => null)

  const open = (service?: string) => {
    if (service) servicePreset.value = service
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
    servicePreset.value = null
  }

  return {
    isOpen,
    servicePreset,
    open,
    close
  }
}
