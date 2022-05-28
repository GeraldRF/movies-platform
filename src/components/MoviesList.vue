<template>
  <ul v-show="this.currentPage > 1" class="pagination center-align">
    <li :class="(this.currentPage == 1) ? '': 'waves-effect btn deep-purple lighten-1'">
      <a href="#" @click="selectPage('-1')" class="white-text"
        ><i class="material-icons">chevron_left</i></a
      >
    </li>
    <li>
      <p>{{ this.currentPage }}</p>
    </li>
    <li :class="(this.currentPage == this.maxPage) ? '' : 'waves-effect btn deep-purple lighten-1'">
      <a class="white-text" href="#" @click="selectPage('+1')"
        ><i class="material-icons">chevron_right</i></a
      >
    </li>
  </ul>

  {{ movies.page }}

  <br />
  <br />
  <ul class="pagination center-align">
    <li :class="(this.currentPage == 1) ? '': 'waves-effect btn deep-purple lighten-1'">
      <a href="#" @click="selectPage('-1')" class="white-text"
        ><i class="material-icons">chevron_left</i></a
      >
    </li>
    <li>
      <p>{{ this.currentPage }}</p>
    </li>
    <li :class="(this.currentPage == this.maxPage) ? '' : 'waves-effect btn deep-purple lighten-1'">
      <a class="white-text" href="#" @click="selectPage('+1')"
        ><i class="material-icons">chevron_right</i></a
      >
    </li>
  </ul>

  <router-link
    :to="{ name: 'MovieDetails', params: { movieName: 'salvador', id: 1 } }"
    >Detalles de 1</router-link
  >
</template>

<script>
import axios from "axios";

export default {
  name: "MoviesList",
  props: {
    types: String,
  },
  data() {
    return {
      movies: {},
      url: {},
      currentPage: 1,
      maxPage: 0,
    };
  },
  mounted() {
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
      }
    },
    getMovies(url, page) {
      url += "&page=" + page;
      axios.get(url).then((response) => {
        this.movies = response.data
        this.maxPage = response.data.total_pages > 500 ? 500:response.data.total_pages;
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
  },
};
</script>