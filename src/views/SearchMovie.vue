<template>
  <MoviesList types="search" :search="this.$route.query.q"></MoviesList>
</template>
<script>
import MoviesList from "@/components/MoviesList.vue";

export default {
  name: "SearchMovie",
  components: {
    MoviesList,
  },
};
</script>
