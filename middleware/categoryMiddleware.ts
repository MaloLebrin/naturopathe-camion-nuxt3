import useCategory from "~~/composables/useCategory"
import { useBlogStore } from "~~/store"

export default defineNuxtRouteMiddleware(async (to) => {
  const categoryId = parseInt(to.params.id as string)
  const blogStore = useBlogStore()
  const { fetchOne: fetchOneCategory } = useCategory()

  if (categoryId) {
    const isCategoryAlreadyStored = blogStore.isCategoryAlreadyStored(categoryId)
    if (!isCategoryAlreadyStored) {
      await fetchOneCategory(categoryId)
    }
  }
})
