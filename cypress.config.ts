import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    env: {
      FRONT_URL: process.env.FRONT_URL || 'http://localhost:3000/',
    },
    video: false,
    screenshotOnRunFailure: false,
    screenshotsFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
