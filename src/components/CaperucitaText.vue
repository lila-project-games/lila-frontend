<template>
    <img src="../assets/header3.svg" class="imgValue" alt="Header Caperucita"> 
    <div class="outer-box">
      <div class="title">
          ÉRASE UNA VEZ...
      </div>
      <textarea class="story-text" rows="5" placeholder="Escribe tu historia aquí..."></textarea>
    </div>
    <button class="custom-button">
      <img src="../assets/printButton.svg">
    </button>
</template>

<style scoped>
.outer-box {
  border: 2px solid yellow;
  border-radius: 10px;
  width: 1152px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0px 20px 0px 20px; 
  position: relative;
  left: 110px
}

.title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 36px;
  width: 685px;
  height: 108px;
  color: white;
  background-color: #8B52FE;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-size: 16px;
  font-family: 'Luckiest Guy', cursive;
  resize: none; 
  outline: none;
  overflow-y: hidden;
}

.custom-button {
  bottom: 60px;
  margin-top: 2%;
  margin-left: 45%; 
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>