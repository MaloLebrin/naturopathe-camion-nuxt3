<template>
<div
  id="menu-bottom"
  class="bottom-0 right-0 z-10 items-center hidden px-10 py-4 bg-white md:flex md:fixed h-30 rounded-tl-xl opacity-80"
>
  <NuxtLink
    v-for="(page, index) in menuItems"
    :id="page.name"
    :key="index"
    v-slot="{ isActive }"
    :to="page.path"
    class="flex flex-col items-center justify-center"
  >
    <div class="flex items-center justify-center">
      <TruckIcon
        v-if="index === 0"
        class="w-6 h-6 text-gray-700"
      />
      <div class="w-10 h-px bg-white border rounded" />
      <div class="cursor-pointer">
        <div
          class="border-2 rounded-full border-white-500 w-7 h-7"
          :class="[{ 'bg-gray-800 border-gray-800 animate-pulse': isActive }]"
        />
      </div>
      <div class="w-10 h-px bg-white border rounded" />
      <MapPinIcon
        v-if="index === menuItems.length - 1"
        class="w-6 h-6 mr-2 text-gray-700"
      />
    </div>
    <div class="flex py-4 text-sm font-semibold text-center text-gray-800 uppercase">
      {{ page.name }}
    </div>
  </NuxtLink>
</div>
<header class="shadow md:hidden">
  <Menu>
    <MenuButton class="flex px-2 py-2">
      <Bars3Icon class="h-6 mr" />
      Menu
    </MenuButton>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="flex flex-wrap items-center justify-center px-2 py-2"
        as="ul"
      >
        <MenuItem
          v-for="(page, index) in menuItems"
          :key="index"
          class="inline-flex items-center justify-center text-white "
          as="li"
        >
          <TruckIcon
            v-if="index === 0"
            class="w-6 h-6 text-gray-700"
          />
          <div class="w-10 h-px border rounded bg-blueDark border-blueDark" />
          <NuxtLink
            :to="page.path"
            class="flex items-center justify-center w-20 h-20 rounded-full bg-blueDark"
          >
            {{ page.name }}
          </NuxtLink>
          <div class="w-10 h-px border rounded bg-blueDark border-blueDark" />
          <MapPinIcon
            v-if="index === menuItems.length - 1"
            class="w-6 h-6 mr-2 text-gray-700"
          />
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</header>
</template>

<script setup lang="ts">
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

import {
  Bars3Icon,
  MapPinIcon,
  TruckIcon,
} from '@heroicons/vue/24/outline'
import { pages } from '../helpers/pages'

const { $isBlogEnable } = useNuxtApp()

const menuItems = pages.filter(item => {
  if ($isBlogEnable) {
    return !item.isAdmin
  }
  return !item.isAdmin && item.name !== 'Blog'
})
</script>
