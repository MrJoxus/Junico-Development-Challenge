<template>
  <div>
    <!-- <div class="card w-96 bg-primary text-primary-content">
      <div class="card-body">
        <h2 class="card-title">
          {{ $t('welcome') }}
        </h2>
        <p>{{ $t('tongueTwister') }}</p>
        <div class="card-actions justify-end">
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div> -->
    <template v-for="level in loop" :key="`${level}`">
      <template v-for="inset in loop" :key="`${level}-${inset}`">
        <div class="flex flex-wrap wrap">
          <template v-for="radius in loop" :key="`${level}-${inset}-${radius}`">
            <Card class="w-1/4" :color="colors[level]" :inset="inset" :radius="radius" :level="level">
              <div>
                <div>
                  level: {{ level }}
                </div>
                <div>
                  inset: {{ inset }}
                </div>
                <div>
                  radius: {{ radius }}
                </div>
              </div>
            </Card>
          </template>
        </div>
      </template>
    </template>
  </div>
</template>
<script setup lang="ts">

const loop = [0, 1, 2, 3]
const colors = ['red', 'green', 'blue', 'violet']

definePageMeta({
  layout: 'website'
})

</script>
<style lang="">

</style>
