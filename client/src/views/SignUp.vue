<template>
  <div class="main-container">
    <SignUpForm
      v-model:email="user.email"
      v-model:password="user.password"
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
import SignUpForm from "../components/SignUpForm.vue";
export default {
  name: "SignUp",
  components: {
    SignUpForm
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
    async signUp() {
      const req = {
        email: sanitizeHtml(this.user.email),
        password: sanitizeHtml(this.user.password)
      };

      const response = await axios.signUp(req);
      if (response.message === "User created") {
        this.showError = false;
        this.$router.push({ name: "Login" });
      } else if (response.message === "User already exists") {
        this.errorMessage = response.message;
        this.showError = true;
      }
      return response;
    }
  }
};
</script>

<style></style>
