<template>
  <div id="app">
  <div class="login" >
    <h1 class="title">Login</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="email">Correo:</label>
      <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Email"
      >
      <label class="form-label" for="password">Contraseña:</label>
      <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Password"
      >
      <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p>
      <input class="form-submit" type="submit" value="Login">
    </form>
    <p class="msg">¿No tienes cuenta?
      <router-link to="/register">Regístrate</router-link>
    </p>
  </div>
  </div>

</template>

<script>
import auth from "@/logic/auth";
import axios from "axios";
import router from "@/router";
const Swal = require('sweetalert2')

export default {

  data: () => ({
    email: "",
    password: "",
    error: false
  }),
  mounted() {
    if (auth.getActiveSession()){
      router.push('/home')
    }
    },
  methods: {
    async login() {
      try {
        await axios({
          method: 'get',
          url: auth.getENDPOINT_PATH(),
          params: {
            correo: this.email,
            contrasena:this.password,
            opt:"InicioSesion",
          }
        }).then(function (response) {
          if (response.data.respuesta==="Exito"){
            const user = {
              id_usuario: response.data.id_usuario,
              name: response.data.nombre,
              email: response.data.correo,
              password: response.data.contrasena,
            };
            auth.setUserLogged(user)
            router.push('/home')
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Error: '+response.data.data,
              timer: 4000
            })
          }
        });

      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>

</style>
