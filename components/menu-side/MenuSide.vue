<template>
<header class="fixed flex-col items-center justify-around hidden max-h-screen min-h-screen px-10 py-20 space-y-4 shadow md:flex w-80 text-brown">
  <div class="flex flex-col space-y-8">
    <h2 class="text-2xl font-bold text-center">
      Elisa Neaud
    </h2>
    <img
      class="object-contain h-40"
      src="/static/totem_bleu.png"
      alt="logo"
    >
    <h1 class="text-3xl font-bold text-center uppercase">
      Naturopathe
    </h1>
    <h2 class="text-xl font-bold text-center uppercase">
      Masseuse bien être
    </h2>
    <div class="flex items-center justify-center space-x-4">
      <PhoneArrowUpRightIcon class="w-5 h-5 text-gray-800 animate-bounce" />
      <a
        class="font-medium text-center cursor-pointer"
        href="tel:00330748104273"
      >+33748104273</a>
    </div>
    <div class="flex items-center justify-center space-x-4">
      <EnvelopeIcon class="w-5 h-5 text-gray-800 animate-bounce" />
      <a
        class="font-medium text-center cursor-pointer"
        href="mailto:naturopathe.elisa@gmail.com"
      >naturopathe.elisa@gmail.com</a>
    </div>
    <div
      v-if="$userStore().getCurrentUserToken && $userStore().getCurrent && $userStore().isLoggedIn"
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
      class="object-cover mx-auto rounded w-30 h-30"
      src="/static/truck.jpg"
      alt="camion"
    >
  </div>
  <div class="flex justify-center space-x-6">
    <a
      class="cursor-pointer"
      href="https://www.facebook.com/elisanaturopathecamion"
      target="_blank"
    >
      <img
        class="w-10 h-10"
        src="/static/facebook.svg"
        alt="icon facebook"
      >
    </a>
    <a
      class="cursor-pointer"
      href="https://www.instagram.com/elisa_naturo/"
      target="_blank"
    >
      <img
        class="w-10 h-10"
        src="/static/instagram.svg"
        alt="icon instagram"
      >
    </a>
  </div>
</header>
</template>

<script setup lang="ts">
import {
  PhoneArrowUpRightIcon,
  EnvelopeIcon
} from '@heroicons/vue/24/outline'
</script>
