<script>
export default {
  name: "InputName",
  data() {
    return {
      inputValue: "",
    };
  },
};
</script>
<template>
  <div class="container">
    <div class="input-container">
      <input
        type="text"
        placeholder="Nombre:"
        v-model="inputValue"
        class="custom-input"
      />
    </div>
  </div>
</template>

<style scoped>
.container {
  background-size: cover;
  position: relative;
  padding-bottom: 50px;
}
.input-container {
  display: flex;
  justify-content: le;
  align-items: flex-end;
  height: 100%;
}

.custom-input {
  position: absolute;
  bottom: 0;
  left: 10;
  width: 200px;
  padding: 10px;
  background-color: rgb(208, 163, 247);
  border: 2px solid #f2ecf2;
  border-radius: 25px;
  color: #020202;
}
</style>
