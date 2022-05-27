import VueRouter, { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Billboard from "../views/Billboard.vue";
import NewMovies from "../views/NewMovies.vue";
import Populars from "../views/Populars.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/acerca-de",
    name: "About",
    component: About,
  },
  {
    path: "/cartelera",
    name: "Billboard",
    component: Billboard,
  },
  {
    path: "/peliculas-nuevas",
    name: "NewMovies",
    component: NewMovies,
  },
  {
    path: "/populares",
    name: "Populars",
    component: Populars,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
