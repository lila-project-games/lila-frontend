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
      <img
        src="../assets/lila_transp.png"
        alt="Logo Lila"
        class="lila_transp"
      />
      <h4>&copy; {{ currentYear }} Copyright: Proyecto Lila</h4>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #b88cf0;
  padding: 5px;
  text-align: center;
  align-items: center;
  position: fixed;
  bottom: 0%;
  width: 100%;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.2);
}
.container_h4 {
  display: flex;
  align-items: center;
  color: white;
}
.h4 {
  margin: 0%;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lila_transp {
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
}
</style>
