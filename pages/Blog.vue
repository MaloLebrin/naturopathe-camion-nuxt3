<template>
<div class="flex justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="relative flex flex-col mx-auto space-y-12 animate-fade-in-down">
      <h1 class="px-4 py-2 text-3xl font-bold text-center rounded-md bg-blueLight bg-opacity-70">
        Le Blog
      </h1>
      <BaseLoader
        v-if="$userStore().isLoading"
      />
      <BaseMessage v-else-if="!$userStore().isLoading && $blogStore().getPublishedArticlesArray.length === 0">
        Désolé nous n'avons pas envore publié d'articles
      </BaseMessage>
      <template v-else>
        <NuxtLink
          v-if="firstArticle"
          :to="{
            name: 'Article-id',
            params: { id: firstArticle.id },
            query: { title: firstArticle.title },
          }"
        >
          <article
            class="grid max-w-4xl grid-cols-1 gap-6 px-8 py-6 bg-white rounded-lg shadow-md cursor-pointer md:grid-cols-3"
          >
            <img
              v-if="firstArticle?.files.length > 0"
              class="hidden col-span-2 rounded-md md:block"
              :src="firstArticle?.files[0].secure_url"
              :alt="firstArticle.title"
            >
            <div class="space-y-4">
              <div class="space-x-4">
                <CategoryTag
                  :category="$blogStore().getCategoryByArticleId(firstArticle.id)"
                />
                <span class="text-sm font-medium text-gray-400"> {{ $toFormat(firstArticle.publishedAt, 'D MMMM YYYY') }} </span>
              </div>
              <h4 class="text-xl font-bold text-gray-800 ">
                {{ firstArticle.title }}
              </h4>
              <p class="text-base text-gray-600 text-ellipsis">
                {{ firstArticle.description }}
              </p>
            </div>
          </article>
        </NuxtLink>
        <div
          v-if="restOfThem && restOfThem.length > 0"
          class="grid max-w-4xl gap-6 py-6 md:grid-cols-2"
        >
          <ArticleCard
            v-for="(article) in restOfThem"
            :key="article.id"
            :article="article"
            :category="$blogStore().getCategoryByArticleId(article.categoryId)"
          />
        </div>
      </template>
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~~/store'

const blogStore = useBlogStore()

const firstArticle = computed(() => blogStore.getPublishedArticlesArray.length > 0 ? blogStore.getPublishedArticlesArray[0] : null)
const restOfThem = computed(() => blogStore.getPublishedArticlesArray.length > 1 ? blogStore.getPublishedArticlesArray.filter((article, index) => index !== 0) : null)

definePageMeta({
  middleware: [
    'categories-middleware',
    'articles-middleware'
  ],
  isAuth: false,
})

useHead({
  title: `Naturopathe-Camion | Blog`,
  meta: [
    { name: 'description', content: 'Liste des articles' },
    { name: 'keywords', content: 'naturopathie, naturopathy, blog, bien être, alimentation, force vitale' },
  ],
})
</script>
