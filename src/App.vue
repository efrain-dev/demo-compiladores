<template>
  <div id="app" >
    <navigation/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
export default {
  name: "App",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    navigation: Navigation
  }
};
</script>

<style>


</style>
