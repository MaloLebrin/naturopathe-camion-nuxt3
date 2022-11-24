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
    const { data } = await $fetch(`/api/category/${id}`)
    if (data?.length > 0) {
      createManyCategories(data)
    }
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
    console.log(newCategory, '<==== newCategory')
    const { data } = await $fetch(`/api/category/${id}`, {
      method: 'put',
      body: newCategory,
    })
    if (data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function deleteOne(id: number) {
    IncLoading()
    await $fetch(`/api/category/${id}`, {
      method: 'delete'
    })
    deleteOneCategory(id)
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
