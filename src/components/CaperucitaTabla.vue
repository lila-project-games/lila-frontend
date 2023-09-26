<script setup>
import { ref } from 'vue'
const characters = ref([
    {
        name: 'caperucita',
        image: "../public/images/caperucita.svg"
    },
    {
        name: 'lobo',
        image: "../public/images/lobo.svg"
    },
    {
        name: 'abuelita',
        image: "../public/images/abuelita.svg"
    },
    {
        name: 'cazador',
        image: "../public/images/cazador.svg"
    }
])
</script>
<template>
    <div id="container-table">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th class="thcabecera">¿CÓMO ES?</th>
                    <th class="thcabecera">OBJETO QUE LO IDENTIFICA</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="character in characters" :key="character.name">
                    <td class="imgcap">
                        <img :src="character.image" :alt="character.name">
                    </td>
                    <td>
                        <textarea class="textzone" :name="'como' + character.name" rows="3" :cols="'50'"
                            maxlength="145"></textarea>
                    </td>
                    <td>
                        <textarea class="textzone" :name="'objeto' + character.name" rows="3" cols="50"
                            maxlength="145"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
table {
    font-family: 'Itim', cursive;
    border: 0px;
    padding: 0;
    margin: 0;
    border-collapse: collapse;
}
textarea {
    resize: none;
    overflow: hidden;
    text-align: center;
}
td {
    border: 2px solid #8c52fe;
    margin: 0;
    padding: 0;
}
#container-table {
    display: flex;
    justify-content: center;
}
.imgcap {
    height: 150px;
    width: 150px;
}
.thcabecera {
    font-size: 1.5em;
    text-align: center;
    height: 50px;
    width: 400px;
}
.textzone {
    border: 0px;
    height: 150px;
    width: 400px;
    outline: none;
    text-align: center;
    font-size: 1.6em;
}
</style>