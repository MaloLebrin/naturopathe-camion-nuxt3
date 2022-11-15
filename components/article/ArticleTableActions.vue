<template>
<Menu
  as="div"
  class="relative inline-block text-left"
>
  <div>
    <MenuButton
      class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-purple-500 bg-purple-300 border border-purple-500 rounded-md bg-opacity-20 hover:bg-opacity-40 hover:text-purple-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      Actions
      <ChevronDownIcon
        class="w-5 h-5 ml-2 -mr-1 text-purple-500 hover:text-purple-800"
        aria-hidden="true"
      />
    </MenuButton>
  </div>

  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-from-class="transform scale-95 opacity-0"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0"
  >
    <MenuItems
      as="div"
      class="absolute right-0 z-20 w-56 mt-2 overflow-visible origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
    >
      <div v-if="!$userStore().isLoading">
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <NuxtLink
              class="flex items-center w-full px-2 py-2 text-sm rounded-md cursor-pointer group"
              :class="[
                active ? 'bg-purple-100 text-purple-800' : 'text-gray-900',
              ]"
              :disabled="$userStore().isLoading"
              :to="{
                name: 'Admin-articles-edit-id',
                params: {
                  id: article.id,
                },
                query: { title: article.title },
              }"
            >
              <PencilIcon
                :active="active"
                class="w-5 h-5 mr-2 text-violet-400"
                aria-hidden="true"
              />
              Modifier
            </NuxtLink>
          </MenuItem>
        </div>
        <MenuItem
          v-slot="{ active }"
          as="div"
          class="px-1 py-2"
        >
          <button
            class="flex items-center w-full px-2 py-2 text-sm rounded-md group"
            :class="[
              article.isPublished ? 'text-green-500' : 'text-red-500',
              active ? 'bg-red-100 text-red-800' : 'text-gray-900',
            ]"
            :disabled="$userStore().isLoading"
            @click="submit()"
            >
            <CheckCircleIcon
              v-if="article.isPublished"
              :active="active"
              class="w-5 h-5 mr-2 text-green-500"
              aria-hidden="true"
            />
            <XCircleIcon
              v-else
              :active="active"
              class="w-5 h-5 mr-2 text-red-500"
              aria-hidden="true"
            />
            {{ article.isPublished ? 'Actif (Désactiver)' : 'Inactif (Activer)' }}
          </button>
        </MenuItem>
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <button
              class="flex items-center w-full px-2 py-2 text-sm rounded-md group"
              :class="[
                active ? 'bg-red-100 text-red-800' : 'text-gray-900',
              ]"
              :disabled="$userStore().isLoading"
              @click="deleteConfirm"
            >
              <TrashIcon
                :active="active"
                class="w-5 h-5 mr-2 text-red-800"
                aria-hidden="true"
              />
              Supprimer
            </button>
          </MenuItem>
        </div>
      </div>
      <div
        v-else
        class="py-3"
      >
        <BaseLoader />
      </div>
    </MenuItems>
  </transition>
</Menu>
</template>

<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/vue'
import { CheckCircleIcon, ChevronDownIcon, PencilIcon, TrashIcon, XCircleIcon } from '@heroicons/vue/24/outline'
import { useUserStore } from '~~/store'
import type { Article } from '~~/types'
import { ModalNameEnum } from '~~/types'

interface Props {
  article: Article
}

const props = defineProps<Props>()
const { patchOne } = useArticle()
const userStore = useUserStore()
const { setModalState } = userStore

async function submit() {
  const payload = {
    ...props.article,
    isPublished: props.article.isPublished ? false : true,
    publishedAt: props.article.isPublished ? null : new Date(),
  }

  await patchOne(props.article.id, payload)

}

function deleteConfirm() {
  setModalState(ModalNameEnum.DELETE_ARTICLE, {
    article: props.article,
  })
}
</script>
