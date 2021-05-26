<template>
  <div class="container">
    <div class="link-container">
      <!-- <keep-alive></keep-alive>
      <keep-alive></keep-alive>
      <keep-alive></keep-alive> -->
      <nuxt-link to="/"><p>home</p></nuxt-link>
      <nuxt-link to="users"><p>users</p></nuxt-link>
      <nuxt-link to="albums"><p>albums</p></nuxt-link>
      
    </div>
    <div class="button-prev-container">
    <button id="btn-prev" @click="$router.go(-1)">Back</button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.container p {
    margin: 40px;
    text-decoration: none;
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

}

#btn-prev {
  border: 1px solid green;
  color: white;
  background: green;
  padding: 10px 20px;
}
#btn-prev:hover {
  border: 1px solid green;
  color: green;
  background: white;
}
</style>
