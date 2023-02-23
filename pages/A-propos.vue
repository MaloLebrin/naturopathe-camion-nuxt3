<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="relative flex flex-col items-center justify-center max-w-4xl px-6 py-6 space-y-10 rounded-lg shadow-md animate-fade-in-down">
      <img
        src="/static/motif.svg"
        class="h-12"
        alt="illutration de titre"
      >

      <div class="grid gap-4 space-x-8 md:grid-cols-3">
        <img
          class="w-48 h-48 mx-auto rounded-full"
          src="/static/elisa-picture.jpg"
          alt="Elisa Neaud"
        >
        <div class="flex flex-col items-start justify-center space-y-4 md:col-span-2">
          <div class="flex items-center">
            <UserCircleIcon class="w-6 h-6 mr-2 text-gray-700" />
            <BaseTitle
              title="Je me présente Elisa"
              class="lg:mb-2"
            />
            <!-- Je me présente:
            <span class="text-blue-800">Elisa</span>
            </h2> -->
          </div>
          <div class="flex items-center space-x-4">
            <AcademicCapIcon class="h-6 text-gray-700" />
            <span class="text-center text-gray-700">Praticienne en naturopathie masseuse diplômée à ISUPNAT certifiée FENA</span>
          </div>
          <div class="flex items-center space-x-4">
            <CogIcon class="h-6 text-gray-700 animate-spin" />
            <span class="text-center text-gray-700">En cours d'équivalence à l'EPSN et reconnaissance ASCA</span>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-10 justify-items-center md:grid-cols-2">
        <ul class="space-x-10 space-y-2 list-disc">
          <span>🥇 Expérience&nbsp;:</span>
          <li
            v-for="(exp, index) in experiences"
            :key="index"
          >
            {{ exp }}
          </li>
        </ul>

        <ul class="space-x-10 space-y-2 list-disc">
          <div class="flex items-center space-x-2">
            <XCircleIcon class="h-6 text-gray-700" />
            <span>
              Mon parcours santé&nbsp;:
            </span>
          </div>
          <li
            v-for="(item, index) in healthJourney"
            :key="index"
          >
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- <div class="grid gap-4 md:grid-cols-3">
        <div class="flex items-center md:col-span-2">
          <TruckIcon class="w-6 h-6 mr-2 text-gray-700" />
          <h2 class="px-2 py-4 text-4xl font-bold text-center rounded bg-blueLight bg-opacity-70">
            <span>Mon partenaire:
              <span class="text-blue-800">Mon camion</span>
            </span>
          </h2>
        </div>
        <img
          class="object-cover w-48 h-48 mx-auto rounded"
          src="/static/truck.jpg"
          alt="camion"
        >
      </div>

      <p class="text-justify text-gray-700">
        J’ai nommé mon camion Pythagore, à l’instar de ma promotion auprès de laquelle j’ai suivi mon cursus de formation en Naturopathie. Pour continuer à faire des liens, Pythagore est le premier à introduire la notion de vitalisme cher à la naturopathie et faire le lien entre les tempéraments et les 4 éléments.
      </p>
      <p class="text-justify text-gray-700">
        Je l'ai soigneusement aménagé et équipé du chauffage ainsi que d’une cuve de filtration d’eau, un évier pour se laver les mains, un rideau cabine pour se changer pour les massages.
      </p>

      <div class="flex items-center justify-center">
        <BaseButton
          tag="nuxt-link"
          to="/Naturopathy"
          class="flex items-center"
        >
          <CubeIcon class="w-6 h-6 mr-2 text-black animate-spin" />
          En savoir plus
        </BaseButton>
      </div>
    </div> -->
      <img
        src="/static/motif.svg"
        class="h-12"
        alt="illutration de titre"
      >
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  CogIcon,
  // CubeIcon,
  // TruckIcon,
  UserCircleIcon,
  XCircleIcon,
} from '@heroicons/vue/24/outline'

const experiences = [
  'Masseuse à Inspire Verbier',
  'Masseuse à Expérimental Chalet',
  'Praticienne en naturopathie',
]

const healthJourney = [
  'Troubles digestifs',
  'dysbiose',
  'hypothyroïdie',
  'prise de poids',
  'absence de règles',
  'acné',
  'fatigue',
  'douleurs articulaires',
  'cystites et mycoses à répétition',
]

useHead({
  title: 'Naturopathe-Camion | A propos',
  meta: [
    { name: 'description', content: 'Naturopathe formée à ISUPNAT certifiée FENA, Masseuse bien-être' },
    { name: 'keywords', content: 'naturopathie, naturopathy, ISUPNAT certifiée, FENA, Masseuse, bien-être' },
  ],
})
</script>
