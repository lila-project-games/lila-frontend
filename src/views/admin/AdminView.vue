
<script setup>

</script>




<template>
    <!-- Menú lateral -->
    <div class="sidebar">
        
        <a href="/admin">Inicio</a>
        <a href="/admin/schools">Centro Educativo</a>
        <a href="/admin/students">Alumnado</a>
        <a href="/">Salir</a>
    </div>

    <!-- Contenido principal -->
    <div class="content">
        <!-- Barra de navegación -->
        <!-- <nav class="navbar">
           <span class="navbar-brand">Mi Panel de Control Elegante</span> 
        </nav>-->

        <!-- Contenido del panel de control -->
        <h1>Panel de Control</h1>
        <p>Panel de administracion para la gestión de centros educativos y alumnado</p>
    </div>
</template>

<style scope>
/* Estilo para el menú lateral */
.sidebar {
    height: 100%;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgb(139,83,255);
    /* Púrpura neón */
    padding-top: 20px;
    transition: 0.3s;
}

/* Estilo para los elementos del menú */
.sidebar a {
    padding: 15px;
    text-decoration: none;
    font-size: 18px;
    color: #fff;
    display: block;
    transition: 0.3s;
}

/* Cambiar color de enlace al pasar el mouse */
.sidebar a:hover {
    background-color: #4b2a9a;
    /* Púrpura neón más oscuro al pasar el mouse */
}

/* Estilo para el contenido principal */
.content {
    margin-left: 250px;
    padding: 20px;
    transition: margin-left 0.3s;
}

/* Estilo para la barra de navegación */
.navbar {
    background-color: #4b2a9a;
    /* Púrpura neón más oscuro */
    color: #fff;
}

/* Cambiar color de la barra de navegación al hacer scroll hacia abajo */
.navbar.scrolled {
    background-color: #6c43e0;
    /* Púrpura neón */
    transition: 0.3s;
}
</style>










