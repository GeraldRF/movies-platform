<template>
  Movies Details
  <p>Id: {{ this.$route.params.id }}</p>
  <p>Movie name: {{ this.$route.params.movieName }}</p>
  <p>{{this.Movie}}</p>
</template>

<script>
import axios from "axios"

export default {
  name: "MoviesDetails",
  data() {
    return {
      Movie: {},
    };
  },
  mounted() {
     axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=aa818aafea4ce47b7d409e0579f29f57")
      .then((response) => (this.Movie = response.data));
  },
};
</script>