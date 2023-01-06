import { useBlogStore, useUserStore } from '~~/store'
import type { CategoryPayload } from '~~/types'

export default function useCategory() {
  const { createManyCategories, deleteOneCategory } = useBlogStore()
  const { IncLoading, DecLoading } = useUserStore()
  const { $isTestMode, $toast } = useNuxtApp()

  async function getAll() {
    IncLoading()
    const { data } = await $fetch('/api/category/all')

    if (data && data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function fetchOne(id: number) {
    IncLoading()
    const { data } = await $fetch(`/api/category/${id}`)
    if (data && data?.length > 0) {
      createManyCategories(data)
    }
    DecLoading()
  }

  async function postOne(newCategory: CategoryPayload) {
    IncLoading()
    const { data, error } = await $fetch('/api/category/create', {
      method: 'post',
      body: {
        ...newCategory,
        isTest: $isTestMode,
      },
    })
    if (data && data?.length > 0) {
      createManyCategories(data)
      $toast.success('Vous avez créé la catégorie avec succès')
    } else if (error) {
      $toast.error(error)
    }
    DecLoading()
  }

  async function patchOne(id: number, newCategory: CategoryPayload) {
    IncLoading()

    const { data, error } = await $fetch(`/api/category/${id}`, {
      method: 'put',
      body: {
        ...newCategory,
        isTest: $isTestMode,
      },
    })
    if (data && data?.length > 0) {
      createManyCategories(data)
      $toast.success('Vous avez modifié la catégorie avec succès')
    } else if (error) {
      $toast.error(error)
    }
    DecLoading()
  }

  async function deleteOne(id: number) {
    IncLoading()
    await $fetch(`/api/category/${id}`, {
      method: 'delete',
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
