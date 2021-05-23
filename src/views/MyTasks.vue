<template>
  <div class="container">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :updateState="updateState"
    ></TaskItem>
    <footer class="overview">
      <h3
        class="status"
        v-text="tasks.filter((x) => !x.completed).length + ' Tasks Left'"
      ></h3>
      <button class="clearAll" @click="clearTasks">Clear All Tasks</button>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "Home",
  components: {
    TaskItem,
  },
  props: {
    tasks: { type: Object },
    updateState: { type: Function },
    clearTasks: { type: Function },
  },
  setup() {},
});
</script>
