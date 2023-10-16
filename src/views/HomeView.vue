<script setup>
import { ref, onMounted } from "vue";
import { RouterLink } from "vue-router";
import SchoolService from '../services/SchoolServices';
import FooterLila from "../components/FooterLila.vue";
const schools = ref([]);
const selectedSchool = ref("");

onMounted(async () => {
  try {
    const response = await SchoolService.list();
    schools.value = response.data.data;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las escuelas");
  }
});

const insertName = () => {
  localStorage.removeItem('Name');
  const selectedSchool = document.getElementById('selectOptions');
  console.log(document.getElementById('textInput').value);
  localStorage.setItem('Name', document.getElementById('textInput').value);
  localStorage.setItem('School', selectedSchool.value);
};
</script>


<template>
  <div id="container">
    <div class="header">
      <img src="../assets/headhome.svg" alt="Header" />
    </div>
    <div id="containerHome">
      <div class="home">
        <h1>Ingresa tu nombre completo y el nombre de tu colegio para comenzar.</h1>
        <div class="container-fluid">
          <div class="container conten-form">
            <form>
              <label for="textInput" class="form-label">Nombre</label>
              <input type="text" id="textInput" class="form-control" />
              <label for="selectOptions" class="form-label">Colegio</label>
              <select id="selectOptions" class="form-select" v-model="selectedSchool">
                <option value="">Selecciona un colegio</option>
                <option v-for="school in schools" :key="school.id" :value="school.schoolName">{{ school.schoolName }}</option>
              </select>
              <RouterLink to="/caperucita">
                <button type="submit" @click="insertName()" class="btn">Empezar</button>
              </RouterLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <FooterLila />
</template>






<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Courgette&family=Luckiest+Guy&family=Montserrat:wght@100&family=Open+Sans:ital,wght@1,800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@200&display=swap");
* {
  margin: 0%;
  padding: 0%;
}
body {
  margin: 0;
  padding: 0;
}
#container{
  background-image: url("../assets/background_page.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  min-height: 100vh; 
}

#containerHome{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.home {
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 25px;
  padding: 20px 0;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

}
.header img {
  width: 100%;
  max-width: 100%;
  height: auto;
}
.home h1 {
  color: #8b52fe;
  font-size: 24px;
  margin-top: 20px;
  font-family: "Luckiest Guy", cursive;
}
.container.conten-form {
  margin-top: 20px;
  max-width: 500px;
}

form {
  text-align: left;
  color: #8b52fe;

}
.form-label {
  font-weight: bold;
  /* height: 50%; */
}
.form-control,
.form-select {
  width: 100%;
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
}


.btn {
    text-align: center;
    font-family: "OpenSans", cursive;
    margin-top:3%;
    margin-left: 40%;
    background-color: crimson;
    color: #fff;
    border: none;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    cursor: pointer;
}
.btn:hover {
    background-color: rgb(143, 15, 38);
    color: #fff;
}
</style>
