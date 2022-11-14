import { useBlogStore } from '~~/store/blogStore'
import { useUserStore } from '~~/store/userStore'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      userStore: () => useUserStore(),
      blogStore: () => useBlogStore(),
    },
  }
})
