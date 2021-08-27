<template>
  <div class="main-container">
    <LoginForm
      v-model:email="user.email"
      v-model:password="user.password"
      @login="login()"
      @sign-up="signUp()"
    />
    <p v-show="showError" class="error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import axios from "../requests/axios";
import sanitizeHtml from "sanitize-html";
import LoginForm from "../components/LoginForm.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "Login",
  components: {
    LoginForm
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      showError: false,
      errorMessage: ""
    };
  },
  methods: {
    ...mapMutations(["createToken"]),
    async login() {
      const req = {
        email: sanitizeHtml(this.user.email),
        password: sanitizeHtml(this.user.password)
      };
      const response = await axios.login(req);
      if (response.message === "Auth successful") {
        this.showError = false;
        this.$cookies.set("token", response.token, "1d");
        this.$router.push({
          name: "LoggedInHome",
          path: "/hello"
        });
      } else if (response.message === "Wrong email or password") {
        this.errorMessage = response.message;
        this.showError = true;
      }
      return response;
    }
  },
  computed: {
    ...mapState(["token"])
  }
};
</script>

<style></style>
