<template>
<div class="relative flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <img
    class="absolute inset-0 object-cover w-full h-full"
    src="/static/retouche5.webp"
    alt="Elisa en plein travail"
  >
  <div class="bg-black rounded opacity-50">
    <h1 class="px-4 py-2 text-4xl font-bold text-center text-white">
      Faire de sa santé un mode de vie
    </h1>
  </div>
</div>
</template>

<script setup lang="ts">
useHead({
  title: 'Naturopathe-Camion | Accueil',
  meta: [
    { name: 'description', content: 'Faire de sa santé un mode de vie' },
    { name: 'keywords', content: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, force vitale' },
    {
      property: 'og:image',
      content: `${import.meta.env.VITE_FONT_URL}static/retouche5.webp`,
      hid: 'og:image',
    },
  ],
})
</script>
