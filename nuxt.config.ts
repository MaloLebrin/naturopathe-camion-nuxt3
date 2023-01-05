export default defineNuxtConfig({
  build: {
    transpile: [
      '@heroicons/vue',
      '@headlessui/vue',
    ],
  },

  buildModules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    {
      autoImports: [
        // automatically imports `usePinia()`
        'defineStore',
        // automatically imports `usePinia()` as `usePiniaStore()`
        ['defineStore', 'definePiniaStore'],
      ],
    },
  ],

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],

  css: [
    '@/assets/css/main.css',
  ],

  app: { pageTransition: { name: 'page', mode: 'out-in' } },

  head: {
    title: 'Naturopathe Camion',
    meta: [
      { charset: 'utf-8' },
      { title: 'Unplugin' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:url', name: 'og:url', content: 'https://naturopathe-camion.com' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Naturopathe Camion' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr' },
      { hid: 'og:image', name: 'og:image', content: `${process.env.WEBSITE_URL}/static/totem_bleu.png` },
      { hid: 'description', name: 'description', content: 'Naturopathe formée à ISUPNAT certifiée FENA, Masseuse bien-être' },
      { hid: 'keywords', name: 'keywords', content: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, force vitale' },
    ],
    link: [
    ],
  },
})
