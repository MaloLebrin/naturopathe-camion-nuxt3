<template>
  <div class="flex items-center justify-center h-full py-4">
    <div class="flex-col items-center justify-center h-screen">
      <h1 class="text-3xl font-bold text-green-500">
        How to install Tailwind CSS 3 in Nuxt 3
      </h1>
      time :{{ time }}
    </div>
  </div>
</template>

<script setup lang="ts">
const time = await $fetch('/api/article/1')
// const time = await $fetch('/api/article/1', { method: 'put', body: { title: 'test artice naturo' } })
</script>
