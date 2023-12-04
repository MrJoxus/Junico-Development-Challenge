<template>
  <button :type="type" class="btn my-2 relative">
    <span v-if="loading" class="loading loading-spinner absolute" />
    <div class="btn-content" :class="{ 'opacity-0': loading }">
      <slot />
    </div>
  </button>
</template>

<script lang="ts" setup>

export interface Props {
  type?: 'button' | 'submit' | 'reset' | undefined,
  loading?: boolean,
}

withDefaults(defineProps<Props>(), {
  type: undefined,
  loading: false
})

</script>
<style lang="scss">
.btn-content {
  transition: all 0.3s;
}
</style>
