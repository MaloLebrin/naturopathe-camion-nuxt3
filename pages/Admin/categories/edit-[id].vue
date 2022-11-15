<template>
<AdminPageWrapper :title="`Modifier la catégorie ${category.name}`">
  <CategoryForm :category="category" />
</AdminPageWrapper>
</template>

<script setup lang="ts">
import { useBlogStore } from '~~/store'

const blogStore = useBlogStore()
const route = useRoute()

const categoryId = computed(() => parseInt(route.params.id as string))
const category = computed(() => blogStore.getOneCategory(categoryId.value))

definePageMeta({
  middleware: [
    'nav-guard-middleware',
    'category-middleware'
  ],
  layout: 'admin',
  isAuth: true,
})

useHead({
  title: `Naturopathe-Camion | Modifier la catégorie ${category.value?.name}`,
})
</script>
