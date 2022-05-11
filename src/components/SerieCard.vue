<template>
  <div class="serie-card">
    <div class="serie-poster">
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
    </div>
    <div class="serie-info text-white">
      <div class="title">
        <span class="fw-bold">Titolo: </span>{{ serie.name }}
      </div>
      <div class="original-title">
        <span class="fw-bold">Titolo originale: </span>{{ serie.original_name }}
      </div>
      <div class="lang">
        <span class="fw-bold">Lingua originale: </span
        ><img :src="language(serie)" alt="" />
      </div>
      <rate
        :length="5"
        :value="Math.ceil(serie.vote_average / 2)"
        :readonly="true"
      />
      <div class="overview">{{ serie.overview }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieCard",
  props: {
    serie: Object,
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
.serie-card {
  position: relative;
  padding: 0.5rem 0;

  &:hover .serie-info {
    visibility: visible;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .serie-info {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    visibility: hidden;
  }
}
</style>
