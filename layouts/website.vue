<template>
  <div>
    <div class="grid-container relative container mx-auto min-h-screen">
      <div class="grid-item-nav sticky flex justify-between top-0 h-screen overflow-hidden">
        <div class="flex-1">
          <!-- Nav Header -->
          <div class="h-16 flex justify-center py-2 px-4">
            <CakeIcon class="text-primary" />
          </div>
          <!-- Nav Menu -->
          <div class="h-[calc(100%_-_64px)] overflow-y-scroll p-4">
            <DMenu class="p-0 w-full" :items="items" />
          </div>
        </div>
        <div class="nav-shadow" />
      </div>
      <div class="grid-item-header sticky top-0 px-8 z-[20]">
        <!-- Nav -->
        <DNavbar>
          <template #start>
            <NuxtLink :to="localePath({name: 'index'})" class="btn normal-case text-xl">
              {{ $t('c.navbar.title') }}
            </NuxtLink>
          </template>
          <template #center />
          <template #end>
            <LanguageSwitcher />
            <ThemeSwitcher />
            <div class="join">
              <NuxtLink :to="localePath({name: 'login'})" class="join-item btn btn-ghost">
                {{ $t('c.navbar.login') }}
              </NuxtLink>
              <NuxtLink :to="localePath({name: 'registration'})" class="join-item btn btn-ghost">
                {{ $t('c.navbar.registration') }}
              </NuxtLink>
            </div>
          </template>
        </DNavbar>
      </div>
      <div class="grid-item-main p-8 pt-4">
        <!-- Content -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { HomeIcon, CakeIcon } from '@heroicons/vue/24/solid'
const localePath = useLocalePath()

const items = [
  {
    title: 'Home',
    icon: HomeIcon,
    to: localePath({ name: 'index' })
  }
]

</script>

<style lang="scss">
.nav-shadow {
  @apply my-56;
  @apply w-0;
  box-shadow: 100px 0px 120px 120px #ababab52;
}

.grid-item-header {
  grid-area: header;
}

.grid-item-nav {
  grid-area: nav;
}

.grid-item-main {
  grid-area: content;
}

.grid-container {
  display: grid;
  grid-template-columns: 256px 1fr;
  grid-template-rows: 64px 1fr;
  grid-template-areas:
    "nav header"
    "nav content";
}
</style>
