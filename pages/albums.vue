<template>
  <div class="container">
    <div>
    <Header></Header>
      <h1 class="title">
        albums
      </h1>
       <p class="main-text">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eius
         numquam asperiores atque id quo at voluptatum voluptatibus sunt dolores, eum quod repudiandae voluptatem? Molestiae officiis a
         speriores nemo assumenda doloremque! amet consectetur adipisicing elit. Est sit, molestias impedit repellat laudantium harum. Ea
         que sequi at nobis eius?</p>
      <div class="albums-container">
      <Album
      v-for="(album ,index) in albums" :key="index"
      :album="album"></Album>
     
         </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Album from '../components/Album.vue'
export default {
  components:{
    Header,
    Album
  },
  computed: {
       albums(){
      let noRepeated = [];
      this.pictures.filter((picture)=>{
        noRepeated.includes(picture.albumId) ? false : noRepeated.push(picture.albumId)
      })
     return noRepeated
    },
    pictures () {
      return this.$store.state.pictures;
    }
  },
  mounted() {
    this.$store.dispatch("getPictures");
  }
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
.albums-container {
  
  display: flex;
  flex-wrap: wrap;
  
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
</style>
