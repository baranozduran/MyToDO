<template>
  <div v-show="dayClicked" class="tasksOfTheDayContainer">
    <div v-for="task in tasks" :key="task" class="eachTask">
      <p>{{ task }}</p>
      <p
        @click="$emit('remove-task', { task: task, theDay: theDay })"
        class="removeTask"
      >
        x
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TasksOfTheDay",
  props: {
    tasks: Array,
    dayClicked: Boolean,
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
  }
};
</script>

<style>
.tasksOfTheDayContainer {
  position: absolute;
  top: 20%;
  left: 30%;
  background-color: teal;
  backdrop-filter: blur(10px);
  z-index: 100;
}
.removeTask {
  color: red;
  cursor: pointer;
}
</style>
