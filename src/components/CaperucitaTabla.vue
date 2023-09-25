<script>
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
    <tr>
        <td class="imgcap">
            <img src="../assets/images/caperucita.svg" alt="caperucita">
        </td>
        <td>
            <textarea class="textzone" name="comoCaperucita" rows="3" cols="50" maxlength="145">
            </textarea> 

        </td>
        <td>
            <textarea class="textzone" name="objetoCaperucita" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
    </tr>
    <tr>
        <td class="imgcap">
            <img src="../assets/images/lobo.svg" alt="lobo">
        </td>
        <td>
            <textarea class="textzone" name="comoLobo" rows="3" cols="50" maxlength="145">
            </textarea>        
        </td>
        <td>
            <textarea class="textzone" name="obejetoLobo" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
    </tr>
    <tr>
        <td class="imgcap">
            <img src="../assets/images/abuelita.svg" alt="abuelita">
        </td>
        <td>
            <textarea class="textzone" name="comoAbuelita" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
        <td>
            <textarea class="textzone" name="objetoAbuelita" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
    </tr>
    <tr>
        <td class="imgcap">
            <img src="../assets/images/cazador.svg" alt="cazador">
        </td>
        <td>
            <textarea class="textzone" name="comoCazador" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
        <td>
            <textarea class="textzone" name="objetoCazador" rows="3" cols="50" maxlength="145">
            </textarea> 
        </td>
    </tr>

</tbody>

</table>
</div>



</template>




<style>
@import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');


table{
    
    font-family: 'Itim', cursive;
    border: 0px;
    padding:0; 
    margin:0;
    border-collapse: collapse;
    
}

textarea{
    resize:none;
    overflow:hidden;
    text-align: center;
}
td{
    border: 2px solid #8c52fe;
    margin: 0;
    padding: 0;
}

#container-table{
   display: flex;
   justify-content: center;
}
.imgcap{
   
    height: 150px;
    width: 150px;
}

.thcabecera{
    font-size: 1.5em;
    text-align: center;
    height: 50px;
    width: 400px;
}
.textzone{
border: 0px;
 height: 150px;
 width: 400px;   
 outline: none;
 text-align: center;
 font-size: 1.6em;
}
</style>