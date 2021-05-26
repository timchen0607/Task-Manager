<template>
  <div class="container">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :updateState="updateState"
      @updateContent="updateContent"
    ></TaskItem>
    <footer class="overview">
      <h3
        class="status"
        v-text="tasks.filter((x) => !x.completed).length + ' Tasks Left'"
      ></h3>
    </footer>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "MyTasks",
  components: {
    TaskItem,
  },
  props: {
    tasks: { type: Object },
    updateState: { type: Function },
  },
  setup(props, { emit }) {
    const updateContent = (editContent) => emit("updateContent", editContent);
    return { updateContent };
  },
});
</script>
