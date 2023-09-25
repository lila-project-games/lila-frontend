<template>
    <div>
      <section class="tool-box">
        <button
          class="button__tool"
          :class="{ active: activeTool === 'brush' }"
          @click="selectTool('brush')"
        >
          <span class="material-symbols-outlined">brush</span>
        </button>
  
        <button
          class="button__tool"
          :class="{ active: activeTool === 'rubber' }"
          @click="selectTool('rubber')"
        >
          <span class="material-symbols-outlined">ink_eraser</span>
        </button>
  
        <button class="button__tool">
          <input type="color" class="input__color" v-model="currentColor" />
        </button>
      </section>
  
      <section class="tool-box">
        <button
          class="button__size"
          :class="{ active: brushSize === 5 }"
          @click="selectSize(5)">
          <span class="stroke"></span>
        </button>
        <button
          class="button__size"
          :class="{ active: brushSize === 10 }"
          @click="selectSize(10)">
          <span class="stroke"></span>
        </button>
        <button
          class="button__size"
          :class="{ active: brushSize === 20 }"
          @click="selectSize(20)">
          <span class="stroke"></span>
        </button>
        <button
          class="button__size"
          :class="{ active: brushSize === 30 }"
          @click="selectSize(30)">
          <span class="stroke"></span>
        </button> 
      </section>
  
      <section class="tool-box">
        <button class="button__tool button__clear" @click="clearCanvas">
          <span class="material-symbols-outlined">delete</span>
        </button>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps, defineEmits } from "vue";
  
  const currentColor = ref("#000");
  
  // Recibe las propiedades del componente principal
  const { props } = defineProps(["activeTool", "brushSize"]);
  const { emit } = defineEmits(["tool-selected", "size-selected"]);
  
  function selectTool(tool) {
    emit("tool-selected", tool);
  }
  
  function selectSize(size) {
    emit("size-selected", size);
  }
  
  function clearCanvas() {
    // Implementa la lógica para borrar el lienzo
  }
  </script>
  
  
  <style scoped>

  
  body {
      background-color: #d8d8e1;
  }
  
 

  
  .tool-box {
      width: 110px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
      margin-left: 40px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 20px;
  }
  
  .button__tool,
  .button__size {
      height: 45px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: none;
  }
  
  .button__tool > span {
      font-size: 1.8rem;
  }
  
  .button__tool:hover,
  .button__size:hover {
      background-color: #f2f2f2;
  }
  
  .input__color {
      width: 45px;
      height: 45px;
      border: none;
      background: none;
      cursor: pointer;
      padding: 5px 7px;
  }
  
  .input__color::-webkit-color-swatch {
      border-radius: 100px;
  }
  
  .button__size {
      padding: 10px;
      height: auto;
  }
  
  .button__size > span {
      width: 100%;
      background-color: #000;
      border-radius: 100px;
      display: block;
  }
  
  .button__size[data-size="5"] > span {
      height: 5px;
  }
  
  .button__size[data-size="10"] > span {
      height: 10px;
  }
  
  .button__size[data-size="20"] > span {
      height: 20px;
  }
  
  .button__size[data-size="30"] > span {
      height: 30px;
  }
  
  .active {
      background-color: #f2f2f2;
  }
  </style>
  