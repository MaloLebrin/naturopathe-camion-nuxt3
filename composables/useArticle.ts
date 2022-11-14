import { useBlogStore, useUserStore } from '~~/store'
import type { Article, ArticlePayload } from '~~/types'

export default function useArticle() {
  const { createManyArticles, deleteOneArticle } = useBlogStore()
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
    const { data } = await $fetch(`/api/article/${id}`)
    if (data?.length > 0) {
      createManyArticles(data)
    }
    DecLoading()
  }

  async function updatePublishedStatus(id: number, isPublished: boolean) {
    IncLoading()
    const { data } = await $fetch(`/api/article/updateStatus-${id}`, {
      method: 'put'
    })
    if (data?.length > 0) {
      createManyArticles(data)
    }
    DecLoading()
  }

  async function postOne(article: ArticlePayload): Promise<Article | null> {
    const { data } = await $fetch(`/api/article/create`, {
      method: 'post',
      body: article,
    })
    if (data?.length > 0) {
      createManyArticles(data)
      return data[0]
    }
    return null
  }

  async function deleteOne(id: number) {
    IncLoading()
    await $fetch(`/api/article/${id}`, {
      method: 'delete'
    })
    deleteOneArticle(id)
    DecLoading()
  }

  async function patchOne(id: number, article: Article) {
    IncLoading()
    const { data } = await $fetch(`/api/article/${id}`, {
      method: 'put',
      body: article,
    })
    if (data?.length > 0) {
      createManyArticles(data)
    }
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
