<template>
<BaseModal
  data-cy="confirm-delete-modal"
  :is-active="isDeleteConfirmModalActive"
>
  <div class="px-6 py-2 space-y-6">
    <h5 class="text-xl text-center text-red-500">
      Voulez vous Supprimer ?
    </h5>
    <p
      v-if="isArticle && article"
      class="text-center"
    >
      {{ article.title }}
    </p>
    <div
      v-if="isCategory && category"
      class="flex items-center justify-center"
    >
      <CategoryTag :category="category" />
    </div>
    <BaseMessage type="danger">
      <p>Attention toute suppression est définitive</p>
    </BaseMessage>
    <div class="flex items-center justify-center space-x-4">
      <BaseButton
        data-cy="cancel-delete-button"
        @click="resetModalState"
      >
        Annuler
      </BaseButton>
      <BaseButton
        color="red"
        data-cy="confirm-delete-button"
        @click="deleteConfirm"
      >
        Supprimer
      </BaseButton>
    </div>
  </div>
</BaseModal>
</template>

<script setup lang="ts">
import { useUserStore } from '~~/store'
import type { Article, Category } from '~~/types'
import { ModalNameEnum } from '~~/types'

const userStore = useUserStore()
const { resetModalState, IncLoading, DecLoading } = userStore
const { deleteOne: deleteOneArticle } = useArticle()
const { deleteOne: deleteOneCategory } = useCategory()

const isArticle = computed(() => userStore.getModalName === ModalNameEnum.DELETE_ARTICLE)
const isCategory = computed(() => userStore.getModalName === ModalNameEnum.DELETE_CATEGORY)
const article = computed(() => userStore.getModalData?.article as Article)
const category = computed(() => userStore.getModalData?.category as Category)

const isDeleteConfirmModalActive = computed(() => userStore.isModalActive
&& (isArticle.value || isCategory.value))

async function deleteConfirm() {
  IncLoading()
  if (isArticle.value) {
    await deleteOneArticle(article.value.id)
  } else if (isCategory.value) {
    await deleteOneCategory(category.value.id)
  }
  resetModalState()
  DecLoading()
}
</script>
