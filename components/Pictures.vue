<template>
  <div class="container">
    <div>
    <Header></Header>
    <Modal v-if="modalVisible" @close="modalVisible = false" :picture="modalPicture"/>
      <h1 class="title">
        Pictures
      </h1>
       <p class="main-text">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eius
         numquam asperiores atque id quo at voluptatum voluptatibus sunt dolores, eum quod repudiandae voluptatem? Molestiae officiis a
         speriores nemo assumenda doloremque! amet consectetur adipisicing elit. Est sit, molestias impedit repellat laudantium harum. Ea
         que sequi at nobis eius?</p>
      <div class="pictures-container">
      <Picture class="picture" v-for="picture in picturesbyAlbum"
      :key="picture.id"
      :id="picture.id"
      :src="picture.thumbnailUrl"
      @openModal="openModal(picture)"></Picture>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Picture from '../components/Picture.vue';
import Modal from '../components/Modal.vue'
export default {
  components:{
    Header,
    Picture,
    Modal
  },
   data() {
    return {
      modalVisible: false,
      modalPicture: ""
    }
     },
  computed: {
    pictures () {
      return this.$store.state.pictures;
    },
    picturesbyAlbum () {
        return this.pictures.filter((picture) => picture.albumId==this.$route.params.album);
      }
  },
  mounted() {
    this.$store.dispatch("getPictures");
  
  },
  methods:{
      openModal(picture) {
      this.modalPicture = picture
      this.modalVisible = true
    }
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
.pictures-container {
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