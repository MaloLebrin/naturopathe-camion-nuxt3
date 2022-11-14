<template>
<tr>
  <td class="py-4 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6">
    {{ category.id }}
  </td>
  <td class="py-4 pl-4 text-sm font-medium text-gray-900 truncate whitespace-nowrap sm:pl-6">
    {{ category.name }}
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    <CategoryTag :category="category" />
  </td>
  <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    {{ category?.articles?.length }}
  </td>

  <!-- <td class="px-3 py-4 text-sm text-gray-500 truncate whitespace-nowrap">
    <span v-if="category.publishedAt">{{ $toFormat(category.publishedAt, 'D/MM/YYYY') }}</span>
  </td> -->
  <td class="relative flex items-center justify-center py-4 pl-3 pr-4 space-x-2 text-sm font-medium text-right whitespace-nowrap sm:pr-6">
    <!-- <BaseButton
      tag="nuxt-link"
      :to="{
        name: 'Admin-categories-edit-id',
        params: { id: category.id },
        query: { name: category.name },
      }"
    >
      Modifier
    </BaseButton> -->
    <BaseButton
      color="red"
      @click="deleteCategory"
    >
      Supprimer
    </BaseButton>
  </td>
</tr>
</template>

<script setup lang="ts">
import { useUserStore } from '~~/store'
import type { Category } from '~~/types'
import { ModalNameEnum } from '~~/types'

interface Props {
  category: Category
}

const props = defineProps<Props>()

const { setModalState } = useUserStore()

async function deleteCategory() {
  setModalState(ModalNameEnum.DELETE_CATEGORY, {
    category: props.category,
  })
}
</script>
