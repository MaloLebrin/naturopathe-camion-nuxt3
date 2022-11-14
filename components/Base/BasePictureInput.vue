<template>
<Field
  v-slot="{ handleChange, handleBlur, resetField }"
  as="div"
  :name="name"
  :class="`flex flex-col w-full space-y-4 ${wrapperClasses}`"
>
  <label
    class="block text-sm font-medium text-left text-gray-700 sm:mt-px sm:pt-2"
    :for="name"
  >
    {{ label }}<span v-if="isRequired">*</span>
  </label>
  <!-- Button with event listener to trigger file upload window when clicking the wrapper -->
  <button
    v-if="!imageUrl"
    type="button"
    class="flex flex-col items-center justify-start w-full px-32 py-12 mt-12 border-2 border-gray-600 border-dashed cursor-pointer hover:bg-gray-100 hover:border-gray-800 focus:outline-none focus:border-pink-400"
    @click.stop="onWrapperClick"
  >
    <!-- Note the `sr-only` class, all styling is done on the wrapper button -->
    <input
      :id="name"
      ref="fileInput"
      :disabled="disabled"
      :aria-disabled="disabled"
      :name="name"
      type="file"
      class="sr-only"
      accept="image/*"
      @change="onChange(handleChange)"
      @blur="handleBlur"
    >
    <div class="flex flex-col items-center space-y-6">
      <PhotoIcon class="w-12 h-12 overflow-hidden text-gray-900" />
      <p class="font-bold text-gray-900 underline">
        Sélectionnez une photo sur votre appareil
      </p>
    </div>
  </button>
  <div
    v-if="imageUrl"
    class="flex items-end space-x-12"
  >
    <img
      :src="imageUrl"
      alt="Logo"
      class="object-cover h-60 w-60"
    >
    <BaseButton
      color="red"
      @click="onResetField(resetField)"
    >
      <template #icon>
        <TrashIcon />
      </template>
      Supprimer
    </BaseButton>
  </div>
</Field>
</template>

<script lang="ts" setup>
import { PhotoIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { Field } from 'vee-validate'

interface Props {
  disabled?: boolean
  label: string
  name: string
  placeholder?: string
  wrapperClasses?: string
  initialUrl?: string
  isRequired?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  label: '',
  name: '',
  placeholder: '',
  wrapperClasses: '',
  initialUrl: '',
  isRequired: false,
})

const fileInput = ref<HTMLInputElement | null>(null)
const imageUrl = ref<null | string>(props.initialUrl)

function onWrapperClick() {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

function onChange(handleChange: () => void) {
  if (fileInput.value?.files && fileInput.value?.files[0]) {
    const url = URL.createObjectURL(fileInput.value?.files[0])
    imageUrl.value = url
  }
  handleChange()
}

function onResetField(resetField: () => void) {
  imageUrl.value = null
  resetField()
}
</script>
