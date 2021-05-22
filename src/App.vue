<template>
  <header class="nav">
    <div class="container">
      <router-link to="/" class="title">My Tasks</router-link>
      <router-link to="/InProgress" class="title">
        In Progress
      </router-link>
      <router-link to="/Completed" class="title">Completed</router-link>
    </div>
  </header>
  <router-view :tasks="db.tasks" />
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const db = reactive({
      tasks: [
        {
          id: 1,
          title: "Task...Task...Task...",
          date: "2021-05-22",
          time: "15:22",
          comment: "commtent...commtent...commtent...",
          pinning: false,
          completed: false,
        },
        {
          id: 2,
          title: "Task2...Task2...Task2...",
          date: "2021-05-24",
          time: "15:22",
          comment: "commtent2...commtent2...commtent2...",
          pinning: true,
          completed: true,
        },
        {
          id: 3,
          title: "Task3...Task3...Task3...",
          date: "2021-06-24",
          time: "22:22",
          comment: "commtent3...commtent3...commtent3...",
          pinning: false,
          completed: true,
        },
      ],
    });
    return { db };
  },
});
</script>

<style lang="scss">
@import "./assets/scss/_variables.scss";

.nav {
  background-color: $c_primary;
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .title {
    width: 100%;
    padding: clamp(1rem, 2vw, 1.5rem) clamp(0.5px, 2vw, 1.5rem);
    color: $c_primary-dark;
    text-align: center;
    text-decoration: none;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: clamp(5px, 1vw, 8px);
      background-color: $c_primary-dark;
      opacity: 0;
    }
    &.router-link-active {
      position: relative;
      color: $c_light;
      &::after {
        opacity: 1;
        transition: opacity 0.5s;
      }
    }
  }
}
</style>
