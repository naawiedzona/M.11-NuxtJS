<template>
  <div class="container">
    <div class="cc">
      <Header></Header>
      <h1 class="title">POPULAR USERS AND PICTURES</h1>
        <p class="main-text">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eius
          numquam asperiores atque id quo at voluptatum voluptatibus sunt dolores, eum quod repudiandae voluptatem? Molestiae officiis a
          speriores nemo assumenda doloremque! amet consectetur adipisicing elit. Est sit, molestias impedit repellat laudantium harum. Ea
          que sequi at nobis eius?</p>
      <div class="consulted-container">
      <ConsultedUsers class="consulted-item"></ConsultedUsers>
      <ConsultedPictures class="consulted-item"></ConsultedPictures>
      </div>
     
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
  align-items: stretch;
  text-align: center;
  background-color: rgb(7, 7, 7);
  
}
.cc {
  min-height: 100vh;
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
  font-size: 5em;
  color: rgb(202, 190, 190);
  letter-spacing: 1px;
  margin: 50px;
}
.consulted-container {
  display: flex;
  justify-content: center;
  align-items: stretch;

}

.consulted-item {
  margin:2em;
   box-shadow: 6px 20px 10px rgb(0, 0, 0);
  background-color: rgba(39, 37, 37, 0.199);
  
}

.main-text {
  padding: 2em;
  line-height: 30px;
  text-align: left;
  color: rgb(202, 190, 190);
  margin: 50px;
}
</style>
