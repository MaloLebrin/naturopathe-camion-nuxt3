export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name !== 'Admin') {
    const { $userStore } = useNuxtApp()

    if (to.meta.isAuth && !$userStore().getIsLoggedIn) {
      return navigateTo({
        name: 'Admin',
      })
    }
  }
})

