<!-- components/layout/AppHeader.vue -->
<script setup lang="ts">
const { open } = useAppointmentModal();
const isScrolled = ref(false);
const isDrawerOpen = ref(false);

const navLinks = [
  { name: "Home", path: "/", icon: "lucide:home" },
  { name: "Services", path: "/services", icon: "lucide:grid-2x2" },
  { name: "Implants", path: "/dental-implants", icon: "lucide:shield-plus" },
  { name: "Braces", path: "/braces", icon: "lucide:smile" },
  { name: "About", path: "/about", icon: "lucide:users" },
  { name: "Contact", path: "/contact", icon: "lucide:phone" },
];

onMounted(() => {
  const onScroll = () => {
    isScrolled.value = window.scrollY > 24;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-[80] transition-all duration-300"
    :class="isScrolled ? 'py-2' : 'py-4'"
  >
    <!-- Glass pill container — morphs on scroll -->
    <div
      class="mx-auto transition-all duration-300"
      :class="
        isScrolled
          ? 'max-w-[96%] lg:max-w-6xl bg-white/90 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.08)] rounded-2xl border border-white/60'
          : 'max-w-full px-0'
      "
    >
      <div class="container-pd flex items-center justify-between py-2.5">
        <!-- Logo -->
        <NuxtLink to="/" class="relative z-[90] shrink-0">
          <img
            :src="isScrolled || $route.path === '/' ? '/images/logo.svg' : '/images/logo-white.svg'"
            alt="Plaza Dental Clinic"
            class="h-9 lg:h-10 w-auto transition-all duration-300"
          />
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-4">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            active-class="!font-semibold after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-pd-accent after:rounded-full"
            :class="
              isScrolled || $route.path === '/'
                ? [
                    'text-pd-neutral-800 hover:text-pd-primary hover:bg-pd-primary/5',
                    $route.path === link.path ? '!text-pd-primary' : ''
                  ]
                : [
                    'text-white/85 hover:text-white hover:bg-white/10',
                    $route.path === link.path ? '!text-white' : ''
                  ]
            "
          >
            <Icon
              :name="link.icon"
              class="text-base opacity-70"
              aria-hidden="true"
            />
            {{ link.name }}
          </NuxtLink>
        </nav>

        <!-- Right controls -->
        <div class="flex items-center gap-2.5 relative z-[90]">
          <!-- Phone quick-dial — desktop only -->
          <a
            href="tel:+254700000000"
            class="hidden lg:flex items-center gap-2 text-sm font-semibold transition-all duration-200 px-3 py-2 rounded-xl"
            :class="
              isScrolled || $route.path === '/'
                ? 'text-pd-neutral-600 hover:bg-pd-neutral-100'
                : 'text-white/80 hover:bg-white/12'
            "
          >
            <Icon
              name="lucide:phone-call"
              class="text-base"
              aria-hidden="true"
            />
            <span class="hidden xl:inline">+254 700 000 000</span>
          </a>

          <!-- Divider -->
          <div
            class="hidden lg:block w-px h-5 transition-colors duration-300"
            :class="isScrolled ? 'bg-pd-neutral-200' : 'bg-white/20'"
          />

          <!-- Book CTA -->
          <UiBaseButton
            variant="primary"
            size="sm"
            class="hidden sm:inline-flex items-center gap-1.5 !px-4"
            @click="open()"
          >
            <Icon
              name="lucide:calendar-plus"
              class="text-sm"
              aria-hidden="true"
            />
            Book Now
          </UiBaseButton>

          <!-- Hamburger -->
          <button
            class="lg:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px] rounded-xl transition-colors duration-200"
            :class="
              isScrolled ? 'hover:bg-pd-neutral-100' : 'hover:bg-white/12'
            "
            :aria-label="isDrawerOpen ? 'Close menu' : 'Open menu'"
            @click="isDrawerOpen = !isDrawerOpen"
          >
            <span
              class="w-[18px] h-[1.5px] rounded-full transition-all duration-300 origin-center"
              :class="[
                isScrolled ? 'bg-pd-neutral-800' : 'bg-white',
                isDrawerOpen ? 'rotate-45 translate-y-[6.5px]' : '',
              ]"
            />
            <span
              class="w-[18px] h-[1.5px] rounded-full transition-all duration-300"
              :class="[
                isScrolled ? 'bg-pd-neutral-800' : 'bg-white',
                isDrawerOpen ? 'opacity-0 w-0' : '',
              ]"
            />
            <span
              class="w-[18px] h-[1.5px] rounded-full transition-all duration-300 origin-center"
              :class="[
                isScrolled ? 'bg-pd-neutral-800' : 'bg-white',
                isDrawerOpen ? '-rotate-45 -translate-y-[6.5px]' : '',
              ]"
            />
          </button>
        </div>
      </div>
    </div>

    <LayoutMobileDrawer :is-open="isDrawerOpen" @close="isDrawerOpen = false" />
  </header>
</template>
