<template>
<TransitionRoot
  as="template"
  :show="userStore.getIsSidebarOpen"
>
  <Dialog
    as="div"
    class="relative z-40 md:hidden"
    @close="closeDrawer"
  >
    <TransitionChild
      as="template"
      enter="transition-opacity ease-linear duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity ease-linear duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
    </TransitionChild>

    <div class="fixed inset-0 z-40 flex">
      <TransitionChild
        as="template"
        enter="transition ease-in-out duration-300 transform"
        enter-from="-translate-x-full"
        enter-to="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leave-from="translate-x-0"
        leave-to="-translate-x-full"
      >
        <DialogPanel class="relative flex flex-col flex-1 w-full max-w-xs pt-5 pb-4 bg-white">
          <TransitionChild
            as="template"
            enter="ease-in-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in-out duration-300"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="absolute top-0 right-0 pt-2 -mr-12">
              <button
                type="button"
                class="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                @click="closeDrawer"
              >
                <span class="sr-only">Close sidebar</span>
                <XCircleIcon
                  class="w-6 h-6 text-white"
                  aria-hidden="true"
                />
              </button>
            </div>
          </TransitionChild>
          <div class="flex items-center flex-shrink-0 px-4">
            <NuxtLink :to="{ name: 'index' }">
              <img
                class="w-auto h-8"
                src="/static/totem_bleu.png"
                alt="Workflow"
              >
            </NuxtLink>
          </div>
          <div class="flex-1 h-0 mt-5 overflow-y-auto">
            <nav class="px-2 space-y-1">
              <NuxtLink
                v-for="item in navigation"
                :key="item.name"
                :data-cy="`admin-navigation-${item.name}`"
                :to="{ name: item.path }"
                class="flex items-center px-2 py-2 text-base font-medium rounded-md group"
                :class="[isCurrentPage(item.path).value ? 'bg-brown text-white' : 'text-blueDark', userStore.getIsLoggedIn ? 'cursor-pointer' : 'cursor-not-allowed']"
                :disabled="!userStore.getIsLoggedIn"
              >
                <component
                  :is="item.icon"
                  class="flex-shrink-0 w-6 h-6 mr-4"
                  :class="[isCurrentPage(item.path).value ? 'text-white' : 'text-blueDark']"
                  aria-hidden="true"
                />
                {{ item.name }}
              </NuxtLink>
              <NuxtLink
                :to="{ name: 'Admin' }"
                data-cy="logout-button"
                class="flex items-center px-2 py-2 text-sm font-medium rounded-md group"
                :disabled="!userStore.getIsLoggedIn"
                @click="removeCurrent"
              >
                <ArrowRightOnRectangleIcon
                  class="flex-shrink-0 w-6 h-6 mr-4 text-blueDark"
                  aria-hidden="true"
                />
                Se Déconnecter
              </NuxtLink>
            </nav>
          </div>
        </DialogPanel>
      </TransitionChild>
      <div
        class="flex-shrink-0 w-14"
        aria-hidden="true"
      >
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </Dialog>
</TransitionRoot>

<!-- Static sidebar for desktop -->
<div class="hidden shadow-lg md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
  <!-- Sidebar component, swap this element with another sidebar if you like -->
  <div class="flex flex-col flex-grow pt-5 overflow-y-auto">
    <div class="flex items-center flex-shrink-0 px-4">
      <NuxtLink :to="{ name: 'index' }">
        <img
          class="w-full"
          src="/static/totem_bleu.png"
          alt="Workflow"
        >
      </NuxtLink>
    </div>
    <div class="flex flex-col flex-1 mt-5">
      <nav class="flex-1 px-2 pb-4 space-y-1">
        <NuxtLink
          v-for="item in navigation"
          :key="item.name"
          :data-cy="item.path"
          :to="{ name: item.path }"
          class="flex items-center px-2 py-2 text-sm font-medium rounded-md group"
          :class="[isCurrentPage(item.path).value ? 'bg-brown text-white' : 'text-blueDark', userStore.getIsLoggedIn ? 'cursor-pointer' : 'cursor-not-allowed']"
          :disabled="!userStore.getIsLoggedIn"
        >
          <component
            :is="item.icon"
            class="flex-shrink-0 w-6 h-6 mr-4"
            :class="[isCurrentPage(item.path).value ? 'text-white' : 'text-blueDark']"
            aria-hidden="true"
          />
          {{ item.name }}
        </NuxtLink>
        <NuxtLink
          :to="{ name: 'Admin' }"
          data-cy="logout-button"
          class="flex items-center px-2 py-2 text-sm font-medium rounded-md group"
          :disabled="!userStore.getIsLoggedIn"
          @click="removeCurrent"
        >
          <ArrowRightOnRectangleIcon
            class="flex-shrink-0 w-6 h-6 mr-4 text-blueDark"
            aria-hidden="true"
          />
          Se Déconnecter
        </NuxtLink>
      </nav>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {
  ArrowRightOnRectangleIcon,
  NewspaperIcon,
  PlusCircleIcon,
  TagIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline'

import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { useUserStore } from '~~/store'

const userStore = useUserStore()
const { closeDrawer, removeCurrent } = userStore
const route = useRoute()

const navigation = [
  { name: 'Liste des articles', path: 'Admin-articles', icon: NewspaperIcon, current: true },
  { name: 'Créer un article', path: 'Admin-articles-create', icon: PlusCircleIcon, current: false },
  { name: 'Liste des catégories', path: 'Admin-categories', icon: TagIcon, current: false },
  { name: 'Créer une catégorie', path: 'Admin-categories-create', icon: PlusCircleIcon, current: false },
  // { name: 'Mon compte', path: '', icon: UserIcon, current: false },
]

const isCurrentPage = (path: string) => computed(() => route.name === path)
</script>
