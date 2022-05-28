<template>
   <MoviesList types="news"></MoviesList>
</template>
<script>
import MoviesList from "@/components/MoviesList.vue";
export default {
  name: "NewMovies",
  components: {
    MoviesList,
  },
};
</script>