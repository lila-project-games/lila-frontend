<script setup>
import FooterLila from "../components/FooterLila.vue";
import InputName from "../components/InputName.vue";
import NextButton from "../components/NextButton.vue";
</script>

<template>
  <div>
    <h1>Caperucita</h1>
  </div>
  <div>
    <NextButton @nextPage="handleNextPage" />
    <InputName />
  </div>

  <div>
    <FooterLila />
  </div>
</template>

<style scoped></style>
