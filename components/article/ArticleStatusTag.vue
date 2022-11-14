<template>
<button
  class="relative flex justify-center item-center sm:col-start-3"
  @click="sendEvent"
>
  <div
    :class="`flex item-center justify-center p-2 overflow-y-auto text-xs leading-5 rounded-lg group inset-1 bg-${getStatusColor()}-50 hover:bg-${getStatusColor()}-100 border border-${getStatusColor()}-500 hover:border-${getStatusColor()}-700`"
  >
    <p
      :class="`text-${getStatusColor()}-500 group-hover:text-${getStatusColor()}-700 font-semibold uppercase`"
    >
      {{ isPublished ? 'Publié' : 'Brouillon' }}
    </p>
  </div>
</button>
</template>

<script setup lang="ts">
interface Props {
  isPublished: boolean
}

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'click'): void
}>()

function getStatusColor() {
  return props.isPublished ? 'green' : 'red'
}

function sendEvent() {
  emit('click')
}
</script>
