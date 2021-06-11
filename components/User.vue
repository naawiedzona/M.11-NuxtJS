<template>
  <div class="container">
    <div class="user-container">
        <h2>{{user.name}}</h2>
        <button class="check-btn" @click="infoUser()">More info</button>
        <p class="small">{{user.count}} views</p>
    </div>
  </div>
</template>

<script>
export default {
  props:['user'],
  methods:{
    infoUser () {
      this.$store.commit('InfoUserStore', this.user)
      this.$emit('openModal')
    }
  }
}
</script>

<style scoped>

.user-container {
  border: 1px solid black;
  margin: 2em;
  padding: 1em;
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  box-shadow: 6px 20px 10px rgb(0, 0, 0);
  background-color: rgba(39, 37, 37, 0.199);

}

h2 {
  color: #a4161a;
  height: 90px;
}
.check-btn {
  border: 1px solid #a4161a;
  background-color:  #a4161a;
  color: white;
  border-radius: 4px;
  padding: 10px;
  margin: 30px 20px 5px 20px;
  cursor: pointer;
}

.check-btn:hover {
  opacity: 0.8;
}
.small {
  font-size: 0.7em;
  color: white;
}

</style>