<template>
  <div class="container">
    <div class="picture-container">
        <h2>Picture nr {{this.id}}</h2>
        <img :src="this.src">
        <button class="check-btn" @click="infoPicture()">Check this picture</button>
        <p class="small">{{count}} views</p>
        
    </div>
  </div>
</template>

<script>
export default {
    props:['id','src','count'],
    methods: {
      infoPicture() {
      this.$store.commit('InfoUserStore', this.id)
      this.$emit('openModal',this.id)
      }
    }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
    display: flex;
  justify-content: space-around;
  align-items: stretch;
  text-align: center;
  flex-wrap: wrap;
}
.picture-container {
  border: 1px solid #bfc0c0;
  padding: 2em;
  margin: 2em;
  width: 20em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
}
h2{
  color: #2d3142;
  height: 50px;
}
.check-btn {
  border: 1px solid #2d3142;
  background-color:  #2d3142;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin: 30px 20px 5px 20px;
  cursor: pointer;
}

.check-btn:hover {
  opacity: 0.9;
}
.small {
  font-size: 0.7em;
}
</style>