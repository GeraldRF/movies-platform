<template>
  <div class="col s12 m8 push-m2 l5 push-l1">
    <div class="card row">
      <router-link
      class="col s6 m6 img-card"
        :to="{
          name: 'MovieDetails',
          params: { movieName: movie.title, id: movie.id },
        }"
        ><img
          :src="'https://image.tmdb.org/t/p/w500' + movie.poster_path"
          alt=""
        />
        </router-link
      >
      <div class="col s6 m6">
          <h2 class="card-title">{{ movie.title }}</h2>
        <div class="data-container">
          <h6>Sinopsis</h6>
          <div>
            <p>{{ movie.overview }}</p>
          </div>
        </div>
        <div class="data-container">
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
            <span >{{
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
</template>
<script>
export default {
  name: "Movie",
  props: {
    movie: Object,
    genres: Array,
  },
};
</script>