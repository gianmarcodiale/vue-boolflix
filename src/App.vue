<template>
  <div id="app">
    <!-- SiteHeader -->
    <header class="d-flex justify-content-between align-items-center">
      <div class="logo text-center p-3">
        <img src="@/assets/img/boolflix_logo.png" alt="" />
      </div>
      <div class="search-commands text-center">
        <input type="search" name="search" id="search" v-model="search" />
        <button
          @click="
            callMoviesApi();
            callSeriesApi();
          "
        >
          Cerca
        </button>
      </div>
    </header>
    <!-- /SiteHeader -->
    <!-- SiteMain -->
    <main>
      <div class="container">
        <div class="row row-cols-5 pt-4">
          <div class="col" v-for="movie in movies" :key="movie.id">
            <div class="movie-card text-white">
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
              <h2>{{ movie.title }}</h2>
              <h4>{{ movie.original_title }}</h4>
              <div>Lingua originale: <img :src="language(movie)" alt="" /></div>
              <rate
                :length="5"
                :value="Math.ceil(movie.vote_average / 2)"
                :readonly="true"
              />
            </div>
          </div>
          <div class="col" v-for="serie in tvSeries" :key="serie.id">
            <div class="serie-card text-white">
              <img
                src="@/assets/img/default.jpeg"
                alt=""
                class="img-fluid default"
                v-if="serie.poster_path == null"
                style="min-height: 360px"
              />
              <img
                :src="'https://image.tmdb.org/t/p/w342/' + serie.poster_path"
                alt=""
                class="img-fluid"
                style="min-height: 360px"
                v-else
              />
              <h2>{{ serie.name }}</h2>
              <h4>{{ serie.original_name }}</h4>
              <div>Lingua originale: <img :src="language(serie)" alt="" /></div>
              <rate
                :length="5"
                :value="Math.ceil(serie.vote_average / 2)"
                :readonly="true"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- /SiteMain -->
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
      tvSeries: [],
      linkMoviesApi:
        "https://api.themoviedb.org/3/search/movie?api_key=f6f0eb9aaa9f0a9d7a6897a54ba7bc15&language=en-US&page=1&include_adult=false&query=",
      linkSeriesApi:
        "https://api.themoviedb.org/3/search/tv?api_key=f6f0eb9aaa9f0a9d7a6897a54ba7bc15&language=en-US&page=1&include_adult=false&query=",
    };
  },
  methods: {
    callMoviesApi() {
      axios
        .get(`${this.linkMoviesApi}${this.search.toLowerCase()}`)
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
    callSeriesApi() {
      axios
        .get(`${this.linkSeriesApi}${this.search.toLowerCase()}`)
        .then((response) => {
          this.tvSeries = response.data.results;
          console.log(this.tvSeries);
        })
        .catch((error) => {
          console.log("Ops! Something went wrong:"`${error}`);
        });
    },
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

<style lang="scss">
@import "@/assets/scss/style.scss";

header {
  background-color: black;

  .search-commands {
    padding: 2rem;

    input {
      border-radius: 0.5rem;
      border: none;
      margin-right: 0.25rem;
    }

    button {
      background-color: crimson;
      border-radius: 0.5rem;
      color: white;
      border: none;
    }
  }
}

img.default {
  border: 1px solid rgba(187, 187, 187, 0.543);
}
</style>
