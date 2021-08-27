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
    <div class="groupTask">
      <label for="groupTask">Group Task</label>
      <input v-model="openUsers" type="checkbox" id="groupTask" />
    </div>
    <div v-show="openUsers">
      <label for="users">Users: </label>
      <select v-model="theUser" id="users">
        <option :key="user._id" v-for="user in users">{{ user.email }}</option>
      </select>
      <button @click="addUser(theUser)">Add User</button>
    </div>
    <br />
    <div :key="userName" v-for="userName in userNames" class="groupUsers">
      <p class="nameOfGroupUser">{{ userName }}</p>
      <p @click="removeGroupUserf(userName)" class="removeGroupUser">x</p>
    </div>
    <button
      class="addTaskButton"
      @click="
        $emit('add-task', { task: task, date: date, group: userIds });
        addTaskClicked();
      "
    >
      Add Task
    </button>
  </div>
</template>

<script>
import axios from "../requests/axios";
export default {
  name: "AddTask",
  components: {},
  data() {
    return {
      task: "",
      date: "",
      users: [],
      openUsers: false,
      theUser: "",
      userIds: [],
      userNames: []
    };
  },
  methods: {
    async getUsers() {
      const req = {
        token: this.$cookies.get("token")
      };
      const response = await axios.getUsers(req);
      if (response.verified) {
        this.users = response.users;
      } else {
        console.log("Couldn't get users");
      }
    },
    addUser(user) {
      this.userNames.push(user);
      const userId = this.users.filter(el => user === el.email)[0]._id;
      this.userIds.push(userId);
    },
    removeGroupUserf(user) {
      this.userNames = this.userNames.filter(el => el !== user);
      const userId = this.users.filter(el => user === el.email)[0]._id;
      this.userIds = this.userIds.filter(el => el !== userId);
    },
    addTaskClicked() {
      this.userNames = [];
    }
  },
  created() {
    this.getUsers();
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
  margin-top: 5px;
}
.groupTask {
  margin-top: 15px;
  background-color: yellow;
}
.groupUsers {
  display: flex;
}
.nameOfGroupUser {
  flex: 1;
}
.removeGroupUser {
  flex: 1;
  color: red;
  cursor: pointer;
  font-size: 15px;
}
</style>
