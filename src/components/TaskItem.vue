<template>
  <article
    :class="['task', { completed: task.completed }, { show: taskStatus }]"
  >
    <header class="task-header title" @click="showTask()">
      <div class="task-header-check"><i class="fas fa-check"></i></div>
      <h2 class="task-header-title" v-text="task.title"></h2>
      <i class="far fa-star"></i>
      <i class="fas fa-feather-alt"></i>
    </header>
    <div class="task-body">
      <div class="inputGroup">
        <label for="" class="inputGroup-title subtitle">
          <i class="far fa-calendar-alt"></i>
          Deadline
        </label>
        <div class="inputGroup-content">
          <input type="date" :value="task.date" />
          <input type="time" :value="task.time" />
        </div>
      </div>
      <div class="inputGroup">
        <label for="" class="inputGroup-title subtitle">
          <i class="far fa-comment"></i>
          Comment
        </label>
        <div class="inputGroup-content">
          <textarea
            id=""
            rows="5"
            placeholder="Type your memo here..."
            :value="task.comment"
          ></textarea>
        </div>
      </div>
    </div>
    <footer class="task-footer">
      <button class="task-footer-cancel">
        <i class="fas fa-times"></i> Cancel
      </button>
      <button class="task-footer-save">
        <i class="fas fa-check"></i> Save
      </button>
    </footer>
  </article>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "TaskList",
  props: {
    task: Object,
  },
  setup() {
    const taskStatus = ref(false);
    const showTask = () => {
      taskStatus.value = !taskStatus.value;
    };
    return { taskStatus, showTask };
  },
});
</script>

<style lang="scss" scoped></style>
