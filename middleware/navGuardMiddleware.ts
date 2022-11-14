export default defineNuxtRouteMiddleware((to, from) => {
  if (from.name !== to.name) {
    const { $userStore } = useNuxtApp()
    if (to.meta.isAuth && !$userStore().isLoggedIn) {
      return navigateTo({
        name: 'Admin',
      })
    }
  }
})

