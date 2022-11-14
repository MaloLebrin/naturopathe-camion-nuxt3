<template>
  <div class="flex flex-col items-center justify-start w-full h-full min-h-screen">
    <h1 class="px-4 py-2 text-3xl font-bold text-center rounded-md bg-blueLight bg-opacity-70">
      Liste des articles
    </h1>
    <div class="w-full h-full px-4 sm:px-6 lg:px-8">
      <!-- <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <BaseInput
            v-model="state.search"
            name="search"
            type="text"
            placeholder="Recherchez"
            @keyup="searchEntity"
          />
        </div>
        <FiltersEventTable />
      </div> -->
      <div class="flex flex-col w-full h-full mt-8">
        <div class="h-full -mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 pb-52">
          <div class="inline-block h-full min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="w-full h-full shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table class="w-full h-full min-w-full overflow-visible divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <ArticleHeaderTable />
                </thead>
                <template v-if="$blogStore().getArticlesArray.length > 0">
                  <tbody class="h-full bg-white divide-y divide-gray-200">
                    <ArticleTableItem
                      v-for="article in $blogStore().getArticlesArray"
                      :key="article.id"
                      :article="article"
                    />
                  </tbody>
                </template>
                <BaseLoader v-else-if="$userStore().isLoading" />
                <div
                  v-else
                  class="flex items-center py-4 pl-4 pr-3 space-x-2 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6"
                >
                  <p>Pas d'articles créé</p>
                  <BaseButton
                    tag="nuxt-link"
                    to="/admin/articles/create"
                  >
                    Créer un article
                  </BaseButton>
                </div>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script setup lang="ts">  
  definePageMeta({
    layout: 'admin',
    middleware: [
      // 'nav-guard-middleware',
      'categories-middleware',
      'articles-middleware',
    ],
    isAuth: true,
  })
  
  useHead({
    title: `Naturopathe-Camion | CMS Articles`,
    meta: [
      { name: 'description', content: 'Administration de gestion des articles' },
    ],
  })
  </script>
  