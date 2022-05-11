<template>
  <main>
    <div class="container">
      <div class="row row-cols-5 pt-4">
        <div class="col" v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" />
        </div>
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

<style lang="scss" scoped></style>
