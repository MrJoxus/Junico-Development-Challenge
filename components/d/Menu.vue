<template>
  <ul class="menu bg-base-100 rounded-box">
    <slot>
      <li v-for="item in items" :key="item.title" class="my-1">
        <NuxtLink :to="item.to">
          <component :is="item.icon" v-if="item.icon" class="h-6" />
          {{ item.title }}
        </NuxtLink>
      </li>
    </slot>
  </ul>
</template>

<script lang="ts" setup>
import type { MenuItem } from '@/types'

defineProps<{
  items?: MenuItem[]
}>()
</script>

<style lang="scss" scoped>
a.router-link-exact-active {
  background-color: hsl(var(--bc) / 0.1);
}
.menu {
  min-width: 14rem;
}
</style>
