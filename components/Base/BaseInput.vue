<template>
<div class="space-y-1">
  <label
    v-if="label"
    :for="name"
    class="block text-sm font-medium text-left text-gray-700 sm:mt-px sm:pt-2"
  >{{ label }}<span v-if="isRequired">&nbsp;*</span></label>
  <div class="mt-1 sm:mt-0 sm:col-span-2">
    <Field
      v-bind="$attrs"
      :id="name"
      v-model="innerValue"
      as="input"
      :class="[`appearance-none block w-full px-3 py-2 border ${error ? 'border-red-300' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm`,
               { 'cursor-not-allowed': disabled }]"
      :name="name"
      :disabled="disabled"
      :type="type"
      :placeholder="placeholder"
    />
    <p
      v-if="error?.length"
      class="text-sm text-left text-red-500"
    >
      {{ error }}
    </p>
  </div>
</div>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate'

interface Props {
  modelValue: string | null | number
  type?: 'email' | 'password' | 'search' | 'text' | 'tel' | 'url' | 'date' | 'number'
  disabled?: boolean
  placeholder?: string
  name: string
  error?: string | null
  label?: string | null
  isRequired?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  type: 'text',
  disabled: false,
  name: '',
  placeholder: '',
  error: null,
  label: null,
  isRequired: false,
})

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: string | number | null): void
}>()

const innerValue = computed({
  get: () => props.modelValue,
  set: newValue => emit('update:modelValue', newValue),
})
</script>

<style scoped>
/*
Hide arrows on number inputs
see: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
*/
 /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
