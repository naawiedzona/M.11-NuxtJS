<template>
  <div class="container">
    <div class="picture-container">
        <h1>Picture nr {{this.id}}</h1>
        <img :src="this.src">
        <button class="check-btn" @click="infoPicture()">Check this picture</button>
        
    </div>
  </div>
</template>

<script>
export default {
    props:['id','src'],
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
}
.picture-container {
  border: 1px solid green;
  padding: 1em;
  margin: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: stretch;
}

.check-btn {
  border: 1px solid green;
  background-color: white;
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