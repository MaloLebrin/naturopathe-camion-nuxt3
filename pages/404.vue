<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="relative px-8 py-6 space-y-12 rounded-lg shadow-md animate-fade-in-down">
      <h1 class="text-3xl font-bold text-center border-b-2 border-red-400">
        🙈Oups vous vous êtes trompé de page&nbsp;!
      </h1>
      <div class="flex items-center justify-center space-x-4">
        <BaseButton
          tag="nuxt-link"
          to="/"
        >
          <span class="flex items-center animate-pulse hover:animate-bounce">
            <HomeIcon class="w-6 h-6 mr-2 text-gray-700" />
            Retourner à l'accueil
          </span>
        </BaseButton>
      </div>
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {
  HomeIcon,
} from '@heroicons/vue/24/outline'
</script>
