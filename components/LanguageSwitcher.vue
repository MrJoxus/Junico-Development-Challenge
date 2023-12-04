<template>
  <DDropDown class="dropdown-bottom dropdown-end" :title="locale">
    <template #dropDownItems>
      <DMenu>
        <li v-for="localeCode in localeCodes" :key="localeCode">
          <NuxtLink :to="switchLocalePath(localeCode)">
            {{ localeCode.toUpperCase() }}
          </NuxtLink>
        </li>
      </DMenu>
    </template>
  </DDropDown>
</template>

<script lang="ts" setup>
const switchLocalePath = useSwitchLocalePath()
const { locale, localeCodes } = useI18n()
</script>
