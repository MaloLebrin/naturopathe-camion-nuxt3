import useArticle from '~~/composables/useArticle'
import useCategory from '~~/composables/useCategory'
import { useBlogStore } from '~~/store'

export default defineNuxtRouteMiddleware(async to => {
  const blogStore = useBlogStore()
  const { fetchOne: fetchOneArticle } = useArticle()
  const { fetchOne: fetchOneCategory } = useCategory()

  const articleId = parseInt(to.params.id as string)
  if (articleId) {
    const isArticleAlreadyStored = blogStore.isArticleAlreadyStored(articleId)
    if (!isArticleAlreadyStored) {
      await fetchOneArticle(articleId)
    }
    const categoryId = blogStore.getOneArticle(articleId).categoryId
    if (categoryId) {
      const isCategoryAlreadyStored = blogStore.isCategoryAlreadyStored(categoryId)
      if (!isCategoryAlreadyStored) {
        await fetchOneCategory(categoryId)
      }
    }
  }
})
