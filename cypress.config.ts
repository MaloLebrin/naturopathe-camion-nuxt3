import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: process.env.FRONT_URL,
    env: {
      FRONT_URL: process.env.FRONT_URL || 'http://localhost:3000/',
      TEST_MODE: true,
      TEST_USER: process.env.TEST_USER,
      TEST_PASSWORD: process.env.TEST_PASSWORD,
    },
    video: false,
    screenshotOnRunFailure: false,
    screenshotsFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      config.env = {
        ...process.env,
        ...config.env,
        TEST_USER: process.env.TEST_USER,
        TEST_PASSWORD: process.env.TEST_PASSWORD,
      }
      return config
    },
  },
})
