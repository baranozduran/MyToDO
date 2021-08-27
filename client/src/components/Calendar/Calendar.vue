<template>
  <div class="calendar">
    <Header :date="date" />
    <div class="daysContainer">
      <Day
        @remove-task="$emit('remove-task', $event)"
        class="day"
        v-bind:key="fullDay.day"
        v-for="fullDay in nextSevenDays"
        :theDay="fullDay"
      />
    </div>
    <font-awesome-icon
      @click="showNextWeek(this.nextSevenDays)"
      class="nextWeekIcon"
      icon="play"
      size="lg"
    />
    <font-awesome-icon class="previousWeekIcon" icon="play" size="lg" />
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Day from "./Day.vue";
import Header from "./Header.vue";
library.add(faPlay);
export default {
  name: "Calendar",
  data() {
    return {
      today: {},
      date: {
        day: Number,
        weekDay: String,
        month: String,
        year: Number
      },
      time: {
        seconds: Number,
        minutes: Number,
        hour: Number
      },
      monthNumber: Number,
      nextSevenDays: [],
      nextSevenWeekDays: [],
      day30months: ["April", "June", "September", "November"],
      day31months: [
        "January",
        "March",
        "May",
        "July",
        "August",
        "October",
        "December"
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    };
  },
  components: {
    Day,
    Header,
    FontAwesomeIcon
  },
  props: {
    tasks: Array
  },
  methods: {
    createNextSevenDays(day, weekDay, month, year) {
      for (let i = 0; i < 7; i++, day++, weekDay = (weekDay + 1) % 6) {
        if (this.isMonthFinished(day, this.months[month], year)) {
          this.nextSevenDays[i] = {
            day: day,
            month: month,
            year: year,
            weekDay: this.days[weekDay],
            tasks: this.returnTheTask(day, month, year)
          };
          day = 0;
          if (month === 11) {
            year += 1;
          }
          month = (month + 1) % 12;
        } else {
          this.nextSevenDays[i] = {
            day: day,
            month: month,
            year: year,
            weekDay: this.days[weekDay],
            tasks: this.returnTheTask(day, month, year)
          };
        }
      }
    },
    isMonthFinished(day, month, year) {
      return (
        (day === 29 && year % 4 === 0 && month === "February") ||
        (day === 28 && year % 4 !== 0 && month === "February") ||
        (day === 30 && this.day30months.includes(month)) ||
        (day === 31 && this.day31months.includes(month))
      );
    },
    showNextWeek(nextSevenDays) {
      if (nextSevenDays[6].day < nextSevenDays[0].day) {
        this.monthNumber = (this.monthNumber + 1) % 12;
        this.date.month = this.months[this.monthNumber];
        if (this.monthNumber === 11) {
          this.date.year += 1;
          this.createNextSevenDays(
            nextSevenDays[6].day,
            this.date.weekDay,
            this.monthNumber + 1,
            this.date.year + 1
          );
        } else {
          console.log(nextSevenDays[6].day);
          this.createNextSevenDays(
            nextSevenDays[6].day,
            this.date.weekDay,
            this.monthNumber + 1,
            this.date.year
          );
        }
      } else {
        this.createNextSevenDays(
          nextSevenDays[6].day,
          this.date.weekDay,
          this.monthNumber,
          this.date.year
        );
      }
    },
    returnTheTask(day, month, year) {
      let locDay;
      let locMonth;
      const locYear = year.toString();
      if (day < 10) {
        locDay = "0" + day.toString();
      } else {
        locDay = day.toString();
      }
      if (month < 10) {
        locMonth = "0" + month.toString();
      } else {
        locMonth = month.toString();
      }
      const date = {
        day: locDay,
        month: locMonth,
        year: locYear
      };
      const tasksOfTheDay = this.tasks.filter(
        el =>
          el.date.day === date.day &&
          el.date.month === date.month &&
          el.date.year === date.year
      );
      if (tasksOfTheDay.length < 1) {
        return tasksOfTheDay;
      } else {
        const taskNames = [];
        for (let i = 0; i < tasksOfTheDay.length; i++) {
          taskNames[i] = tasksOfTheDay[i].task;
        }
        return taskNames;
      }
    }
  },
  async created() {
    this.today = new Date();
    this.date.day = this.today.getDate();
    this.date.weekDay = this.today.getDay();
    this.monthNumber = this.today.getMonth();
    this.date.month = this.today.toLocaleString("default", { month: "long" });
    this.date.year = this.today.getFullYear();
    this.time.seconds = this.today.getSeconds();
    this.time.minutes = this.today.getMinutes();
    this.time.hours = this.today.getHours();
    this.createNextSevenDays(
      this.date.day,
      this.date.weekDay,
      this.monthNumber,
      this.date.year
    );
  },
  watch: {
    tasks: function() {
      this.createNextSevenDays(
        this.date.day,
        this.date.weekDay,
        this.monthNumber,
        this.date.year
      );
    }
  }
};
</script>

<style scoped>
.calendar {
  background-color: red;
  position: relative;
}
.daysContainer {
  display: flex;
}
.day {
  flex: 1;
}
.nextWeekIcon {
  position: absolute;
  right: 20px;
  cursor: pointer;
  top: 20%;
}
.previousWeekIcon {
  position: absolute;
  left: 20px;
  cursor: pointer;
  top: 20%;
  transform: rotate(180deg);
}
</style>
