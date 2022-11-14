<template>
<span
  v-if="category"
  class="px-2 py-1 text-sm font-semibold text-gray-600 uppercase rounded-md"
  :class="`bg-${category.color || 'gray'}-100`"
>{{ category.name }}</span>
</template>

<script setup lang="ts">
import type { Category } from '~~/types'

interface Props {
  category: Category
}

defineProps<Props>()
</script>
