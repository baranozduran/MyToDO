<template>
  <div class="navContainer">
    <div class="iconContainer">
      <font-awesome-icon
        @click="$emit('open-menu')"
        class="icon"
        icon="bars"
        size="lg"
      />
    </div>
    <div class="linkContainer">
      <router-link class="homeLink" :to="{ name: root }">Home</router-link>
    </div>
    <div class="buttons">
      <button @click="$emit('go-signup')" class="signup">Sign Up</button>
      <button @click="$emit('go-login')" class="login">Login</button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faBars);
export default {
  name: "HomeNav",
  components: {
    FontAwesomeIcon
  },
  props: {
    root: String
  }
};
</script>

<style scoped>
.navContainer {
  display: flex;
  margin-top: 30px;
  background-color: grey;
}
.iconContainer {
  flex: 3;
  position: relative;
}
.icon {
  position: absolute;
  left: 10px;
  cursor: pointer;
}
.linkContainer {
  flex: 3;
  position: relative;
}
.homeLink {
  position: absolute;
  left: 20%;
}
.buttons {
  flex: 1;
}
.signup {
  right: 60px;
}
.login {
  right: 30px;
}
</style>
