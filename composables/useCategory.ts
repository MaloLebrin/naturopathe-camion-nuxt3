import { useBlogStore, useUserStore } from '~~/store'
import type { Category, CategoryPayload } from '~~/types'

export default function useCategory() {
  const { createManyCategories, createOneCategory, deleteOneCategory } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/category/all')

    if (data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    // createOneCategory(res)
    DecLoading()
  }

  async function postOne(newCategory: CategoryPayload) {
    IncLoading()
    const { data } = await $fetch(`/api/category/create`, {
      method: 'post',
      body: newCategory,
    })
    if (data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function patchOne(id: number, newCategory: CategoryPayload) {
    IncLoading()
    // const response = await $api().patch(`category/${id}`, { category: newCategory })
    // const categoryRecieved = response as unknown as Category
    // createOneCategory(categoryRecieved)
    DecLoading()
  }

  async function deleteOne(id: number) {
    IncLoading()
    // await $api().delete(`category/${id}`)
    // deleteOneCategory(id)
    DecLoading()
  }

  return {
    deleteOne,
    fetchOne,
    getAll,
    patchOne,
    postOne,
  }
}
