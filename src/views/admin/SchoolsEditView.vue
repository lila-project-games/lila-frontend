
<script setup>
import { onMounted, ref } from 'vue'
import SchoolService from '../../services/SchoolServices'

const isLoading = ref(true);
const isError = ref(false);
const errorMessage = ref("");
const showSuccessMessage = ref(false);

const school = ref({
    id: "",
    schoolName: "",
});

// Get article ID from path
const articleId = window.location.pathname.split("/").pop();

const getSchool = async (id) => {
    try {
        const response = await SchoolService.get(id);
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error("Error al obtener  colegios");
    }
}

const submitSchool = async (event) => {
    event.preventDefault();
    console.log("Enviando:" + school)
    try {
        const response = await SchoolService.update(school.value);
        console.log(response)
        if (response.data.success) {
            showSuccessMessage.value = true;
        }
    } catch (error) {
        isError.value = true;
        errorMessage.value = ref("error");
        throw new Error("Error al actualizar  colegio. error: " + error);
    }
}
// Called when the component is mounted (ready to be used)
onMounted(async () => {
    try {
        const response = await getSchool(articleId);
        school.value = response.data;
        isLoading.value = false;
    } catch (error) {
        errorMessage.value = error.message;
        isError.value = true;
    }
});


const redirectToDashBoard = () => {
    window.location.href = "/admin/schools";
};

</script>

<template>
    <!-- Menú lateral -->
    <div class="sidebar">
        <h2>Panel de Control</h2>
        <a href="/admin">Inicio</a>
        <a href="/admin/schools">Colegios</a>
        <a href="/admin/students">Estudiantes</a>
        <a href="/">salir</a>
    </div>
    <!-- Contenido principal -->
    <div class="content">
        <!-- Barra de navegación -->
        <nav class="navbar">
            <span class="navbar-brand">Mi Panel de Control Elegante</span>
        </nav>
        <div class="container">
            <form @submit="submitSchool">
                <div class="modal-header">
                    <h4 class="modal-title">Editar Colegio</h4>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label>ID</label>
                        <input type="text" class="form-control" v-model="school.id" disabled>
                    </div>
                    <div class="form-group">
                        <label>Nombre</label>
                        <input type="text" class="form-control" v-model="school.schoolName">
                    </div>
                </div>
                <div class="modal-footer">
                    <input type="button" class="btn btn-secondary" value="salir" @click="redirectToDashBoard">
                </div>
                <div class="modal-footer">
                    <input type="submit" class="btn btn-info" value="Save" @click="submitSchool">
                </div>
            </form>

            <div v-if="showSuccessMessage" class="alert alert-success" role="alert">
                Registro actualizado con exito!
            </div>
            <div v-if="isError" class="alert alert-danger" role="alert">
                error: {{ errorMessage }}
            </div>
        </div>
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
    background-color: #6c43e0;
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

body {
    color: #566787;
    background: #f5f5f5;
    font-family: 'Varela Round', sans-serif;
    font-size: 13px;
}

.table-responsive {
    margin: 30px 0;
}

.table-wrapper {
    background: #fff;
    padding: 20px 25px;
    border-radius: 3px;
    min-width: 1000px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
}

.table-title {
    padding-bottom: 15px;
    background: #435d7d;
    color: #fff;
    padding: 16px 30px;
    min-width: 100%;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}

.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}

.table-title .btn-group {
    float: right;
}

.table-title .btn {
    color: #fff;
    float: right;
    font-size: 13px;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}

.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}

.table-title .btn span {
    float: left;
    margin-top: 2px;
}

table.table tr th,
table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}

table.table tr th:first-child {
    width: 60px;
}

table.table tr th:last-child {
    width: 100px;
}

table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}

table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}

table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}

table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}

table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
    outline: none !important;
}

table.table td a:hover {
    color: #2196F3;
}

table.table td a.edit {
    color: #FFC107;
}

table.table td a.delete {
    color: #F44336;
}

table.table td i {
    font-size: 19px;
}

table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
}

.pagination {
    float: right;
    margin: 0 0 5px;
}

.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}

.pagination li a:hover {
    color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
    background: #03A9F4;
}

.pagination li.active a:hover {
    background: #0397d6;
}

.pagination li.disabled i {
    color: #ccc;
}

.pagination li i {
    font-size: 16px;
    padding-top: 6px
}

.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}

/* Custom checkbox */
.custom-checkbox {
    position: relative;
}

.custom-checkbox input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    margin: 5px 0 0 3px;
    z-index: 9;
}

.custom-checkbox label:before {
    width: 18px;
    height: 18px;
}

.custom-checkbox label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    background: white;
    border: 1px solid #bbb;
    border-radius: 2px;
    box-sizing: border-box;
    z-index: 2;
}

.custom-checkbox input[type="checkbox"]:checked+label:after {
    content: '';
    position: absolute;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    transform: inherit;
    z-index: 3;
    transform: rotateZ(45deg);
}

.custom-checkbox input[type="checkbox"]:checked+label:before {
    border-color: #03A9F4;
    background: #03A9F4;
}

.custom-checkbox input[type="checkbox"]:checked+label:after {
    border-color: #fff;
}

.custom-checkbox input[type="checkbox"]:disabled+label:before {
    color: #b8b8b8;
    cursor: auto;
    box-shadow: none;
    background: #ddd;
}

/* Modal styles */
.modal .modal-dialog {
    max-width: 400px;
}

.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
    padding: 20px 30px;
}

.modal .modal-content {
    border-radius: 3px;
    font-size: 14px;
}

.modal .modal-footer {
    background: #ecf0f1;
    border-radius: 0 0 3px 3px;
}

.modal .modal-title {
    display: inline-block;
}

.modal .form-control {
    border-radius: 2px;
    box-shadow: none;
    border-color: #dddddd;
}

.modal textarea.form-control {
    resize: vertical;
}

.modal .btn {
    border-radius: 2px;
    min-width: 100px;
}

.modal form label {
    font-weight: normal;
}
</style>










