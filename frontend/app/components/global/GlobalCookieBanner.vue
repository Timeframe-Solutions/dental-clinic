<script setup lang="ts">
/**
 * CookieBanner.vue
 * Purpose: GDPR-compliant cookie consent banner
 */
const { consent, acceptAll, rejectAll } = useCookieConsent()
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="translate-y-0"
    leave-to-class="translate-y-full"
  >
    <div v-if="consent === null" class="fixed bottom-0 left-0 right-0 z-[60] p-4 lg:p-6">
      <div class="container-pd">
        <div class="bg-gradient-to-r from-pd-primary to-pd-primary-dark text-white rounded-2xl p-6 lg:p-8 shadow-pd-modal border border-white/10 flex flex-col lg:flex-row items-center gap-6">
          <div class="flex-1 text-center lg:text-left">
            <h3 class="text-white text-base lg:text-lg font-bold mb-1">We Value Your Privacy</h3>
            <p class="text-pd-primary-light/75 text-sm">
              We use cookies to improve your browsing experience, analyze site traffic, and enhance our services. By clicking "Accept", you consent to our use of cookies.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <UiBaseButton variant="ghost" size="sm" @click="rejectAll">Reject All</UiBaseButton>
            <UiBaseButton variant="primary" size="sm" @click="acceptAll">Accept All</UiBaseButton>
          </div>
        </div>

      </div>
    </div>
  </Transition>
</template>
