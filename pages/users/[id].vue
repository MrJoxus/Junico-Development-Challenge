<template lang="">
  <div class="container mx-auto mt-8">
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>LastEvent</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ data.user.id }}</td>
          <td>{{ data.user.firstName }}</td>
          <td>{{ data.user.lastName }}</td>
          <td>
            <div v-if="data.user.pointEvents.length >= 1">
              <div>
                Score: {{ data.user.pointEvents[0].points }}
              </div>
              <div>
                Info: {{ data.user.pointEvents[0].info }}
              </div>
              <div>
                CreatedAt: {{ data.user.pointEvents[0].createdAt }}
              </div>
            </div>
          </td>
          <td>{{ data.user.score }}</td>
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
const { data } = await useFetch(`/api/user/${route.params.id}`)
</script>
