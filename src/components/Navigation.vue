<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark"  variant="dark">
        <b-navbar-toggle target="nav-collapse"><b-icon icon="menu-button-wide"  class="mx-1 text-info " aria-hidden="true"> </b-icon></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav >
            <b-nav-item v-bind:active="setActive($route.name,'Home')">
              <router-link  class="text-white" to="/"><b-icon icon="distribute-vertical" class="mx-1" aria-hidden="true"> </b-icon>Home</router-link>
            </b-nav-item>
            <b-nav-item v-bind:active="setActive($route.name,'register')">
              <router-link class="text-white" to="/register"><b-icon icon="card-text" class="mx-1" aria-hidden="true"> </b-icon>Analizador</router-link>
            </b-nav-item>
            <b-nav-item v-bind:active="setActive($route.name,'login')">
              <router-link class="text-white"  to="/login"><b-icon icon="book" class="mx-1" aria-hidden="true"> </b-icon>Implementacion</router-link>
            </b-nav-item>
            <b-nav-item v-bind:active="setActive($route.name,'register')">
              <router-link class="text-white" to="/register"><b-icon icon="info-circle" class="mx-1" aria-hidden="true"> </b-icon>Sobre Nosotros</router-link>
            </b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <b-icon icon="person" class="mx-1" aria-hidden="true"> </b-icon>Usuario
              </template>
              <b-dropdown-item>Cuenta</b-dropdown-item>
              <b-dropdown-item v-if="session===false"><router-link class="text-dark" to="/login">Login</router-link></b-dropdown-item>
              <b-dropdown-item v-if="session===false"><router-link class="text-dark" to="/register">Registro</router-link></b-dropdown-item>
              <b-dropdown-item v-on:click="cerrarSesion">Cerrar Sesion</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
import router from "@/router";

export default {
  name: "Navigation",

  data: () => ({
    session: false,

  }),

  updated() {
    this.session= auth.getActiveSession()
  },
  methods: {
    cerrarSesion(){
      auth.unsetUserLogged()
      router.push('Login')
    },
    setActive(name,now) {
      return name === now;
    }

  }
};
</script>

<style scoped>

</style>