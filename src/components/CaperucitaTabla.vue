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
                    <td class="imgcap" id="forimg">
                        <!--<img :src="character.image" :alt="character.name">-->
                        <!--Se cambio por object ya que a la hora de realizar la impresion de la anterior forma no cargaban las imagenes-->
                        <object :data="character.image"></object>
                    </td>
                    <td>
                        <textarea class="textzone" :name="'como' + character.name" rows="3" :cols="'50'"
                            maxlength="135"></textarea>
                    </td>
                    <td>
                        <textarea class="textzone" :name="'objeto' + character.name" rows="3" cols="50"
                            maxlength="135"></textarea>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td></td>
                    <td></td>
                    <td><button  id="printButton" value="Imprimir" onclick="javascript:window.print()">Imprimir</button></td>
                </tr>
            </tfoot>
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
#printButton{
    text-align: center;
    border: none;
    background-color: #8c52fe;
    width: 125px;
    height: 125px;
    font-size: 1.6em;
    border-radius: 50%;
    color:white;
    font-weight: bold;

}
#printButton:hover{
    border:2px solid #8c52fe;
    background-color: white;
    color: #8c52fe;
}
#buttonDiv{
    border: 2px solid black;
    display: flex;
    justify-content: center;
    
}
@media print{   
    /*Quitar el header y footer por defecto en la impresion desde el navegador, @page y body*/  
        @page{
            margin: 0;
        }
    
        body{
            margin:1.6cm;
        }
    /*Se especifican todos los tamaños anteriores, modificando el tamaño a cm de cara a una impresion en DINA4*/  
        h1{
            font-size: 10pt;
        }
        table{
            width: 18cm;
            height: 22cm;
            margin: auto;
        }
        .thcabecera {
            font-size: 12pt;
            text-align: center;
            height: 2cm;
            width: 7cm;
}
        .textzone {
            border: 0px;
            height: 5cm;
            width: 7cm;
            outline: none;
            text-align: center;
            font-size: 14pt;
}
        object{
            height: 5cm;
            width: 4cm;
        }
        #printButton{
            display:none;
        }
    }
</style>