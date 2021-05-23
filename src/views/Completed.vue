<template>
  <div class="container">
    <TaskItem
      v-for="task in complete"
      :key="task.id"
      :task="task"
      :updateState="updateState"
    ></TaskItem>
    <footer class="overview">
      <h3 class="status" v-text="complete.length + ' Tasks Completed'"></h3>
      <button class="clearAll" @click="clearTasks">Clear All Tasks</button>
    </footer>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "Completed",
  components: {
    TaskItem,
  },
  props: {
    tasks: { type: Object },
    updateState: { type: Function },
    clearTasks: { type: Function },
  },
  setup(props) {
    const complete = computed(() => props.tasks.filter((x) => x.completed));
    return { complete };
  },
});
</script>
