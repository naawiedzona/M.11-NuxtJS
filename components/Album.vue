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
  border: 1px solid black;
  padding: 1em;
  margin: 1em;
  box-shadow: 6px 20px 10px rgb(0, 0, 0);
  background-color: rgba(39, 37, 37, 0.199);
  width: 20em;
}
h2{
  color: #a4161a;
  height: 70px;
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
  color: rgb(202, 190, 190);
  letter-spacing: 1px;
}
.main-text {
  padding: 2em;
  line-height: 30px;
  text-align: left;
  color: rgb(202, 190, 190);
}

.check-btn {
  border: 1px solid #a4161a;
  background-color:  #a4161a;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin: 30px 20px 5px 20px;
  cursor: pointer;
}

.check-btn:hover {
  opacity: 0.8;
}
</style>