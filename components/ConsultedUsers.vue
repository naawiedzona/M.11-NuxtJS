<template>
  <div class="consulted-users">
    <h1 id="title">Consulted Users</h1>
  <div v-for="user of users" :key="user.id">
    <p class="list" v-if="user.count>0">{{user.name}} <span>{{user.count}}</span></p>
  </div>
  </div>
</template>

<script>
export default {
  computed: {
    users() {
    return this.$store.state.users
    }
  }
}
</script>

<style scoped>

</style>