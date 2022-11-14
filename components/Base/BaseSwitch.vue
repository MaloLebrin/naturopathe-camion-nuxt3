<template>
<SwitchGroup>
  <div class="flex items-center justify-start space-x-4">
    <SwitchLabel
      :class="[
        switchInnerValue ? 'text-red-500' : 'text-green-500',
      ]"
    >
      {{ switchInnerValue ? falseLabel : trueLabel }}
    </SwitchLabel>
    <Switch
      v-model="switchInnerValue"
      :class="switchInnerValue ? 'bg-green-500 focus:ring-green-500' : 'bg-gray-200 focus:ring-blue-600'"
      class="relative inline-flex items-center h-6 transition-colors rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2"
    >
      <span
        class="inline-block w-4 h-4 transition duration-500 ease-in-out transform bg-white rounded-full"
        :class="[switchInnerValue ? 'translate-x-6 bg-green-500' : 'translate-x-1 bg-blue-600']"
      />
    </Switch>
  </div>
</SwitchGroup>
</template>

<script setup lang="ts">
interface Props {
  modelValue: boolean
  trueLabel: string
  falseLabel: string
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:modelValue', modelValue: boolean): void
}>()

const switchInnerValue = computed({
  get: () => props.modelValue,
  set: newValue => emit('update:modelValue', newValue),
})
</script>
