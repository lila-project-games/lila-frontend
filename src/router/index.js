import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: '/caperucita',
      name: 'caperucita',
      component: () => import('../views/Caperucita.vue')
    },
    {
      path: '/paint',
      name: 'paint',
      component: () => import('../views/PaintView.vue')
    },
    {
      path: '/text',
      name: 'text',
      component: () => import('../views/TextView.vue')
    },
    {
      path: '/theEnd',
      name: 'theEnd',
      component: () => import('../views/TheEndView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/AdminView.vue')
    },
    {
      path: '/admin/schools',
      name: 'colegios',
      component: () => import('../views/admin/SchoolsView.vue')
    },
    {
      path: '/admin/schools/edit/:id',
      name: 'editar-colegio',
      component: () => import('../views/admin/SchoolsEditView.vue')
    },
    {
      path: '/admin/schools/new',
      name: 'nuevo-colegio',
      component: () => import('../views/admin/SchoolsNewView.vue')
    },
    {
      path: '/admin/students',
      name: 'students-list',
      component: () => import('../views/admin/StudentsView.vue'),
    },
    {
      path: '/admin/students/by/school/:id',
      name: 'students-list-by-school',
      component: () => import('../views/admin/StudentsBySchoolView.vue'),
    },
  ]
})


export default router;
