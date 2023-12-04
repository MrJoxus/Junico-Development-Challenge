<!-- https://daisyui.com/components/dropdown/ -->

<template lang="html">
  <!-- TODO: add dropdown icon -->
  <details ref="detailsRef" class="dropdown" @click="open = true">
    <summary class="px-4">
      <slot name="title">
        {{ title }}
      </slot>
    </summary>
    <ul class="dropdown-content shadow z-[20] bg-base-100 rounded-box">
      <slot name="dropDownItems" />
    </ul>
  </details>
</template>

<script setup lang="ts">
import type { DetailsHTMLAttributes } from 'vue'
import { onClickOutside } from '@vueuse/core'

defineProps<{
  title?: string
}>()

const detailsRef = ref<DetailsHTMLAttributes | null>(null)
const open = ref(false)

function closeDropdown () {
  if (detailsRef.value) {
    detailsRef.value.open = false
    open.value = false
  }
}

onClickOutside(detailsRef, () => open && closeDropdown(), {})
</script>

<style lang="scss">
.modal:not(dialog:not(.modal-open)), .modal::backdrop {
  @apply bg-transparent;
  animation: none;
}
</style>
