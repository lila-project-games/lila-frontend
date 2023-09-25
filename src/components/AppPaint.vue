<template>
    <div class="container">
      <CanvasPaint
        :activeTool="activeTool"
        :brushSize="brushSize"
        @tool-selected="onToolSelected"
      />
      <ToolsPaint
        :activeTool="activeTool"
        :brushSize="brushSize"
        @tool-selected="onToolSelected"
        @size-selected="onSizeSelected"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import CanvasPaint from "../components/CanvasPaint.vue";
  import ToolsPaint from "../components/ToolsPaint.vue";
  
  // Define las propiedades reactivas usando 'ref'
  const activeTool = ref("brush"); // Herramienta activa, inicializada como "pincel"
  const brushSize = ref(20); // Tamaño del pincel, inicializado como 20
  
  // Métodos
  const onToolSelected = (tool) => {
    activeTool.value = tool; // Método para cambiar la herramienta activa
  };
  
  const onSizeSelected = (size) => {
    brushSize.value = size; // Método para cambiar el tamaño del pincel
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .container {
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  </style>
  