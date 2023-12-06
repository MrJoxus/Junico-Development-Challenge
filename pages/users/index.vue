<template lang="">
  <div class="container mx-auto mt-8">
    <div>
      example: ?sort=asc&sort_by=firstName&page=2
    </div>
    <table class="table mt-8">
      <thead>
        <tr>
          <th>id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>LastEvent</th>
          <th>Score</th>
          <th>TotalPoints</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data.users" :key="user.firstName">
          <td>
            <nuxt-link :to="localePath({ name: 'users-id', params: { id: user.id } })">
              {{ user.id }}
            </nuxt-link>
          </td>
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>
            <div v-if="user.pointEvents.length >= 11">
              <div>
                Score: {{ user.pointEvents[0].points }}
              </div>
              <div>
                Info: {{ user.pointEvents[0].info }}
              </div>
              <div>
                CreatedAt: {{ user.pointEvents[0].createdAt }}
              </div>
            </div>
          </td>
          <td>{{ user.score }}</td>
          <td>{{ user.totalPoints }}</td>
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
const { data } = await useFetch(`/api/user?sort=${route.query.sort}&sort_by=${route.query.sort_by}&page=${route.query.page}`)
</script>
<style lang="">

</style>
