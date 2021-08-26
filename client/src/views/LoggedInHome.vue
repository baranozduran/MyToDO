<template>
  <div class="loggedInHomeContainer">
    <LoggedInNav
      @delete-account="deleteAccount()"
      @sign-out="signOut()"
      :root="nameOfMe"
    />
    <div class="calendarAndAdd">
      <AddTask @add-task="addTask($event)" class="addTask" />
      <Calendar class="calendar" />
    </div>
  </div>
</template>

<script>
import Calendar from "../components/Calendar/Calendar.vue";
import AddTask from "../components/AddTask.vue";
import axios from "../requests/axios";
import LoggedInNav from "../components/LoggedInNav.vue";
import { mapState, mapMutations } from "vuex";
export default {
  name: "LoggedInHome",
  components: { LoggedInNav, Calendar, AddTask },
  data() {
    return {
      nameOfMe: "LoggedInHome"
    };
  },
  methods: {
    ...mapMutations(["createToken"]),
    async signOut() {
      const req = {
        token: this.token
      };
      const response = await axios.signOut(req);
      if (response.verified) {
        this.createToken("");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Couldn't signed out");
      }
      return response;
    },
    async deleteAccount() {
      const req = {
        token: this.token
      };
      const response = await axios.deleteAccount(req);
      if (response.verified) {
        this.createToken("");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Account deletion couldn't been completed.");
      }
    },
    async addTask($event) {
      console.log($event.date);
      const req = {
        task: $event.task,
        date: $event.date,
        token: this.token
      };
      const response = await axios.addTask(req);
      if (response.isTaskAdded) {
        console.log("Task been added successfully");
      } else {
        console.log("Task couldn't been added");
      }
    }
  },
  computed: {
    ...mapState(["token"])
  },
  created() {
    if (!localStorage.taskCount) localStorage.setItem("taskCount", 0);
  }
};
</script>

<style></style>
