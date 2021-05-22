<template>
  <article class="task show">
    <header class="task-header title">
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
import { defineComponent } from "vue";
export default defineComponent({
  name: "TaskList",
  props: {
    task: Object,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.task {
  margin: 0.5rem clamp(0rem, 2vw, 1rem);
  border-radius: 5px;
  box-shadow: 0px 0px 5px 1px $c_success;
  &-header {
    display: flex;
    align-items: center;
    padding: clamp(0.8rem, 2vw, 1rem) clamp(1rem, 2.5vw, 1.5rem);
    background-color: $c_secondary-light;
    border-radius: 5px 5px 0 0;
    border-bottom: 2px solid $c_secondary;
    &-check {
      width: 25px;
      height: 25px;
      color: $c_light;
      font-size: 1rem;
      font-weight: unset;
      text-align: center;
      line-height: 27px;
      background-color: $c_light;
      border-radius: 3px;
      cursor: pointer;
      &.checked {
        background-color: $c_primary;
      }
    }
    &-title {
      flex: auto;
      padding-left: 1rem;
    }
    .fa-star,
    .fa-feather-alt {
      margin: 0 0.5rem;
      cursor: pointer;
    }
  }
  &-body {
    padding: clamp(0.5rem, 2.5vw, 1rem) clamp(1rem, 4.5vw, 4.2rem);
    background-color: $c_secondary-light;
  }
  &-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    &-cancel,
    &-save {
      width: 100%;
      font-size: 1.3rem;
      padding: clamp(0.5rem, 1vw, 1rem);
      border: unset;
      transition: background-color 0.5s;
      cursor: pointer;
    }
    &-cancel {
      background-color: $c_light;
      border-bottom-left-radius: 5px;
      &:hover {
        background-color: $c_secondary-dark;
      }
    }
    &-save {
      color: $c_light;
      border-bottom-right-radius: 5px;
      background-color: $c_primary;
      &:hover {
        background-color: $c_primary-dark;
      }
    }
  }
}
.task.show {
  margin: 1.5rem clamp(0rem, 2vw, 1rem);
  .task-header {
    padding: clamp(1rem, 2.5vw, 1.5rem);
  }
}
.inputGroup {
  margin: 1rem 0;
  &-title {
    display: block;
    padding-bottom: 0.5rem;
  }
  &-content {
    display: flex;
    align-items: center;
    margin-left: 1.3em;

    input[type="date"],
    input[type="time"],
    textarea {
      width: auto;
      font-size: 1rem;
      padding: 0.5rem;
      border: none;
      border-radius: 2px;
      box-sizing: border-box;
    }
    input[type="date"] {
      margin-right: 10px;
    }
    textarea {
      width: 100%;
      resize: none;
    }
  }
}
</style>
