<template>
<Form
  v-slot="{ errors, meta, values }"
  :validation-schema="schema"
  :initial-values="initialValue"
  class="grid grid-cols-1 gap-4 md:grid-cols-2"
  @submit="onSubmit"
>
  <BaseRadio
    id="isNotInstaPost"
    :value="false"
    name="isInstaPost"
  >
    Cet article sera un <span class="font-bold">Article Web</span>
  </BaseRadio>
  <BaseRadio
    id="isInstaPost"
    :value="true"
    name="isInstaPost"
  >
    Cet article sera un <span class="font-bold">Post instagram</span>
  </BaseRadio>

  <BaseMessage
    type="warning"
    class="col-span-2"
  >
    <p>Attention si vous sélectionnez créer un post instagram. Celui-ci ne s'affichera pas de la même manière.</p>
  </BaseMessage>

  <BaseInput
    v-model="values.title"
    label="Titre de l'article"
    class="col-span-2"
    name="title"
    :error="errors.title"
    is-required
    aria-autocomplete="none"
    autocomplete="off"
  />

  <BaseTextarea
    v-model="values.description"
    class="col-span-2"
    label="Description de l'article"
    is-required
    name="description"
    :error="errors.description"
  />

  <template v-if="$blogStore().getCategoriesArray.length > 0">
    <BaseSelect
      label="Sélectionner une catégorie"
      name="category"
      placeholder="Choisissez une catégorie"
      :display-value="$blogStore().getOneCategory(values.category)?.name"
      is-required
      :error="errors.category"
    >
      <BaseOption
        v-for="category in $blogStore().getCategoriesArray"
        :key="category.id"
        :value="category.id"
        :name="category.name"
      />
    </BaseSelect>
  </template>

  <BaseMessage
    v-else
    type="danger"
  >
    <p>Vous devez d'abord créer une catégorie avant de pouvoir créer un article</p>
  </BaseMessage>

  <BaseTextarea
    v-model="values.content"
    class="col-span-2"
    label="Contenu de l'article"
    name="content"
    :error="errors.content"
    :is-required="!values.isInstaPost"
  />

  <BaseMessage
    v-if="values.isInstaPost"
    type="warning"
    class="col-span-2"
  >
    <p>Attention de bien uploader les images dans l'ordre précis que où vous souhaitez les voir apparaitre</p>
  </BaseMessage>

  <template v-if="values.isInstaPost">
    <FieldArray
      key-path="id"
      name="files"
    >
      <div
        v-for="(_field, index) in maxPictures"
        :key="index"
      >
        <BasePictureInput
          v-if="(values?.files && values?.files[index - 1]) || index === 0"
          :label="`Image du Post ${index + 1}`"
          :name="`files[${index}]`"
          :initial-url="values?.files && values?.files[index] ? values?.files[index]?.url : null"
          :disabled="article !== null && article !== undefined"
        />
      </div>
    </FieldArray>

    <BaseURLInput
      label="Lien Instagram du post"
      name="instaUrl"
    />
    <BaseURLInput
      label="Lien Facebook du post"
      name="facebookUrl"
    />
  </template>
  <template v-else>
    <FieldArray
        key-path="id"
        name="files"
      >
  
    <BasePictureInput
      label="Image de l'article"
      name="files[0]"
      wrapper-classes="col-span-1 md:col-span-2"
      :initial-url="values?.files && values.files[0] ? values.files[0]?.url : null"
      class="col-span-2"
      is-required
    />
    </FieldArray>
  </template>

  <div class="flex-col items-center justify-center pt-5 md:col-span-2">
    <p>valid: {{ meta.valid }}</p>
    <p>dirty: {{ meta.dirty }}</p>
    <p>error: {{ errors }}</p>
    <p>value: {{ values.files }}</p>
  </div>

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
import { FieldArray, Form } from 'vee-validate'
import type { InferType } from 'yup'
import { array, boolean, number, object, string } from 'yup'
import { useUserStore } from '~~/store'
import type { Article, ArticlePayload } from '~~/types'

interface IForm extends InferType<typeof schema> {}

interface Props {
  article?: Article
  isDebug?: boolean
}

const props = defineProps<Props>()

const userStore = useUserStore()
const { IncLoading, DecLoading } = userStore
const { postMany } = useFile()
const { postOne, fetchOne, patchOne } = useArticle()
const router = useRouter()

const maxPictures = 8

const schema = object({
  title: string().required('Le titre est requis'),
  content: string().when('isInstaPost', {
    is: false,
    then: string().required('Le contenu de l\'article est requis'),
  }),
  description: string().required('La description de l\'article est requise'),
  instaUrl: string().url('Veuillez rentrer une url valide').nullable(),
  facebookUrl: string().url('Veuillez rentrer une url valide').nullable(),
  category: number().nullable().required('La catégorie de l\'article est requise'),
  isInstaPost: boolean().required('Veuillez indiquer si c\'est un post Instagram'),
  files: array().of(string()).required('Votre logotype est requis.').min(1, 'Votre logotype est requis'),
})

const initialValue = {
  title: props.article?.title || '',
  content: props.article?.content || '',
  description: props.article?.description || '',
  instaUrl: props.article?.instaUrl || null,
  facebookUrl: props.article?.facebookUrl || null,
  category: props.article?.categoryId || null,
  isInstaPost: props.article?.isInstaPost || false,
  files: props.article?.files || [],
}

async function onSubmit(form: IForm) {
  IncLoading()
  try {
    let files: File[] | null = null
    if (form.isInstaPost) {
      files = form?.files.filter(file => file).map(file => file[0])
    } else {
      files = form?.files.filter(file => file)
    }
    const payload: ArticlePayload = {
      ...form,
      categoryId: form.category,
    }
    delete payload?.files
    if (props.article) {
      const articleToPatch = {
        ...props.article,
        ...form,
        files: props.article?.files,
        categoryId: form.category,
      }
      await patchOne(props.article.id, articleToPatch)
      router.push({ name: 'Article-id', params: { id: props.article.id } })
    } else {
      const article = await postOne(payload)
      if (article && !props.article) {
        const formData = new FormData()
        files?.forEach(file => formData.append('files', file))
        await postMany(formData, article.id)
        await fetchOne(article.id)
      }
      router.push({ name: 'Article-id', params: { id: article.id } })
    }
  } catch (error) {
    console.error(error, 'erorr')
  }
  DecLoading()
}
</script>
