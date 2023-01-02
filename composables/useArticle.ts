import { useBlogStore, useUserStore } from '~~/store'
import type { Article, ArticlePayload } from '~~/types'

export default function useArticle() {
  const { createManyArticles, deleteOneArticle } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()
  const { $isTestMode } = useNuxtApp()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/article/all')
    if (data?.length > 0) {
      createManyArticles(formatedArticles(data))
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    const { data } = await $fetch(`/api/article/${id}`)
    if (data?.length > 0) {
      createManyArticles(formatedArticles(data))
    }
    DecLoading()
  }

  async function postOne(article: ArticlePayload): Promise<Article | null> {
    const { data } = await $fetch('/api/article/create', {
      method: 'post',
      body: {
        ...article,
        isTest: $isTestMode,
      },
    })
    if (data?.length > 0) {
      const articles = formatedArticles(data)
      createManyArticles(articles)
      return articles[0]
    }
    return null
  }

  async function deleteOne(id: number) {
    IncLoading()
    await $fetch(`/api/article/${id}`, {
      method: 'delete',
    })
    deleteOneArticle(id)
    DecLoading()
  }

  async function patchOne(id: number, article: Article) {
    IncLoading()
    const { data } = await $fetch(`/api/article/${id}`, {
      method: 'put',
      body: {
        ...article,
        isTest: $isTestMode,
      },
    })
    if (data?.length > 0) {
      createManyArticles(formatedArticles(data))
    }
    DecLoading()
  }

  function formatedArticles(articles: Article[]): Article[] {
    return articles.map(article => ({
      ...article,
      fileArrayBase64: article.fileArrayBase64 ? article.fileArrayBase64.filter(str => str) : [],
    }))
  }

  return {
    deleteOne,
    formatedArticles,
    fetchOne,
    getAll,
    patchOne,
    postOne,
  }
}
