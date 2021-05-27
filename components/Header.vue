<template>
  <div class="container">
    <div class="link-container">
      <!-- <keep-alive></keep-alive>
      <keep-alive></keep-alive>
      <keep-alive></keep-alive> -->
      <nuxt-link to="/"><p>HOME</p></nuxt-link>
      <nuxt-link to="users"><p>USERS</p></nuxt-link>
      <nuxt-link to="albums"><p>ALBUMS</p></nuxt-link>
      <input id="searchInput" type="text" placeholder="users's name" v-model="searchInput">
    </div>
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
  </div>
</template>

<script>
export default {
   computed:{
    searchInput:{
       get() {
         return this.$store.state.search;
       },
       set(value) {
         this.$store.commit("SetSearch", value);
       }
     },
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border-bottom:1px solid #2d3142;
  padding: 1em;
  background-color: #bfc0c0;
}
.container p {
    margin: 40px;
}
.container a {
  text-decoration: none;
  color: #2d3142;
}
.container a:hover {
  color: white;
  border-bottom: 1px solid white;
}
#searchInput {
  height: 3em;
  margin: 2em;
}
.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.link-container{
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
}

#btn-prev {
  border: 1px solid #2d3142;
  color: white;
  background: #2d3142;
  padding: 10px 7px;
  border-radius: 8px;
  position: absolute;
  right: 20px;
  cursor: pointer;
}
#btn-prev:hover {
  opacity: 0.9;
}
</style>
