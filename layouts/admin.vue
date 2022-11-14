<template>
<div class="min-h-screen font-medium text-blueDark bg-white-break">
  <MenuAdmin />

  <div class="flex flex-col flex-1 md:pl-64">
    <div class="sticky top-0 z-10 flex flex-shrink-0 h-16 ">
      <button
        type="button"
        class="px-4 text-gray-500 border-r border-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        @click="$userStore().openDrawer()"
      >
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon
          class="w-6 h-6"
          aria-hidden="true"
        />
      </button>
    </div>

    <main class="px-4 py-2 md:px-6">
      <!-- <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          <h1 class="text-2xl font-semibold text-gray-900">
            Dashboard
          </h1>
        </div>
        <div class="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
          Replace with your content
          <div class="py-4">
            <div class="border-4 border-gray-200 border-dashed rounded-lg h-96" />
          </div>
          /End replace
        </div> -->
      <NuxtPage />
      <TheFooter class="md:hidden" />
      <ModalDeleteConfirm />
    </main>
  </div>
</div>
</template>

<script setup lang="ts">
import {
  Bars3Icon,
} from '@heroicons/vue/24/outline'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Sirin+Stencil&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  main {
    font-family: 'Rajdhani', sans-serif;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sirin Stencil';
  }
}
</style>
