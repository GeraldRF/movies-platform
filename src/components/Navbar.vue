<template>
  <nav class="deep-orange lighten-1">
    <div class="nav-wrapper">
      <router-link to="/home" class="brand-logo">
        <span class="text-light">Movie</span><span class="text-bold">TOON</span>
      </router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li><router-link to="">Películas Nuevas</router-link></li>
        <li><router-link to="/home">Cartelera</router-link></li>
        <li><router-link to="">Populares</router-link></li>
        <li><router-link to="/about">Acerca de</router-link></li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav" id="mobile-demo">
    <li><router-link to="/peliculas-nuevas">Películas Nuevas</router-link></li>
    <li><router-link to="/cartelera">Cartelera</router-link></li>
    <li><router-link to="/populares">Populares</router-link></li>
    <li><router-link to="/acerca-de">Acerca de</router-link></li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
};
</script>


