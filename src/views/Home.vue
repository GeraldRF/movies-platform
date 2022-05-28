<template>
   <MoviesList types="all"></MoviesList>
</template>
<script>
import MoviesList from "@/components/MoviesList.vue";
export default {
  name: "Home",
  components: {
    MoviesList,
  },
};
</script>