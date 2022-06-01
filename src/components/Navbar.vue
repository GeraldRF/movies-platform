<template>
  <nav class="cyan darken-4">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">
        <span class="text-light">Movie</span
        ><span class="text-bold light-green darken-3">TOON</span>
      </router-link>
      <a href="#" data-target="mobile-demo" class="sidenav-trigger"
        ><i class="material-icons">menu</i></a
      >
      <ul class="right hide-on-med-and-down">
        <li>
          <div class="row search-form">
            <input
              class="col m7 offset-m3 xl9 border-orange white-text"
              type="text"
              placeholder="Buscar pelicula"
              ref="searchBarDesktop"
              v-model="this.search"
            />
            <router-link
              :to="{ name: 'SearchMovie', query: { q: this.search } }"
              class="btn-floating light-green darken-3 link"
            >
              <i class="material-icons col m2 xl3">search</i>
            </router-link>
          </div>
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
  <ul class="sidenav cyan darken-4" id="mobile-demo">
    <li>
      <div class="row search-form">
        <input
          class="col s8 offset-s1 border-orange white-text"
          type="text"
          placeholder="Buscar pelicula"
          ref="searchBarMobile"
          v-model="this.search"
        />
        <router-link
          :to="{ name: 'SearchMovie', query: { q: this.search } }"
          class="btn-floating light-green darken-3 link"
        >
          <i class="material-icons col m2 xl3">search</i>
        </router-link>
      </div>
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

  <ul class="fixed-bottom-nav">
    <li>
      <router-link to="/peliculas-nuevas" class="white-text text-l"
        ><img src="@/assets/images/nuevas.png" alt="nuevas"></router-link
      >
    </li>
    <li>
      <router-link to="/cartelera" class="white-text text-l"
        > <img src="@/assets/images/cartelera.png" alt="cartelera"> </router-link
      >
    </li>
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    </li>
    <li>
      <router-link to="/populares" class="white-text text-l"
        > <img src="@/assets/images/populares.png" alt="populares"> </router-link
      >
    </li>
    <li >
      <router-link to="/acerca-de" class="white-text text-l"
        ><img src="@/assets/images/acerca-de.png" alt="acerca de"></router-link
      >
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style>
@import url("../assets/css/app.css");
</style>


