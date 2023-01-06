import { useToast } from 'vue-toastification'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      isProductionMode: () => {
        return parseInt(import.meta.env.VITE_PROD.toString()) === 1 && parseInt(import.meta.env.VITE_DEV.toString()) === 0
      },
      isTestMode: import.meta.env.TEST_MODE === true || import.meta.env.TEST_MODE === 'true',
      toast: useToast(),
    },
  }
})
