<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="grid gap-4 px-6 md:grid-cols-2">
      <div class="space-y-8 rounded-lg shadow-md animate-fade-in-down">
        <h1 class="py-4 text-5xl font-bold text-center rounded-t-lg bg-blueLight bg-opacity-70">
          La Naturopathie
        </h1>

        <div class="px-6 py-4 space-y-2">
          <div class="grid grid-cols-8">
            <ChatBubbleBottomCenterTextIcon class="text-gray-700 w-7 h-7" />
            <p class="col-span-7 text-justify text-gray-700">
              Selon l’OMS, elle est  "un ensemble de méthodes de soins visant à renforcer les défenses de l'organisme par des moyens considérés comme naturels et biologiques". La santé étant un "état complet de bien-être  physique, mental et social" et non uniquement l’absence de maladie.
            </p>
          </div>
          <div class="grid grid-cols-8">
            <ChatBubbleBottomCenterTextIcon class="text-gray-700 w-7 h-7" />
            <p class="col-span-7 text-justify text-gray-700">
              "Art de faire réagir la force vitale pour qu'un sujet retrouve le moyen de s'auto-guérir"
              <span class="text-black">Alain Rousseaux</span>
            </p>
          </div>
          <div class="grid grid-cols-8">
            <ChatBubbleBottomCenterTextIcon class="text-gray-700 w-7 h-7" />
            <p class="col-span-7 text-justify text-gray-700">
              Pour moi, le naturopathe est un éducateur de santé qui accompagne chacun de façon individualisée et globale pour reprendre la main sur sa santé. J’aime dire que mon but est que mon métier disparaisse. Cela signifierait que chacun est libre et autonome vis-à-vis de sa santé et son bien-être.
            </p>
          </div>
          <div class="grid grid-cols-8">
            <ChatBubbleBottomCenterTextIcon class="text-gray-700 w-7 h-7" />
            <p class="col-span-7 text-justify text-gray-700">
              La santé se gagne chaque jour mais se perd aussi. Le vivant est conçu pour la vie, pour la santé, et dès lors que son environnement et son mode de vie sont déséquilibrés, sa santé s’altère. J’ai l’habitude de comparer la naturopathie à la permaculture, c’est pourquoi mon logo représente les 4 éléments qui sont au centre de ces deux disciplines. Il s’agit dans les deux cas de régénérer le terrain en rétablissant l’équilibre et l’harmonie , enlever les poisons, nourrir correctement, utiliser les éléments vitalogènes au service des processus naturels.
            </p>
          </div>
          <div class="grid grid-cols-8">
            <img
              class="mr-2 text-gray-700"
              src="https://img.icons8.com/small/32/000000/question-mark.png"
              alt="interrogation icon"
            >
            <div class="col-span-7 space-y-2">
              <span class="text-lg font-semibold">Pourquoi consulter ?</span>
              <p class="text-justify text-gray-700">
                Pour améliorer votre qualité de vie, votre santé, vos performances physiques, pour des questions de gestion du poids, du stress, du sommeil, acné, problèmes articulaires, cardio-vasculaires, digestifs, la liste est longue ! Je vous accueille et vous accompagne vous (pas votre maladie ou votre organe malade) et vos besoins, votre constitution, votre rythme de vie, votre budget, vos valeurs, pour trouver la voie de transformation qui vous conviendra à vous personnellement. J’interviens aussi en accompagnement d’un traitement de maladie (chimiothérapie, traitements au long cours), ou même dans vos désirs de conception, grossesse, après grossesse. J’accueille aussi les enfants, adolescents.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 rounded-lg shadow-md animate-fade-in-down">
        <h1 class="py-4 text-5xl font-bold text-center rounded-t-lg bg-blueLight bg-opacity-70">
          Le Concept
        </h1>
        <div class="px-6 py-4 space-y-4">
          <div class="flex items-center mb-2">
            <img
              class="object-contain w-10 h-10 mr-6"
              src="/static/Inspire-Studio.png"
              alt="logo"
            >
            <span class="text-lg font-semibold">Retrouvez moi en ce moment chez Inspire Studio Verbier en tant que masseuse</span>
          </div>
        </div>

        <div class="px-6 py-4 space-y-4">
          <div class="flex items-center mb-2">
            <TruckIcon class="w-6 h-6 mr-2 text-gray-700" />
            <span class="text-lg font-semibold">Lieu des consultations :</span>
          </div>
          <p class="text-justify text-gray-700">
            Je propose aussi les consultations et massages à domicile, et bientôt dans le camion que j'ai soigneusement aménagé.
          </p>
        </div>

        <ul class="flex flex-col px-6 py-4 space-y-2 bg-brown-light bg-opacity-20">
          <div class="flex items-center">
            <MapPinIcon class="w-6 h-6 mr-2 text-gray-700" />
            <label>Les communes où je me rends :</label>
          </div>
          <li
            v-for="(city, index) in cityList"
            :key="index"
            class="flex items-center ml-8 space-x-1"
          >
            <MinusIcon class="w-4 mr-2 text-gray-700" />
            <span class="text-justify text-gray-700">{{ city.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {
  ChatBubbleBottomCenterTextIcon,
  MapPinIcon,
  MinusIcon,
  TruckIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: `Naturopathe-Camion | Présentation`,
  meta: [
    { name: 'description', content: 'Pour améliorer votre qualité de vie, votre santé, vos performances physiques, pour des questions de gestion du poids, du stress, du sommeil, acné, problèmes articulaires, cardio-vasculaires, digestifs, la liste est longue !' },
    { name: 'keywords', content: 'naturopathie, qualité de vie, bien être, alimentation, gestion du poids, performances physiques' },
  ],
})

const cityList = [
  {
    name: 'Verbier',
  },
  {
    name: 'Le Chable',
  },
  {
    name: 'Vollège',
  },
  {
    name: 'Mauvoisin',
  },
  {
    name: 'Sembrancher',
  },
  {
    name: 'Orsière',
  },
  {
    name: 'Martigny',
  },
  {
    name: 'Bovernier',
  },
]
</script>
