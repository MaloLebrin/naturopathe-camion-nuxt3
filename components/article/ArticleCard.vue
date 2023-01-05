<template>
<NuxtLink
  :to="{
    name: 'Article-id',
    params: { id: article.id },
    query: { title: article.title },
  }"
>
  <article
    v-if="article"
    class="px-8 py-6 space-y-4 bg-white rounded-lg shadow-md cursor-pointer"
  >
    <template v-if="article.isInstaPost && article.fileArrayBase64?.length > 0">
      <Carousel
        :items-to-show="1"
        :wrap-around="true"
        :autoplay="2000"
      >
        <Slide
          v-for="(str, index) in article.fileArrayBase64"
          :key="index"
        >
          <img
            class="hidden col-span-2 rounded-md md:block"
            :src="str"
            :alt="`${article.title}-${index}`"
          >
        </Slide>
        <template #addons>
          <Pagination />
        </template>
      </Carousel>
    </template>

    <template v-else>
      <img
        v-if="article.fileArrayBase64 && article.fileArrayBase64.length > 0"
        class="hidden col-span-2 rounded-md md:block"
        :src="article.fileArrayBase64[0]"
        :alt="`${article.title}-0`"
      >
    </template>

    <div class="space-y-4">
      <div class="space-x-4">
        <CategoryTag
          :category="blogStore.getCategoryByArticleId(article.id)"
        />
        <span class="text-sm font-medium text-gray-400"> {{ $toFormat(article.publishedAt, 'D MMMM YYYY') }} </span>
      </div>
      <h4 class="text-xl font-bold text-gray-800 ">
        {{ article.title }}
      </h4>
      <p class="text-base text-gray-600 text-ellipsis">
        {{ article.description }}
      </p>
    </div>
  </article>
</NuxtLink>
</template>

<script setup lang="ts">
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import type { Article, Category } from '~~/types'
import 'vue3-carousel/dist/carousel.css'
import { useBlogStore } from '~~/store'

interface Props {
  article: Article
  category?: Category
}

defineProps<Props>()

const blogStore = useBlogStore()
</script>

<style>
.carousel__pagination-button {
  @apply bg-gray-800/30 !important;
}
.carousel__pagination-button--active {
  @apply bg-gray-800 !important
}

.carousel__viewport {
  @apply max-h-[332px] rounded-md !important
}
</style>
