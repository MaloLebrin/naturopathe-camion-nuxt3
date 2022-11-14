import { useBlogStore, useUserStore } from '~~/store'
import type { Category, CategoryPayload } from '~~/types'

export default function useCategory() {
  const { $getApiUrl, $api } = useNuxtApp()
  const { createManyCategories, createOneCategory, deleteOneCategory } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/category/all')
    console.log(data, '<==== data')
    if (data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    // const response = await fetch(`${$getApiUrl()}category/${id}`)
    // const res = await response.json()
    // createOneCategory(res)
    DecLoading()
  }

  async function postOne(newCategory: CategoryPayload) {
    IncLoading()
    // const response = await $api().post('category', { category: newCategory })
    // const categoryRecieved = response as unknown as Category
    // createOneCategory(categoryRecieved)
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
