// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/seo",
    "@nuxtjs/fontaine",
    "@vueuse/nuxt"
  ],
  css: ["~/assets/css/main.css"],
  components: [
    {
      path: '~/components/global',
      pathPrefix: false,
    },
    '~/components',
  ],
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY || '',
    resendFromEmail: process.env.RESEND_FROM_EMAIL || 'noreply@plazadental.co.ke',
    resendToEmail: process.env.RESEND_TO_EMAIL || 'bookings@plazadental.co.ke',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://www.plazadental.co.ke',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME || 'Plaza Dental Clinic',
      phone: '+254 700 000 000',
      phoneRaw: '+254700000000',
      email: 'info@plazadental.co.ke',
      address: 'Suite 4B, Plaza Chambers, Westlands, Nairobi',
      whatsappNumber: process.env.NUXT_PUBLIC_WHATSAPP_NUMBER || '254700000000',
    }
  }
});

