<template>
  <article
    :class="[
      'task',
      { pinning: task.pinning },
      { completed: task.completed },
      { show: content.show },
    ]"
  >
    <header class="task-header title">
      <span class="task-header-check" @click="updateState(task, 'completed')">
        <i class="fas fa-check"></i>
      </span>
      <div class="task-header-title">
        <h2
          class="task-header-title-text"
          v-text="task.title"
          @click="updateState(task, 'completed')"
        ></h2>
        <div>
          <span class="task-header-remark" v-show="task.date">
            <i class="far fa-calendar-minus"></i>{{ task.date }}
          </span>
          <span class="task-header-remark" v-show="task.time">
            <i class="far fa-clock"></i>{{ task.time }}
          </span>
          <span class="task-header-remark" v-show="task.comment">
            <i class="far fa-comment"></i>
          </span>
        </div>
      </div>
      <span @click="updateState(task, 'pinning')" v-show="task.pinning">
        <i class="fas fa-star"></i>
      </span>
      <span @click="updateState(task, 'pinning')" v-show="!task.pinning">
        <i class="far fa-star"></i>
      </span>
      <span
        @click="
          showH();
          contentH();
        "
      >
        <i class="fas fa-feather-alt"></i>
      </span>
    </header>
    <div class="task-body">
      <div class="inputGroup">
        <label for="" class="inputGroup-title subtitle">
          <i class="far fa-calendar-alt"></i>
          Deadline
        </label>
        <div class="inputGroup-content">
          <input type="date" v-model="content.date" />
          <input type="time" v-model="content.time" />
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
            v-model="content.comment"
          ></textarea>
        </div>
      </div>
    </div>
    <footer class="task-footer">
      <button class="task-footer-cancel" @click="showH">
        <i class="fas fa-times"></i> Cancel
      </button>
      <button
        class="task-footer-save"
        @click="
          updateContent();
          showH();
        "
      >
        <i class="fas fa-check"></i> Save
      </button>
    </footer>
  </article>
</template>

<script>
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "TaskList",
  props: {
    task: { type: Object },
    updateState: { type: Function },
  },
  emits: {
    updateContent: { type: Function },
  },
  setup(props, { emit }) {
    let content = reactive({ show: false });
    const contentH = () => {
      content.id = props.task.id;
      content.date = props.task.date;
      content.time = props.task.time;
      content.comment = props.task.comment;
    };
    const showH = () => (content.show = !content.show);
    const updateContent = () => emit("updateContent", content);

    return {
      content,
      contentH,
      showH,
      updateContent,
    };
  },
});
</script>
