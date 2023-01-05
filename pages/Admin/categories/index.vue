<template>
<AdminPageWrapper title="Liste des catégories">
  <div class="flex flex-col w-full h-full mt-8">
    <div class="h-full -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block h-full min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="w-full h-full shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table class="w-full h-full min-w-full overflow-visible divide-y divide-gray-300">
            <thead class="bg-gray-50">
              <CategoryHeaderTable />
            </thead>
            <template v-if="blogStore.getCategoriesArray.length > 0">
              <tbody class="h-full bg-white divide-y divide-gray-200">
                <CategoryTableItem
                  v-for="category in blogStore.getCategoriesArray"
                  :key="category.id"
                  :category="category"
                />
              </tbody>
            </template>
            <BaseLoader v-else-if="userStore.isLoading" />
            <div
              v-else
              class="flex items-center py-4 pl-4 pr-3 space-x-2 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6"
            >
              <p>Pas de catégorie créée</p>
              <BaseButton
                tag="nuxt-link"
                to="/admin/articles/create"
              >
                Créer une catégorie
              </BaseButton>
            </div>
          </table>
        </div>
      </div>
    </div>
  </div>
</AdminPageWrapper>
</template>

<script setup lang="ts">
import { useBlogStore, useUserStore } from '~~/store'

const userStore = useUserStore()
const blogStore = useBlogStore()

definePageMeta({
  layout: 'admin',
  middleware: [
    'nav-guard-middleware',
    'categories-middleware',
  ],
  isAuth: true,
})

useHead({
  title: 'Naturopathe-Camion | CMS Articles',
  meta: [
    { name: 'description', content: 'Administration de gestion des catégories' },
  ],
})
</script>
