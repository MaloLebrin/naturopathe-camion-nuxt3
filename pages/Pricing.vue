<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <div class="grid gap-4 px-6 md:grid-cols-2">
    <div class="relative space-y-8 rounded-lg shadow-md animate-fade-in-down">
      <h1 class="py-4 text-4xl font-bold text-center rounded-t-lg bg-blueLight bg-opacity-70">
        Consultation Naturopathie
      </h1>

      <ul class="flex flex-col px-6 space-y-4">
        <li class="flex flex-col space-x-4 space-y-2">
          <div class="flex items-center justify-start text-left">
            <img
              src="https://img.icons8.com/small/32/000000/spa-flower.png"
              alt="icon de fleur"
            >
            Première Consultation&nbsp;:&nbsp;<span class="font-bold">1h30 - 110&nbsp;chf</span>
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
            Consultation de suivi&nbsp;:&nbsp;<span class="font-bold"> 1h - 80&nbsp;chf</span>
          </div>
        </li>
      </ul>

      <ul class="flex flex-col px-6 space-y-2">
        <div class="flex items-center">
          <SwatchIcon class="w-6 h-6 mr-2 text-gray-700" />
          <label>Mes outils :</label>
        </div>
        <li class="flex items-center ml-8 space-x-1">
          <MinusIcon class="w-4 mr-2 text-gray-700" />
          <span>Iridologie : lecture des iris</span>
        </li>
        <li class="flex items-center ml-8 space-x-1">
          <MinusIcon class="w-4 mr-2 text-gray-700" />
          <span>Morpho-psycho-physiologie : lecture du corps</span>
        </li>
        <li class="flex items-center ml-8 space-x-1">
          <MinusIcon class="w-4 mr-2 text-gray-700" />
          <span>Questions clefs auxquelles vous êtes libre de répondre ou non.</span>
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
      <h1 class="py-4 text-4xl font-bold text-center rounded-t-lg bg-blueLight bg-opacity-70">
        Massages
      </h1>

      <ul class="flex flex-col space-y-6">
        <li class="flex flex-col ml-8 space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="mr-2 w-7 h-7" />
            <span class="font-bold">30 min - 50&nbsp;chf</span>
          </div>
          <p class="ml-4 text-gray-700">
            zones au choix (tête + mains + pieds OU dos/nuque/tête)
          </p>
        </li>
        <li class="flex flex-col ml-8 space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="mr-2 w-7 h-7" />
            <span class="font-bold">1h - 90&nbsp;chf</span>
          </div>
          <p class="ml-4 text-gray-700">
            tout le corps sauf ventre
          </p>
        </li>
        <li class="flex flex-col ml-8 space-x-1 space-y-2">
          <div class="flex justify-start text-left">
            <ClockIcon class="mr-2 w-7 h-7" />
            <span class="font-bold">1h30 - 110&nbsp;chf</span>
          </div>
          <p class="ml-4 text-gray-700">
            tout le corps, ventre compris
          </p>
        </li>
      </ul>

      <p class="px-4">
        Je  propose ce que j’appelle des massages naturopathiques signatures. C’est à dire que j’adapte chaque massage à vos besoins, votre énergie et vos envies du moment. Pression adoptée, zones où insister, à éviter, profondeurs, rythme, on en discute à chaque fois pour que vous bénéficiez du meilleur massage pour vous !
      </p>

      <ul class="flex flex-col px-4 space-y-4 text-sm">
        <label class="flex items-center"><BeakerIcon class="w-6 h-6 mr-2 text-gray-800" />Ingrédients utilisés :</label>
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
          J’adapte aussi la recette en fonction de la demande.
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
  SwatchIcon,
  PlusCircleIcon,
} from '@heroicons/vue/24/outline'

useHead({
  title: `Naturopathe-Camion | Tarifs`,
  meta: [
    { name: 'description', content: 'Consultez nos tarifs et choisissez votre formule adaptée à vos besoins' },
    { name: 'keywords', content: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids'},
  ],
})
</script>
