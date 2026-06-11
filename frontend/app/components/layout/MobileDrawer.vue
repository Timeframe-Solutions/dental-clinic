<script setup lang="ts">
/**
 * MobileDrawer.vue
 * Purpose: Slide-down mobile navigation
 */
const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits(['close'])
const { open: openModal } = useAppointmentModal()

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Implants', path: '/dental-implants' },
  { name: 'Braces', path: '/braces' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' }
]

const drawerRef = ref<HTMLElement | null>(null)

const handleAction = (cb?: () => void) => {
  emit('close')
  if (cb) cb()
}

// Focus trap logic
const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
    return
  }
  if (e.key !== 'Tab' || !drawerRef.value) return

  const focusableElements = drawerRef.value.querySelectorAll('a, button, [tabindex="0"]')
  if (focusableElements.length === 0) return

  const firstElement = focusableElements[0] as HTMLElement
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      lastElement.focus()
      e.preventDefault()
    }
  } else {
    if (document.activeElement === lastElement) {
      firstElement.focus()
      e.preventDefault()
    }
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
    nextTick(() => {
      // Focus first link when opened
      const firstLink = drawerRef.value?.querySelector('a')
      firstLink?.focus()
    })
  } else {
    document.body.style.overflow = ''
  }
})

onUnmounted(() => {
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="-translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
  >
    <div 
      v-if="isOpen" 
      ref="drawerRef"
      class="fixed inset-0 z-[70] bg-gradient-to-b from-pd-primary to-pd-primary-dark pt-28 px-8 pb-10 flex flex-col justify-between"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      @keydown="handleKeyDown"
    >
      <nav class="flex flex-col gap-6" aria-label="Mobile Navigation Menu">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.path"
          :to="link.path"
          class="text-2xl font-bold text-white/95 hover:text-pd-accent transition-colors py-1 focus:outline-none focus:text-pd-accent"
          active-class="text-pd-accent"
          @click="handleAction()"
        >
          {{ link.name }}
        </NuxtLink>
      </nav>

      <div class="mt-auto flex flex-col gap-4">
        <UiBaseButton 
          variant="primary" 
          size="lg" 
          @click="handleAction(() => openModal())"
        >
          Book Appointment
        </UiBaseButton>
        
        <div class="flex justify-center mt-8 border-t border-white/10 pt-8">
          <UiSocialIcons variant="light" />
        </div>
      </div>
    </div>
  </Transition>
</template>

