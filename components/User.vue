<template>
  <div class="container">
    <div class="user-container">
        <h2>{{name}}</h2>
        <button class="check-btn" @click="infoUser()">More info</button>
        <p class="small">{{count}} views</p>
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
  border: 1px solid #bfc0c0;
  margin: 2em;
  padding: 1em;
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: stretch;
  box-shadow: 6px 20px 10px #bfc0c0;
  
}
h2 {
  color: #2d3142;
  height: 90px;
}
.check-btn {
  border: 1px solid #2d3142;
  background-color:  #2d3142;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin: 30px 20px 5px 20px;
}

.check-btn:hover {
  border: 1px solid #2d3142;
  background-color: #2d3142;
  color: white;
}
.small {
  font-size: 0.7em;
}

</style>