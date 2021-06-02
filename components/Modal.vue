<template>
<div>
    <!--  ****  PICTURE MODAL  ****  -->
     <div id="moreInfo" v-if="picture">
        <div id="modal">
          <div id="modal-header">
            <h3>CONSULTED PICTURE</h3> 
            <button id="btn-close" @click="$emit('close')">X</button>
        </div>
        <!--   modal body   -->
        <div class="modal-body">
        <h3><span>Picture id: </span>{{ picture.id }}</h3>
        <h3><span>Picture title: </span>"{{ picture.title | upperCase }}"</h3>
        
        </div>
        <img :src="picture.thumbnailUrl">
        <p></p>
      </div>
    </div>



    
    <!--  ****  USER MODAL  ****  -->
      <div id="moreInfo" v-if="user">
        <div id="modal">
          <div id="modal-header">
            <h3>CONSULTED USER</h3> 
            <button id="btn-close" @click="$emit('close')">X</button>
        </div>
        <!--   modal body   -->
        <div class="modal-body">
        <h3><span>Name: </span>{{ user.name | upperCase }}</h3>
        <h3><span>Username: </span>{{ user.username }}</h3>
        <h3><span>Email: </span>{{ user.email }}</h3>
        <h3><span>City: </span>{{ user.address.city }}</h3>
        <h3><span>Street: </span>{{ user.address.street }}</h3>
        <h3><span>Number: </span>{{ user.address.suite }}</h3>
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
  border: 2px solid #a4161a;
  width:40%;
  margin: 0 auto;
  margin-top: 10em;
  padding: 1em;
  border-radius:4px;
  background-color: rgba(39, 37, 37, 0.959);
 }
#modal-header { 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #a4161a;
    padding: 10px;
}
.modal-body {
  padding: 10px;
  line-height: 2em;
  text-align: left;
}
.modal-body h3 {
  margin: 1em;
  border-bottom: 1px solid #a4161a;
}
.modal-body h3 span{
   color: #a4161a;
   margin-right: 1em;
}

#btn-close {
    background:black;
    color: #a4161a;
    border: 1px solid #a4161a;
    padding: 1em;
    border-radius: 4px;
}
#btn-close:hover {
background:#a4161a;
    color: black;
    border: 1px solid black;
}
</style>