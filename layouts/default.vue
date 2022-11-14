<template>
<main class="font-medium text-blueDark bg-white-break md:relative md:min-h-screen md:flex">
  <MenuSide />
  <MenuBottom />
  <NuxtPage class="ml-80" />
  <TheFooter class="md:hidden" />
</main>
</template>

<!-- <script setup lang="ts">
const { $getApiUrl } = useNuxtApp()
console.log($getApiUrl(), 'getA$getApiUrl()')
</script> -->

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Sirin+Stencil&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  main {
    font-family: 'Rajdhani', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sirin Stencil';
  }
}
</style>
