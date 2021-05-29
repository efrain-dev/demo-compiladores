<template>
  <div id="app">
  <div class="register">

    <h1 class="title">Registro</h1>
    <form action class="form" @submit.prevent="comprobar">
      <label class="form-label" for="email">Nombre:</label>
      <input
          v-model="name"
          class="form-input text-dark"
          type="name"
          id="name"
          required
          placeholder="Nombre"
      >
      <label class="form-label text-dark" for="email">Correo:</label>
      <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Correo"
      >
      <label class="form-label text-dark" for="password">Contraeña:</label>
      <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Contrasena"
      >
      <label class="form-label text-dark" for="password-repeat">Repite la contraeña:</label>
      <input
          v-model="passwordRepeat"
          class="form-input text-dark"
          type="password"
          id="password-repeat"
          placeholder="Contrasena"
      >
      <input class="form-submit" type="submit" value="Registrar">
    </form>
  </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";
import axios from "axios";
const Swal = require('sweetalert2')
import router from "@/router";

export default {

  data: () => ({
    name: "",
    email: "",
    password: "",
    passwordRepeat: ""
  }),
  methods: {

    comprobar(){
      this.password=== this.passwordRepeat? this.register() : console.log('contrasena diferente')
    },
     async register() {
      try {
        await axios({
          method: 'get',
          url: auth.getENDPOINT_PATH(),
          params: {
            nombre: this.name,
            correo: this.email,
            contrasena:this.password,
            opt:"Registro",

          }
        }).then(function (response) {
         if (response.data.respuesta==="Exito"){
            const user = {
              id_usuario: response.data.id_usuario,
              name: response.data.nombre,
              email: response.data.correo,
              password: response.data.contrasena,
            };
            router.push('/home')
            auth.setUserLogged(user)
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

<style >

</style>
