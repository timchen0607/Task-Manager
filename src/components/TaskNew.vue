<template>
  <article :class="['task', { show: show }]">
    <header class="task-header" @click="show = true">
      <input
        type="text"
        class="newTask"
        placeholder="Add New Task"
        v-model="newTask.title"
      />
    </header>
    <div class="task-body">
      <div class="inputGroup">
        <label for="" class="inputGroup-title subtitle">
          <i class="far fa-calendar-alt"></i>
          Deadline
        </label>
        <div class="inputGroup-content">
          <input type="date" v-model="newTask.date" />
          <input type="time" v-model="newTask.time" />
        </div>
      </div>
      <div class="inputGroup">
        <label for="" class="inputGroup-title subtitle">
          <i class="far fa-comment"></i>
          Comment
        </label>
        <div class="inputGroup-content">
          <textarea
            rows="5"
            placeholder="Type your memo here..."
            v-model="newTask.comment"
          ></textarea>
        </div>
      </div>
    </div>
    <footer class="task-footer">
      <button class="task-footer-cancel" @click="show = false">
        <i class="fas fa-times"></i> Cancel
      </button>
      <button class="task-footer-save" @click="addTask()">
        <i class="fas fa-check"></i> Save
      </button>
    </footer>
  </article>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "TaskNew",
  props: {
    createTask: { type: Function },
  },
  setup(props) {
    const show = ref(false);
    const newTask = reactive({
      title: "",
      date: "",
      time: "",
      comment: "",
      pinning: false,
      completed: false,
    });
    const addTask = () => {
      if (newTask.title.trim() === "") return;
      props.createTask(Object.assign({}, newTask));
      show.value = false;
      newTask.title = "";
    };

    return {
      show,
      newTask,
      addTask,
    };
  },
});
</script>
