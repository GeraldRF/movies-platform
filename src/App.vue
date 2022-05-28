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
    NavBar,
  },
  mounted() {
    Materialize.AutoInit();
  }
};
</script>

