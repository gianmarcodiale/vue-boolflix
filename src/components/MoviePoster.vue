<template>
  <div class="movie-poster">
    <img
      src="@/assets/img/default.jpeg"
      alt=""
      v-if="movie.poster_path == null"
      class="img-fluid default"
      style="min-height: 360px"
    />
    <img
      :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path"
      alt=""
      class="img-fluid"
      style="min-height: 360px"
      v-else
    />
  </div>
</template>

<script>
export default {
    name: "MoviePoster",
    props: {
        movie: Object,
    }
};
</script>

<style></style>
