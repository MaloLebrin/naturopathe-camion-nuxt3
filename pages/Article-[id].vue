<template>
<div class="flex w-full min-h-screen py-8 mb-32">
  <NuxtLink
    to="/blog"
    class="flex items-center px-4 py-6 space-x-2"
  >
    <ArrowLeftCircleIcon class="w-6 h-6 text-gray-700" />
    <span>Retour</span>
  </NuxtLink>

  <transition name="fade">
    <div class="flex items-center mx-auto">
      <div
        v-if="article"
        class="max-w-3xl px-20 pt-10 pb-16"
      >
        <template
          v-if="!article.isInstaPost"
        >
          <ArticleCommon
            :article="article"
            :category="articleCategory"
          />
        </template>

        <template
          v-else
        >
          <ArticleInsta
            :article="article"
            :category="articleCategory"
          />
        </template>
      </div>
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import { ArrowLeftCircleIcon } from '@heroicons/vue/24/outline'
import { useBlogStore } from '~~/store'

const blogStore = useBlogStore()
const route = useRoute()

const articleId = computed(() => parseInt(route.params.id as string))
const article = computed(() => blogStore.getOneArticle(articleId.value))
const articleCategory = computed(() => blogStore.getCategoryByArticleId(articleId.value))

definePageMeta({
  middleware: ['article-middleware'],
  isAuth: false,
})

useHead({
  title: `Naturopathe-Camion | ${route.query.title}`,
  meta: [
    { name: 'description', content: `${article.value?.description}` },
  ],
})
</script>
