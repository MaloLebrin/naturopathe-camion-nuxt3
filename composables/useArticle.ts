import { useBlogStore, useUserStore } from '~~/store'
import type { Article, ArticlePayload } from '~~/types'

export default function useArticle() {
  const { createManyArticles, deleteOneArticle } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()
  const { $isTestMode, $toast } = useNuxtApp()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/article/all')
    if (data && data?.length > 0) {
      createManyArticles(formatedArticles(data))
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    const { data } = await $fetch(`/api/article/${id}`)
    if (data && data?.length > 0) {
      createManyArticles(formatedArticles(data))
    }
    DecLoading()
  }

  async function postOne(article: ArticlePayload): Promise<Article | null> {
    const { data, error } = await $fetch('/api/article/create', {
      method: 'post',
      body: {
        ...article,
        isTest: $isTestMode,
      },
    })
    if (data && data?.length > 0) {
      $toast.success('Vous avez créé l\'article avec succès')
      const articles = formatedArticles(data)
      createManyArticles(articles)
      return articles[0]
    } else if (error) {
      $toast.error(error)
    }
    return null
  }

  async function deleteOne(id: number) {
    IncLoading()
    const { status, error } = await $fetch(`/api/article/${id}`, {
      method: 'delete',
    })
    if (status === 204) {
      $toast.success('L\'Article a été supprimé')
    } else if (error) {
      $toast.error(error)
    }
    deleteOneArticle(id)
    DecLoading()
  }

  async function patchOne(id: number, article: Article) {
    IncLoading()
    const { data, error } = await $fetch(`/api/article/${id}`, {
      method: 'put',
      body: {
        ...article,
        isTest: $isTestMode,
      },
    })
    if (data && data?.length > 0) {
      $toast.success('Vous avez modifié l\'article avec succès')
      createManyArticles(formatedArticles(data))
    } else if (error) {
      $toast.error(error)
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
