<script setup>
import swal from 'sweetalert';
import { useRouter } from 'vue-router';
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
]);

const router = useRouter();

const isitTrue = (campo) => {
    return ((campo == null) || (campo.length === 0)) ? false : true;
}

const validate=()=>{
    let comocaperucita = document.getElementById("comocaperucita").value;
    let objetocaperucita = document.getElementById("objetocaperucita").value;
    let comolobo = document.getElementById("comolobo").value;
    let objetolobo = document.getElementById("objetolobo").value;
    let comoabuelita = document.getElementById("comoabuelita").value;
    let objetoabuelita = document.getElementById("objetoabuelita").value;
    let comocazador = document.getElementById("comocazador").value;
    let objetocazador = document.getElementById("objetocazador").value;  
    let comocaperucitaBln, objetocaperucitaBln, comoloboBln,objetoloboBln,comoabuelitaBln, objetoabuelitaBln, comocazadorBln, objetocazadorBln;   
    comocaperucitaBln=isitTrue(comocaperucita);
    objetocaperucitaBln=isitTrue(objetocaperucita);
    comoloboBln=isitTrue(comolobo);
    objetoloboBln=isitTrue(objetolobo);  
    comoabuelitaBln=isitTrue(comoabuelita);
    objetoabuelitaBln=isitTrue(objetoabuelita);
    comocazadorBln=isitTrue(comocazador);
    objetocazadorBln=isitTrue(objetocazador);

    if(comocaperucitaBln && objetocaperucitaBln && comoloboBln && objetoloboBln && comoabuelitaBln && objetoabuelitaBln && comocazadorBln && objetocazadorBln){
        router.push('/paint');
    } else {     
        swal ( "Oops" ,  "Se te olvida rellenar algun campo" ,  "error" )
    }
}
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
                    <td class="imgcap" id="forimg">
                        <object :data="character.image"></object>
                    </td>
                    <td>
                        <textarea class="textzone" :id="'como' + character.name" :name="'como' + character.name" rows="3" :cols="'50'"
                            maxlength="135"></textarea>
                    </td>
                    <td>
                        <textarea class="textzone" :id="'objeto' + character.name" :name="'objeto' + character.name" rows="3" cols="50"
                            maxlength="135"></textarea>
                    </td>
                </tr>
            </tbody>
        </table>
        <button id="btnCap" class="buttonDiv" value="guardar"  @click="validate()">Guardar</button>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,800&display=swap");

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
    margin: 4px;
    padding: 0;
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
object {
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
#btnCap{
    font-family: "OpenSans", cursive;
    /* margin-left: 40%; */
    background-color: crimson;
    color: #fff;
    border: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    cursor: pointer;

}
#btnCap:hover{
    background-color: rgb(143, 15, 38);
    color: #fff;
}
.buttonDiv{
    position: fixed; 
    bottom: 20px; 
    right: 20px; 
    z-index: 999;
}
.modal {
    position: fixed;
    z-index: 99;
    top: 20%;
    left: 50%;
    width: 300px;
    margin-left: -150px;
}
</style>