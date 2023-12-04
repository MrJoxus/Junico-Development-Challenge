// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  tailwindcss: {
    cssPath: '~/assets/scss/tailwind.scss'
  },

  i18n: {
    locales: [
      { code: 'de', iso: 'de', file: 'de.json' },
      { code: 'en', iso: 'en', file: 'en.json' }
    ],
    defaultLocale: 'de',
    langDir: 'locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  }
})
