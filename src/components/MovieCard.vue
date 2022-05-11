<template>
  <div class="movie-card">
    <MoviePoster :movie="movie" />
    <div class="movie-info text-white">
      <div class="title">
        <span class="fw-bold">Titolo: </span>{{ movie.title }}
      </div>
      <div class="original-title">
        <span class="fw-bold">Titolo originale: </span
        >{{ movie.original_title }}
      </div>
      <div class="lang">
        <span class="fw-bold">Lingua originale: </span
        ><img :src="language(movie)" alt="" />
      </div>
      <rate
        :length="5"
        :value="Math.ceil(movie.vote_average / 2)"
        :readonly="true"
      />
      <div class="overview">{{ movie.overview }}</div>
    </div>
  </div>
</template>

<script>
import MoviePoster from "@/components/MoviePoster.vue";

export default {
  name: "MovieCard",
  components: {
    MoviePoster,
  },
  props: {
    movie: Object,
  },
  methods: {
    language(element) {
      if (element.original_language == "en") {
        return "https://flagcdn.com/16x12/gb.png";
      } else if (element.original_language == "fr") {
        return "https://flagcdn.com/16x12/fr.png";
      } else if (element.original_language == "ja") {
        return "https://flagcdn.com/16x12/jp.png";
      } else if (element.original_language == "es") {
        return "https://flagcdn.com/16x12/es.png";
      } else if (element.original_language == "it") {
        return "https://flagcdn.com/16x12/it.png";
      } else if (element.original_language == "de") {
        return "https://flagcdn.com/16x12/de.png";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.movie-card {
  position: relative;
  padding: 0.5rem 0;

  &:hover .movie-info {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .movie-info {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.75rem;
    visibility: hidden;
  }
}
</style>
