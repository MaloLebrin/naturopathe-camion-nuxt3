<template>
<AdminPageWrapper :title="`Modifier L'article : ${article?.title}`">
  <ArticleForm
    v-if="article"
    :article="article"
  />
</AdminPageWrapper>
</template>

<script setup lang="ts">
import { useBlogStore } from '~~/store'

const blogStore = useBlogStore()
const route = useRoute()

const articleId = computed(() => parseInt(route.params.id as string))
const article = computed(() => blogStore.getOneArticle(articleId.value))

definePageMeta({
  middleware: [
    'nav-guard-middleware',
    'article-middleware',
  ],
  layout: 'admin',
  isAuth: true,
})

useHead({
  title: `Naturopathe-Camion Blog | Modifier l'article ${article.value?.title}`,
})
</script>
