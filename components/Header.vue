<template>
  <div class="container">
    <div class="link-container">
      <!-- <keep-alive></keep-alive>
      <keep-alive></keep-alive>
      <keep-alive></keep-alive> -->
      <nuxt-link to="/"><p>HOME</p></nuxt-link>
      <nuxt-link to="/users"><p>USERS</p></nuxt-link>
      <nuxt-link to="/albums"><p>ALBUMS</p></nuxt-link>
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
  border-bottom:2px solid #a4161a;
  height: 350px;
  background: url('~assets/gallery.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.container p {
    margin: 40px;
}
.container a {
  text-decoration: none;
  color: #a4161a;
  font-size: 1.2em;
}
.container a:hover {
  color: white;
  border-bottom: 1px solid white;
}

#searchInput {
  height: 3em;
  margin: 2em;
  border: 1px solid #a4161a;
  background-color: black;
  color: #a4161a;
  opacity: 0.7;
  border-radius: 4px;
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
  border: 1px solid #a4161a;
  color: #a4161a;
  background: rgba(255, 255, 255, 0.52);
  padding: 10px 7px;
  border-radius: 4px;
  position: absolute;
  right: 20px;
  top: 10px;
  cursor: pointer;
}
#btn-prev:hover {
  opacity: 0.7;
}
</style>
