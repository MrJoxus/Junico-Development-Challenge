<template lang="">
  <div class="container mx-auto mt-8">
    <div>userid: {{ route.params.id }}</div>
    <table class="table mt-8">
      <thead>
        <tr>
          <th>id</th>
          <th>Points</th>
          <th>Info</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pointEvent in data.pointEvents" :key="pointEvent.id">
          <td>{{ pointEvent.id }}</td>
          <td>{{ pointEvent.points }}</td>
          <td>{{ pointEvent.info }}</td>
          <td>{{ pointEvent.createdAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({
  layout: 'website'
})
const route = useRoute()
const { data } = await useFetch(`/api/points/${route.params.id}`)
</script>
<style lang="">

</style>
