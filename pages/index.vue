<template>
  <div class="container">
    
    <div>
      <Header></Header>
      <h1 class="title">
        home page
      </h1>
       
      <div class="consulted-container">
      <ConsultedUsers class="consulted-item"></ConsultedUsers>
      <ConsultedPictures class="consulted-item"></ConsultedPictures>
      </div>
           <p class="main-text">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eius
         numquam asperiores atque id quo at voluptatum voluptatibus sunt dolores, eum quod repudiandae voluptatem? Molestiae officiis a
         speriores nemo assumenda doloremque! amet consectetur adipisicing elit. Est sit, molestias impedit repellat laudantium harum. Ea
         que sequi at nobis eius?</p>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ConsultedUsers from '../components/ConsultedUsers.vue';
import ConsultedPictures from '../components/ConsultedPictures.vue'
export default {
  components:{
    Header,
    ConsultedUsers,
    ConsultedPictures
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
.consulted-container {
  display: flex;
  justify-content: center;
  align-items: center;

}

.consulted-item {
  margin:2em;
}

.main-text {
  padding: 2em;
  line-height: 30px;
  text-align: left;
}
</style>
