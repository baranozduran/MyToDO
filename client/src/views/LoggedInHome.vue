<template>
  <div class="loggedInHomeContainer">
    <LoggedInNav
      @delete-account="deleteAccount()"
      @sign-out="signOut()"
      :root="nameOfMe"
    />
    <div class="calendarAndAdd">
      <AddTask @add-task="addTask($event)" class="addTask" />
      <Calendar
        @remove-task="removeTask($event)"
        :tasks="tasks"
        class="calendar"
      />
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
      nameOfMe: "LoggedInHome",
      tasks: {
        type: String
      }
    };
  },
  methods: {
    ...mapMutations(["createToken"]),
    async signOut() {
      const req = {
        token: this.$cookies.get("token")
      };
      const response = await axios.signOut(req);
      if (response.verified) {
        this.$cookies.remove("token");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Couldn't signed out");
      }
      return response;
    },
    async deleteAccount() {
      const req = {
        token: this.$cookies.get("token")
      };
      const response = await axios.deleteAccount(req);
      if (response.verified) {
        this.$cookies.remove("token");
        this.$router.push({ name: "Home" });
      } else {
        console.log("Account deletion couldn't been completed.");
      }
    },
    async addTask($event) {
      const req = {
        task: $event.task,
        date: {
          day: $event.date.slice(8, 10),
          month: "0" + (parseInt($event.date.slice(5, 7)) - 1),
          year: $event.date.slice(0, 4)
        },
        token: this.$cookies.get("token"),
        group: $event.group
      };
      const response = await axios.addTask(req);
      if (response.verified) {
        const req = {
          token: this.$cookies.get("token")
        };
        const response = await axios.getTask(req);
        if (response.verified) {
          this.tasks = response.tasks;
          this.tasksCame = true;
        }
      } else {
        console.log("Task couldn't been added");
      }
    },
    async removeTask($event) {
      const req = {
        task: $event.task,
        date: {
          day: $event.theDay.day.toString(),
          month: "0" + $event.theDay.month.toString(),
          year: $event.theDay.year.toString()
        },
        token: this.$cookies.get("token")
      };
      const response = await axios.removeTask(req);
      if (response.verified) {
        const req = {
          token: this.$cookies.get("token")
        };
        const response = await axios.getTask(req);
        if (response.verified) {
          this.tasks = response.tasks;
          this.tasksCame = true;
        }
      } else {
        console.log("Task couldn't been removed");
      }
    }
  },
  computed: {
    ...mapState(["token"])
  },
  async created() {
    const req = {
      token: this.$cookies.get("token")
    };
    const response = await axios.getTask(req);
    if (response.verified) {
      this.tasks = response.tasks;
      this.tasksCame = true;
    } else {
      alert("Couldn't get tasks");
    }
  }
};
</script>

<style></style>
