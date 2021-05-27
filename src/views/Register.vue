<template>
  <div id="app">
  <div class="register">

    <h1 class="title">Registro</h1>
    <form action class="form" @submit.prevent="comprobar">
      <label class="form-label" for="email">Nombre:</label>
      <input
          v-model="name"
          class="form-input"
          type="name"
          id="name"
          required
          placeholder="Nombre"
      >
      <label class="form-label" for="email">Correo:</label>
      <input
          v-model="email"
          class="form-input"
          type="email"
          id="email"
          required
          placeholder="Correo"
      >
      <label class="form-label" for="password">Contraeña:</label>
      <input
          v-model="password"
          class="form-input"
          type="password"
          id="password"
          placeholder="Contrasena"
      >
      <label class="form-label" for="password-repeat">Repite la contraeña:</label>
      <input
          v-model="passwordRepeat"
          class="form-input"
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
.register {
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
  background:  #49525A;
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
  background: none;
  background-image: none;
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
</style>
