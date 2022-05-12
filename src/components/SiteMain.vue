<template>
  <main>
    <div class="container">
      <h2 class="section-title text-white text-uppercase text-center p-2 fw-bold">Movies</h2>
      <div
        class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-4"
      >
        <div class="col" v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" />
        </div>
      </div>
      <h2 class="section-title text-white text-uppercase text-center p-2 fw-bold">Series</h2>
      <div
        class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 pt-4"
      >
        <!-- Tv Series Card -->
        <div class="col" v-for="serie in tvSeries" :key="serie.id">
          <SerieCard :serie="serie" />
        </div>
        <!-- /Tv Series Card -->
      </div>
    </div>
  </main>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
import SerieCard from "@/components/SerieCard.vue";

export default {
  name: "SiteMain",
  components: {
    MovieCard,
    SerieCard,
  },
  props: {
    movies: Array,
    tvSeries: Array,
  },
};
</script>

<style lang="scss" scoped>
.section-title {
  border: 1px solid crimson;
  margin-top: 1.5rem;
  margin-bottom: 0;
}
</style>
