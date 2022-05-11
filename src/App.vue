<template>
  <div id="app">
    <SiteHeader
      @find-movie-series="
        callMoviesApi($event);
        callSeriesApi($event);
      "
    />
    <SiteMain :movies="movies" :tvSeries="tvSeries" />
  </div>
</template>

<script>
import axios from "axios";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteMain from "@/components/SiteMain.vue";

export default {
  name: "App",
  components: {
    SiteHeader,
    SiteMain,
  },
  data() {
    return {
      movies: [],
      tvSeries: [],
      linkMoviesApi:
        "https://api.themoviedb.org/3/search/movie?api_key=f6f0eb9aaa9f0a9d7a6897a54ba7bc15&language=en-US&page=1&include_adult=false&query=",
      linkSeriesApi:
        "https://api.themoviedb.org/3/search/tv?api_key=f6f0eb9aaa9f0a9d7a6897a54ba7bc15&language=en-US&page=1&include_adult=false&query=",
      loading: true,
    };
  },
  methods: {
    callMoviesApi(element) {
      axios
        .get(`${this.linkMoviesApi}${element.toLowerCase()}`)
        .then((response) => {
          //console.log(response);
          this.movies = response.data.results;
          this.loading = false;
          //console.log(this.movies);
        })
        .catch((error) => {
          console.log("Ops! Something went wrong:"`${error}`);
        });
    },
    callSeriesApi(element) {
      axios
        .get(`${this.linkSeriesApi}${element.toLowerCase()}`)
        .then((response) => {
          this.tvSeries = response.data.results;
          this.loading = false;
          //console.log(this.tvSeries);
        })
        .catch((error) => {
          console.log("Ops! Something went wrong:"`${error}`);
        });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/style.scss";

img.default {
  border: 1px solid rgba(187, 187, 187, 0.543);
}
</style>
