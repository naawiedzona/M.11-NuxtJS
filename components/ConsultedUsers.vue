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
  color: #a4161a;
  margin-bottom: 1em;
  padding-bottom: 1em;
  border-bottom: 1px solid #a4161a;
}
ul li {
  color: rgb(202, 190, 190);
}
ul li span{
  color:#a4161a;
}
.consulted-users {
  border: 1px solid #a4161a;
  padding: 2em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  box-shadow: 6px 20px 10px rgb(0, 0, 0);
  background-color: rgba(39, 37, 37, 0.199);
}
</style>