<template>
<AdminPageWrapper title="Créer un nouvel article">
  <ArticleForm />
</AdminPageWrapper>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: [
    'nav-guard-middleware',
    'categories-middleware',
  ],
  isAuth: true,
})

useHead({
  title: 'Naturopathe-Camion | Créer un article',
})
</script>
