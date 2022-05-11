<template>
  <!-- SiteHeader -->
  <header class="d-flex justify-content-between align-items-center">
    <SiteLogo/>
    <div class="search-commands text-center">
      <input type="search" name="search" id="search" v-model="search" />
      <button
        @click="$emit('find-movie-series', search)"
      >
        Cerca
      </button>
    </div>
  </header>
  <!-- /SiteHeader -->
</template>

<script>
import SiteLogo from "@/components/SiteLogo.vue"

export default {
  name: "SiteHeader",
  components: {
    SiteLogo
  },
  data() {
    return {
      search: null,
    };
  },
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>

header {
  background-color: black;

  .search-commands {
    padding: 2rem;

    input {
      border-radius: 0.5rem;
      padding: 0.5rem;
      border: none;
      margin-right: 0.25rem;
    }

    button {
      background-color: crimson;
      border-radius: 0.5rem;
      color: white;
      padding: 0.5rem;
      border: none;
    }
  }
}
</style>
