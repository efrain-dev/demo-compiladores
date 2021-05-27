import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Analizador from "../views/Analizador.vue";
import Implementacion from "../views/Implementacion.vue";
import Cuenta from "../views/Cuenta.vue";

import auth from "@/logic/auth";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login

  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/analizador',
    name: 'analizador',
    component: Analizador
  },
  {
    path: '/implementacion',
    name: 'implementacion',
    component: Implementacion
  },
  {
    path: '/cuenta',
    name: 'cuenta',
    component: Cuenta
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
//Aqui checas, si tiene una sesion o un token y el usuario quiere ir a la ruta login, no lo permites //y lo mandas a la raiz
  if (to.name === 'login' && auth.getActiveSession()) {
    router.push('/').catch(error => {
      if (error.name !== "NavigationDuplicated") {
        throw error;
      }
    });
  }  if (to.name === 'register' && auth.getActiveSession()) {
    router.push('/').catch(error => {
      if (error.name !== "NavigationDuplicated") {
        throw error;
      }
    });
  }

  next()
})

export default router
