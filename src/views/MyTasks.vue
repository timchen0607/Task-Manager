<template>
  <div class="container">
    <TaskItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :updateState="updateState"
    ></TaskItem>
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
  },
  setup() {},
});
</script>
