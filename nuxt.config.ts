export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  modules: ['@nuxtjs/supabase'],

  css: [
    '@/assets/css/main.css',
  ],
  // serverMiddleware: [
  //   '~/server/api/index.ts'
  // ]
  // serverMiddleware: [
  //   // Will register file from project server-middleware directory to handle /server-api/* requests
  //   { path: "/server-api", handler: "~/server-middleware/index.ts" },
  // ],
})
