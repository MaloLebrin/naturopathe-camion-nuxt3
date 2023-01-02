import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    env: {
      FRONT_URL: process.env.FRONT_URL || 'http://localhost:3000/',
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
