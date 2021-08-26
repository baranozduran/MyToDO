<template>
  <div class="favouriteContainer">
    <LoggedInNav :root="nameOfRoot" />
  </div>
</template>

<script>
import LoggedInNav from "../components/LoggedInNav.vue";
export default {
  name: "Favourite",
  components: {
    LoggedInNav
  },
  data() {
    return {
      nameOfRoot: "LoggedInHome"
    };
  }
};
</script>

<style></style>
