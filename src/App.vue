<template>
  <div id="app">
    <header>
      <input type="search" name="search" id="search" v-model="search" />
      <button @click="callApi">Cerca</button>
      <div class="movie-card" v-for="movie in movies" :key="movie.id">
        <h2>{{movie.title}}</h2>
        <h4>{{movie.original_title}}</h4>
        <div>Lingua originale: <img :src="movieLang(movie)" alt=""></div>
        <div>Media Voto {{movie.vote_average}}</div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  components: {},
  data() {
    return {
      search: null,
      movies: [],
      linkApi: "https://api.themoviedb.org/3/search/movie?api_key=f6f0eb9aaa9f0a9d7a6897a54ba7bc15&language=en-US&page=1&include_adult=false&query="
    };
  },
  methods: {
    callApi() {
      axios
        .get(`${this.linkApi}${this.search.toLowerCase()}`)
        .then((response) => {
          //console.log(response);
          this.movies = response.data.results;
          this.loading = false;
          console.log(this.movies);
        })
        .catch((error) => {
          console.log("Ops! Something went wrong:"`${error}`);
        });
    },
    movieLang(movie) {
      if (movie.original_language == "en") {
        return "https://flagcdn.com/16x12/gb.png"
      } else if (movie.original_language == "fr") {
        return "https://flagcdn.com/16x12/fr.png"
      } else if (movie.original_language == "ja") {
        return "https://flagcdn.com/16x12/jp.png"
      } else if (movie.original_language == "es") {
        return "https://flagcdn.com/16x12/es.png"
      } else if (movie.original_language == "it") {
        return "https://flagcdn.com/16x12/it.png"
      } else if (movie.original_language == "de") {
        return "https://flagcdn.com/16x12/de.png"
      }
    }
  },
};
</script>

<style lang="scss"></style>
