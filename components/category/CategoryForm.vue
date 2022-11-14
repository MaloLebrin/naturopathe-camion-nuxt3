<template>
<Form
  v-slot="{ errors, meta, values }"
  :validation-schema="schema"
  :initial-values="initialValue"
  class="grid grid-cols-1 gap-4 md:grid-cols-2"
  @submit="onSubmit"
>
  <BaseInput
    v-model="values.name"
    label="Nom de la catégorie"
    class="col-span-2"
    name="name"
    :error="errors.name"
    is-required
    aria-autocomplete="none"
    autocomplete="off"
  />

  <BaseSelect
    label="Sélectionner une couleur"
    name="color"
    placeholder="Choisissez une couleur"
    :display-value="values.color"
    is-required
    :error="errors.color"
  >
    <CategoryColorOption
      v-for="(value, name) in appColors"
      :key="name"
      :value="name"
      :label="name"
      :name="name"
      :color="customColors.includes(name) ? name : undefined"
    />
  </BaseSelect>

  <div class="flex items-center justify-center pt-5 md:col-span-2">
    <div class="inline-flex">
      <BaseButton
        :disabled="!meta.valid"
        type="submit"
        :loading="$userStore().isLoading"
      >
        Enregistrer
      </BaseButton>
    </div>
  </div>
</Form>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import { object, string } from 'yup'
import type { InferType } from 'yup'
import { useUserStore } from '~~/store'
import type { Category } from '~~/types'
import { appColors, customColors } from '~~/helpers/colors'

const props = defineProps<Props>()

interface IForm extends InferType<typeof schema> {}

interface Props {
  category?: Category
}

const userStore = useUserStore()
const { IncLoading, DecLoading } = userStore
const { postOne, patchOne } = useCategory()
const router = useRouter()

const schema = object({
  name: string().required('Le nom est requis'),
  color: string().required('La couleur de la catégorie est requise'),
})

const initialValue = {
  name: props.category?.name || '',
  color: props.category?.color || '',
}

async function onSubmit(form: IForm) {
  IncLoading()
  try {
    const payload = {
      ...form,
    }
    if (props.category) {
      await patchOne(props.category.id, payload)
    } else {
      await postOne(payload)
    }
    router.push({ name: 'Admin-categories' })
  } catch (error) {
    console.error(error, 'erorr')
  }
  DecLoading()
}
</script>
