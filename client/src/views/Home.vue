<template>
  <div class="homeContainer">
    <HomeNav @go-login="goLogin()" @go-signup="goSignUp()" :root="nameOfMe" />
    <div class="calendarAndAdd">
      <AddTask @add-task="addTask($event)" class="addTask" />
      <Calendar :tasks="tasks" class="calendar" />
    </div>
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import Calendar from "../components/Calendar/Calendar.vue";
import AddTask from "../components/AddTask.vue";
export default {
  name: "Home",
  components: { HomeNav, Calendar, AddTask },
  data() {
    return {
      nameOfMe: "Home",
      tasks: []
    };
  },
  methods: {
    goLogin() {
      this.$router.push({
        name: "Login"
      });
    },
    goSignUp() {
      this.$router.push({
        name: "SignUp"
      });
    },
    addTask($event) {
      const taskCount = parseInt(localStorage.taskCount);
      localStorage.setItem(
        `task${taskCount + 1}`,
        JSON.stringify({
          task: $event.task,
          date: {
            day: $event.date.slice(8, 10),
            month: $event.date.slice(5, 7),
            year: $event.date.slice(0, 4)
          }
        })
      );
      localStorage.taskCount = parseInt(localStorage.taskCount) + 1;
    }
  },
  created() {
    if (!localStorage.taskCount) localStorage.setItem("taskCount", 0);
    const taskCount = parseInt(localStorage.getItem("taskCount"));
    if (taskCount) {
      for (let i = 0; i < taskCount; i++) {
        this.tasks[i] = JSON.parse(localStorage.getItem(`task${i + 1}`));
      }
    } else {
      console.log(taskCount);
      this.tasks = [];
    }
  }
};
</script>

<style>
.error-message {
  color: red;
}

.calendarAndAdd {
  display: flex;
  margin-top: 30px;
}
.calendar {
  flex: 2;
}
.addTask {
  flex: 1;
}
</style>
