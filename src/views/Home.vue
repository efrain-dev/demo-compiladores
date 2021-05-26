<template>
  <div class="h-full">
    <h1>Home</h1>
    <p v-if="userLogged">User loggued: {{userLogged}}</p>
  </div>
</template>

<script>
import auth from "@/logic/auth";
export default {
  name: "Home",

  computed: {
    userLogged() {
      return auth.getUserLogged();
    }
  }
};
</script>

<style>
</style>