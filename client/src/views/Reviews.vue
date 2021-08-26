<template>
  <div class="reviewsContainer">
    <LoggedInNav :root="nameOfRoot" />
  </div>
</template>

<script>
import LoggedInNav from "../components/LoggedInNav.vue";
export default {
  name: "Reviews",
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
