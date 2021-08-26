<template>
  <div class="filmsContainer">
    <LoggedInNav :root="nameOfRoot" />
  </div>
</template>

<script>
import LoggedInNav from "../components/LoggedInNav.vue";
export default {
  name: "Films",
  components: {
    LoggedInNav
  },
  data() {
    return {
      nameOfRoot: "LoggedInHome"
    };
  },
  methods: {
    async getApi() {
      const response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=1ac9c1b0"
      );
      const data = await response.json();
      console.log(data);
    }
  },
  mounted() {
    this.getApi();
  }
};
</script>

<style></style>
