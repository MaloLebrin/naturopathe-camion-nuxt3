<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="grid gap-4 px-6 md:grid-cols-2">
      <div class="space-y-8 rounded-lg shadow-md animate-fade-in-down">
        <BaseTitle
          title="La Naturopathie"
          class="flex flex-col items-center mb-8"
        >
          <img
            src="/static/motif.svg"
            class="h-16"
            alt="illutration de titre"
          >
        </BaseTitle>

        <div class="px-6 py-4 space-y-6">
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
              Pour moi, la naturopathie nous enseigne comment garder ou retrouver la santé. J'accompagne chacun dans votre individualité et votre globalité pour vous permettre de reprendre la main sur votre santé. J'aime dire que mon but est que mon métier disparaisse cela voudrait que la mission est accomplie.
            </p>
          </div>
          <div class="grid grid-cols-8">
            <ChatBubbleBottomCenterTextIcon class="text-gray-700 w-7 h-7" />
            <p class="col-span-7 text-justify text-gray-700">
              La santé se gagne chaque jour mais se perd aussi. Le vivant est conçu pour la vie, pour la santé, et dès lors que son environnement et son mode de vie sont déséquilibrés, sa santé s’altère. J’ai l’habitude de comparer la naturopathie à la permaculture, c’est pourquoi mon logo représente les 4 éléments qui sont au centre de ces deux disciplines. Il s’agit dans les deux cas de régénérer le terrain en rétablissant l’équilibre et l’harmonie , enlever les poisons, nourrir correctement, utiliser les éléments vitalogènes au service des processus naturels.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-6 rounded-lg shadow-md animate-fade-in-down">
        <BaseTitle
          title="Pourquoi consulter ?"
          class="flex flex-col items-center mb-8"
        >
          <img
            src="/static/motif.svg"
            class="h-16"
            alt="illutration de titre"
          >
        </BaseTitle>

        <ul class="flex flex-col px-4 py-4 space-y-2 lg:space-y-0 lg:grid lg:grid-cols-2">
          <li
            v-for="(pathology, index) in pathologies"
            :key="index"
            class="flex flex-col "
          >
            <div class="flex items-center lg:mt-4">
              <MinusIcon class="w-4 mr-2 text-gray-700" />
              <span class="font-semibold text-justify text-gray-700">{{ pathology.title }}&nbsp;:</span>
            </div>

            <ul class="list-disc ml-14">
              <li
                v-for="(symptom, index) in pathology.symptoms"
                :key="index"
              >
                {{ symptom }}
              </li>
            </ul>
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
  MinusIcon,
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Naturopathe-Camion | Présentation',
  meta: [
    { name: 'description', content: 'Pour améliorer votre qualité de vie, votre santé, vos performances physiques, pour des questions de gestion du poids, du stress, du sommeil, acné, problèmes articulaires, cardio-vasculaires, digestifs, la liste est longue !' },
    { name: 'keywords', content: 'naturopathie, qualité de vie, bien être, alimentation, gestion du poids, performances physiques' },
  ],
})

const pathologies = [
  {
    title: 'Troubles digestifs',
    symptoms: [
      'ballonnement',
      'diarrhée',
      'constipation',
      'dysbioses',
      'maladie de crohn',
      'reflux',
      'cancer',
      'ulcères',
      'SIBO',
      'maladie de foie',
      'candidose',
    ],
  },
  {
    title: 'Troubles nerveux / sommeil',
    symptoms: [
      'stress',
      'burnout',
      'fatigue',
      'trouble de l\'humeur',
      'trouble de l\'attention',
      'sclérose en plaque',
      'insomnies',
      'alzheimer',
      'parkinson',
    ],
  },
  {
    title: 'Troubles articulaires',
    symptoms: [
      'tendinites',
      'arthrite',
      'fibromyalgie',
      'fractures',
      'spondylarthrite ankylosante',
      'goutte',
      'douleurs chroniques',
      'arthrose',
      'ostéoporose',
    ],
  },
  {
    title: 'Troubles dermatologiques',
    symptoms: [
      'Eczema',
      'psoriasis',
      'acné',
      'allergies',
      'vitiligo',
      'mycoses cutanées',
      'zona',
      'peau sèche',
    ],
  },
  {
    title: 'Troubles hormonaux/gynéco',
    symptoms: [
      'SOPK',
      'SPM',
      'hypo/hyperthyroïdie',
      'trouble parathoïde',
      'diabètes type 1 / 2',
      'fertilité',
      'prostate',
      'ovaires',
      'endométriose',
      'trouble de l\'érection',
      'sexualité',
    ],
  },
  {
    title: 'Troubles Circulatoire',
    symptoms: [
      'hypertension artérielle',
      'anémie',
      'hypotension',
      'varices',
      'hémoroïdes',
      'troubles cardio-vasculaires',
      'lymphathiques',
      'oedème',
      'syndrôme de Reynaud',
    ],
  },
  {
    title: 'Troubles urinaires',
    symptoms: [
      'cystites récidivantes',
      'lithias rénales',
      'troubles rénaux',
    ],
  },
  {
    title: 'Troubles immunitaires',
    symptoms: [
      'pathologie auto-immunes',
      'infections à répétitions',
      'ORL',
    ],
  },
  {
    title: 'Performances physiques',
    symptoms: [
      'objectifs sportifs',
      'prise de masse musculaire',
      'perte de poids',
    ],
  },
  {
    title: 'Accompagnement de la femme',
    symptoms: [
      'puberté',
      'cycles',
      'grossesse',
      'post-partum',
      'ménopause',
    ],
  },
]
</script>
