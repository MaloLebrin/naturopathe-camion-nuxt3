<template>
<header class="fixed flex-col items-center hidden max-h-screen min-h-screen px-10 py-4 shadow md:flex w-80 text-brown">
  <div class="flex flex-col space-y-2 lg:space-y-4">
    <img
      class="object-contain h-28"
      src="/static/totem_bleu.png"
      alt="logo"
    >

    <h1 class="text-xl font-bold text-center uppercase lg:text-2xl">
      Thérapeute <br> en <br> Naturopathie
    </h1>
    <h2 class="text-xl font-bold text-center uppercase">
      Masseuse
    </h2>

    <ul class="ml-4 overflow-y-auto list-disc lg:space-y-1">
      <li
        v-for="key in infosKeysArray"
        :key="key"
        class="text-sm capitalize"
      >
        {{ key }}
      </li>
    </ul>

    <div
      v-if="userStore.getCurrentUserToken && userStore.getCurrent && userStore.isLoggedIn"
      class="flex items-center justify-center space-x-4"
    >
      <BaseButton
        tag="nuxt-link"
        :to="{
          name: 'Admin',
        }"
      >
        Admin Dashboard
      </BaseButton>
    </div>

    <img
      class="hidden object-cover w-24 h-24 mx-auto rounded xl:block"
      src="/static/truck.jpg"
      alt="camion"
    >
  </div>
</header>
</template>

<script setup lang="ts">
import { useUserStore } from '~~/store'

const userStore = useUserStore()

const infosKeysArray = [
  'nutrition',
  'dietétique',
  'phytothérapie',
  'hydrologie',
  'massage',
  'ventouses',
  'gestion du stress',
  'équilibre psycho-émotionnel',
  'techniques respiratoires',
  'iridologie',
  'bilan morphologique',
  'thérapie holistique',
  'oligothérapie',
  'micronutrition',
]
</script>
