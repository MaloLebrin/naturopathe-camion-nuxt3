import API from '~~/helpers/api'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      isProductionMode: () => {
        return parseInt(import.meta.env.VITE_PROD.toString()) === 1 && parseInt(import.meta.env.VITE_DEV.toString()) === 0
      },
      getApiUrl: () => {
        if (parseInt(import.meta.env.VITE_PROD.toString()) === 1 && parseInt(import.meta.env.VITE_DEV.toString()) === 0) {
          return import.meta.env.VITE_API_URL
        }
        return import.meta.env.VITE_DEV_API_URL
      },
      api: () => {
        const api = new API()
        return api
      },
    },
  }
})
