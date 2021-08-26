<template>
  <div class="main-container">
    <nav>
      <router-link :to="{ name: root }">Home</router-link> |
      <router-link to="/films">Films</router-link> |
      <router-link to="/reviews">Reviews</router-link> |
      <router-link to="/members">Members</router-link> |
      <router-link to="/favouritefilmoftheyear"
        >Favourite film of the month</router-link
      >
      |
    </nav>
    <button @click="$emit('go-signup')" class="signup">Sign Up</button>
    <button @click="$emit('go-login')" class="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  props: {
    root: String
  }
};
</script>

<style></style>
