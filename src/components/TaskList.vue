<template>
  <article class="task">
    <header class="task-header title">
      <div class="task-header-check"><i class="fas fa-check"></i></div>
      <h2 class="task-header-title">Title...Title...Title...</h2>
      <i class="far fa-star"></i>
      <i class="fas fa-feather-alt"></i>
    </header>
    <div class="task-body">
      <div class="inputGroup">
        <label for="" class="inputGroup-title">
          <i class="far fa-calendar-alt"></i>
          Deadline
        </label>
        <div class="inputGroup-content">
          <input type="date" name="" id="" />
          <input type="time" name="" id="" />
        </div>
      </div>
      <div class="inputGroup">
        <label for="" class="inputGroup-title">
          <i class="far fa-file-alt"></i>
          File
        </label>
        <div class="inputGroup-content">
          <input type="file" name="" id="" />
        </div>
      </div>
      <div class="inputGroup">
        <label for="" class="inputGroup-title">
          <i class="far fa-comment"></i>
          Comment
        </label>
        <div class="inputGroup-content">
          <textarea name="" id="" cols="30" rows="10"></textarea>
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
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/_variables.scss";

.task {
  margin: 0.5rem 1rem;
  &.show {
    margin: 1.5rem 1rem;
  }
  &-header {
    display: flex;
    align-items: center;
    padding: clamp(1rem, 2.5vw, 1.5rem);
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
      &:hover {
        background-color: $c_secondary-light;
      }
    }
    &-save {
      color: $c_light;
      background-color: $c_primary;
      &:hover {
        background-color: $c_primary-dark;
      }
    }
  }
}
</style>
