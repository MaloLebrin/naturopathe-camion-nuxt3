<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <div class="grid gap-4 px-6 md:grid-cols-2">
    <div class="relative space-y-8 rounded-lg shadow-md animate-fade-in-down">
      <BaseTitle
        title="Consultation Naturopathie"
        class="flex flex-col items-center mb-8"
      >
        <img
          src="/static/feuille.svg"
          class="h-10"
          alt="illutration de titre"
        >
      </BaseTitle>

      <ul class="flex flex-col px-6 space-y-4">
        <li class="flex flex-col space-x-4 space-y-2">
          <div class="flex items-center justify-start text-left">
            <img
              src="https://img.icons8.com/small/32/000000/spa-flower.png"
              alt="icon de fleur"
            >
            Consultation 60min:&nbsp;<span class="font-bold">115&nbsp;chf</span>
          </div>
          <p class="text-gray-700">
            Autour de vous et et vos habitudes, nous dressons ensemble un bilan de vitalité pour déterminer vos besoins et établir votre cure ensemble.
          </p>
        </li>
        <li class="flex items-center space-x-4">
          <div class="flex items-center justify-start text-left">
            <img
              src="https://img.icons8.com/small/32/000000/spa-flower.png"
              alt="icon de fleur"
            >
            Accompagnement et coaching sur 3 mois&nbsp;:&nbsp;<span class="font-bold">500&nbsp;chf</span>
          </div>
        </li>
      </ul>

      <ul class="flex flex-col px-6 space-y-2">
        <div class="flex items-center">
          <SwatchIcon class="w-6 h-6 mr-2 text-gray-700" />
          <label>Mes outils :</label>
        </div>
        <li
          v-for="(tool, index) in tools"
          :key="index"
          class="flex items-center ml-8 space-x-1"
        >
          <MinusIcon class="w-4 mr-2 text-gray-700" />
          <span>{{ tool }}</span>
        </li>
      </ul>

      <p class="px-6 text-gray-700">
        L’objectif est de vous connaître au mieux pour bien identifier vos besoins et vous faire une proposition sur mesure. Je vais chercher à évaluer votre énergie vitale.
      </p>

      <div class="flex items-center justify-center">
        <BaseButton
          tag="nuxt-link"
          to="/Contact"
          class="flex items-center"
        >
          <CalendarDaysIcon class="w-6 h-6 mr-2 text-black" />
          Prendre RDV
        </BaseButton>
      </div>
    </div>

    <div class="relative space-y-8 rounded-lg shadow-md animate-fade-in-down">
      <BaseTitle
        title="Soins-Massages"
        class="flex flex-col items-center mb-8"
      >
        <img
          src="/static/feuille.svg"
          class="h-10"
          alt="illutration de titre"
        >
      </BaseTitle>

      <ul class="flex flex-col ml-8 space-x-3 space-y-6">
        <h2 class="text-lg font-semibold">
          Massages naturopathiques individualisés&nbsp;:
        </h2>
        <li class="flex flex-col space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="w-6 h-6 mr-2" />
            <span class="font-bold">30 min - 60&nbsp;chf</span>
          </div>
          <p class="ml-4 text-gray-700">
            zones au choix
          </p>
        </li>
        <li class="flex flex-col space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="w-6 h-6 mr-2" />
            <span class="font-bold">1h - 110&nbsp;chf</span>
          </div>
          <!-- <p class="ml-4 text-gray-700">
            tout le corps sauf ventre
          </p> -->
        </li>
        <li class="flex flex-col space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="w-6 h-6 mr-2" />
            <span class="font-bold">1h30 - 165&nbsp;chf</span>
          </div>
          <!-- <p class="ml-4 text-gray-700">
            tout le corps, ventre compris
          </p> -->
        </li>
      </ul>

      <ul class="flex flex-col ml-8 space-x-3 space-y-6">
        <h2 class="text-lg font-semibold">
          Soins ventouses&nbsp;:
        </h2>
        <li class="flex flex-col space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="w-6 h-6 mr-2" />
            <span class="font-bold">30 min - 60&nbsp;chf</span>
          </div>
          <p class="ml-4 text-gray-700">
            Action antalgique / équilibrante - anti inflammatoire - renfore l'immunité - action rénégérante - dépurative
          </p>
          <ul>
            Indications: douleurs et fatigue musculaires / articulaires, douleurs et fatigue musculaire articualire. Cellulite, anémie, troubles digestifs, gynécologiques, dermatologiques
          </ul>
        </li>
      </ul>

      <!-- <p class="px-4">
        Je  propose ce que j’appelle des massages naturopathiques signatures. C’est à dire que j’adapte chaque massage à vos besoins, votre énergie et vos envies du moment. Pression adoptée, zones où insister, à éviter, profondeurs, rythme, on en discute à chaque fois pour que vous bénéficiez du meilleur massage pour vous !
      </p> -->

      <ul class="flex flex-col px-4 ml-6 space-y-4 text-sm">
        <label class="flex items-center"><BeakerIcon class="w-6 h-6 mr-2 text-gray-800" />Produits utilisés :</label>
        <li class="flex items-center ml-8 space-x-1">
          <PlusCircleIcon class="w-5 h-5" />
          <span>macérats huileux</span>
        </li>
        <li class="flex items-center ml-8 space-x-1">
          <PlusCircleIcon class="w-5 h-5" />
          <span>huiles de première pression à froid</span>
        </li>
        <li class="flex items-center ml-8 space-x-1">
          <PlusCircleIcon class="w-5 h-5" />
          <span>huiles essentielles</span>
        </li>
        <p class="text-gray-500">
          J’adapte aussi le mélange en fonction de la demande.
        </p>
      </ul>

      <div class="flex items-center justify-center pb-4">
        <BaseButton
          tag="nuxt-link"
          to="/Contact"
          class="flex items-center"
        >
          <CalendarDaysIcon class="w-6 h-6 mr-2 text-black" />
          Prendre RDV
        </BaseButton>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import {
  BeakerIcon,
  CalendarDaysIcon,
  ClockIcon,
  MinusIcon,
  PlusCircleIcon,
  SwatchIcon,
} from '@heroicons/vue/24/outline'

const tools = [
  'Entretien, questions, discussion',
  'Iridologie : lecture des iris',
  'Morpho-psycho-physiologie : lecture du corps',
  'Tests cliniques si besoin',
  'Fiche de recommmandation détaillée de avec votre programme établi ensemble',
]

useHead({
  title: 'Naturopathe-Camion | Tarifs',
  meta: [
    { name: 'description', content: 'Consultez nos tarifs et choisissez votre formule adaptée à vos besoins' },
    { name: 'keywords', content: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids' },
  ],
})
</script>
