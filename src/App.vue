<template>
  <div id="app">
    <div class="context">
      <navigation/>
      <router-view></router-view>
    </div>
    <div class="area" >
      <ul class="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>

        <li></li>

        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div >

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
