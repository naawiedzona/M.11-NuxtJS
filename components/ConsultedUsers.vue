<template>
  <div class="consulted-users">
    <h2 id="title">Consulted Users</h2>
  <ul v-for="user in users" :key="user.id">
    <li class="list" v-if="user.count>0">{{user.name}} <span>{{user.count}}</span></li>
  </ul>
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
h2{
  color: #2d3142;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #bfc0c0;
}
ul li span{
  color: #35495e;
}
.consulted-users {
  border: 1px solid #bfc0c0;
  padding: 2em;
  margin: 1em;
  display: flex;
  flex-direction: column;
}
</style>