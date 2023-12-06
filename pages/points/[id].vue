<template lang="">
  <div class="container mx-auto mt-8">
    <h1 class="prose prose-2xl font-bold">
      points/{{ route.params.id }}
    </h1>
    <table class="table mt-8">
      <thead>
        <tr>
          <th>id</th>
          <th>Points</th>
          <th>Info</th>
          <th>Valid</th>
          <th>UserType</th>
          <th>CreatedAt</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pointEvent in data.pointEvents" :key="pointEvent.id">
          <td>{{ pointEvent.id }}</td>
          <td>{{ pointEvent.points }}</td>
          <td>{{ pointEvent.info }}</td>
          <td>{{ pointEvent.valid }}</td>
          <td>{{ pointEvent.user?.type }}</td>
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
