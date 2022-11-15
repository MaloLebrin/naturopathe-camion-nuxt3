<template>
<Field
  v-slot="{ field, meta, errors, handleChange, handleBlur }"
  as="div"
  :name="name"
  :class="`flex flex-col w-full space-y-2 ${wrapperClasses}`"
>
  <label
    class="font-semibold text-blueDark font-heading"
    :for="name"
  >
    <!-- Don't insert a line break here, would add a space between the label and the * that we don't want -->
    {{ label }}<span v-if="isRequired">*</span>
  </label>
  <div
    class="relative flex border group focus-within:bg-pink-50 focus-within:ring-pink-400 focus-within:border-pink-400"
    :class="[
      getBorderClasses(errors, meta),
    ]"
  >
    <div
      class="flex items-center h-full p-4 space-x-4 shadow "
      :class="[
        getBorderClasses(errors, meta),
        getBackgroundClasses(errors, meta),
      ]"
    >
      <LinkIcon class="w-5 h-5" />
    </div>
    <input
      v-bind="{ ...field, ...$attrs }"
      :id="name"
      :disabled="disabled"
      :aria-disabled="disabled"
      :placeholder="placeholder"
      :aria-placeholder="placeholder"
      :name="name"
      class="w-full py-2 placeholder-gray-400 bg-white border-0 border-l shadow focus:ring-0 focus:ring-transparent focus:outline-none focus:border-pink-400 disabled:bg-gray-100 disabled:border-gray-400"
      :class="[
        getBorderClasses(errors, meta),
      ]"
      type="url"
      @input="handleChange"
      @blur="handleBlur"
    >
    <div class="flex items-center pr-4 space-x-4 bg-white shadow">
      <XCircleIcon
        v-if="errors.length > 0"
        class="w-5 h-5 text-red"
      />
      <CheckCircleIcon
        v-else-if="meta.dirty && meta.valid"
        class="w-5 h-5 text-green"
      />
      <!-- <button
        type="button"
        class="border-2 border-transparent text-blueDark focus:outline-none focus:border-pink-600"
        @click.prevent="onCopyValue(field.value)"
      >
        <DuplicateIconOutline
          class="w-8 h-8"
        />
      </button> -->
    </div>
  </div>
  <ErrorMessage
    :name="name"
    class="text-red-500"
  />
</Field>
</template>

<script setup lang="ts">
import type { FieldMeta } from 'vee-validate'
import { ErrorMessage, Field } from 'vee-validate'
import { CheckCircleIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { LinkIcon } from '@heroicons/vue/24/outline'

interface Props {
  disabled?: boolean
  isRequired?: boolean
  label: string
  name: string
  placeholder?: string
  wrapperClasses?: string
}

withDefaults(defineProps<Props>(), {
  disabled: false,
  isRequired: false,
  label: '',
  name: '',
  placeholder: '',
  wrapperClasses: '',
})

// const { toClipboard } = useClipboard()
// // const toast = useToast()

// async function onCopyValue(value: string) {
//   if (value) {
//     try {
//       await toClipboard(value)
//       toast.success('URL copiée dans votre presse papier.')
//     } catch (e) {
//       toast.error('Nous n\'avons pas pu copier l\'URL dans votre presse papier.')
//     }
//   }
// }

function getBorderClasses(errors: string[], meta: FieldMeta<string>) {
  if (errors.length > 0) {
    return 'border-red'
  }

  // Only set success if the field has been blured
  if (meta.dirty && meta.valid) {
    return 'border-green'
  }

  return 'border-gray-400'
}

function getBackgroundClasses(errors: string[], meta: FieldMeta<string>) {
  if (errors.length > 0) {
    return 'bg-red-50'
  }

  // Only set success if the field has been blured
  if (meta.dirty && meta.valid) {
    return 'bg-green-50'
  }

  return ''
}
</script>
