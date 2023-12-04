<template>
  <div class="min-h-screen" :data-theme="themeCookie">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import type { Themes } from '@/types'

const themeCookie = useCookie<Themes>('theme', { default: () => 'light' })
</script>
