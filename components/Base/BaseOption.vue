<template>
<ListboxOption
  v-slot="{ active, selected }"
  :value="value"
  as="template"
>
  <li
    :data-cy="`option-${value}`"
    class="relative px-4 py-2 cursor-pointer select-none text-blueDark"
    :class="[
      active ? 'bg-gray-200' : '',
    ]"
  >
    <span
      class="block truncate"
      :class="[
        selected ? 'font-medium' : 'font-normal',
      ]"
    >{{ name }}</span>
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
</template>

<script lang="ts" setup>
import {
  ListboxOption,
} from '@headlessui/vue'
import {
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'

interface Props {
  value: any
  name: string
}

defineProps<Props>()
</script>
