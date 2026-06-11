<script setup lang="ts">
/**
 * BaseButton.vue
 * Purpose: Standardized button with variant and size controls
 */

interface Props {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  to?: string
  href?: string
  loading?: boolean
  iconRight?: boolean
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button'
})

const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 rounded-full focus:outline-none focus:ring-2 focus:ring-pd-accent focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-pd-accent text-white hover:bg-pd-accent-hover shadow-pd-md hover:-translate-y-0.5 active:translate-y-0',
  secondary: 'bg-transparent border-2 border-pd-accent text-pd-accent hover:bg-pd-accent-light',
  ghost: 'bg-white/10 border border-white/30 text-white hover:bg-white/20',
  outline: 'bg-transparent border-2 border-pd-neutral-200 text-pd-neutral-800 hover:border-pd-accent hover:text-pd-accent',
  dark: 'bg-pd-primary text-white hover:bg-pd-primary-dark shadow-pd-md hover:-translate-y-0.5 active:translate-y-0'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

const componentType = computed(() => {
  if (props.to) return resolveComponent('NuxtLink')
  if (props.href) return 'a'
  return 'button'
})
</script>

<template>
  <component
    :is="componentType"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :class="[baseClasses, variants[variant], sizes[size]]"
    :disabled="disabled || loading"
  >
    <Icon v-if="loading" name="lucide:loader-2" class="mr-2 animate-spin w-4 h-4" />
    <slot />
    <span v-if="iconRight && !loading" class="ml-2 flex items-center justify-center w-5 h-5 rounded-full bg-white/20">
      <Icon name="lucide:arrow-right" class="text-xs" />
    </span>
  </component>
</template>
