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
  <div class="container">
    <input
      type="text"
      class="newTask"
      v-model="newTitle"
      placeholder="Add New Task"
      @keyup.enter="addTask"
    />
  </div>
  <router-view
    :tasks="tasks"
    :updateState="updateState"
    :delTask="delTask"
    @updateContent="updateContent"
  />
</template>

<script>
import { defineComponent, reactive, ref, watch } from "vue";
import { getTasks, setTasks } from "./modules/localStorage";

export default defineComponent({
  name: "App",
  setup() {
    const tasks = reactive(getTasks());
    const sortTasks = () => tasks.sort((a, b) => b.pinning - a.pinning);
    const updateState = (task, attr) => (task[attr] = !task[attr]);
    const updateContent = (editContent) => {
      let index = tasks.map((x) => x.id).indexOf(editContent.id);
      tasks[index].date = editContent.date;
      tasks[index].time = editContent.time;
      tasks[index].comment = editContent.comment;
    };
    const newTitle = ref("");
    const addTask = () => {
      if (newTitle.value.trim() === "") return;
      let newTask = {
        id: Math.max(...tasks.map((x) => x.id)) + 1,
        title: newTitle.value,
        date: "",
        time: "",
        comment: "",
        pinning: false,
        completed: false,
      };
      tasks.unshift(newTask);
      newTitle.value = "";
    };
    const delTask = (id) => {
      let index = tasks.map((x) => x.id).indexOf(id);
      tasks.splice(index, 1);
    };
    watch(
      tasks,
      () => {
        sortTasks();
        setTasks(tasks);
      },
      { deep: true }
    );
    return { tasks, updateState, updateContent, newTitle, addTask, delTask };
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
