<script setup>
  import { ref, onMounted } from 'vue';
  
  const canvas = ref(null);
  const ctx = ref(null);
  const inputColor = ref('#000');
  const brushSize = ref(20);
  const isPainting = ref(false);
  const activeTool = ref('brush');
  
  onMounted(() => {
    const canvasElement = canvas.value;
    if (!canvasElement) {
      console.error("No se pudo encontrar el elemento canvas.");
      return;
    }
    
    ctx.value = canvasElement.getContext("2d");
  });
  
  const onCanvasMouseDown = (event) => {
    isPainting.value = true;
    if (activeTool.value === "brush") {
      draw(event.clientX, event.clientY);
    }
    if (activeTool.value === "rubber") {
      erase(event.clientX, event.clientY);
    }
  };
  
  const onCanvasMouseMove = (event) => {
    if (isPainting.value) {
      if (activeTool.value === "brush") {
        draw(event.clientX, event.clientY);
      }
      if (activeTool.value === "rubber") {
        erase(event.clientX, event.clientY);
      }
    }
  };
  
  const onCanvasMouseUp = () => {
    isPainting.value = false;
  };
  
  const draw = (x, y) => {
    ctx.value.globalCompositeOperation = "source-over";
    ctx.value.beginPath();
    ctx.value.arc(x - canvas.value.offsetLeft, y - canvas.value.offsetTop, brushSize.value / 2, 0, 2 * Math.PI);
    ctx.value.fillStyle = inputColor.value;
    ctx.value.fill();
  };
  
  const erase = (x, y) => {
    ctx.value.globalCompositeOperation = "destination-out";
    ctx.value.beginPath();
    ctx.value.arc(x - canvas.value.offsetLeft, y - canvas.value.offsetTop, brushSize.value / 2, 0, 2 * Math.PI);
    ctx.value.fill();
  };
  
  const selectTool = (tool) => {
    activeTool.value = tool;
  };
  
  const selectSize = (size) => {
    brushSize.value = size;
  };
  
  const changeColor = (color) => {
    inputColor.value = color;
  };
  
  const clearCanvas = () => {
    ctx.value.clearRect(0, 0, canvas.value.width, canvas.value.height);
  };
  </script>

<template>
    <div>
      <section class="containerPaint">
        <canvas ref="canvas" width="900" height="500" @mousedown="onCanvasMouseDown" @mousemove="onCanvasMouseMove" @mouseup="onCanvasMouseUp"></canvas>
  
        <div>
          <section class="tool-box">
            <button class="button__tool active" data-action="brush" @click="selectTool('brush')">
              <span class="material-symbols-outlined">brush</span>
            </button>
  
            <button class="button__tool" data-action="rubber" @click="selectTool('rubber')">
              <span class="material-symbols-outlined">ink_eraser</span>
            </button>
  
            <button class="button__tool">
              <input type="color" class="input__color" @change="changeColor($event.target.value)">
            </button>
          </section>
  
          <section class="tool-box">
            <button class="button__size" data-size="5" @click="selectSize(5)">
              <span class="stroke"></span>
            </button>
  
            <button class="button__size" data-size="10" @click="selectSize(10)">
              <span class="stroke"></span>
            </button>
  
            <button class="button__size active" data-size="20" @click="selectSize(20)">
              <span class="stroke"></span>
            </button>
  
            <button class="button__size" data-size="30" @click="selectSize(30)">
              <span class="stroke"></span>
            </button>
          </section>
  
          <section class="tool-box">
            <button class="button__tool button__clear" @click="clearCanvas">
              <span class="material-symbols-outlined">delete</span>
            </button>
          </section>
        </div>
      </section>
    </div>
  </template>
  
  
  
  
  <style scoped>
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      background-color: #d8d8e1;
  }
  
  canvas {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
  
  .containerPaint {
      width: 100%;
      min-height:60vh;
      display: flex;
      align-items: center;
      justify-content: center;
  }
  
  .tool-box {
      width: 110px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
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