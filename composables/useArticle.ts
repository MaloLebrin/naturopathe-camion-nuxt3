import { useBlogStore, useUserStore } from '~~/store'
import type { Article, ArticlePayload } from '~~/types'

export default function useArticle() {
  const { $getApiUrl, $api } = useNuxtApp()
  const { createManyArticles, createOneArticle, deleteOneArticle } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/article/all')
    if (data?.length > 0) {
      createManyArticles(data)
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    // const response = await fetch(`${$getApiUrl()}article/${id}`)
    // const res = await response.json()
    // createOneArticle(res)
    DecLoading()
  }

  async function updatePublishedStatus(id: number, isPublished: boolean) {
    IncLoading()
    // const response = await $api().patch(`article-status/${id}`, { isPublished })
    // createOneArticle(response as unknown as Article)
    DecLoading()
  }

  async function postOne(article: ArticlePayload): Promise<Article> {
    // const response = await $api().post('article', article)
    // const articleRecieved = response as unknown as Article
    // createOneArticle(articleRecieved)
    // return articleRecieved
  }

  async function deleteOne(id: number) {
    IncLoading()
    // await $api().delete(`article/${id}`)
    // deleteOneArticle(id)
    DecLoading()
  }

  async function patchOne(id: number, article: Article) {
    IncLoading()
    // const response = await $api().patch(`article/${id}`, { article })
    // createOneArticle(response as unknown as Article)
    DecLoading()
  }

  return {
    deleteOne,
    fetchOne,
    getAll,
    patchOne,
    postOne,
    updatePublishedStatus,
  }
}
