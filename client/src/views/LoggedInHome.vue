<template>
  <div class="main-container">
    <LoggedInNav
      @delete-account="deleteAccount()"
      @sign-out="signOut()"
      :root="nameOfMe"
    />
  </div>
</template>

<script>
import axios from "../requests/axios";
import LoggedInNav from "../components/LoggedInNav.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "LoggedInHome",
  components: { LoggedInNav },
  data() {
    return {
      nameOfMe: "LoggedInHome"
    };
  },
  methods: {
    ...mapMutations(["createToken"]),
    async signOut() {
      const req = {
        token: this.token
      };
      const response = await axios.signOut(req);
      if (response.verified) {
        this.createToken("");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Couldn't signed out");
      }
      return response;
    },
    async deleteAccount() {
      const req = {
        token: this.token
      };
      const response = await axios.deleteAccount(req);
      if (response.verified) {
        this.createToken("");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Account deletion couldn't been completed.");
      }
    }
  },
  computed: {
    ...mapState(["token"])
  }
};
</script>

<style></style>
