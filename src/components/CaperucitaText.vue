<template>
  <div class="storybook">
    <div class="outer-box">
      <div class="inner-box">
        <div class="title">
          ÉRASE UNA VEZ...
        </div>
        <div class="text-box">
          <div class="lines">
            <div class="line" v-for="line in lines" :key="line"></div>
          </div>
          <textarea class="story-text" v-model="text" @input="limitWordCount" rows="5" placeholder="Escribe tu historia aquí..."></textarea>
        </div>
      </div>
    </div>
    <button class="custom-button"><svg xmlns="http://www.w3.org/2000/svg" width="110" height="93" viewBox="0 0 110 93" fill="none">
      <ellipse cx="55" cy="46.5" rx="55" ry="46.5" fill="#8C52FF"/>
      <path d="M70.5 35.5H35.5C31.35 35.5 28 38.85 28 43V53C28 55.75 30.25 58 33 58H38V63C38 65.75 40.25 68 43 68H63C65.75 68 68 65.75 68 63V58H73C75.75 58 78 55.75 78 53V43C78 38.85 74.65 35.5 70.5 35.5ZM60.5 63H45.5C44.125 63 43 61.875 43 60.5V50.5H63V60.5C63 61.875 61.875 63 60.5 63ZM70.5 45.5C69.125 45.5 68 44.375 68 43C68 41.625 69.125 40.5 70.5 40.5C71.875 40.5 73 41.625 73 43C73 44.375 71.875 45.5 70.5 45.5ZM65.5 23H40.5C39.125 23 38 24.125 38 25.5V30.5C38 31.875 39.125 33 40.5 33H65.5C66.875 33 68 31.875 68 30.5V25.5C68 24.125 66.875 23 65.5 23Z" fill="#FFFD54"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.storybook {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.outer-box {
  border: 2px solid yellow;
  border-radius: 10px;
  width: 1152px;
  height: 629px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  padding: 0px 20px 0px 20px; 
  position: relative;
}

.inner-box {
  border-radius: 10px;
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
}

.title {
  font-family: 'Luckiest Guy', cursive;
  font-size: 36px;
  width: 685px;
  height: 108px;
  color: white;
  background-color: #B88CF0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.text-box {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 20px 0px 50px 0px;
}

.lines {
  position: absolute;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 20px;
  pointer-events: none;
}

.line {
  width: 100%;
  height: 20px;
  background-color: transparent;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 18px,
    #ccc 18px,
    #ccc 20px
  );
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
  position: absolute;
  bottom: 160px;
  right: 240px;
  background: none;
  border: none;
}

@media print {

  @page {
    margin: 0;
  }
  
  #izquierda {
    width: 19cm;
    margin: auto;
  }

  #footer {
    display: none;
    font-size: 10pt;
  }

  .custom-button {
    display: none;
  }
}

</style>

<script>

</script>
