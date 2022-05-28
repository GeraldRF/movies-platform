<template>
  <nav class="deep-purple lighten-1">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">
        <span class="text-light">Movie</span
        ><span class="text-bold deep-orange lighten-1">TOON</span>
      </router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li>
          <form class="row search-form">
            <input
              class="col m7 offset-m3 xl9 border-orange white-text"
              type="text"
              placeholder="Buscar pelicula"
            />
            <button class="btn-floating deep-orange lighten-1">
              <i class="material-icons col m2 xl3">search</i>
            </button>
          </form>
        </li>
        <li>
          <router-link to="/peliculas-nuevas" class="text-l"
            >Películas Nuevas</router-link
          >
        </li>
        <li>
          <router-link to="/cartelera" class="text-l">Cartelera</router-link>
        </li>
        <li>
          <router-link to="/populares" class="text-l">Populares</router-link>
        </li>
        <li>
          <router-link to="/acerca-de" class="text-l">Acerca de</router-link>
        </li>
      </ul>
    </div>
  </nav>

  <ul class="sidenav deep-purple lighten-1" id="mobile-demo">
    <li>
      <form class="row search-form">
        <input
          class="col s8 offset-s1 border-orange white-text"
          type="text"
          placeholder="Buscar pelicula"
        />
        <button class="btn-floating deep-orange lighten-1">
          <i class="material-icons col s3">search</i>
        </button>
      </form>
    </li>
    <li>
      <router-link to="/peliculas-nuevas" class="white-text text-l"
        >Películas Nuevas</router-link
      >
    </li>
    <li>
      <router-link to="/cartelera" class="white-text text-l"
        >Cartelera</router-link
      >
    </li>
    <li>
      <router-link to="/populares" class="white-text text-l"
        >Populares</router-link
      >
    </li>
    <li>
      <router-link to="/acerca-de" class="white-text text-l"
        >Acerca de</router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style>
@import url("../assets/css/app.css");
</style>


