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
    return this.$store.state.pictures
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
.consulted-pictures {
  border: 1px solid #bfc0c0;
  padding: 2em;
  margin: 1em;
}
</style>