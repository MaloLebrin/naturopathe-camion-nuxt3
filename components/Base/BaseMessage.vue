<template>
<div
  class="flex px-4 py-4 border-2 rounded-lg"
  :class="colorClasses"
>
  <slot name="title" />
  <InformationCircleIcon
    v-if="type === 'default'"
    class="w-6 h-6 mr-2 text-blue-500"
  />
  <ExclamationTriangleIcon
    v-if="type === 'warning'"
    class="w-6 h-6 mr-2 text-orange-500"
  />
  <XCircleIcon
    v-if="type === 'danger'"
    class="w-6 h-6 mr-2 text-red-500"
  />
  <CheckCircleIcon
    v-if="type === 'success'"
    class="w-6 h-6 mr-2 text-green-500"
  />

  <slot />
</div>
</template>

<script setup lang="ts">
import {
CheckCircleIcon, ExclamationTriangleIcon, InformationCircleIcon, XCircleIcon,
} from '@heroicons/vue/24/outline'

interface Props {
  type?: 'warning' | 'danger' | 'success' | 'default'
}

const props = withDefaults(defineProps<Props>(), {
  type: 'default',

})

const colorClasses = computed(() => {
  switch (props.type) {
    case 'warning':
      return 'border-orange-500 bg-orange-100'

    case 'danger':
      return 'border-red-500 bg-red-100'

    case 'success':
      return 'border-green-500 bg-green-100'

    default:
      return 'border-blue-500 bg-blue-100'
  }
})
</script>
