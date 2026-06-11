<script setup lang="ts">
/**
 * SocialIcons.vue
 * Purpose: Social media icon links
 */
interface Props {
  variant?: 'light' | 'dark'
  instagram?: string
  facebook?: string
  whatsapp?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'dark',
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com'
})

const config = useRuntimeConfig()
const computedWhatsapp = computed(() => props.whatsapp || `https://wa.me/${config.public.whatsappNumber}`)

const platforms = computed(() => [
  { id: 'instagram', icon: 'lucide:instagram', href: props.instagram, label: 'Instagram' },
  { id: 'facebook', icon: 'lucide:facebook', href: props.facebook, label: 'Facebook' },
  { id: 'whatsapp', icon: 'ic:baseline-whatsapp', href: computedWhatsapp.value, label: 'WhatsApp' }
])
</script>

<template>
  <div class="flex gap-4">
    <a 
      v-for="p in platforms" 
      :key="p.id"
      :href="p.href"
      target="_blank"
      rel="noopener noreferrer"
      class="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pd-accent focus:ring-offset-2 hover:scale-110"
      :class="variant === 'light' ? 'bg-white/10 text-white hover:bg-pd-accent' : 'bg-pd-neutral-100 text-pd-neutral-800 hover:bg-pd-accent hover:text-white'"
    >
      <span class="sr-only">{{ p.label }}</span>
      <Icon :name="p.icon" class="text-xl" />
    </a>
  </div>
</template>

