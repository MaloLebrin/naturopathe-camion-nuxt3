<template>
<h1 class="relative mb-4 text-3xl font-bold text-center rounded-t-lg lg:mb-8">
  {{ title }}
  <slot />
</h1>
</template>

<script setup lang="ts">
interface Props {
  title: string
}

defineProps<Props>()
</script>
