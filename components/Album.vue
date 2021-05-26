<template>
  <div class="container">
    <div class="album-container">
        <h1>Album{{album}}</h1>
        <nuxt-link :to="'albums/'+album"><button class="check-btn">Check this album</button></nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props:['album']
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
}
.album-container {
  border: 1px solid green;
  padding: 1em;
  margin: 1em;
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
.main-text {
  padding: 2em;
  line-height: 30px;
  text-align: left;
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