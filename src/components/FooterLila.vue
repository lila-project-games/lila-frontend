<script>
export default {
  name: "FooterLila",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container_h4">
      <img src="../assets/logoLila.png" alt="Logo Lila" class="lila_transp" />
      <h4> &nbsp;{{ currentYear }} &copy; Proyecto Lila</h4>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: rgb(139,83,255);
  padding: 10px;
  text-align: center;
  align-items: center;
  position: fixed;
  bottom: 0%;
  width: 100%;

}
.container_h4 {
  display: flex;
  align-items: center;
  color: white;
}
h4 {
  margin: 0%;
  font-size: 1.1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lila_transp {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
}
</style>
