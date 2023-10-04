<script setup>

    import PaintJs from '../components/PaintJs.vue';
    import CaperucitaText from '../components/CaperucitaText.vue';
    import CaperucitaTabla from '../components/CaperucitaTabla.vue'
</script>


<template> 

     <img src="../assets/cabecera_paint.svg" class="imgValue" alt=""> 
    <PaintJs></PaintJs>    
    <CaperucitaTabla class="tabla"/>
    <CaperucitaText></CaperucitaText>
   
</template>


<style scoped>
    .imgValue{
        width: 100%;
       
    }
@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');

h1{
    font-size: 2.8em;
    font-family: 'Luckiest Guy', cursive;
    text-align: center;
    color: #FF2F32;
}
</style>








