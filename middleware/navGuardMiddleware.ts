export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name !== 'Admin') {
    const { $userStore, $isTestMode } = useNuxtApp()

    console.log($isTestMode, '<==== $isTestMode')
    if (to.meta.isAuth && !$userStore().getIsLoggedIn) {
      return navigateTo({
        name: 'Admin',
      })
    }
  }
})
