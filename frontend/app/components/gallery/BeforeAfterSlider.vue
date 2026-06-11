<script setup lang="ts">
/**
 * BeforeAfterSlider.vue
 * Purpose: Interactive before/after image comparison
 */
const props = defineProps<{
  beforeSrc: string
  afterSrc: string
  title?: string
}>()

const sliderPos = ref(50)
const container = ref<HTMLElement | null>(null)
const isDragging = ref(false)

const startDragging = (e: MouseEvent | TouchEvent) => {
  isDragging.value = true
  handleMove(e)
}

const stopDragging = () => {
  isDragging.value = false
}

const handleMove = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value || !container.value) return
  const rect = container.value.getBoundingClientRect()
  
  let x = 0
  if ('touches' in e && e.touches.length > 0) {
    x = e.touches[0]!.clientX
  } else {
    x = (e as MouseEvent).clientX
  }

  const position = ((x - rect.left) / rect.width) * 100
  sliderPos.value = Math.max(0, Math.min(100, position))
}

onMounted(() => {
  window.addEventListener('mouseup', stopDragging)
  window.addEventListener('touchend', stopDragging)
  // Fallback if window moves out of bounds
  window.addEventListener('mousemove', handleMove, { passive: false })
  window.addEventListener('touchmove', handleMove, { passive: false })
})

onUnmounted(() => {
  window.removeEventListener('mouseup', stopDragging)
  window.removeEventListener('touchend', stopDragging)
  window.removeEventListener('mousemove', handleMove)
  window.removeEventListener('touchmove', handleMove)
})
</script>

<template>
  <div 
    ref="container"
    class="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-pd-card border border-pd-neutral-100"
    @mousedown="startDragging"
    @touchstart="startDragging"
    @touchmove.prevent="handleMove"
  >
    <!-- After Image (Background) -->
    <NuxtImg :src="afterSrc" class="absolute inset-0 w-full h-full object-cover" alt="After treatment result" format="webp" loading="lazy" width="400" height="300" />
    
    <!-- Before Image (Overlay) -->
    <div 
      class="absolute inset-0 w-full h-full overflow-hidden"
      :style="{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }"
    >
      <NuxtImg :src="beforeSrc" class="absolute inset-0 w-full h-full object-cover" alt="Before treatment state" format="webp" loading="lazy" width="400" height="300" />
    </div>

    <!-- Slider Handle -->
    <div 
      class="absolute inset-y-0 w-[2px] bg-white shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
      :style="{ left: `${sliderPos}%` }"
    >
      <div 
        class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-pd-lg flex items-center justify-center text-pd-primary border border-pd-neutral-100 transition-transform duration-150"
        :class="{ 'scale-110': isDragging }"
      >
        <svg class="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59-1.41-1.41L12 18.17z" />
        </svg>
      </div>
    </div>

    <!-- Labels -->
    <div class="absolute bottom-4 left-4 bg-pd-primary/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg border border-white/10">Before</div>
    <div class="absolute bottom-4 right-4 bg-pd-accent/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1.5 rounded-lg border border-white/10">After</div>
  </div>
</template>
