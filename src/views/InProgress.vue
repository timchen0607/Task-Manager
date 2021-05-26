<template>
  <div class="container">
    <TaskItem
      v-for="task in incomplete"
      :key="task.id"
      :task="task"
      :updateState="updateState"
      @updateContent="updateContent"
    ></TaskItem>
    <footer class="overview">
      <h3 class="status" v-text="incomplete.length + ' Tasks Left'"></h3>
    </footer>
  </div>
</template>

<script>
import { computed, defineComponent } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "InProgress",
  components: {
    TaskItem,
  },
  props: {
    tasks: { type: Object },
    updateState: { type: Function },
  },
  setup(props, { emit }) {
    const incomplete = computed(() => props.tasks.filter((x) => !x.completed));
    const updateContent = (editContent) => emit("updateContent", editContent);
    return { incomplete, updateContent };
  },
});
</script>
