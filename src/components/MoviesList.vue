<template>
  <div v-show="maxPage == 0" class="not-found">
    <h4>No se encontraron peliculas</h4>
    <div>
      <img src="@/assets/images/sad-face.png" alt="sad face" />
    </div>
  </div>
  <ul v-show="this.currentPage > 1" class="pagination center-align">
    <li
      :class="
        this.currentPage == 1 ? '' : 'waves-effect btn deep-purple lighten-1'
      "
    >
      <a href="#" @click="selectPage('-1')" class="white-text"
        ><i class="material-icons">chevron_left</i></a
      >
    </li>
    <li>
      <p>{{ this.currentPage }}</p>
    </li>
    <li
      :class="
        this.currentPage == this.maxPage
          ? ''
          : 'waves-effect btn deep-purple lighten-1'
      "
    >
      <a class="white-text" href="#" @click="selectPage('+1')"
        ><i class="material-icons">chevron_right</i></a
      >
    </li>
  </ul>

  <div class="row container">
    <div
      class="col s12 m8 push-m2 l6"
      v-for="movie in this.movies.results"
      :key="movie.id"
    >
      <div>
        <div class="card">
          <router-link
            class="card-image"
            :to="{
              name: 'MovieDetails',
              params: { movieName: movie.title, id: movie.id },
            }"
            ><img
              :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
              alt=""
            />
            <h2 class="card-title">{{ movie.title }}</h2></router-link
          >
          <div class="card-content">
            <div class="data-container">
              <h5>Sinopsis</h5>
              <div>
                <p>{{ movie.overview }}</p>
              </div>
            </div>
            <div class="data-container">
              <h5>Fecha de estreno</h5>
              <div>
                <p>{{ movie.release_date }}</p>
              </div>
            </div>
            <div class="genre-container">
              <div
                class="deep-purple lighten-1 white-text genre"
                v-for="genre in movie.genre_ids"
                :key="genre"
              >
                <span class="">{{
                  this.genres.find((data) => data.id === genre).name
                }}</span>
              </div>
            </div>
            <div class="rating">
              
                <span>{{ movie.vote_average }}</span>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <ul v-show="maxPage != 0" class="pagination center-align">
    <li
      :class="
        this.currentPage == 1 ? '' : 'waves-effect btn deep-purple lighten-1'
      "
    >
      <a href="#" @click="selectPage('-1')" class="white-text"
        ><i class="material-icons">chevron_left</i></a
      >
    </li>
    <li>
      <label for="">Escriba: </label>
      <input
        type="text"
        @keyup="setPage()"
        ref="page_selector"
        v-model="this.currentPage"
      />
      <!-- <p>{{ this.currentPage }}</p> -->
    </li>
    <li
      :class="
        this.currentPage == this.maxPage
          ? ''
          : 'waves-effect btn deep-purple lighten-1'
      "
    >
      <a class="white-text" href="#" @click="selectPage('+1')"
        ><i class="material-icons">chevron_right</i></a
      >
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesList",
  props: {
    types: String,
    search: String,
  },
  data() {
    return {
      genres: [],
      movies: {},
      url: {},
      currentPage: 1,
      maxPage: 0,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=aa818aafea4ce47b7d409e0579f29f57"
      )
      .then((response) => (this.genres = response.data.genres));
    this.url = this.getURL();
    this.getMovies(this.url, 1);
  },
  methods: {
    getURL() {
      switch (this.types) {
        case "all":
          return "https://api.themoviedb.org/3/discover/movie?api_key=aa818aafea4ce47b7d409e0579f29f57";

        case "populars":
          return "https://api.themoviedb.org/3/movie/popular?api_key=aa818aafea4ce47b7d409e0579f29f57";

        case "news":
          return "https://api.themoviedb.org/3/movie/now_playing?api_key=aa818aafea4ce47b7d409e0579f29f57";

        case "billboards":
          return "https://api.themoviedb.org/3/movie/upcoming?api_key=aa818aafea4ce47b7d409e0579f29f57";
        case "search":
          return (
            "https://api.themoviedb.org/3/search/movie?api_key=aa818aafea4ce47b7d409e0579f29f57&query=" +
            this.search
          );
      }
    },
    getMovies(url, page) {
      url += "&page=" + page;
      axios.get(url).then((response) => {
        this.movies = response.data;
        this.maxPage =
          response.data.total_pages > 500 ? 500 : response.data.total_pages;
      });
    },
    selectPage(page) {
      if (page == "+1" && this.currentPage < this.movies.total_pages) {
        if (this.currentPage < 500) {
          this.currentPage++;
          page = this.currentPage;

          this.currentPage = page;
          this.getMovies(this.url, page);
        }
      } else if (page == "-1" && this.currentPage > 1) {
        this.currentPage--;
        page = this.currentPage;

        this.currentPage = page;
        this.getMovies(this.url, page);
      }
    },
    setPage() {
      let value = this.$refs.page_selector.value;
      if (value != "") {
        if (value <= this.maxPage) {
          this.currentPage = value;
          this.getMovies(this.url, value);
        } else {
          alert("Error: Ingrese un valor entre 1 y " + this.maxPage);
        }
      }
    },
  },
};
</script>