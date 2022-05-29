<template>
  Movies Details
  <p>Id: {{ this.$route.params.id }}</p>
  <p>Movie name: {{ this.$route.params.movieName }}</p>
  <p>{{this.movie}}</p>
</template>

<script>
import axios from "axios"

export default {
  name: "MoviesDetails",
  data() {
    return {
      movie: {},
      genres: {},
    };
  },
  mounted() {
     axios
      .get("https://api.themoviedb.org/3/genre/movie/list?api_key=aa818aafea4ce47b7d409e0579f29f57")
      .then((response) => (this.genres = response.data));

    axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=aa818aafea4ce47b7d409e0579f29f57`).then((response) => (this.movie = response.data));
  },
};
</script>