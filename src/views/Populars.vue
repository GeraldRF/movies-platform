<template>
   <MoviesList types="populars"></MoviesList>
</template>
<script>
import MoviesList from "@/components/MoviesList.vue";
export default {
  name: "Populars",
  components: {
    MoviesList,
  },
};
</script>