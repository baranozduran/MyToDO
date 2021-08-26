<template>
  <div>
    <form @submit.prevent="" id="form">
      <label for="email">E-mail: </label>
      <input
        @input="$emit('update:email', $event.target.value)"
        :value="email"
        type="text"
        name="email"
        id="email"
      />
      <br />
      <label for="password">Password: </label>
      <input
        @input="$emit('update:password', $event.target.value)"
        :value="password"
        type="password"
        name="password"
        id="password"
      />
      <br />
      <button @click="$emit('sign-up')">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    email: String,
    password: String
  }
};
</script>

<style></style>
