<template>
  <div class="container shadow-lg rounded-lg p-5 my-5">
    <h1 class="display-5" style="text-align: center;">Cuenta</h1>
    <div class="mb-3">
      <label for="nombre"  class="form-label text-dark">Nombre</label>
      <input type="text" readonly class="form-control" id="nombre" v-model="name">
    </div>
    <div class="mb-3">
      <label for="correo" class="form-label text-dark">Correo</label>
      <input type="email" readonly class="form-control" id="correo" v-model="email">
    </div>
    <div class="mb-3">
      <label for="password" class="form-label text-dark">Contrasena</label>
      <input type="password" readonly class="form-control" id="password" v-model="password">
    </div>
  </div>
</template>

<script>
import auth from "@/logic/auth";

export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
  }),
  mounted() {
    var o = JSON.parse(auth.getUserLogged());
    this.name =o.name
    this.email =o.email
    this.password =o.password

  },
  name: "cuenta"
}
</script>

<style scoped>

</style>