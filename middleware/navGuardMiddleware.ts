import { useUserStore } from '~~/store'

export default defineNuxtRouteMiddleware(to => {
  if (to.name !== 'Admin') {
    const userStore = useUserStore()

    if (to.meta.isAuth && !userStore.getIsLoggedIn) {
      return navigateTo({
        name: 'Admin',
      })
    }
  }
})
