<template>
  <div class="addContainer">
    <h1>Add Task</h1>
    <div class="taskInputCont">
      <label for="task">Task: </label>
      <input v-model="task" name="task" id="task" type="text" />
    </div>
    <br />
    <div class="dateInpuCont">
      <label class="dateLabel" for="date"> Date: </label>
      <input v-model="date" name="date" id="date" type="date" />
    </div>
    <button
      class="addTaskButton"
      @click="$emit('add-task', { task: task, date: date })"
    >
      Add Task
    </button>
  </div>
</template>

<script>
export default {
  name: "AddTask",
  components: {},
  data() {
    return {
      task: "",
      date: ""
    };
  },
  methods: {
    addTask() {}
  }
};
</script>

<style scoped>
.addContainer {
  background-color: green;
}
#task {
  margin-left: 5px;
}
.dateInputCont {
  margin-top: 5px;
}
.addTaskButton {
  margin-top: 15px;
}
</style>
