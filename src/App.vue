<template>
  <NavBar></NavBar>
  <router-view :key="$route.fullPath"/>
</template>

<script>
import NavBar from "./components/Navbar.vue";

//MaterializeCSS
import Materialize from "materialize-css/dist/js/materialize.js"

export default {
  name: "App",
  components: {
    NavBar,
  },
  mounted() {
    Materialize.AutoInit();
  }
};
</script>

