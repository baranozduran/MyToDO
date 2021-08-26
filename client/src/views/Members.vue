<template>
  <div class="membersContainer">
    <LoggedInNav :root="nameOfRoot" />
  </div>
</template>

<script>
import LoggedInNav from "../components/LoggedInNav.vue";
export default {
  name: "Members",
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
