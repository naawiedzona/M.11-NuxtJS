<template>
  <div class="container">
    <div class="user-container">
        <h3>{{id}}</h3>
        <p>{{name}}</p>
        <p>{{count}}</p>
        <button class="check-btn" @click="infoUser()">Consult user</button>
    </div>
  </div>
</template>

<script>
export default {
  props:['id','name','count'],
  methods:{
    infoUser () {
      //this.count++;
      this.$store.commit('InfoUserStore', this.id)
      this.$emit('openModal')
    }
  }
}
</script>

<style scoped>

.user-container {
  border: 1px solid green;
  margin: 2em;
  padding: 1em;
  
}
.check-btn {
  border: 1px solid green;
  color: green;
  padding: 10px;
  margin: 20px;
}

.check-btn:hover {
  border: 1px solid green;
  background-color: green;
  color: white;
  padding: 10px;
  margin: 20px;
}
</style>