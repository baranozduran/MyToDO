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
    <button @click="$emit('sign-out')">Sign Out</button>
    <button @click="$emit('delete-account')">Delete Account</button>
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
