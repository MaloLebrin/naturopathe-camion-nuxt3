import useArticle from "~~/composables/useArticle"

export default defineNuxtRouteMiddleware(async () => {
  const { getAll } = useArticle()
  await getAll()
})
