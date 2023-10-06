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
    }
  ]
})


export default router;
