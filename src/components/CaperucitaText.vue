<script setup>
import { useRouter } from 'vue-router';
import ApiConnection from '../services/ApiConnection';
import { ref } from 'vue'

const router = useRouter();

const isitTrue = (campo) => {
    return ((campo == null) || (campo.length === 0)) ? false : true;
}

const validate=()=>{
    let history = document.getElementById("history").value;
    let historyBln;   
    historyBln=isitTrue(history);
    if(historyBln){
      localStorage.setItem('story', history);
        addUser(history);
        router.push('/theEnd');
    } else {     
        swal ( "Oops" ,  "No se te olvida escribir algo" ,  "error" );
    }
}

//conexion

const story = ref("");

 async function addUser(history) {
    try {
      let name =  localStorage.getItem('Name');
      let school =  localStorage.getItem('School')
      let riding_hood_how =  localStorage.getItem('riding_hood_how')
      let riding_hood_obj =  localStorage.getItem('riding_hood_obj')
      let wolf_how =  localStorage.getItem('wolf_how')
      let wolf_obj =  localStorage.getItem('wolf_obj')
      let granny_how =  localStorage.getItem('granny_how')
      let granny_obj =  localStorage.getItem('granny_obj')
      let hunter_how =  localStorage.getItem('hunter_how')
      let hunter_obj =  localStorage.getItem('hunter_obj')
      let drawridinghood =  localStorage.getItem('drawridinghood')
      let story =  localStorage.getItem('story')
         const user = {
             studentId: null,
             story: story,
             ridingHoodHow: riding_hood_how,
             ridingHoodObj: riding_hood_obj,
             wolfHow: wolf_how,
             wolfObj: wolf_obj,
             grannyHow: granny_how,
             grannyObj: granny_obj,
             hunterHow: hunter_how,
             hunterObj: hunter_obj,
             drawRidingHood: drawridinghood             
          }; 

           
            let users =JSON.stringify(user)
            console.log(users)
            const response = await ApiConnection.addUser(users, {
  headers: {
    'Content-Type': 'application/json'
  }
});
       
    }catch (error) {
      console.error("Error al agregar story:", error);
  }
}


</script>
<template>
    <div class="outer-box">
      <div class="title">
          ÉRASE UNA VEZ...
      </div>
      <textarea id='history' class="story-text" v-model="story" rows="5" placeholder="Escribe tu historia aquí..."></textarea>
    </div>
      <button id="btnCap" type="submit" class="buttonDiv" @click="validate()">Guardar</button>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Luckiest+Guy&family=Montserrat:wght@100&family=Open+Sans:ital,wght@1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&display=swap");
.outer-box {
  border: 2px solid rgb(139,83,255);
  border-radius: 25px;
  width: 90%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0px 20px 0px 20px; 
  position: relative;
  left: 10px
}

.title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 36px;
  width: 480px;
  height: 100px;
  color: white;
  background-color: rgb(139,83,255);
  text-align: center;
  line-height: 100px;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.story-text {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 8px;
  padding: 10px;
  font-size: 1.2em;
  font-family: "OpenSans", cursive;
  resize: none; 
  outline: none;
  overflow-x:  auto;
  overflow-y: scroll;
  color: black;
}

#btnCap{
    font-family: "OpenSans", cursive;
    background-color: crimson;
    color: #fff;
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;
}

#btnCap:hover{
    background-color: rgb(143, 15, 38);
    color: #fff;
}
.buttonDiv{
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    z-index: 999;
}
</style>