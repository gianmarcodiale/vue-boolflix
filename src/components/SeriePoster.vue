<template>
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
</template>

<script>
export default {
    name: "SeriePoster",
    props: {
        serie: Object,
    }
};
</script>

<style></style>
