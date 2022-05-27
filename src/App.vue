<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<script>
import NavBar from "./components/Navbar.vue";

//MaterializeCSS
import Materialize from "materialize-css/dist/js/materialize.js"

export default {
  name: "App",
  components: {
    NavBar
  },
  mounted() {
    Materialize.AutoInit();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
