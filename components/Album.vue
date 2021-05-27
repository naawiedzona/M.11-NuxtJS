<template>
  <div class="container">
    <div class="album-container">
        <h2>Album {{album}}</h2>
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
  align-items: stretch;
  text-align: center;
  flex-wrap: wrap;
}
.album-container {
  border: 1px solid #bfc0c0;
  padding: 1em;
  margin: 1em;
  box-shadow: 6px 20px 10px #bfc0c0;
}
h2{
  color: #2d3142;
  height: 50px;
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
</style>