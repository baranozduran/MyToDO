<template>
  <div class="buttons">
    <HomeNav @go-login="goLogin()" @go-signup="goSignUp()" :root="nameOfMe" />
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
export default {
  name: "Home",
  components: { HomeNav },
  data() {
    return {
      nameOfMe: "Home"
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    goSignUp() {
      this.$router.push({
        name: "SignUp"
      });
    }
  }
};
</script>

<style>
.error-message {
  color: red;
}
</style>
