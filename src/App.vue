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
  <router-view
    :tasks="tasks"
    :updateState="updateState"
    :clearTasks="clearTasks"
  />
</template>

<script>
import { defineComponent, reactive, watch } from "vue";
import { getTasks, setTasks, delTasks } from "./api/localStorageUtils";

export default defineComponent({
  name: "App",
  setup() {
    const tasks = reactive(getTasks());
    const sortTasks = (tasks) => tasks.sort((a, b) => b.pinning - a.pinning);
    const updateState = (task, attr) => (task[attr] = !task[attr]);
    const clearTasks = () => {
      tasks.length = 0;
      delTasks();
    };
    sortTasks(tasks);
    watch(
      tasks,
      () => {
        sortTasks(tasks);
        setTasks(tasks);
      },
      { deep: true }
    );
    return { tasks, updateState, clearTasks };
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
