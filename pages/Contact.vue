<template>
<div class="flex items-center justify-center w-full min-h-screen py-8 mb-32">
  <transition name="fade">
    <div class="relative px-8 py-6 space-y-12 rounded-lg md:shadow-md animate-fade-in-down">
      <h1 class="text-3xl font-bold text-center border-b-2 border-blueLight border-opacity-70">
        Prendre rendez-vous
      </h1>

      <BaseMessage>
        <div class="text-sm text-blue-700">
          <span>Vous souhaiez prendre rendez-vous&nbsp;?</span>
          <p>N'hésitez à m'envoyer un email ou appeler</p>
        </div>
      </BaseMessage>

      <ul class="flex flex-col space-y-4">
        <li>
          <a
            class="flex items-center space-x-4 text-center cursor-pointer"
            href="mailto:naturopathe.elisa@gmail.com"
          >
            <EnvelopeIcon class="mr-2 text-gray-700 w-7 h-7" />
            Email&nbsp;:&nbsp;<span class="font-bold">naturopathe.elisa@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-4 text-center cursor-pointer"
            href="tel:0782076454"
          >
            <PhoneArrowUpRightIcon class="mr-2 text-gray-700 w-7 h-7" />
            Téléphone&nbsp;:&nbsp;<span class="font-bold">0782076454</span>
          </a>
        </li>
        <li>
          <a
            class="flex items-center space-x-4 text-center cursor-pointer"
            href="https://www.google.com/maps/dir//La+Ruche+Docteur+l'abeille,+Rte+de+Mauvoisin+3,+1934+Le+Ch%C3%A2ble,+Suisse/@46.0806776,7.1776108,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x478ed1feda20b5ff:0x492bdc01479df8fb!2m2!1d7.212716!2d46.080683!3e0?hl=fr"
            target="_blank"
          >
            <MapPinIcon class="mr-2 text-gray-700 w-7 h-7" />
            Addresse&nbsp;:&nbsp;<span class="font-bold">Espace La Ruche Route de Mauvoisin 3 <br> 1934 Le Chable</span>
          </a>
        </li>
      </ul>

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

      <div class="flex items-center justify-center space-x-4">
        <BaseButton
          tag="a"
          href="mailto:naturopathe.elisa@gmail.com"
        >
          <span class="flex items-center animate-pulse hover:animate-bounce">
            <EnvelopeIcon class="w-6 h-6 mr-2 text-gray-700" />
            Envoyer un email
          </span>
        </BaseButton>
        <BaseButton
          tag="a"
          href="tel:00330782076454"
        >
          <span class="flex items-center animate-pulse hover:animate-bounce">
            <PhoneArrowUpRightIcon class="w-6 h-6 mr-2 text-gray-700" />
            Téléphoner
          </span>
        </BaseButton>
      </div>
    </div>
  </transition>
</div>
</template>

<script setup lang="ts">
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from '@heroicons/vue/24/outline'

useHead({
  title: 'Naturopathe-Camion | Contact',
  meta: [
    { name: 'description', content: 'Pour prendre rendez vous n\'hésitez pas à nous contacter' },
    { name: 'keywords', content: 'naturopathie, naturopathy, mindefullness, bien être, alimentation, gestion du poids' },
  ],
})
</script>
