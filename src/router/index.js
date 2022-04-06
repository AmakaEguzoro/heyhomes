import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import Specialties from "../components/Specialties.vue";
import Reach from "../components/Reach.vue";
import Career from "../components/Career.vue";
import Catalogue from "../components/Catalogue.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/specialties",
    name: "Specialties",
    component: Specialties,
  },
  {
    path: "/reach",
    name: "Reach",
    component: Reach,
  },
  {
    path: "/career",
    name: "Career",
    component: Career,
  },
  {
    path: "/catalogue",
    name: "Catalogue",
    component: Catalogue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
