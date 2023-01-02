<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="relative max-w-4xl px-6 py-6 space-y-10 rounded-lg shadow-md animate-fade-in-down">
      <div class="grid gap-4 space-x-8 md:grid-cols-3">
        <img
          class="w-48 h-48 mx-auto rounded-full"
          src="/static/elisa-picture.jpg"
          alt="Elisa Neaud"
        >
        <div class="flex flex-col items-start justify-center space-y-4 md:col-span-2">
          <div class="flex items-center">
            <UserCircleIcon class="w-6 h-6 mr-2 text-gray-700" />
            <h2 class="px-2 py-4 text-4xl font-bold text-center rounded bg-blueLight bg-opacity-70">
              Je me présente:
              <span class="text-blue-800">Elisa</span>
            </h2>
          </div>
          <div class="flex items-center space-x-4">
            <AcademicCapIcon class="h-6 text-gray-700" />
            <span class="text-center text-gray-700">Naturopathe masseuse diplômée à ISUPNAT certifiée FENA</span>
          </div>
          <div class="flex items-center space-x-4">
            <CogIcon class="h-6 text-gray-700 animate-spin" />
            <span class="text-center text-gray-700">En cours d'équivalence pour obtenir le diplôme fédéral Suisse</span>
          </div>
        </div>
      </div>

      <p class="text-justify text-gray-700">
        J’ai été prestataire masseuse au Spa Nordique du Domaine du Hirtz (France-Alsace) durant l’année 2021-2022 avant de m’installer à Verbier pour exercer.
        J’ai moi-même eu un parcours chaotique avec la santé, c’est ce qui m’a mise sur le chemin de la naturopathie. Troubles digestifs handicapants, dysbiose, atteinte de la thyroïde, prise de poids, troubles du cycle menstruel (absence et ovaires polykystiques), acné, fatigue, douleurs. Je suis passée par tout ça, et aujourd’hui ce sont des simples souvenirs, derrière moi.
      </p>

      <div class="grid gap-4 md:grid-cols-3">
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
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {
  AcademicCapIcon,
  CogIcon,
  CubeIcon,
  TruckIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Naturopathe-Camion | A propos',
  meta: [
    { name: 'description', content: 'Naturopathe formée à ISUPNAT certifiée FENA, Masseuse bien-être' },
    { name: 'keywords', content: 'naturopathie, naturopathy, ISUPNAT certifiée, FENA, Masseuse, bien-être' },
  ],
})
</script>
