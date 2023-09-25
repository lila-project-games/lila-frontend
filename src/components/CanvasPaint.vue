<template>
    <div>
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const canvas = ref(null);
  const canvasWidth = ref(900);
  const canvasHeight = ref(600);
  const isPainting = ref(false);
  const activeTool = ref("brush");
  
  onMounted(() => {
    const ctx = canvas.value.getContext("2d");
  
    canvas.value.addEventListener("mousedown", onMouseDown);
    canvas.value.addEventListener("mousemove", onMouseMove);
    canvas.value.addEventListener("mouseup", onMouseUp);
  
    function draw(x, y) {
      ctx.globalCompositeOperation = "source-over";
      ctx.beginPath();
      ctx.arc(x - canvas.value.offsetLeft, y - canvas.value.offsetTop, brushSize.value / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    function erase(x, y) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(x - canvas.value.offsetLeft, y - canvas.value.offsetTop, brushSize.value / 2, 0, 2 * Math.PI);
      ctx.fill();
    }
  
    function onMouseDown(event) {
      isPainting.value = true;
  
      if (activeTool.value === "brush") {
        draw(event.clientX, event.clientY);
      }
  
      if (activeTool.value === "rubber") {
        erase(event.clientX, event.clientY);
      }
    }
  
    function onMouseMove(event) {
      if (isPainting.value) {
        if (activeTool.value === "brush") {
          draw(event.clientX, event.clientY);
        }
  
        if (activeTool.value === "rubber") {
          erase(event.clientX, event.clientY);
        }
      }
    }
  
    function onMouseUp() {
      isPainting.value = false;
    }
  });
  </script>
  
  
  <style>

canvas {
      background-color: white;
      border-radius: 8px;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  }
  
</style>


