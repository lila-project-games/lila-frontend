<script setup>
  import { ref, onMounted, computed, watchEffect } from 'vue';
  
  const canvas = ref(null);
  const ctx = ref(null);
  const inputColor = ref('#000');
  const brushSize = ref(20);
  const isPainting = ref(false);
  const activeTool = ref('brush');

  const personBg = ref('');
  const backBg = ref('');
  const personDisab = ref();
  const backDisab = ref();

  const selectPerson = (value) => {
    personBg.value = value;
    personDisab.value = true;
  }

  const selectBackground = (valueBg) => {
    backBg.value = valueBg;
    backDisab.value = true;
  }

  const saveBttn = () => {
    let dataURL = canvas.value.toDataURL("image/png");
    let enlace = document.createElement("a");
    enlace.href = dataURL;
    enlace.download = "mi_imagen.png";
    enlace.click();
  }

  const personSrc = computed(() => {
    if (personBg.value !== ''){
      return `/public/personajes/persona${personBg.value}.svg`
    }   
  });

  const fondoSrc = computed(() => {
    if (backBg.value !== ''){
    return `/public/escenas/escena${backBg.value}.svg`
    }
  });

  onMounted(() => {
    const canvasElement = canvas.value;
    if (!canvasElement) {
      console.error("No se pudo encontrar el elemento canvas.");
      return;
    }
    
    ctx.value = canvasElement.getContext("2d");
 
     //imagen de fondo
      const loadBackgroundImage = () => {
        let fondo = new Image();
        fondo.src = fondoSrc.value;
        fondo.onload = function() {   
          ctx.value.drawImage(fondo, 0, 0, canvasElement.width, canvasElement.height);
        };
      };
      watchEffect(() => {loadBackgroundImage()});


     // pesonaje
     const loadPersonImage = () => {
       let person = new Image();
       person.src = personSrc.value; 
       person.onload = function() {
         ctx.value.drawImage(person, 350, 100, 400, 400); 
        };
      };
      watchEffect(() => {loadPersonImage()}); 

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
    backDisab.value = false;
    personDisab.value = false;
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


    <section class="containerButtons">
      <div class="backBtn">
          <button @click="selectBackground(1)" :disabled="backDisab" class="backBtn1"></button>
          <button @click="selectBackground(2)" :disabled="backDisab" class="backBtn2"></button>
          <button @click="selectBackground(3)" :disabled="backDisab" class="backBtn3"></button>
          <button @click="selectBackground(4)" :disabled="backDisab" class="backBtn4"></button>
      </div>
      <div class="saveBtn">
          <button @click="saveBttn">GUARDAR</button>
      </div>
      <div class="personBtn">
          <button @click="selectPerson(1)" :disabled="personDisab" class="personBtn1"></button>
          <button @click="selectPerson(2)" :disabled="personDisab" class="personBtn2"></button>
          <button @click="selectPerson(3)" :disabled="personDisab" class="personBtn3"></button>
          <button @click="selectPerson(4)" :disabled="personDisab" class="personBtn4"></button>
      </div>
    </section>

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
      min-height:55vh;
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

  .containerButtons {
    display: flex;
    justify-content: space-around;
    margin-top: 5vh;
}

.personBtn{   
    height: 100px;
  
}

 .personBtn button {
    height:80px;
    width: 150px;
    background-size:contain;
    margin-left: 10px;
    border-color: #000000;
}  

.backBtn button {
    height:80px;
    width: 150px;
    margin-left: 10px;
    border-color: #000000;
}  

.saveBtn button{
    height:80px;
    width: 150px;
    background-color: #8B52FE;
    color: white;
    font-size: large;
    font-weight: bold;
    border-radius: 10%;
    margin-left: 10px;
}
.personBtn1{
  background-image: url('../public/personajes/caperucitaColor.svg');
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
}
.personBtn2{
  background-image: url('../public/personajes/abuelitaColor.svg');
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
}
.personBtn3{
  background-image: url('../public/personajes/loboColor.svg');
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
}
.personBtn4{
  background-image: url('../public/personajes/cazadorColor.svg');
  background-size:contain;
  background-repeat: no-repeat;
  background-position: center;
}

.backBtn1{
  background-image: url('../public/escenas/escena1Color.svg');
  background-size: cover;
}
.backBtn2{
  background-image: url('../public/escenas/escena2Color.svg');
  background-size: cover;
}
.backBtn3{
  background-image: url('../public/escenas/escena3Color.svg');
  background-size: cover;
}
.backBtn4{
  background-image: url('../public/escenas/escena4Color.svg');
  background-size: cover;
}

</style>