<template>
  <div class="container">
    <div>
    <Header></Header>
    <Modal v-if="modalVisible" @close="modalVisible = false" :user="modalUser" />
      <h1 class="title">
        USERS
      </h1>
       <p class="main-text">Lorem ipsum dolor sit, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis eius
         numquam asperiores atque id quo ! amet consectetur adipisicing elit. Est sit, molestias impedit repellat laudantium harum. Ea
         que sequi at nobis eius?</p>
      <div class="user-container"> 
        <User
        v-for="user of FilteredUsers"
        :key="user.id"
        :id="user.id"
        :name="user.name"
        :count="user.count"
        @openModal="openModal(user)"></User> 
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import User from '../components/User.vue';
import Modal from '../components/Modal.vue'
import { mapGetters } from 'vuex';
export default {
  components:{
    Header,
    User,
    Modal
  },
  computed:{
    users() {
    return this.$store.state.users
    },
     ...mapGetters(['FilteredUsers'])
  },
   mounted() {
    this.$store.dispatch("getUsers");
  },
  data () {
    return {
      modalVisible: false
    }
  },
  methods: {
    openModal(user) {
      this.modalUser = user
      this.modalVisible = true
    }
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
  flex-wrap: wrap;
  background-color: rgb(7, 7, 7);
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
  margin: 50px;
}

.main-text {
  padding: 2em;
  line-height: 30px;
  text-align: left;
  color: rgb(202, 190, 190);
  margin: 50px;
}
.user-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}


</style>
