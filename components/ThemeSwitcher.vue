<template>
  <div class="swap swap-rotate px-4" :class="{'swap-active': themeIsLight}" @click="toggleTheme">
    <SunIcon class=" h-6 w-6 swap-on" />
    <MoonIcon class=" h-6 w-6 swap-off" />
  </div>
</template>
<script lang="ts" setup>
/**
 * This theme switcher is setting a theme cookie and displaying the theme in this swap component,
 * but not setting the theme itself as it has to be set in the component containing the attribute
 * `data-theme` (in this case ./app.vue). Setting the theme trough `useColorMode` or other means
 * does not work on first load, thus creating a flicker from one theme to another.
 */
import { SunIcon, MoonIcon } from '@heroicons/vue/24/solid'

import type { Themes } from '@/types'

const themeCookie = useCookie<Themes>('theme')
const themeIsLight = computed(() => themeCookie.value === 'light')

function toggleTheme () {
  themeCookie.value = themeCookie.value === 'light' ? 'dark' : 'light'
}

</script>

<style lang="">
</style>
