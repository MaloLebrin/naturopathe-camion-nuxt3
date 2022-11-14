<template>
<NuxtLink
  v-if="tag === 'nuxt-link'"
  v-bind="$attrs"
  :type="type"
  :class="[
    classes,
    { 'opacity-70 cursor-not-allowed': disabled },
    { 'cursor-pointer': !disabled },
  ]"
  :disabled="disabled"
  :aria-disabled="disabled"
  :to="to"
  @click="onClick($event)"
>
  <slot />
</NuxtLink>
<component
  :is="tag"
  v-else
  v-bind="$attrs"
  :type="type"
  :class="[
    classes,
    { 'opacity-70 cursor-not-allowed': disabled },
    { 'cursor-pointer': !disabled },
  ]"
  :disabled="disabled"
  :aria-disabled="disabled"
  @click="onClick($event)"
>
  <slot />
</component>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

interface Props {
  type?: 'submit' | 'reset' | 'button'
  disabled?: boolean
  outlined?: boolean
  tag?: 'button' | 'nuxt-link' | 'a'
  color?: string
  to?: RouteLocationRaw
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  disabled: false,
  tag: 'button',
  color: undefined,
  to: undefined,
})

const emit = defineEmits<{
  (e: 'click', event: Event): void
}>()

const classes = computed(() => {
  let color = 'bg-white'
  const common = 'font-bold text-sm rounded-xl shadow-lg focus:outline-none focus:shadow-outline disabled:cursor-not-allowed transform transition hover:-translate-y-1 hover:scale-105 duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 px-4 py-2'
  if (props.color) {
    color = `bg-${props.color}-500 text-white`
  }
  return `${color} ${common}`
})

function onClick(event: Event) {
  emit('click', event)
}
</script>
