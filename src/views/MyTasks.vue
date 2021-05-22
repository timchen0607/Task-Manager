<template>
  <div class="container">
    <TaskItem v-for="task in db.tasks" :key="task.id" :task="task"></TaskItem>
  </div>
</template>

<script>
import { defineComponent, reactive } from "vue";
import TaskItem from "@/components/TaskItem.vue";

export default defineComponent({
  name: "Home",
  components: {
    TaskItem,
  },
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
