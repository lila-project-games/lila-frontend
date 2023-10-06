<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import FooterLila from "../components/FooterLila.vue";

// export default {

//     const name = ref("");
//     const school = ref("");
//     const router = useRouter();

//     const guardarDatos = async () => {
//       const datos = {
//         name: name.value,
//         school: school.value,
//       };

//       try {
//         console.log("Datos guardados:", datos);
//       } catch (error) {
//         console.error(error);
//       }
//       router.push({ name: "home" });
//     };

//     return {
//       name,
//       school,
//       guardarDatos,
//     };
// },
</script>

<template>
  <div class="header">
    <img src="../assets/header_home.svg" alt="Header" style="width: 100%" />
  </div>
  <div class="home">
    <h1>Ingresa tu nombre completo y el nombre de tu colegio para comenzar.</h1>
    <div class="container-fluid">
      <div class="container conten-form">
        <form>
          <fieldset disabled>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label">Nombre</label>
              <input type="text" id="disabledTextInput" class="form-control" />
            </div>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label">Colegio</label>
              <select id="disabledSelect" class="form-select"></select>
            </div>
            <button type="submit" class="btn btn-primary text-center">
              Empezar
            </button>
          </fieldset>
        </form>
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
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.home {
  background-image: url("../assets/fondo_page.svg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #fff;
  padding: 20px;
}
.header img {
  width: 100%;
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;
}
.home h1 {
  color: #8b52fe;
  font-size: 24px;
  margin-top: 20px;
  font-size: larger;
  font-family: "Luckiest Guy", cursive;
}
.container.conten-form {
  margin-top: 20px;
  max-width: 400px;
}

form {
  text-align: left;
  color: #8b52fe;
}
.form-label {
  font-weight: bold;
  height: 50%;
}
.form-control,
.form-select {
  width: 100%;
  padding: 6px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.btn-primary {
  background-color: hotpink;
  color: #fff;
  border: none;
  padding: 5px 20px;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
}
.btn-primary:hover {
  background-color: crimson;
}
</style>
