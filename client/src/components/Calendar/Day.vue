<template>
  <div class="dayColumn">
    <p>{{ day }}</p>
    <p>{{ weekDay }}</p>
    <div class="dayTable"></div>
  </div>
</template>

<script>
export default {
  name: "Day",
  props: {
    day: Number,
    weekDay: String
  }
};
</script>

<style scoped>
.dayTable {
  height: 1000px;
  background-color: gray;
}
</style>
