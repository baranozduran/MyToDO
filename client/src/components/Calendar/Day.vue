<template>
  <div class="dayColumn">
    <div @click="showTask()" class="dayTitle">
      <div v-show="theDay.tasks.length >= 1" class="yellowDot"></div>
      <p>{{ theDay.day }}</p>
      <p>{{ theDay.weekDay }}</p>
    </div>
    <div class="dayTable"></div>
    <TasksOfTheDay
      @remove-task="$emit('remove-task', $event)"
      :dayClicked="dayClicked"
      :tasks="theDay.tasks"
      :theDay="theDay"
    />
  </div>
</template>

<script>
import TasksOfTheDay from "./TasksOfTheDay.vue";
export default {
  name: "Day",
  components: {
    TasksOfTheDay
  },
  data() {
    return {
      dayClicked: false
    };
  },
  props: {
    theDay: {
      day: Number,
      weekDay: String,
      month: Number,
      year: Number,
      tasks: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  },
  methods: {
    showTask() {
      this.dayClicked = !this.dayClicked;
    }
  }
};
</script>

<style scoped>
.dayTitle {
  position: relative;
  cursor: pointer;
}
.dayTable {
  height: 1000px;
  background-color: gray;
}
.yellowDot {
  border-radius: 100%;
  background-color: yellow;
  width: 5px;
  height: 5px;
  position: absolute;
}
</style>
