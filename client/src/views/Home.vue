<template>
  <div class="homeContainer">
    <HomeNav @go-login="goLogin()" @go-signup="goSignUp()" :root="nameOfMe" />
    <div class="calendarAndAdd">
      <AddTask @add-task="addTask($event)" class="addTask" />
      <Calendar class="calendar" />
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
      nameOfMe: "Home"
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
      localStorage.setItem(`task${taskCount + 1}`, {
        task: $event.task,
        date: $event.date
      });
      localStorage.taskCount = parseInt(localStorage.taskCount) + 1;
    }
  },
  created() {
    if (!localStorage.taskCount) localStorage.setItem("taskCount", 0);
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
