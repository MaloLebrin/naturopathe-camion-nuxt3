export default defineNuxtRouteMiddleware((to, from) => {
  if (to.name !== 'Admin') {
    const { $userStore } = useNuxtApp()

    console.log(import.meta.env, '<==== import.meta.env')

    if (to.meta.isAuth && !$userStore().getIsLoggedIn) {
      return navigateTo({
        name: 'Admin',
      })
    }
  }
})
