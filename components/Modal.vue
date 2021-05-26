<template>
<div>
    <!--  ****  PICTURE MODAL  ****  -->
     <div id="moreInfo" v-if="picture">
        <div id="modal">
          <div id="modal-header">
            <h3>Consulted picture</h3> 
            <button id="btn-close" @click="$emit('close')">X</button>
        </div>
        <!--   modal body   -->
        <div class="modal-body">
        <h3><span>Picture title: </span>{{ picture.title | upperCase }}</h3>
        <h3><span>Picture id: </span>{{ picture.id }}</h3>
        </div>
        <img :src="picture.thumbnailUrl">
        <p></p>
      </div>
    </div>



    
    <!--  ****  USER MODAL  ****  -->
      <div id="moreInfo" v-if="user">
        <div id="modal">
          <div id="modal-header">
            <h3>Consulted User</h3> 
            <button id="btn-close" @click="$emit('close')">X</button>
        </div>
        <!--   modal body   -->
        <div class="modal-body">
        <h3><span>Name: </span>{{ user.name | upperCase }}</h3>
        <h3><span>Email: </span>{{ user.email }}</h3>
        <h3><span>Address: </span>{{ user.address.city }}</h3>
        </div>
        <p></p>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    props:['picture','user'],
      filters:{
    upperCase: function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }

}
</script>

<style>
#moreInfo{
  display:block;
  z-index: 2;
  background: rgba(0, 0, 0, 0.849);
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
} 
 #modal{
  border: 1px solid green;
  background: white;
  color: green;
  width:60%;
  margin: 0 auto;
  margin-top: 150px;
  padding: 2em;
}
#modal-header { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid green;
    padding: 10px;
}
.modal-body {
  padding: 10px;
  line-height: 2em;
}
.modal-body h3{
    display: flex;
    justify-content: space-between;
}

#btn-close {
    background: green;
    color: white;
    border: 1px solid green;
    padding: 8px;
}
</style>