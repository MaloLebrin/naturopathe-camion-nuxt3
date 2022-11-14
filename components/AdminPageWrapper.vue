<template>
<div class="flex flex-col items-center justify-start w-full h-full min-h-screen mb-10">
  <h1 class="px-4 py-2 text-3xl font-bold text-center rounded-md bg-blueLight bg-opacity-70">
    {{ title }}
  </h1>
  <div class="w-full h-full px-4 sm:px-6 lg:px-8">
    <slot />
  </div>
</div>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>
