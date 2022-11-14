<template>
<AdminPageWrapper title="Créer une nouvelle catégorie">
  <CategoryForm />
</AdminPageWrapper>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: [
    // 'nav-guard-middleware'
  ],
  layout: 'admin',
  isAuth: true,
})

useHead({
  title: `Naturopathe-Camion Blog | Créer une catégorie`,
})
</script>
