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
      <span class="task-header-grab"><i class="fas fa-ellipsis-v"></i></span>
      <span
        class="task-header-check"
        @click="updateState(task.id, 'completed')"
      >
        <i class="fas fa-check"></i>
      </span>
      <div class="task-header-main">
        <h2
          class="task-header-title"
          v-text="task.title"
          @click="updateState(task.id, 'completed')"
        ></h2>
        <div>
          <span class="task-header-mark" v-show="task.date">
            <i class="far fa-calendar-minus task-header-icon"></i
            >{{ task.date }}
          </span>
          <span class="task-header-mark" v-show="task.time">
            <i class="far fa-clock task-header-icon"></i>{{ task.time }}
          </span>
          <span class="task-header-mark" v-show="task.comment">
            <i class="far fa-comment task-header-icon"></i>
          </span>
        </div>
      </div>
      <span class="task-header-btn" @click="delTask(task.id)">
        <i class="fas fa-trash-alt"></i>
      </span>
      <span
        class="task-header-btn"
        @click="updateState(task.id, 'pinning')"
        v-show="task.pinning"
      >
        <i class="fas fa-star"></i>
      </span>
      <span
        class="task-header-btn"
        @click="updateState(task.id, 'pinning')"
        v-show="!task.pinning"
      >
        <i class="far fa-star"></i>
      </span>
      <span
        class="task-header-btn"
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
          updateTask(task.id, content);
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
    updateTask: { type: Function },
    delTask: { type: Function },
  },
  setup(props) {
    let content = reactive({ show: false });
    const contentH = () => {
      let [c, pt] = [content, props.task];
      [c.date, c.time, c.comment] = [pt.date, pt.time, pt.comment];
    };
    const showH = () => (content.show = !content.show);

    return {
      content,
      contentH,
      showH,
    };
  },
});
</script>
