<template>
<Listbox
  :model-value="inputValue"
  as="div"
  :name="name"
  :class="`flex flex-col w-full space-y-2 ${wrapperClasses}`"
  @update:model-value="handleChange"
  @blur="handleBlur"
>
  <ListboxLabel class="block text-sm font-medium text-left text-gray-700 sm:mt-px sm:pt-2">
    <!-- Don't insert a line break here, would add a space between the label and the * that we don't want -->
    {{ label }}<span v-if="isRequired">*</span>
  </ListboxLabel>
  <div class="relative">
    <ListboxButton
      class="relative w-full px-6 py-4 text-left placeholder-gray-400 bg-white border rounded-md shadow focus:ring-pink-400 focus:border-pink-400 focus:outline-none disabled:bg-gray-100 disabled:border-gray-400"
      :class="[
        getBorderClasses(),
      ]"
    >
      <span class="block truncate">{{ displayValue || placeholder }}</span>
      <span class="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
        <ChevronUpDownIcon
          class="w-6 h-6 text-blueDark"
          aria-hidden="true"
        />
      </span>
    </ListboxButton>
    <transition
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ListboxOptions
        class="absolute z-10 w-full py-4 overflow-auto bg-white border border-gray-500 shadow-lg max-h-60 focus:outline-none"
      >
        <ListboxOption
          v-if="!isRequired"
          v-slot="{ active, selected }"
          :value="null"
          as="template"
        >
          <li
            class="relative px-4 py-2 cursor-default select-none text-blueDark"
            :class="[
              active ? 'bg-gray-200' : '',
            ]"
          >
            <span class="block truncate">{{ placeholder }}</span>
            <span
              v-if="selected"
              class="absolute inset-y-0 right-0 flex items-center pr-6 text-blueDark"
            >
              <CheckCircleIcon
                class="w-6 h-6"
                aria-hidden="true"
              />
            </span>
          </li>
        </ListboxOption>
        <slot />
      </ListboxOptions>
    </transition>
  </div>
  <ErrorMessage
    :name="name"
    class="text-red-500"
  />
</Listbox>
</template>

<script lang="ts" setup>
import {
  Listbox,
  ListboxOption,
  ListboxOptions,
  ListboxButton,
  ListboxLabel,
} from '@headlessui/vue'
import {
  CheckCircleIcon, ChevronUpDownIcon,
} from '@heroicons/vue/24/outline'
import { ErrorMessage, useField } from 'vee-validate'

interface Props {
  disabled?: boolean
  displayValue: string | null
  isRequired?: boolean
  label: string
  name: string
  placeholder: string
  wrapperClasses?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  isRequired: false,
  wrapperClasses: '',
  displayValue: null,
})

const name = toRef(props, 'name')

const {
  value: inputValue,
  errors,
  handleBlur,
  handleChange,
  meta,
} = useField(name, undefined, {
  initialValue: null,
})

function getBorderClasses() {
  if (errors.value.length > 0) {
    return 'border-red'
  }

  // Only set success if the field has been blured
  if (meta.dirty && meta.valid) {
    return 'border-green'
  }

  return 'border-gray-400'
}
</script>
