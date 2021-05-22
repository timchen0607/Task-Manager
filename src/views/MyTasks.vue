<template>
  <div class="container">
    <TaskItem v-for="task in tasks" :key="task.id" :task="task"></TaskItem>
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
  },
  setup() {},
});
</script>
