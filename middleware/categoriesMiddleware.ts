import useCategory from "~~/composables/useCategory"

export default defineNuxtRouteMiddleware(async () => {
  const { getAll } = useCategory()
  await getAll()
})
