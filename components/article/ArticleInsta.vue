<template>
<article
  v-if="article"
  class="min-h-full space-y-8"
>
  <div
    v-if="category"
    class="flex space-x-4"
  >
    <div
      class="px-2 rounded-lg py"
      :class="[`bg-${category.color}-400`]"
    >
      {{ category.name }}
    </div>&nbsp;-
    <p class="text-gray-500">
      Dernière mise à jour le {{ $toFormat(article.updatedAt, 'D MM YYYY') }}
    </p>
  </div>

  <h1 class="text-5xl font-bold text-blue-900">
    {{ article.title }}
  </h1>

  <div class="flex items-center py-4 space-x-4 border-b border-gray-200">
    <img
      class="w-16 h-16 rounded-full"
      src="/static/elisa-picture.jpg"
      alt="Elisa Neaud Auteur des articles"
    >
    <div class="flex flex-col items-center space-y-2">
      <p class="font-medium text-purple-700">
        Elisa Neaud
      </p>
      <p
        v-if="article.publishedAt"
        class="font-medium text-gray-500"
      >
        {{ $toFormat(article.publishedAt, 'D MM YYYY') }}
      </p>
    </div>
  </div>

  <template v-if="article.fileArrayBase64?.length > 0">
    <Carousel
        class="h-full"
        :items-to-show="1"
        :autoplay="4000"
        >
          <Slide
            v-for="(file, index) in article.fileArrayBase64"
            :key="index"
            class="object-contain h-full slide"
          >
            <img
              class="object-contain"
              :src="file"
              :alt="`${file}-illustration-${index}`"
            >
          </Slide>

        <template #addons>
            <Pagination />
        </template>
    </Carousel>
  </template>

  <div class="leading-8 text-justify indent-8">
    <Markdown :source="article.content" />
  </div>
</article>
</template>

<script setup lang="ts">
import Markdown from 'vue3-markdown-it'
import "vue3-carousel/dist/carousel.css"
import { Carousel, Pagination, Slide } from 'vue3-carousel'
import type { Article, Category } from '~~/types'

interface Props {
  article: Article
  category: Category
}

defineProps<Props>()

onMounted(() => {
  if (document) {    
    const viewport = document?.getElementsByClassName('carousel__viewport') as any
    for(let i=0, len=viewport.length; i<len; i++) {
      viewport[i].style.setProperty('max-height', '100%', "important")
    }
  }
})
</script>
