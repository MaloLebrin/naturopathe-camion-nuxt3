<template>
<div class="px-12 py-6 space-y-8 md:space-y-28">
  <div class="flex items-center justify-center">
    <h1 class="text-3xl font-bold text-center">
      Hello Elisa, connecte toi pour accéder à l'admin
    </h1>
  </div>

  <div class="flex justify-center px-12 py-4 space-y-4 md:px-24 lg:px-32">
    <Form
      v-slot="{ errors, meta, isSubmitting }"
      :validation-schema="schema"
      class="max-w-5xl px-12 py-4 space-y-4 rounded-lg shadow-md md:space-y-8 md:px-24 lg:px-32 animate-fade-in-down"
    >
      <BaseInput
        v-model="form.email"
        label="Adresse email"
        name="email"
        type="email"
        autocomplete="email"
        required="required"
        :error="errors.email"
      />

      <BaseInput
        v-model="form.password"
        label="Mot de passe"
        name="password"
        type="password"
        autocomplete="current-password"
        required="required"
        :error="errors.password"
      />

      <div class="flex items-center justify-center">
        <BaseButton
          :disabled="!meta.valid || isSubmitting"
          type="submit"
          :loading="isSubmitting || $userStore().isLoading"
          @click.prevent="onSubmit"
        >
          Connexion
        </BaseButton>
      </div>
    </Form>
  </div>
</div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import type { SchemaOf } from 'yup'
import { object, string } from 'yup'
import { useUserStore } from '~~/store/userStore'
import type { User } from '~~/types'

definePageMeta({
  layout: 'admin',
  isAuth: true,
})

const { $api } = useNuxtApp()
const { IncLoading, DecLoading, setCurrent } = useUserStore()
const router = useRouter()
// console.log(router.getRoutes(), 'router.getRoutes()')

interface FormShape {
  email: string
  password: string
}

const schema: SchemaOf<FormShape> = object({
  email: string().email('L\'adresse email n\'est pas valide').required('L\'adresse email est requise'),
  password: string().required('Le mot de passe est requis'),
})

const form = reactive<FormShape>({
  email: '',
  password: '',
})

async function onSubmit() {
  IncLoading()
  const res = await $api().post<User>('login', form as unknown as User)
  setCurrent(res)
  router.push({ name: 'Admin-articles' })
  DecLoading()
}

useHead({
  title: `Naturopathe-Camion | CMS Articles`,
  meta: [
    { name: 'description', content: 'Administration de gestion des articles' },
  ],
})
</script>
