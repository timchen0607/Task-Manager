<template>
  <div class="container">
    <TaskItem
      v-for="task in complete"
      :key="task.id"
      :task="task"
      :updateState="updateState"
      :delTask="delTask"
      @updateContent="updateContent"
    ></TaskItem>
    <footer class="overview">
      <h3 class="status" v-text="complete.length + ' Tasks Completed'"></h3>
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
    delTask: { type: Function },
  },
  setup(props, { emit }) {
    const complete = computed(() => props.tasks.filter((x) => x.completed));
    const updateContent = (editContent) => emit("updateContent", editContent);
    return { complete, updateContent };
  },
});
</script>
