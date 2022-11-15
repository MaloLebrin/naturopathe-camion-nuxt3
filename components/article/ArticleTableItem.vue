<template>
<tr>
  <td class="py-4 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6">
    {{ article.id }}
  </td>
  <td class="py-4 pl-4 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6">
    {{ article.title }}
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    <ArticleStatusTag :is-published="article.isPublished" />
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    {{ category?.name }}
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    {{ $toFormat(article.createdAt, 'D/MM/YYYY') }}
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    {{ $toFormat(article.updatedAt, 'D/MM/YYYY') }}
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    <span v-if="article.publishedAt">{{ $toFormat(article.publishedAt, 'D/MM/YYYY') }}</span>
  </td>
  <td class="relative flex items-center justify-center py-4 pl-3 pr-4 space-x-2 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
    <ArticleTableActions
      :article="article"
    />
  </td>
</tr>
</template>

<script setup lang="ts">
import type { Article } from '~~/types'
import { useBlogStore } from '~~/store'

interface Props {
  article: Article
}

const props = defineProps<Props>()
const blogStore = useBlogStore()

const category = computed(() => blogStore.getCategoryByArticleId(props.article.id))
</script>
