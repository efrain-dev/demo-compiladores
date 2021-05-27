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
.login {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: #49525A;
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  &:first-of-type {
    margin-top: 0rem;
  }
}
.form-input {
  padding: 10px 15px;

  border: 1px solid white;
  color: white;
  &:focus {
    outline: 0;
    border-color: #1ab188;
  }
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #0b9185;
  }
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>
