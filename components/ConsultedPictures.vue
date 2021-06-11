<template>
  <div class="consulted-pictures">
    <h2 id="title">Consulted Pictures</h2>
  <ul v-for="picture in pictures" :key="picture.id">
    <li class="list" v-if="picture.count>0">{{picture.title}} <span>{{picture.count}}</span></li>
  </ul>
  </div>
</template>

<script>
export default {
  computed: {
    pictures() {
    return this.$store.state.picturesConsulted
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
.consulted-pictures {
  border: 1px solid #a4161a;
  padding: 2em;
  margin: 1em;
  box-shadow: 6px 20px 10px rgb(0, 0, 0);
  background-color: rgba(39, 37, 37, 0.199);
}
</style>