<template>
  <div class="headerContainer">
    <div class="iconContainer">
      <font-awesome-icon
        @click="$emit('open-calendar-menu')"
        class="icon"
        icon="ellipsis-v"
      />
    </div>
    <div class="monthContainer">
      <h2 class="month">{{ date.month }}</h2>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faEllipsisV);
export default {
  name: "Header",
  components: {
    FontAwesomeIcon
  },
  props: {
    date: Object
  }
};
</script>

<style scoped>
.headerContainer {
  padding: 8px;
  position: relative;
}
.iconContainer {
  position: absolute;
}
.icon {
  cursor: pointer;
}
</style>
